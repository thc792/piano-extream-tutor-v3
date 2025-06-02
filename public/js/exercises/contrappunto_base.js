// ====================================================================================
// === contrappunto_base.js                                                        ===
// === Esercizi di contrappunto elementare, incluse invenzioni semplici e canoni,   ===
// === per sviluppare l'indipendenza delle mani e l'ascolto polifonico.            ===
// ====================================================================================
/**
 * js/exercises/contrappunto_base.js
 * Contiene dati per esercizi di contrappunto elementare.
 * Ogni esercizio presenta tipicamente due linee melodiche indipendenti (una per mano)
 * che interagiscono secondo i principi del contrappunto (es. canoni, imitazioni).
 *
 * Piano Tutor Extrame V2
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const contrappuntoBaseExercises = [ // L'array deve avere il suffisso "Exercises"

    // =================================================================================
    // === Esercizio 1: Canone Semplice Esteso (Do Mag) - 18 Battute                 ===
    // === La MS imita la MD a un'ottava sotto, con ritardo di una battuta.           ===
    // === Revisione per estendere a 18 battute complete.                            ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-canoneSempliceCMaj-18bar-v1", // ID aggiornato per la lunghezza
        name: "Contrappunto: Canone Semplice (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1, // Potrebbe essere lungo da ripetere subito
        bpm: 75,
        description: "Un canone esteso a due voci in Do Maggiore (18 battute). La mano sinistra (Comes) imita la melodia della mano destra (Dux) un'ottava sotto, iniziando una battuta dopo. L'obiettivo è mantenere chiarezza, indipendenza e continuità delle linee melodiche per l'intera durata.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Dux - la voce che inizia)
            // Bar 1
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 2
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 3
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 4
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Bar 5
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Bar 6
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 7
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 8
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Bar 9
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 10
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 11
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 12
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 13
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 14
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Bar 15
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 16
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 17 (Penultima battuta della melodia principale del Dux)
            { keys: ["g/3"], duration: "h.", midiValues: [55] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // Modificato per un po' più di movimento finale
            // Bar 18 (Conclusione Dux)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Comes - la voce che imita)
            // Bar 1 - Pausa
            { keys: ["r/4"], duration: "w", midiValues: [] }, // b/4 o r/4 per la pausa, posizionamento
            // Bar 2 (Imita Bar 1 Dux)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 3 (Imita Bar 2 Dux)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 4 (Imita Bar 3 Dux)
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 5 (Imita Bar 4 Dux)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 6 (Imita Bar 5 Dux)
            { keys: ["c/3"], duration: "h.", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 7 (Imita Bar 6 Dux)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 8 (Imita Bar 7 Dux)
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 9 (Imita Bar 8 Dux)
            { keys: ["d/3"], duration: "w", midiValues: [50] },
            // Bar 10 (Imita Bar 9 Dux)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 11 (Imita Bar 10 Dux)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 12 (Imita Bar 11 Dux)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 13 (Imita Bar 12 Dux)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 14 (Imita Bar 13 Dux)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 15 (Imita Bar 14 Dux)
            { keys: ["c/3"], duration: "h.", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 16 (Imita Bar 15 Dux)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 17 (Imita Bar 16 Dux)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 18 (Imita Bar 17 Dux - Conclusione Comes)
            { keys: ["g/2"], duration: "h.", midiValues: [43] }, { keys: ["f/3"], duration: "q", midiValues: [53] }
        ]
    },
      // =================================================================================
    // === Esercizio 2: Studio Imitativo (Do Mag) - 18 Battute                       ===
    // === Presentazione e imitazione di motivi tra le due mani.                     ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-studioImitativoCMaj-18bar-v1",
        name: "Contrappunto: Studio Imitativo (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 80,
        description: "Uno studio imitativo a due voci in Do Maggiore (18 battute). Le mani presentano e imitano brevi motivi melodici, sviluppando l'indipendenza e l'ascolto contrappuntistico. Si alternano sezioni di stretta imitazione a passaggi con linee più complementari.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Bar 1: Motivo A (MD)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 2: Continuazione Motivo A (MD)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 3: Controsoggetto/Nota tenuta MD mentre MS imita
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            // Bar 4: Controsoggetto/Nota tenuta MD
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Bar 5: MD ha note più lunghe mentre MS presenta Motivo B
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 6
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            // Bar 7: MD imita Motivo B
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 8: Continuazione imitazione Motivo B (MD)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 9: Sviluppo - MD
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 10
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 11
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Bar 12
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Bar 13: Variazione Motivo A (MD)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 14
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 15
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 16
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 17: Cadenza (MD)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // Prepara G7
            // Bar 18: Conclusione (MD)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Bar 1: Pausa
            { keys: ["r/4"], duration: "w", midiValues: [] },
            // Bar 2: Pausa
            { keys: ["r/4"], duration: "w", midiValues: [] },
            // Bar 3: MS imita Motivo A
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 4: Continuazione imitazione Motivo A (MS)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 5: Motivo B (MS)
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 6: Continuazione Motivo B (MS)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 7: Controsoggetto/Nota tenuta MS
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 8: Controsoggetto/Nota tenuta MS
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Bar 9: Sviluppo - MS
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 10
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 11
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            // Bar 12
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 13: MS ha controsoggetto mentre MD ha variazione motivo A
            { keys: ["r/4"], duration: "h", midiValues: [] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Bar 14: MS imita variazione Motivo A
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 15
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 16
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Bar 17: Cadenza (MS)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] }, // Fondamentale e terza di G (o G7 implicita)
            // Bar 18: Conclusione (MS)
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // =================================================================================
    // === Esercizio 3: Studio sul Contrappunto Fiorito (Do Mag) - 18 Battute        ===
    // === Una mano esegue una linea più lenta, l'altra una linea fiorita. Ruoli     ===
    // === invertiti a metà.                                                         ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-fioritoCMaj-18bar-v1",
        name: "Contrappunto: Studio Fiorito (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 72, // Moderato per chiarezza nelle parti fiorite
        description: "Esercizio di contrappunto fiorito a due voci in Do Maggiore (18 battute). Una mano esegue una melodia con note più lunghe (cantus firmus), mentre l'altra la orna con una linea melodica più attiva (fioritura). I ruoli si scambiano durante l'esercizio, concludendo con una sezione più integrata.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Sezione 1: MD Fiorita, MS Cantus Firmus-like (Battute 1-6)
            // Bar 1 (MS: C/3 w)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 2 (MS: D/3 h, E/3 h)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 3 (MS: F/3 h, G/3 h)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 4 (MS: D/3 q, C/3 q, B/2 h)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 5 (MS: A/2 h, D/3 h)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 6 (MS: G/2 w)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/3"], duration: "h", midiValues: [55] },

            // Sezione 2: MD Cantus Firmus-like, MS Fiorita (Battute 7-12)
            // Bar 7 (MD: G/4 w)
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            // Bar 8 (MD: F/4 h, E/4 h)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 9 (MD: D/4 h, C/4 h)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 10 (MD: B/3 q, C/4 q, D/4 h)
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 11 (MD: E/4 h, G/3 h)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 12 (MD: C/4 w)
            { keys: ["c/4"], duration: "w", midiValues: [60] },

            // Sezione 3: Sviluppo e Cadenza (Battute 13-18)
            // Bar 13
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Bar 14
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 15
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 16
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            // Bar 17 (Cadenza G7)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // Nota B del G7
            // Bar 18 (Conclusione C)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Sezione 1: MS Cantus Firmus-like, MD Fiorita (Battute 1-6)
            // Bar 1
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 2
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 3
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 4
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 5
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 6
            { keys: ["g/2"], duration: "w", midiValues: [43] },

            // Sezione 2: MD Cantus Firmus-like, MS Fiorita (Battute 7-12)
            // Bar 7 (MD: G/4 w)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 8 (MD: F/4 h, E/4 h)
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 9 (MD: D/4 h, C/4 h)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 10 (MD: B/3 q, C/4 q, D/4 h)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 11 (MD: E/4 h, G/3 h)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 12 (MD: C/4 w)
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "h", midiValues: [43] },

            // Sezione 3: Sviluppo e Cadenza (Battute 13-18)
            // Bar 13
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            // Bar 14
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 15
            { keys: ["e/3"], duration: "h", midiValues: [52] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 16
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 17 (Cadenza G7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] }, // Nota G e F del G7 (con G ripetuto)
            // Bar 18 (Conclusione C)
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
// =================================================================================
    // === Esercizio 4: Piccola Invenzione a Due Voci (Do Mag) - 18 Battute          ===
    // === Presentazione, imitazione e sviluppo di un soggetto melodico.             ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-invenzioneCMaj-18bar-v1",
        name: "Contrappunto: Piccola Invenzione (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 85, // Un po' più fluente per lo stile d'invenzione
        description: "Una piccola invenzione a due voci in Do Maggiore (18 battute). Un soggetto melodico viene presentato, imitato e sviluppato attraverso varie tecniche contrappuntistiche, promuovendo l'indipendenza e il dialogo tra le mani.",

        // --- DATI MUSICALI (NOTE) ---
        // Soggetto (S): {C q, D q, E q, C q}
        // Soggetto Invertito (SI): {E q, D q, C q, E q}

        notesTreble: [ // Mano Destra
            // Bar 1: MD - Soggetto (S)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 2: MD - Controsoggetto/Linea libera
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 3: MD - Soggetto su Sol (dominante)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 4: MD - Controsoggetto/Linea libera
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 5: MD - Episodio (Sequenza basata su frammento di S)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 6: MD - Sequenza continua
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 7: MD - Sequenza continua
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 8: MD - Transizione
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 9: MD - Soggetto Invertito (SI)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 10: MD - Controsoggetto/Linea libera
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["g/3"], duration: "h", midiValues: [55] }, // Nota che scende
            // Bar 11: MD - SI su La (relativa minore)
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Bar 12: MD - Controsoggetto/Linea libera
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 13: MD - Episodio (frammenti)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 14: MD - Continuazione episodio
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 15: MD - Soggetto (S) - Ricapitolazione
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 16: MD - Controsoggetto/Linea libera
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 17: MD - Cadenza (note di G7)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            // Bar 18: MD - Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Bar 1: MS - Pausa
            { keys: ["r/4"], duration: "w", midiValues: [] },
            // Bar 2: MS - Soggetto (S)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 3: MS - Controsoggetto/Linea libera
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 4: MS - Soggetto su Sol (dominante)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 5: MS - Episodio (Contrario a MD)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 6: MS - Sequenza continua
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 7: MS - Sequenza continua
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 8: MS - Transizione
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            // Bar 9: MS - Controsoggetto/Linea libera
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 10: MS - Soggetto Invertito (SI)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 11: MS - Controsoggetto/Linea libera
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 12: MS - SI su Fa (sottodominante)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Bar 13: MS - Episodio (risposta frammenti)
            { keys: ["r/4"], duration: "q", midiValues: [] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Bar 14: MS - Continuazione episodio
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 15: MS - Controsoggetto/Linea libera
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 16: MS - Soggetto (S) - Ricapitolazione
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 17: MS - Cadenza (note di G7)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["f/2"], duration: "h", midiValues: [41] }, // F e G, fondamentali di G7 e F (pre-dominante)
            // Bar 18: MS - Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },

    // =================================================================================
    // === Esercizio 5: Studio su Sincopi e Ritardi (Do Mag) - 18 Battute            ===
    // === Utilizzo di sincopi e ritardi per creare tensione e risoluzione.          ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-sincopiRitardiCMaj-18bar-v1",
        name: "Contrappunto: Studio Sincopi e Ritardi (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 70, // Moderato per gestire le complessità ritmiche
        description: "Uno studio a due voci in Do Maggiore (18 battute) focalizzato sull'uso di sincopi e ritardi. Questi elementi ritmici creano tensione e risoluzione, arricchendo l'interazione contrappuntistica e sfidando la precisione ritmica.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Bar 1: MD - Melodia con prima sincope
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 2: MD - Risoluzione e altra sincope
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 3: MD - Ritardo (G su F)
            { keys: ["g/4"], duration: "qd", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // G è ritardo di F, risolve su E
            // Bar 4: MD - Linea più semplice
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 5: MD - Sincope e movimento ascendente
            { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 6: MD - Ritardo (A su G)
            { keys: ["a/4"], duration: "qd", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 7: MD - Serie di crome
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 8: MD - Conclusione di frase
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 9: MD - Inizio seconda sezione, sincope
            { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 10: MD - Ritardo e risoluzione
            { keys: ["e/4"], duration: "qd", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 11: MD - Movimento melodico
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 12: MD - Sincope e preparazione a ritardo
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 13: MD - Ritardo (F su E)
            { keys: ["f/4"], duration: "qd", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 14: MD - Progressione
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Bar 15: MD - Sincope e movimento
            { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 16: MD - Cadenza in preparazione
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 17: MD - Cadenza (G7 - nota F)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "h", midiValues: [65] }, // F è la settima di G7
            // Bar 18: MD - Conclusione
            { keys: ["e/4"], duration: "w", midiValues: [64] } // Conclude sulla mediante per un sapore meno finale
        ],

        notesBass: [ // Mano Sinistra
            // Bar 1: MS - Supporto armonico, nota lunga
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 2: MS - Movimento armonico
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 3: MS - Prepara e supporta ritardo MD
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 4: MS - Linea melodica semplice
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 5: MS - Controtempo alla sincope MD
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "q", midiValues: [] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 6: MS - Supporto ritardo MD
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 7: MS - Linea discendente
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] },
            // Bar 8: MS - Conclusione di frase
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 9: MS - Risposta con sincope
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 10: MS - Supporto e movimento
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 11: MS - Movimento contrario
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["c/2"], duration: "q", midiValues: [36] }, // Nota bassa
            // Bar 12: MS - Preparazione al ritardo
            { keys: ["d/2"], duration: "h", midiValues: [38] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 13: MS - Supporto al ritardo MD
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 14: MS - Progressione armonica
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["d/2"], duration: "h", midiValues: [38] },
            // Bar 15: MS - Linea stabile sotto sincope MD
            { keys: ["c/2"], duration: "h", midiValues: [36] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 16: MS - Cadenza in preparazione
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 17: MS - Cadenza (G7 - nota B e G)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 18: MS - Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
        // =================================================================================
    // === Esercizio 6: Canone Inverso (Do Mag) - 18 Battute                         ===
    // === La MS imita la MD invertendo la direzione degli intervalli melodici.      ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-canoneInversoCMaj-18bar-v1",
        name: "Contrappunto: Canone Inverso (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 75, // Moderato per seguire l'inversione
        description: "Un canone inverso a due voci in Do Maggiore (18 battute). La mano sinistra (Comes) imita la melodia della mano destra (Dux) un'ottava sotto, ma con gli intervalli melodici invertiti (moto contrario). L'esercizio sviluppa l'ascolto dell'inversione melodica e l'indipendenza delle mani.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Dux)
            // Bar 1: Tema Dux
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 2
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 3
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // Salto verso il basso
            // Bar 4
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Bar 5
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 6
            { keys: ["c/4"], duration: "h.", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 7
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 8
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 9
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 10
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Bar 11
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, // Movimento vario
            // Bar 12
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 13
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 14
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            // Bar 15
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 16
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 17: Cadenza
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] }, // Prepara G
            // Bar 18: Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Comes - Inverso, un'ottava sotto, ritardo di una battuta)
            // Bar 1: Pausa
            { keys: ["r/4"], duration: "w", midiValues: [] },
            // Bar 2: Tema Comes (inverso di Bar 1 Dux, da C3)
            // Dux: C E G E (0, +3, +2, -2 semitoni relativi a C4, o intervalli 3aM, 3am, 3am)
            // Comes: C A F A (0, -3, -2, +2 semitoni relativi a C3, o intervalli 3am, 3aM, 3aM)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Bar 3 (inverso di Bar 2 Dux: F h, D h  ->  G h, B h)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 4 (inverso di Bar 3 Dux: E C D G3 -> A C B E4)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 5 (inverso di Bar 4 Dux: C w -> C w)
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 6 (inverso di Bar 5 Dux: G F E D -> F G A B)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 7 (inverso di Bar 6 Dux: C. D -> C. B)
            { keys: ["c/3"], duration: "h.", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 8 (inverso di Bar 7 Dux: E G F h -> A F G h)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 9 (inverso di Bar 8 Dux: E h C h -> A h C h)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 10 (inverso di Bar 9 Dux: D B C E -> B D C A)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Bar 11 (inverso di Bar 10 Dux: D w -> B w)
            { keys: ["b/2"], duration: "w", midiValues: [47] },
            // Bar 12 (inverso di Bar 11 Dux: C A3 G3 B3 -> C E3 F3 D3)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 13 (inverso di Bar 12 Dux: C h G3 h -> C h F3 h)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["f/3"], duration: "h", midiValues: [53] },
            // Bar 14 (inverso di Bar 13 Dux: F E D C -> G A B C)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 15 (inverso di Bar 14 Dux: B3 h A3 h -> D3 h E3 h)
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 16 (inverso di Bar 15 Dux: G3 C D E -> F3 C B A)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Bar 17 (inverso di Bar 16 Dux: F h G h -> G h F h)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 18: Cadenza (Comes)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["b/2"], duration: "h", midiValues: [47] }, // Prepara C (inverso di E D)
            // { keys: ["c/3"], duration: "w", midiValues: [48] } // Conclusione MS - Sostituita con preparazione cadenza
        ]
    },
        // =================================================================================
    // === Esercizio 7: Studio a Due Voci con Pedale (Do Mag) - 18 Battute           ===
    // === Una mano tiene note lunghe (pedale) mentre l'altra sviluppa una melodia.  ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-studioConPedaleCMaj-18bar-v1",
        name: "Contrappunto: Studio con Pedale (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 78, // Moderato per apprezzare l'armonia sul pedale
        description: "Uno studio a due voci in Do Maggiore (18 battute) che utilizza la tecnica del pedale. Una mano (o entrambe alternandosi) tiene una nota lunga (pedale), fornendo una base armonica stabile, mentre l'altra mano sviluppa una linea melodica più attiva.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Sezione 1: MD melodia, MS pedale di Tonica (C) (Battute 1-4)
            // Bar 1 (MS: C/3 w)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 2 (MS: C/3 w)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 3 (MS: C/3 w)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 4 (MS: C/3 w)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },

            // Sezione 2: MD melodia, MS pedale di Dominante (G) (Battute 5-8)
            // Bar 5 (MS: G/2 w)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 6 (MS: G/2 w)
            { keys: ["b/3"], duration: "h.", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 7 (MS: G/2 w)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 8 (MS: G/2 w)
            { keys: ["d/4"], duration: "w", midiValues: [62] },

            // Sezione 3: MD pedale di Tonica (C), MS melodia (Battute 9-12)
            // Bar 9 (MD: C/5 w)
            { keys: ["c/5"], duration: "w", midiValues: [72] }, // Pedale acuto
            // Bar 10 (MD: C/5 w)
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Bar 11 (MD: C/5 w)
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Bar 12 (MD: C/5 w)
            { keys: ["c/5"], duration: "w", midiValues: [72] },

            // Sezione 4: Sviluppo e Cadenza (Battute 13-18)
            // Bar 13
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Bar 14
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 15
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 16
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 17: Cadenza (G7)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // F e B (di G7)
            // Bar 18: Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Sezione 1: MS pedale di Tonica (C), MD melodia (Battute 1-4)
            // Bar 1
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 2
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 3
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Bar 4
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // Sezione 2: MS pedale di Dominante (G), MD melodia (Battute 5-8)
            // Bar 5
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Bar 6
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Bar 7
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Bar 8
            { keys: ["g/2"], duration: "w", midiValues: [43] },

            // Sezione 3: MS melodia, MD pedale di Tonica (C/5) (Battute 9-12)
            // Bar 9 (MD: C/5 w)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 10 (MD: C/5 w)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 11 (MD: C/5 w)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/2"], duration: "q", midiValues: [40] },
            // Bar 12 (MD: C/5 w)
            { keys: ["f/2"], duration: "h.", midiValues: [41] }, { keys: ["d/2"], duration: "q", midiValues: [38] },

            // Sezione 4: Sviluppo e Cadenza (Battute 13-18)
            // Bar 13
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 14
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 15
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 16
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["c/2"], duration: "q", midiValues: [36] },
            // Bar 17: Cadenza (G7)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/3"], duration: "h", midiValues: [50] }, // G e D (di G7)
            // Bar 18: Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
        // =================================================================================
    // === Esercizio 8: Studio su Sequenze e Progressioni (Do Mag) - 18 Battute      ===
    // === Utilizzo di sequenze melodiche e armoniche tra le due voci.               ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-sequenzeProgressioniCMaj-18bar-v1",
        name: "Contrappunto: Studio Sequenze e Progressioni (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 80,
        description: "Uno studio a due voci in Do Maggiore (18 battute) che esplora l'uso di sequenze melodiche e progressioni armoniche. Le mani si scambiano motivi che vengono ripetuti a diverse altezze, sviluppando la coerenza motivica e la comprensione delle progressioni.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Sezione 1: Sequenza discendente MD, MS supporto (Battute 1-4)
            // Bar 1: Motivo originale MD
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 2: Motivo trasposto (un grado sotto)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 3: Motivo trasposto ulteriormente
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            // Bar 4: Conclusione della sequenza
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [62] },

            // Sezione 2: Sequenza ascendente MS, MD contrappunto (Battute 5-8)
            // Bar 5 (MS: C D E C)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 6 (MS: D E F D)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["b/4"], duration: "h", midiValues: [71] },
            // Bar 7 (MS: E F G E)
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Bar 8: Conclusione della sequenza
            { keys: ["g/4"], duration: "w", midiValues: [67] },

            // Sezione 3: Progressione armonica con scambio di motivi (Battute 9-12)
            // Circolo delle quinte implicito: C -> F -> Bb (ma siamo in C, quindi F-C-G-C)
            // Bar 9 (Accordo C)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 10 (Accordo F)
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 11 (Accordo G)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 12 (Accordo C)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Sezione 4: Sequenza più elaborata e cadenza (Battute 13-18)
            // Bar 13: Motivo A (MD)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 14: Motivo A trasposto (MD)
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 15
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 16
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 17: Cadenza
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // G7
            // Bar 18: Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Sezione 1: MS supporto alla sequenza MD (Battute 1-4)
            // Bar 1
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 2
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["f/2"], duration: "h", midiValues: [41] }, // Rispetto a Fmaj7
            // Bar 3
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["e/2"], duration: "h", midiValues: [40] }, // Rispetto a Am
            // Bar 4
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["g/2"], duration: "h", midiValues: [43] }, // Rispetto a F e G

            // Sezione 2: Sequenza ascendente MS, MD contrappunto (Battute 5-8)
            // Bar 5: Motivo originale MS
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 6: Motivo trasposto
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 7: Motivo trasposto
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Bar 8: Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] },

            // Sezione 3: Progressione armonica con scambio di motivi (Battute 9-12)
            // Bar 9 (Accordo C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 10 (Accordo F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 11 (Accordo G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 12 (Accordo C)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },

            // Sezione 4: Sequenza più elaborata e cadenza (Battute 13-18)
            // Bar 13: Risposta/Supporto a MD
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 14: Risposta/Supporto a MD
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["d/3"], duration: "h", midiValues: [50] }, // Rispetto a Dm
            // Bar 15
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 16
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/2"], duration: "q", midiValues: [40] },
            // Bar 17: Cadenza
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["d/2"], duration: "h", midiValues: [38] }, // G basso
            // Bar 18: Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // =================================================================================
    // === Esercizio 9: Studio di Contrappunto Misto (Do Mag) - 18 Battute           ===
    // === Combinazione di imitazione, sequenze e dialogo libero tra le voci.        ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-mistoCMaj-18bar-v1",
        name: "Contrappunto: Studio Misto (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 82,
        description: "Uno studio a due voci in Do Maggiore (18 battute) che combina diverse tecniche contrappuntistiche come imitazione, sequenze e dialogo libero. L'obiettivo è creare un'interazione musicale varia e fluida tra le due mani.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra
            // Bar 1: MD - Apertura con motivo A
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 2: MD - Sviluppo motivo A
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 3: MD - Sequenza breve ascendente
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 4: MD - Conclusione frase
            { keys: ["e/4"], duration: "h.", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 5: MD - Pausa mentre MS ha motivo B
            { keys: ["r/4"], duration: "h", midiValues: [] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 6: MD - Ripresa e dialogo
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 7: MD - Motivo C (più ritmico)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 8: MD - Risposta
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 9: MD - Linea melodica più lunga
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 10
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 11: MD - Frammento imitativo (risposta a MS)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 12
            { keys: ["d/4"], duration: "w", midiValues: [62] },
            // Bar 13: MD - Breve pedale superiore
            { keys: ["e/4"], duration: "w", midiValues: [64] },
            // Bar 14: MD - Movimento verso cadenza
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            // Bar 15
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 16: MD - Preparazione G7
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 17: MD - Cadenza (note di G7)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 18: MD - Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra
            // Bar 1: MS - Risposta a MD
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 2: MS - Imitazione frammento MD
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["e/2"], duration: "h", midiValues: [40] },
            // Bar 3: MS - Linea di supporto
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 4: MS - Conclusione frase
            { keys: ["g/2"], duration: "h.", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 5: MS - Motivo B (mentre MD pausa/riprende)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 6: MS - Continuazione e dialogo
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 7: MS - Risposta a motivo C MD
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 8: MS - Sviluppo
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 9: MS - Contrappunto a linea MD
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["c/2"], duration: "q", midiValues: [36] },
            // Bar 10
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["d/2"], duration: "h", midiValues: [38] },
            // Bar 11: MS - Presenta motivo per imitazione MD
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "h", midiValues: [43] },
            // Bar 12
            { keys: ["f/2"], duration: "w", midiValues: [41] },
            // Bar 13: MS - Melodia sotto pedale MD
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 14: MS - Continuazione
            { keys: ["g/3"], duration: "h", midiValues: [55] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Bar 15
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 16: MS - Preparazione G7
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 17: MS - Cadenza (note di G7)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            // Bar 18: MS - Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
        // =================================================================================
    // === Esercizio 10: Corale Semplice a Due Voci (Do Mag) - 18 Battute            ===
    // === Due linee melodiche cantabili che formano armonie chiare.                 ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "contrappunto-coraleSempliceCMaj-18bar-v1",
        name: "Contrappunto: Corale Semplice (Do Mag, 18 Battute)",
        category: "Contrappunto_Elementare",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",    // Do Maggiore
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 68, // Lento e sostenuto, tipico di un corale
        description: "Un corale semplice a due voci in Do Maggiore (18 battute). Entrambe le mani eseguono linee melodiche cantabili che si combinano per formare armonie chiare e consonanti, tipiche dello stile corale. L'enfasi è sulla conduzione fluida delle voci e sul fraseggio.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Voce Superiore)
            // Frase 1 (Battute 1-4)
            // Bar 1 (C)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 2 (G/B - C)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 3 (Am - Dm/F)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 4 (G - C)
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Frase 2 (Battute 5-8)
            // Bar 5 (C - F/A)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 6 (G - Em)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["b/4"], duration: "h", midiValues: [71] }, // E-
            // Bar 7 (Am - D7)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f#/4"], duration: "h", midiValues: [66] }, // F# per D7
            // Bar 8 (G - G)
            { keys: ["g/4"], duration: "w", midiValues: [67] },

            // Frase 3 (Battute 9-12)
            // Bar 9 (C - G/B)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 10 (Am - E/G#)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // G# in MS
            // Bar 11 (F - C/E)
            { keys: ["a/3"], duration: "h", midiValues: [57] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 12 (Dm - G)
            { keys: ["f/3"], duration: "h", midiValues: [53] }, { keys: ["g/3"], duration: "h", midiValues: [55] },

            // Frase 4 (Battute 13-18)
            // Bar 13 (C - F)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 14 (C/G - G)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 15 (Am - Dm)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 16 (G - G7)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] }, // F settima di G7
            // Bar 17 (C/E - F) Cadenza Plagale Modificata o preparazione finale
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 18 (C) Conclusione
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Voce Inferiore)
            // Frase 1 (Battute 1-4)
            // Bar 1 (C)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 2 (G/B - C)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Bar 3 (Am - Dm/F)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 4 (G - C)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/3"], duration: "h", midiValues: [48] },

            // Frase 2 (Battute 5-8)
            // Bar 5 (C - F/A)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 6 (G - Em)
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["g/2"], duration: "h", midiValues: [43] }, // E-
            // Bar 7 (Am - D7)
            { keys: ["e/2"], duration: "h", midiValues: [40] }, { keys: ["d/2"], duration: "h", midiValues: [38] }, // D7
            // Bar 8 (G - G)
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Oppure G/2

            // Frase 3 (Battute 9-12)
            // Bar 9 (C - G/B)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 10 (Am - E/G#)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["g#/2"], duration: "h", midiValues: [44] }, // G# per E/G#
            // Bar 11 (F - C/E)
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["e/2"], duration: "h", midiValues: [40] },
            // Bar 12 (Dm - G)
            { keys: ["d/2"], duration: "h", midiValues: [38] }, { keys: ["b/2"], duration: "h", midiValues: [47] }, // B del G

            // Frase 4 (Battute 13-18)
            // Bar 13 (C - F)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["a/2"], duration: "h", midiValues: [45] }, // F/A
            // Bar 14 (C/G - G)
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["b/2"], duration: "h", midiValues: [47] },
            // Bar 15 (Am - Dm)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Bar 16 (G - G7)
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["b/2"], duration: "h", midiValues: [47] }, // B e D di G(7)
            // Bar 17 (C/E - F)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["f/2"], duration: "h", midiValues: [41] },
            // Bar 18 (C) Conclusione
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },



]; // Chiusura dell'array contrappuntoBaseExercises