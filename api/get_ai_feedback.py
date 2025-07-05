import os
import json
from flask import Flask, request, jsonify
import google.generativeai as genai

# In un ambiente serverless come Vercel, non è necessario creare un'app Flask globale,
# ma questa struttura funziona e può essere usata anche per test locali.
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
        
        exercise_bpm_str = str(exercise_definition.get('bpm', "N/A"))
        if exercise_bpm_str != "N/A":
             prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")

        prompt_parts.append(f"\nStatistiche Generali della Sessione:")
        prompt_parts.append(f"  Tempo Totale Attivo: {exercise_stats.get('totalActiveTimeSeconds', 'N/D')} secondi")
        prompt_parts.append(f"  Errori Totali di Altezza Registrati: {exercise_stats.get('totalErrors', 'N/D')}")

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\n--- Dettaglio Eventi Nota per Ripetizione ---")
            prompt_parts.append("Istruzioni per l'analisi dei dati seguenti:")
            prompt_parts.append("1. 'timestamp': In millisecondi (ms), indica QUANDO l'utente ha suonato la nota.")
            prompt_parts.append("2. 'theoreticalTimestampMs': In millisecondi (ms), indica QUANDO l'utente AVREBBE DOVUTO suonare la nota.")
            prompt_parts.append("3. 'type': 'correct_match', 'incorrect_match', 'extra_note'.")
            prompt_parts.append("4. 'expectedNoteInfo': Dettagli sulla nota teorica.")
            prompt_parts.append("\nIl tuo compito è analizzare questi dati, specialmente la differenza tra 'timestamp' e 'theoreticalTimestampMs'.")

            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                rep_duration_sec = rep_data.get('durationSeconds', 'N/A')
                
                prompt_parts.append(f"\n  **Ripetizione {repetition_number}** (Durata: {rep_duration_sec}s):")
                
                played_events = rep_data.get('playedNoteEvents', [])
                if played_events:
                    prompt_parts.append("    Eventi Nota Suonati:")
                    
                    for event_idx, event in enumerate(played_events[:30]): # Mostra fino a 30 eventi
                        ts_rel = event.get('timestamp', 'N/A')
                        
                        expected_info_str = ""
                        if event.get('expectedNoteInfo'):
                            eni = event['expectedNoteInfo']
                            keys_display = eni.get('keys', ['N/A'])[0] if eni.get('keys') else 'N/A'
                            duration_display = eni.get('durationString', 'N/A')
                            
                            theo_ts_display = eni.get('theoreticalTimestampMs')
                            if theo_ts_display is not None:
                                expected_info_str = f" (Atteso: {keys_display}, dur='{duration_display}', dovrebbe essere a ~{theo_ts_display}ms)"
                            else:
                                expected_info_str = f" (Atteso: {keys_display}, dur='{duration_display}')"
                        
                        bpm_at_event_str = f" BPM: {event.get('bpmAtEvent', 'N/A')}" if 'bpmAtEvent' in event else ""
                        
                        event_line = f"      - a {ts_rel}ms: MIDI {event['midiValuePlayed']} (vel: {event.get('velocity','N/A')}), Tipo: {event['type']}{bpm_at_event_str}{expected_info_str}"
                        prompt_parts.append(event_line)

                    if len(played_events) > 30:
                        prompt_parts.append(f"      ... e altri {len(played_events) - 30} eventi non mostrati.")
                else:
                    prompt_parts.append("    Nessun evento nota registrato per questa ripetizione.")
        else:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")

        prompt_parts.append("\n\n--- Richiesta di Feedback Specifica ---")
        prompt_parts.append("Per favore, fornisci un feedback strutturato come segue:")
        prompt_parts.append("1. **Commento Generale:** Valutazione complessiva della performance e musicalità.")
        prompt_parts.append("2. **Analisi dell'Intonazione (Accuratezza delle Altezze):** Basati sul 'type' ('incorrect_match', 'extra_note') e su 'expectedNoteInfo'. Ci sono errori ricorrenti? Se l'intonazione è buona, complimentati.")
        prompt_parts.append("3. **Analisi DETTAGLIATA della Precisione Ritmica (Timing):**")
        prompt_parts.append("   - **Questa è la parte FONDAMENTALE.** Ho pre-calcolato per te il timing teorico.")
        prompt_parts.append("   - **Timing degli Attacchi (Analisi di Precisione):** Per ogni evento, confronta il timestamp reale in cui la nota è stata suonata (es. 'a 1520ms') con il suo timestamp teorico (es. 'dovrebbe essere a ~1500ms').")
        prompt_parts.append("     - La differenza `(timestamp - theoreticalTimestampMs)` è la deviazione ritmica in millisecondi.")
        prompt_parts.append("     - Analizza se l'utente è costantemente in anticipo (deviazione negativa), in ritardo (deviazione positiva) o impreciso in modo variabile. Sii specifico.")
        prompt_parts.append("     - Identifica le sezioni o i tipi di note (es. crome, note puntate) dove l'imprecisione è maggiore.")
        prompt_parts.append("   - **Coerenza del Tempo (Pulsazione):** L'utente mantiene una pulsazione stabile, o ci sono accelerazioni/rallentamenti ingiustificati? Cerca pattern nelle deviazioni temporali.")
        prompt_parts.append("4. **Consigli Pratici e Specifici:**")
        prompt_parts.append("   - Per l'Intonazione: 1-2 consigli mirati.")
        prompt_parts.append("   - Per la Ritmica: 1-2 consigli mirati basati sulla tua analisi (es. 'usa il metronomo più lentamente', 'concentrati sul contare le suddivisioni per la nota X', 'presta attenzione alla durata della nota Y').")
        prompt_parts.append("   - Se la performance è buona, suggerimenti per il perfezionamento (dinamiche, articolazione).")
        prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva e amichevole.")
        
        prompt_parts.append("\nIstruzioni Aggiuntive per l'AI:")
        prompt_parts.append("- Il lavoro complesso di calcolo dei timestamp teorici in millisecondi è già stato fatto. La tua analisi deve basarsi principalmente sul confronto diretto tra il timestamp reale e quello teorico fornito per ogni nota.")
        prompt_parts.append("- Sii specifico e fornisci esempi delle deviazioni più significative (es. 'nella Ripetizione 1, la nota C4 che doveva essere a 1500ms è stata suonata a 1650ms, con un ritardo notevole').")
        prompt_parts.append("- Mantieni un tono costruttivo e didattico.")

        final_prompt = "\n".join(prompt_parts)
        
        # print(f"DEBUG VERCEL: Prompt inviato a Gemini (prime 2000 chars): {final_prompt[:2000]}...")

        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        generation_config = genai.types.GenerationConfig(
            # Puoi decommentare e regolare questi se necessario
            # temperature=0.7, 
            # max_output_tokens=1500
        )
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
                 safety_ratings_info = ", ".join([f"{sr.category.name}: {sr.probability.name}" for sr in first_candidate.safety_ratings])
                 return jsonify({"error": f"La risposta dell'AI è stata bloccata per motivi di sicurezza: {safety_ratings_info}"}), 500
            
            if first_candidate.content and first_candidate.content.parts:
                ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
            else:
                ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti o contenuto non valido)."
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400

        return jsonify({"aiFeedbackText": ai_text_response.strip()})

    except Exception as e:
        import traceback 
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500

# Questo blocco è per i test locali, Vercel lo ignora. Va bene lasciarlo.
if __name__ == '__main__':
    app.run(debug=True, port=5000)