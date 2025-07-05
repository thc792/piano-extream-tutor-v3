import os
import json
from flask import Flask, request, jsonify
# from dotenv import load_dotenv # Puoi commentare o rimuovere questa se non testi localmente con .env
import google.generativeai as genai

# load_dotenv() # Puoi commentare o rimuovere questa

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata!")
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("Chiave API Gemini configurata con successo.")
    except Exception as e:
        print(f"Errore durante la configurazione della chiave API Gemini: {e}")
        GEMINI_API_KEY = None # Invalida la chiave se la configurazione fallisce


@app.route('/api/get_ai_feedback', methods=['POST'])
def get_ai_feedback_route():
    if not GEMINI_API_KEY:
        print("Tentativo di usare l'API AI ma la chiave non è configurata correttamente.")
        return jsonify({"error": "Errore di configurazione del server AI. Contattare l'amministratore."}), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Nessun dato JSON ricevuto"}), 400

        exercise_definition = data.get('exerciseDefinition')
        exercise_stats = data.get('exerciseStats')

        if not exercise_definition or not exercise_stats:
            return jsonify({"error": "Dati mancanti: 'exerciseDefinition' o 'exerciseStats' non forniti"}), 400

        # --- Costruisci il prompt per Gemini ---
        prompt_parts = [
            "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Analizza la seguente performance di un utente e fornisci un feedback costruttivo e dettagliato.",
            f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
            f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
        ]
        
        exercise_bpm_str = str(exercise_definition.get('bpm', "N/A (fare riferimento a 'bpmAtEvent' se disponibile)"))
        if exercise_bpm_str != "N/A (fare riferimento a 'bpmAtEvent' se disponibile)":
             prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")


        prompt_parts.append(f"\nStatistiche Generali della Sessione:")
        prompt_parts.append(f"  Tempo Totale Attivo: {exercise_stats.get('totalActiveTimeSeconds', 'N/D')} secondi")
        prompt_parts.append(f"  Errori Totali di Altezza Registrati (dalla vecchia lista 'errors'): {exercise_stats.get('totalErrors', 'N/D')}")

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\n--- Dettaglio Eventi Nota per Ripetizione (Analisi Ritmica Chiave) ---")
            prompt_parts.append("Istruzioni per l'analisi dei 'playedNoteEvents':")
            prompt_parts.append("1. Ogni evento in 'playedNoteEvents' rappresenta una nota MIDI suonata dall'utente.")
            prompt_parts.append("2. 'timestamp': In millisecondi (ms) dall'inizio della misurazione della performance per quella ripetizione.")
            prompt_parts.append("3. 'midiValuePlayed': Il valore MIDI della nota suonata.")
            prompt_parts.append("4. 'velocity': L'intensità della nota.")
            prompt_parts.append("5. 'type': Indica la natura dell'evento ('correct_match', 'incorrect_match', 'extra_note').")
            prompt_parts.append("6. 'bpmAtEvent': (SE FORNITO) I BPM del metronomo al momento preciso dell'evento.")
            prompt_parts.append("7. 'expectedNoteInfo': Dettagli sulla nota teorica che era attesa.")

            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                rep_duration_sec = rep_data.get('durationSeconds', 'N/A')
                rep_start_time_ms = rep_data.get('startTime', 0)

                prompt_parts.append(f"\n  **Ripetizione {repetition_number}** (Durata registrata: {rep_duration_sec}s):")
                
                played_events = rep_data.get('playedNoteEvents', [])
                if played_events and len(played_events) > 0:
                    prompt_parts.append("    Eventi Nota Suonati (Timestamp relativo all'inizio della ripetizione, MIDI Suonato, Tipo, Dettagli Nota Attesa se applicabile):")
                    
                    for event_idx, event in enumerate(played_events[:30]):
                        ts_abs = event.get('timestamp', 0)
                        ts_rel_to_rep_start = round(ts_abs - rep_start_time_ms) if rep_start_time_ms > 0 and ts_abs >= rep_start_time_ms else "N/A"
                        
                        expected_info_str = ""
                        if event.get('expectedNoteInfo'):
                            eni = event['expectedNoteInfo']
                            keys_display = eni.get('keys', ['N/A'])[0] if eni.get('keys') else 'N/A'
                            duration_display = eni.get('durationString', 'N/A')
                            expected_info_str = f" (Atteso: {keys_display} dur='{duration_display}')"
                        
                        bpm_at_event_str = f" BPM: {event.get('bpmAtEvent', 'N/A')}" if 'bpmAtEvent' in event else ""

                        event_line = f"      - a {ts_rel_to_rep_start}ms: MIDI {event['midiValuePlayed']}, Tipo: {event['type']}{bpm_at_event_str}{expected_info_str}"
                        prompt_parts.append(event_line)
                    if len(played_events) > 30:
                        prompt_parts.append(f"      ... e altri {len(played_events) - 30} eventi non mostrati.")
                else:
                    prompt_parts.append("    Nessun evento nota registrato per questa ripetizione.")
        else:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi dettagliata.")

        prompt_parts.append("\n\n--- Richiesta di Feedback Specifica ---")
        prompt_parts.append("Per favore, fornisci un feedback strutturato come segue, IN TESTO PURO, SENZA USARE FORMATTAZIONE MARKDOWN (quindi niente asterischi per grassetto o elenchi puntati):")
        prompt_parts.append("1. **Commento Generale:** Valutazione complessiva.")
        prompt_parts.append("2. **Analisi dell'Intonazione (Accuratezza delle Altezze):** Basati sui 'type' ('incorrect_match', 'extra_note').")
        prompt_parts.append("3. **Analisi DETTAGLIATA della Precisione Ritmica (Timing, Durate, Metro):** Questa è la parte FONDAMENTALE. Usa i `timestamp` per analizzare se l'utente è in anticipo, in ritardo, o se mantiene una pulsazione stabile.")
        prompt_parts.append("4. **Consigli Pratici e Specifici:** 1-2 consigli mirati per l'intonazione e 1-2 per la ritmica.")
        prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva.")
        
        prompt_parts.append("\nIstruzioni Aggiuntive per l'AI sull'Analisi Ritmica:")
        prompt_parts.append("- Usa i `timestamp` e i BPM per valutare il timing. Confronta gli intervalli di tempo tra le note con le loro durate teoriche (`durationString`).")
        prompt_parts.append("- Sii specifico e fornisci esempi se trovi discrepanze ritmiche significative.")
        prompt_parts.append("- Mantieni un tono amichevole, costruttivo e didattico.")
        
        final_prompt = "\n".join(prompt_parts)
        
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        generation_config = genai.types.GenerationConfig()
        safety_settings=[
            {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        ]

        response = model.generate_content(
            final_prompt,
            generation_config=generation_config,
            safety_settings=safety_settings
        )
        
        ai_text_response = ""
        if response.candidates:
            if response.prompt_feedback and response.prompt_feedback.block_reason:
                return jsonify({"error": f"Richiesta bloccata per motivi di sicurezza del prompt: {response.prompt_feedback.block_reason_message}"}), 400

            first_candidate = response.candidates[0]
            if first_candidate.finish_reason.name == "SAFETY":
                 return jsonify({"error": "La risposta dell'AI è stata bloccata per motivi di sicurezza."}), 500
            
            if first_candidate.content and first_candidate.content.parts:
                ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
            else:
                ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile."
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400

        # --- INIZIO DELLA CORREZIONE RICHIESTA ---
        # Rimuove tutti i caratteri asterisco ('*') dalla stringa di risposta dell'AI.
        # In questo modo, la formattazione Markdown (es. **grassetto** o *elenco*)
        # non viene inviata al client, che riceverà solo testo pulito.
        cleaned_ai_response = ai_text_response.replace('*', '')
        # --- FINE DELLA CORREZIONE RICHIESTA ---

        # Invia la risposta "pulita" nel JSON
        return jsonify({"aiFeedbackText": cleaned_ai_response.strip()})

    except Exception as e:
        import traceback 
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500