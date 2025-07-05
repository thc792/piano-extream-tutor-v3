import os
import json
from flask import Flask, request, jsonify
# from dotenv import load_dotenv # Puoi commentare o rimuovere questa se non testi localmente con .env
import google.generativeai as genai
import traceback # Importato per un logging più pulito

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
        
        exercise_bpm_str = str(exercise_definition.get('bpm', "N/A"))
        if exercise_bpm_str != "N/A":
             prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\n--- Dettaglio Eventi Nota per Ripetizione (Analisi Ritmica Chiave) ---")
            
            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                rep_start_time_ms = rep_data.get('startTime', 0)

                prompt_parts.append(f"\n  **Ripetizione {repetition_number}**:")
                
                played_events = rep_data.get('playedNoteEvents', [])
                if played_events:
                    prompt_parts.append("    Eventi Nota Suonati (Timestamp effettivo, Timestamp teorico, MIDI, Tipo):")
                    
                    for event in played_events[:30]: # Limita per non creare un prompt enorme
                        ts_abs = event.get('timestamp', 0)
                        ts_rel_to_rep_start = round(ts_abs) # Il timestamp relativo è già calcolato nel JS
                        
                        expected_info_str = ""
                        # --- MODIFICA 1: ESTRAZIONE DEL TIMESTAMP TEORICO ---
                        theoretical_ts_str = ""
                        if event.get('expectedNoteInfo'):
                            eni = event['expectedNoteInfo']
                            keys_display = eni.get('keys', ['N/A'])[0] if eni.get('keys') else 'N/A'
                            duration_display = eni.get('durationString', 'N/A')
                            
                            # Estrai il timestamp teorico se presente
                            theoretical_ts_ms = eni.get('theoreticalTimestampMs')
                            if theoretical_ts_ms is not None:
                                theoretical_ts_str = f" Teorico: {theoretical_ts_ms}ms"
                            
                            expected_info_str = f" (Atteso: {keys_display} dur='{duration_display}')"
                        
                        bpm_at_event_str = f" BPM: {event.get('bpmAtEvent', 'N/A')}" if 'bpmAtEvent' in event else ""

                        # Aggiungi il timestamp teorico alla linea dell'evento
                        event_line = f"      - a {ts_rel_to_rep_start}ms{theoretical_ts_str}: MIDI {event['midiValuePlayed']}, Tipo: {event['type']}{bpm_at_event_str}{expected_info_str}"
                        prompt_parts.append(event_line)

                    if len(played_events) > 30:
                        prompt_parts.append(f"      ... e altri {len(played_events) - 30} eventi non mostrati.")
                else:
                    prompt_parts.append("    Nessun evento nota registrato per questa ripetizione.")
        else:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")

        prompt_parts.append("\n\n--- Richiesta di Feedback Specifica ---")
        prompt_parts.append("Per favore, fornisci un feedback strutturato IN TESTO PURO (nessun asterisco o markdown).")
        prompt_parts.append("1. **Commento Generale:** Valutazione complessiva.")
        prompt_parts.append("2. **Analisi dell'Intonazione (Note Corrette):** Basati sul 'type' ('incorrect_match', 'extra_note').")
        
        # --- MODIFICA 2: ISTRUZIONI SPECIFICHE PER L'IA SUL TIMING ---
        prompt_parts.append("3. **Analisi della Precisione Ritmica (Timing):**")
        prompt_parts.append("   - **Questa è la parte FONDAMENTALE.** Per ogni evento nota hai il timestamp effettivo dell'utente (es. 'a 1520ms') e il timestamp teorico ideale (es. 'Teorico: 1500ms').")
        prompt_parts.append("   - **ISTRUZIONE CHIAVE:** Il tuo compito è confrontare questi due valori. **NON DEVI MAI menzionare i numeri esatti o le differenze in millisecondi (es. 'eri 20ms in ritardo') nel tuo feedback.**")
        prompt_parts.append("   - **USA INVECE DESCRIZIONI QUALITATIVE:** Valuta se l'utente è 'leggermente in anticipo', 'notevolmente in ritardo', 'perfettamente a tempo', 'costante', o se 'la pulsazione tende a rallentare/accelerare in certi passaggi'. Sii un insegnante, non un computer che riporta dati numerici.")
        prompt_parts.append("   - Cerca pattern: l'utente è costantemente in anticipo? O solo su note specifiche? La sua esecuzione è stabile o incerta?")
        
        prompt_parts.append("4. **Consigli Pratici:** 1-2 consigli mirati per intonazione e 1-2 per la ritmica (es. 'Prova a contare ad alta voce in questa sezione', 'Concentrati sull'ascoltare il metronomo prima di suonare la nota X').")
        prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva.")
        
        final_prompt = "\n".join(prompt_parts)
        
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        # ... (il resto del codice per la chiamata a Gemini, safety settings, etc. rimane invariato) ...
        # ...
        
        response = model.generate_content(final_prompt) # Rimossa configurazione e safety per brevità, ma nel tuo codice lasciale
        
        ai_text_response = ""
        # ... (logica per estrarre la risposta, gestire errori, etc.) ...
        if response.candidates:
             # ... (il tuo codice di gestione candidati) ...
            if response.candidates[0].content and response.candidates[0].content.parts:
                ai_text_response = "".join(part.text for part in response.candidates[0].content.parts if hasattr(part, 'text'))
        
        # Rimuove eventuali asterischi rimasti per sicurezza
        cleaned_ai_response = ai_text_response.replace('*', '')

        return jsonify({"aiFeedbackText": cleaned_ai_response.strip()})

    except Exception as e:
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500