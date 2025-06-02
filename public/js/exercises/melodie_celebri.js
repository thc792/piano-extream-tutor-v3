// ====================================================================================
// === melodie_celebri.js                                                          ===
// === Contiene trascrizioni per pianoforte di melodie celebri, brani tradizionali  ===
// === e popolari, arrangiati come esercizi didattici.                             ===
// ====================================================================================
/**
 * js/exercises/melodie_celebri.js
 * Contiene dati per esercizi basati su melodie famose e brani tradizionali.
 * Ogni esercizio presenta una melodia nota con un arrangiamento pianistico.
 *
 * Piano Tutor Extrame V2
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

const melodieCelebriExercises = [ // L'array deve avere il suffisso "Exercises"

    // =================================================================================
    // === Esercizio 1: Greensleeves (La Minore) - 16 Battute                        ===
    // === Celebre melodia tradizionale inglese.                                     ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-greensleeves-Am-16bar-v1",
        name: "Melodie Celebri: Greensleeves (La Minore)",
        category: "Melodie_Celebri", // Corrisponde al nome del file (senza .js e Exercises) e alla chiave in window.exerciseData

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "Am",   // La Minore (useremo G# per la dominante E)
        timeSignature: "3/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 2,
        bpm: 76, // Un tempo moderato e fluente
        description: "Una trascrizione per pianoforte della celebre melodia tradizionale inglese 'Greensleeves' in La Minore. La mano destra esegue la melodia principale, mentre la sinistra fornisce un semplice accompagnamento armonico.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Pickup
            { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 1 (Am)
            { keys: ["a/4"], duration: "qd", midiValues: [69] }, { keys: ["g#/4"], duration: "8", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 2 (G)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] },
            // Bar 3 (C)
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 4 (E o E7)
            { keys: ["d/4"], duration: "qd", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },

            // Bar 5 (Am) - Ripetizione sezione A'
            { keys: ["a/4"], duration: "qd", midiValues: [69] }, { keys: ["g#/4"], duration: "8", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 6 (G)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] },
            // Bar 7 (C)
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 8 (Am) - Conclusione Sezione A'
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },

            // Bar 9 (C) - Sezione B
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 10 (G)
            { keys: ["g#/4"], duration: "qd", midiValues: [68] }, { keys: ["f#/4"], duration: "8", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 11 (F o Dm)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] },
            // Bar 12 (E o E7)
            { keys: ["g#/4"], duration: "qd", midiValues: [68] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] },

            // Bar 13 (Am) - Ritorno Sezione A''
            { keys: ["a/4"], duration: "qd", midiValues: [69] }, { keys: ["g#/4"], duration: "8", midiValues: [68] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 14 (G)
            { keys: ["b/4"], duration: "qd", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g#/4"], duration: "q", midiValues: [68] },
            // Bar 15 (E7)
            { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 16 (Am) - Conclusione Finale
            { keys: ["a/3"], duration: "hd", midiValues: [57] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento)
            // Pickup
            { keys: ["r/4"], duration: "8", midiValues: [] },
            // Bar 1 (Am)
            { keys: ["a/2", "e/3"], duration: "hd", midiValues: [45, 52] },
            // Bar 2 (G)
            { keys: ["g/2", "d/3"], duration: "hd", midiValues: [43, 50] },
            // Bar 3 (C)
            { keys: ["c/3", "g/3"], duration: "hd", midiValues: [48, 55] },
            // Bar 4 (E)
            { keys: ["e/2", "b/2", "g#/3"], duration: "hd", midiValues: [40, 47, 56] },

            // Bar 5 (Am)
            { keys: ["a/2", "e/3"], duration: "hd", midiValues: [45, 52] },
            // Bar 6 (G)
            { keys: ["g/2", "d/3"], duration: "hd", midiValues: [43, 50] },
            // Bar 7 (C)
            { keys: ["c/3", "g/3"], duration: "hd", midiValues: [48, 55] },
            // Bar 8 (Am)
            { keys: ["a/2", "e/3"], duration: "hd", midiValues: [45, 52] },

            // Bar 9 (C)
            { keys: ["c/3", "g/3", "e/4"], duration: "hd", midiValues: [48, 55, 64] },
            // Bar 10 (G)
            { keys: ["g/2", "d/3", "b/3"], duration: "hd", midiValues: [43, 50, 59] },
            // Bar 11 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "hd", midiValues: [41, 48, 57] },
            // Bar 12 (E7)
            { keys: ["e/2", "b/2", "d/3", "g#/3"], duration: "hd", midiValues: [40, 47, 50, 56] },

            // Bar 13 (Am)
            { keys: ["a/2", "e/3"], duration: "hd", midiValues: [45, 52] },
            // Bar 14 (G)
            { keys: ["g/2", "d/3"], duration: "hd", midiValues: [43, 50] },
            // Bar 15 (E7)
            { keys: ["e/2", "b/2", "g#/3"], duration: "hd", midiValues: [40, 47, 56] },
            // Bar 16 (Am)
            { keys: ["a/2", "e/3", "a/3"], duration: "hd", midiValues: [45, 52, 57] }
        ]
    },
        // =================================================================================
    // === Esercizio 2: Scarborough Fair (Re Minore) - 24 Battute                    ===
    // === Celebre ballata tradizionale inglese.                                     ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-scarboroughFair-Dm-24bar-v1",
        name: "Melodie Celebri: Scarborough Fair (Re Minore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "Dm",   // Re Minore (Un bemolle in chiave - Bb)
        timeSignature: "3/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1, // Data la lunghezza
        bpm: 72, // Un tempo calmo e narrativo
        description: "Una trascrizione per pianoforte della celebre ballata tradizionale inglese 'Scarborough Fair' in Re Minore (24 battute). La melodia è nella mano destra, con un accompagnamento arpeggiato/armonico nella sinistra. Include una breve introduzione e una coda.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Introduzione (2 battute)
            // Bar 1
            { keys: ["r/4"], duration: "q", midiValues: [] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 2
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },

            // Melodia Principale - Strofa 1 (Battute 3-10)
            // Bar 3 (Dm) "Are you going..."
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 4 (C o Am) "...to Scarborough Fair?"
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 5 (F) "Parsley, sage..."
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 6 (C) "...rosemary and thyme"
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 7 (Dm) "Remember me..."
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 8 (Gm o Bb) "...to one who lives there"
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 9 (C o A7) "She once was..."
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 10 (Dm) "...a true love of mine"
            { keys: ["d/4"], duration: "hd", midiValues: [62] },

            // Melodia Principale - Strofa 2 (Variazione leggera) (Battute 11-18)
            // Bar 11 (Dm)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // Salto più ampio
            // Bar 12 (C o Am)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 13 (F)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 14 (C)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 15 (Dm)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [70] }, // Bb in chiave
            // Bar 16 (Gm o Bb)
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 17 (C o A7)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 18 (Dm)
            { keys: ["d/4"], duration: "hd", midiValues: [62] },

            // Coda (Battute 19-24)
            // Bar 19 (Dm)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 20 (C)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 21 (Bb)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 22 (A7)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, // C# per A7
            // Bar 23 (Dm)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 24 (Dm)
            { keys: ["d/3"], duration: "hd", midiValues: [50] } // Nota finale bassa
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento)
            // Introduzione
            // Bar 1 (Dm arpeggio)
            { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Bar 2 (A7 arpeggio)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, // C# per A7

            // Melodia Principale - Strofa 1
            // Bar 3 (Dm)
            { keys: ["d/3", "f/3", "a/3"], duration: "hd", midiValues: [50, 53, 57] },
            // Bar 4 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "hd", midiValues: [48, 52, 55] },
            // Bar 5 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "hd", midiValues: [41, 45, 48] },
            // Bar 6 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "hd", midiValues: [48, 52, 55] },
            // Bar 7 (Dm)
            { keys: ["d/3", "f/3", "a/3"], duration: "hd", midiValues: [50, 53, 57] },
            // Bar 8 (Gm)
            { keys: ["g/2", "b/2", "d/3"], duration: "hd", midiValues: [43, 46, 50] }, // Bb in chiave
            // Bar 9 (A7)
            { keys: ["a/2", "c#/3", "e/3"], duration: "hd", midiValues: [45, 49, 52] },
            // Bar 10 (Dm)
            { keys: ["d/2", "f/3", "a/3"], duration: "hd", midiValues: [38, 53, 57] },

            // Melodia Principale - Strofa 2
            // Bar 11 (Dm)
            { keys: ["d/3", "f/3", "a/3"], duration: "hd", midiValues: [50, 53, 57] },
            // Bar 12 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "hd", midiValues: [48, 52, 55] },
            // Bar 13 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "hd", midiValues: [41, 45, 48] },
            // Bar 14 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "hd", midiValues: [48, 52, 55] },
            // Bar 15 (Dm)
            { keys: ["d/3", "f/3", "a/3"], duration: "hd", midiValues: [50, 53, 57] },
            // Bar 16 (Gm)
            { keys: ["g/2", "b/2", "d/3"], duration: "hd", midiValues: [43, 46, 50] },
            // Bar 17 (A7)
            { keys: ["a/2", "c#/3", "e/3"], duration: "hd", midiValues: [45, 49, 52] },
            // Bar 18 (Dm)
            { keys: ["d/2", "f/3", "a/3"], duration: "hd", midiValues: [38, 53, 57] },

            // Coda
            // Bar 19 (Dm arpeggio discendente)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            // Bar 20 (C)
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 21 (Bb)
            { keys: ["b/2", "d/3", "f/3"], duration: "hd", midiValues: [46, 50, 53] }, // Bb in chiave
            // Bar 22 (A7)
            { keys: ["a/2", "c#/3", "e/3"], duration: "hd", midiValues: [45, 49, 52] },
            // Bar 23 (Dm)
            { keys: ["d/2", "f/2", "a/2"], duration: "hd", midiValues: [38, 41, 45] },
            // Bar 24 (Dm)
            { keys: ["d/2"], duration: "hd", midiValues: [38] } // Fondamentale finale
        ]
    },
        // =================================================================================
    // === Esercizio 3: Inno Russo (Melodia) - 36 Battute                            ===
    // === Melodia dell'Inno Nazionale della Federazione Russa (A. Alexandrov).      ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-innoRusso-CMaj-36bar-v1",
        name: "Melodie Celebri: Inno Russo (Do Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",   // Do Maggiore
        timeSignature: "4/4", // Spesso eseguito in 4/4, a volte percepito in 2/2

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 88, // Un tempo maestoso ma non troppo lento per un esercizio
        description: "Arrangiamento per pianoforte della melodia dell'Inno Nazionale Russo (musica di A. Alexandrov) in Do Maggiore. Include la fanfara introduttiva e la sezione melodica principale. L'obiettivo è catturare il carattere solenne e potente della melodia.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia principale e parte superiore dell'armonia)
            // Fanfara Introduttiva (Battute 1-8)
            // Bar 1
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 2
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Bar 3
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 4
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 5
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 6
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Bar 7
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 8
            { keys: ["e/4"], duration: "w", midiValues: [64] },

            // Melodia Principale (Strofa - Battute 9-24)
            // Bar 9 "Rossiya – svyashchennaya nasha derzhava"
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 10
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 11 "Rossiya – lyubimaya nasha strana."
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 12
            { keys: ["f/4"], duration: "h.", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 13 "Moguchaya volya, velikaya slava –"
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 14
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            // Bar 15 "Tvoyo dostoyan'ye na vse vremena!"
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 16
            { keys: ["d/4"], duration: "w", midiValues: [62] },

            // Ritornello "Slav'sya, Otechestvo nashe svobodnoye," (Battute 17-24)
            // Bar 17
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Bar 18
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 19 "bratskikh narodov soyuz vekovoy,"
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 20
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 21 "Predkami dannaya mudrost' narodnaya!"
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 22
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 23 "Slav'sya, strana! My gordimsya тобой!"
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 24
            { keys: ["e/4"], duration: "h.", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },

            // Sezione di transizione/sviluppo (Battute 25-32)
            // Bar 25
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Bar 26
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Bar 27
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 28
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 29
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 30
            { keys: ["f#/4"], duration: "h", midiValues: [66] }, { keys: ["a/4"], duration: "h", midiValues: [69] }, // Modulazione momentanea verso Sol
            // Bar 31
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 32
            { keys: ["e/4"], duration: "w", midiValues: [64] },

            // Coda Finale (Battute 33-36)
            // Bar 33
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Bar 34
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 35 (G7)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            // Bar 36 (C)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento con accordi maestosi)
            // Fanfara
            // Bar 1 (C)
            { keys: ["c/3", "g/3", "c/4"], duration: "w", midiValues: [48, 55, 60] },
            // Bar 2 (G/B)
            { keys: ["b/2", "g/3", "d/4"], duration: "w", midiValues: [47, 55, 62] },
            // Bar 3 (Am)
            { keys: ["a/2", "e/3", "a/3"], duration: "w", midiValues: [45, 52, 57] },
            // Bar 4 (G)
            { keys: ["g/2", "d/3", "g/3"], duration: "w", midiValues: [43, 50, 55] },
            // Bar 5 (C)
            { keys: ["c/3", "g/3", "c/4"], duration: "w", midiValues: [48, 55, 60] },
            // Bar 6 (G/B)
            { keys: ["b/2", "g/3", "d/4"], duration: "w", midiValues: [47, 55, 62] },
            // Bar 7 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "w", midiValues: [41, 48, 57] },
            // Bar 8 (C/G G)
            { keys: ["g/2", "e/3", "c/4"], duration: "w", midiValues: [43, 52, 60] }, // C/G poi G implicito

            // Melodia Principale
            // Bar 9 (C)
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] }, { keys: ["c/2", "g/2", "e/3"], duration: "h", midiValues: [36, 43, 52] },
            // Bar 10 (G)
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            // Bar 11 (C)
            { keys: ["c/3", "e/3"], duration: "h", midiValues: [48, 52] }, { keys: ["c/2", "g/2", "e/3"], duration: "h", midiValues: [36, 43, 52] },
            // Bar 12 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            // Bar 13 (G)
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["b/2", "d/3", "g/3"], duration: "h", midiValues: [47, 50, 55] },
            // Bar 14 (C/E)
            { keys: ["e/2", "g/2", "c/3"], duration: "w", midiValues: [40, 43, 48] },
            // Bar 15 (F)
            { keys: ["f/2", "a/2"], duration: "h", midiValues: [41, 45] }, { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },
            // Bar 16 (G)
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] },

            // Ritornello
            // Bar 17 (C)
            { keys: ["c/3", "g/3", "e/4"], duration: "w", midiValues: [48, 55, 64] }, // Accordo C pieno
            // Bar 18 (G)
            { keys: ["g/2", "d/3", "b/3"], duration: "w", midiValues: [43, 50, 59] }, // Accordo G
            // Bar 19 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "w", midiValues: [41, 48, 57] }, // Accordo F
            // Bar 20 (C/E)
            { keys: ["e/2", "g/2", "c/3"], duration: "w", midiValues: [40, 43, 48] }, // Accordo C/E
            // Bar 21 (Am)
            { keys: ["a/2", "e/3", "c/4"], duration: "w", midiValues: [45, 52, 60] }, // Accordo Am
            // Bar 22 (Dm)
            { keys: ["d/2", "a/2", "f/3"], duration: "w", midiValues: [38, 45, 53] }, // Accordo Dm
            // Bar 23 (G)
            { keys: ["g/2", "d/3", "b/3"], duration: "w", midiValues: [43, 50, 59] }, // Accordo G
            // Bar 24 (C)
            { keys: ["c/3", "g/3", "e/4"], duration: "w", midiValues: [48, 55, 64] }, // Accordo C

            // Sezione di transizione/sviluppo
            // Bar 25 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            // Bar 26 (C/G)
            { keys: ["g/2", "e/3", "c/4"], duration: "w", midiValues: [43, 52, 60] },
            // Bar 27 (G)
            { keys: ["d/3", "b/3", "g/3"], duration: "w", midiValues: [50, 59, 55] },
            // Bar 28 (C)
            { keys: ["c/3", "g/3", "e/3"], duration: "w", midiValues: [48, 55, 52] },
            // Bar 29 (Am)
            { keys: ["a/2", "e/3", "c/3"], duration: "w", midiValues: [45, 52, 48] },
            // Bar 30 (D/F#) Dominante di G
            { keys: ["f#/2", "a/2", "d/3"], duration: "w", midiValues: [42, 45, 50] },
            // Bar 31 (G)
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] },
            // Bar 32 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },

            // Coda Finale
            // Bar 33 (C)
            { keys: ["c/3", "g/3", "e/4"], duration: "w", midiValues: [48, 55, 64] },
            // Bar 34 (G/B)
            { keys: ["b/2", "d/3", "g/3"], duration: "w", midiValues: [47, 50, 55] },
            // Bar 35 (G7)
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43, 47, 50, 53] },
            // Bar 36 (C)
            { keys: ["c/2", "g/2", "c/3", "e/3"], duration: "w", midiValues: [36, 43, 48, 52] } // Accordo C finale ampio
        ]
    },
    // =================================================================================
    // === Esercizio 4: Inno di Mameli (Melodia) - 38 Battute                        ===
    // === Melodia de "Il Canto degli Italiani" (M. Novaro).                         ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-innoMameli-FMaj-38bar-v1",
        name: "Melodie Celebri: Inno di Mameli (Fa Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "F",   // Fa Maggiore (Un bemolle in chiave - Bb)
        timeSignature: "4/4", // Carattere marziale

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 100, // Un tempo vivace e marziale
        description: "Arrangiamento per pianoforte della melodia dell'Inno di Mameli (musica di M. Novaro) in Fa Maggiore. Include la celebre strofa 'Fratelli d'Italia' e il ritornello. L'obiettivo è esprimere il carattere energico e patriottico della melodia.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Introduzione (Battute 1-2)
            // Bar 1 (Fanfara breve)
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Bar 2
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["a/4"], duration: "h", midiValues: [69] },

            // Strofa "Fratelli d'Italia" (Battute 3-10)
            // Bar 3 "Fra-tel-li d'I-"
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 4 "ta-lia, l'I-"
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 5 "ta-lia s'è de-"
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 6 "sta, dell'el-mo di Sci-pio"
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 7 "s'è cin-ta la te-"
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 8 "sta. Dov'è la Vit-"
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 9 "to-ria? Le por-ga la chio-"
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 10 "ma, ché schia-va di Ro-ma Iddi-o la cre-ò."
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },

            // Ritornello "Stringiamci a coorte" (Battute 11-26)
            // Bar 11 "Stringiamci a co-"
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 12 "or-te, siam pron-ti al-la mor-"
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 13 "te, siam pron-ti al-la mor-"
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 14 "te, l'I-ta-lia chia-"
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 15 "mò. Stringiamci a co-"
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 16 "or-te, siam pron-ti al-la mor-"
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 17 "te, siam pron-ti al-la mor-"
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 18 "te, l'I-ta-lia chia-"
            { keys: ["f/4"], duration: "h.", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // Pausa implicita

            // "Sì!" (Battute 19-20, ripetute)
            // Bar 19
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 20
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["r/4"], duration: "h", midiValues: [] },
            // Bar 21
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 22
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["r/4"], duration: "h", midiValues: [] },
            
            // Transizione (Battute 23-26)
            // Bar 23
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 24
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 25
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 26
            { keys: ["e/4"], duration: "h.", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },

            // Ripresa Tema del Ritornello Breve (Battute 27-34)
            // Bar 27
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 28
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 29
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 30
            { keys: ["c/4"], duration: "w", midiValues: [60] },
             // Bar 31
            { keys: ["c/5"], duration: "qd", midiValues: [72] }, { keys: ["bb/4"], duration: "8", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 32
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 33
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 34
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["r/4"], duration: "h", midiValues: [] },


            // Coda Finale (Battute 35-38)
            // Bar 35
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "h", midiValues: [72] },
            // Bar 36 (C7)
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] }, // E naturale per C7
            // Bar 37 (F)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 38 (F)
            { keys: ["f/3"], duration: "w", midiValues: [53] } // Nota finale bassa e decisa
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento marziale)
            // Introduzione
            // Bar 1 (F)
            { keys: ["f/2", "c/3", "f/3"], duration: "w", midiValues: [41, 48, 53] },
            // Bar 2 (C/E - F)
            { keys: ["e/2", "c/3", "g/3"], duration: "h", midiValues: [40, 48, 55] }, { keys: ["f/2", "a/2", "f/3"], duration: "h", midiValues: [41, 45, 53] },

            // Strofa
            // Bar 3 (F)
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },
            // Bar 4 (Bb)
            { keys: ["bb/2", "f/3"], duration: "h", midiValues: [46, 53] }, { keys: ["bb/2", "f/3"], duration: "h", midiValues: [46, 53] },
            // Bar 5 (F)
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] }, { keys: ["a/2", "f/3"], duration: "h", midiValues: [45, 53] }, // F/A
            // Bar 6 (C)
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] },
            // Bar 7 (C7)
            { keys: ["g/2", "e/3", "bb/3"], duration: "h", midiValues: [43, 52, 58] }, { keys: ["g/2", "e/3"], duration: "h", midiValues: [43, 52] },
            // Bar 8 (F)
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },
            // Bar 9 (Bb)
            { keys: ["bb/2", "f/3"], duration: "h", midiValues: [46, 53] }, { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, // Gm
            // Bar 10 (C7 - F)
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] }, { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] },

            // Ritornello
            // Bar 11 (F)
            { keys: ["f/3", "c/4"], duration: "w", midiValues: [53, 60] }, // Ottave per dare peso
            // Bar 12 (C/E)
            { keys: ["e/3", "c/4"], duration: "w", midiValues: [52, 60] },
            // Bar 13 (Dm)
            { keys: ["d/3", "a/3"], duration: "w", midiValues: [50, 57] },
            // Bar 14 (Gm C)
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] },
            // Bar 15 (F)
            { keys: ["f/3", "c/4"], duration: "w", midiValues: [53, 60] },
            // Bar 16 (C/E)
            { keys: ["e/3", "c/4"], duration: "w", midiValues: [52, 60] },
            // Bar 17 (Dm)
            { keys: ["d/3", "a/3"], duration: "w", midiValues: [50, 57] },
            // Bar 18 (C F)
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },

            // "Sì!"
            // Bar 19 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "h", midiValues: [46, 53, 62] }, { keys: ["r/4"], duration: "h", midiValues: [] },
            // Bar 20 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "h", midiValues: [41, 48, 57] }, { keys: ["r/4"], duration: "h", midiValues: [] },
            // Bar 21 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "h", midiValues: [46, 53, 62] }, { keys: ["r/4"], duration: "h", midiValues: [] },
            // Bar 22 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "h", midiValues: [41, 48, 57] }, { keys: ["r/4"], duration: "h", midiValues: [] },

            // Transizione
            // Bar 23 (C)
            { keys: ["c/3", "g/3", "e/4"], duration: "w", midiValues: [48, 55, 64] },
            // Bar 24 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            // Bar 25 (Bb)
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            // Bar 26 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },

            // Ripresa Tema Ritornello Breve
            // Bar 27 (F)
            { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },
            // Bar 28 (Bb)
            { keys: ["bb/2", "f/3"], duration: "h", midiValues: [46, 53] }, { keys: ["d/3", "bb/3"], duration: "h", midiValues: [50, 58] }, // Bb/D
            // Bar 29 (Gm)
            { keys: ["g/2", "d/3"], duration: "h", midiValues: [43, 50] }, { keys: ["bb/2", "d/3"], duration: "h", midiValues: [46, 50] },
            // Bar 30 (C)
            { keys: ["c/3", "g/3"], duration: "w", midiValues: [48, 55] },
            // Bar 31 (F)
            { keys: ["f/3", "c/4"], duration: "w", midiValues: [53, 60] },
            // Bar 32 (C/E)
            { keys: ["e/3", "c/4"], duration: "w", midiValues: [52, 60] },
            // Bar 33 (Dm)
            { keys: ["d/3", "a/3"], duration: "w", midiValues: [50, 57] },
            // Bar 34 (C F)
            { keys: ["c/3", "g/3"], duration: "h", midiValues: [48, 55] }, { keys: ["f/2", "c/3"], duration: "h", midiValues: [41, 48] },


            // Coda Finale
            // Bar 35 (F)
            { keys: ["f/2", "c/3", "f/3"], duration: "w", midiValues: [41, 48, 53] },
            // Bar 36 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },
            // Bar 37 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            // Bar 38 (F)
            { keys: ["f/2", "f/3"], duration: "w", midiValues: [41, 53] } // Ottave finali
        ]
    },
        // =================================================================================
    // === Esercizio 5: Inno Americano (The Star-Spangled Banner) - 34 Battute       ===
    // === Melodia dell'inno nazionale degli Stati Uniti d'America.                  ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-innoAmericano-BbMaj-34bar-v1",
        name: "Melodie Celebri: Inno Americano (Si♭ Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "Bb",   // Si bemolle Maggiore (Due bemolli in chiave - Bb, Eb)
        timeSignature: "3/4", // Comunemente scritto e percepito in 3/4

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1,
        bpm: 76, // Un tempo solenne e dignitoso
        description: "Arrangiamento per pianoforte della melodia dell'Inno Nazionale Americano, 'The Star-Spangled Banner', in Si bemolle Maggiore. Copre la prima strofa del brano, cercando di mantenere il suo carattere maestoso e ispiratore.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Pickup "Oh say can you..."
            { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 1 "...see, by the..."
            { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 2 "...dawn's early light,"
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 3 "What so proud-ly we..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 4 "...hailed at the twilight's..."
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 5 "...last gleaming?"
            { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 6 "Whose broad stripes and bright..."
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            // Bar 7 "...stars, through the per-il-ous..."
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            // Bar 8 "...fight,"
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 9 "O'er the ram-parts we..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 10 "...watched, were so gal-lant-ly..."
            { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 11 "...streaming?"
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["eb/4"], duration: "q", midiValues: [63] },
            // Bar 12 "And the rock-et's red..."
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 13 "...glare, the bombs burst-ing in..."
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 14 "...air,"
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["eb/4"], duration: "q", midiValues: [63] },
            // Bar 15 "Gave proof through the..."
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            // Bar 16 "...night that our flag was still..."
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 17 "...there."
            { keys: ["f/4"], duration: "h.", midiValues: [65] },
            // Bar 18 "Oh say does that..." (Frase ascendente e potente)
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            // Bar 19 "...star-spang-led ban-ner yet..."
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            // Bar 20 "...wave,"
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 21 "O'er the land of the..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 22 "...free..."
            { keys: ["eb/4"], duration: "h", midiValues: [63] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 23 "...and the home of the..."
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["eb/4"], duration: "q", midiValues: [63] },
            // Bar 24 "...brave?" (Cadenza finale)
            { keys: ["f/4"], duration: "h.", midiValues: [65] },

            // Coda - Sviluppo sul finale (Battute 25-34)
            // Bar 25
            { keys: ["r/4"], duration: "q", midiValues: [] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 26
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["bb/4"], duration: "q", midiValues: [70] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 27
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["eb/4"], duration: "q", midiValues: [63] },
            // Bar 28
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 29
            { keys: ["bb/3"], duration: "q", midiValues: [58] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 30
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 31 (F7)
            { keys: ["eb/4"], duration: "q", midiValues: [63] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, // A naturale per F7
            // Bar 32 (Bb)
            { keys: ["bb/3"], duration: "h", midiValues: [58] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 33 (Bb)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            // Bar 34 (Bb)
            { keys: ["bb/2"], duration: "hd", midiValues: [46] } // Nota finale bassa e solenne
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento con accordi pieni)
            // Pickup
            { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 1 (Bb)
            { keys: ["bb/2", "f/3", "bb/3"], duration: "hd", midiValues: [46, 53, 58] },
            // Bar 2 (F/A)
            { keys: ["a/2", "f/3", "c/4"], duration: "hd", midiValues: [45, 53, 60] },
            // Bar 3 (Gm)
            { keys: ["g/2", "d/3", "bb/3"], duration: "hd", midiValues: [43, 50, 58] },
            // Bar 4 (C7)
            { keys: ["c/3", "g/3", "e/4"], duration: "hd", midiValues: [48, 55, 64] }, // E naturale per C7
            // Bar 5 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "hd", midiValues: [41, 48, 57] },
            // Bar 6 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "hd", midiValues: [46, 53, 62] },
            // Bar 7 (Eb)
            { keys: ["eb/3", "g/3", "bb/3"], duration: "hd", midiValues: [51, 55, 58] },
            // Bar 8 (F)
            { keys: ["f/3", "a/3", "c/4"], duration: "hd", midiValues: [53, 57, 60] },
            // Bar 9 (Bb)
            { keys: ["bb/2", "f/3"], duration: "hd", midiValues: [46, 53] },
            // Bar 10 (F/A)
            { keys: ["a/2", "f/3"], duration: "hd", midiValues: [45, 53] },
            // Bar 11 (Gm)
            { keys: ["g/2", "d/3"], duration: "hd", midiValues: [43, 50] },
            // Bar 12 (C7)
            { keys: ["c/3", "e/3"], duration: "hd", midiValues: [48, 52] },
            // Bar 13 (F)
            { keys: ["f/2", "a/2"], duration: "hd", midiValues: [41, 45] },
            // Bar 14 (Bb/D)
            { keys: ["d/3", "f/3"], duration: "hd", midiValues: [50, 53] },
            // Bar 15 (Eb)
            { keys: ["eb/2", "g/2"], duration: "hd", midiValues: [39, 43] },
            // Bar 16 (F)
            { keys: ["f/2", "c/3"], duration: "hd", midiValues: [41, 48] },
            // Bar 17 (Bb)
            { keys: ["bb/2", "f/3", "bb/3"], duration: "hd", midiValues: [46, 53, 58] },
            // Bar 18 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "hd", midiValues: [46, 53, 62] },
            // Bar 19 (Eb)
            { keys: ["eb/3", "g/3", "bb/3"], duration: "hd", midiValues: [51, 55, 58] },
            // Bar 20 (F)
            { keys: ["f/3", "a/3", "c/4"], duration: "hd", midiValues: [53, 57, 60] },
            // Bar 21 (Bb)
            { keys: ["bb/2", "f/3"], duration: "hd", midiValues: [46, 53] },
            // Bar 22 (Eb)
            { keys: ["eb/2", "bb/2", "g/3"], duration: "hd", midiValues: [39, 46, 55] },
            // Bar 23 (F7)
            { keys: ["f/2", "c/3", "a/3"], duration: "hd", midiValues: [41, 48, 57] }, // A naturale per F7
            // Bar 24 (Bb)
            { keys: ["bb/2", "d/3", "f/3"], duration: "hd", midiValues: [46, 50, 53] },

            // Coda
            // Bar 25 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "hd", midiValues: [46, 53, 62] },
            // Bar 26 (Gm)
            { keys: ["g/2", "d/3", "bb/3"], duration: "hd", midiValues: [43, 50, 58] },
            // Bar 27 (Cm)
            { keys: ["c/3", "g/3", "eb/4"], duration: "hd", midiValues: [48, 55, 63] },
            // Bar 28 (F)
            { keys: ["f/2", "a/2", "c/3"], duration: "hd", midiValues: [41, 45, 48] },
            // Bar 29 (Bb/D)
            { keys: ["d/3", "f/3", "bb/3"], duration: "hd", midiValues: [50, 53, 58] },
            // Bar 30 (Eb)
            { keys: ["eb/3", "g/3", "bb/3"], duration: "hd", midiValues: [51, 55, 58] },
            // Bar 31 (F7)
            { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "hd", midiValues: [41, 45, 48, 51] }, // F7
            // Bar 32 (Bb)
            { keys: ["bb/2", "d/3", "f/3"], duration: "hd", midiValues: [46, 50, 53] },
            // Bar 33 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "hd", midiValues: [46, 53, 62] },
            // Bar 34 (Bb)
            { keys: ["bb/1", "f/2", "bb/2"], duration: "hd", midiValues: [34, 41, 46] } // Accordo Bb finale ampio e grave
        ]
    },
    // =================================================================================
    // === Esercizio 6: Amazing Grace (Sol Maggiore) - 16 Battute                    ===
    // === Celebre inno spirituale.                                                  ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-amazingGrace-GMaj-16bar-v1",
        name: "Melodie Celebri: Amazing Grace (Sol Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "G",   // Sol Maggiore (Un diesis in chiave - F#)
        timeSignature: "3/4", // Tempo ternario comune per questo brano

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 2,
        bpm: 68, // Un tempo lento, espressivo e riflessivo
        description: "Arrangiamento per pianoforte del celebre inno spirituale 'Amazing Grace' in Sol Maggiore. La melodia è nella mano destra, con un accompagnamento armonico semplice e toccante nella sinistra, evocando uno stile quasi corale.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Pickup "A-"
            { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 1 "-ma-zing grace, how..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 2 "...sweet the sound"
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 3 "That saved a..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 4 "...wretch like me."
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Pausa o legatura

            // Bar 5 "I once was..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 6 "...lost, but now am..."
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 7 "...found, Was blind but..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 8 "...now I see."
            { keys: ["g/4"], duration: "hd", midiValues: [67] },

            // Bar 9 "'Twas grace that taught..."
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Bar 10 "...my heart to fear,"
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 11 "And grace my..."
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 12 "...fears re-lieved."
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },

            // Bar 13 "How pre-cious did..."
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 14 "...that grace ap-pear,"
            { keys: ["b/4"], duration: "h", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 15 "The hour I..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 16 "...first be-lieved."
            { keys: ["g/4"], duration: "hd", midiValues: [67] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento armonico)
            // Pickup
            { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 1 (G)
            { keys: ["g/2", "d/3", "g/3"], duration: "hd", midiValues: [43, 50, 55] },
            // Bar 2 (C/G o G)
            { keys: ["g/2", "c/3", "e/3"], duration: "hd", midiValues: [43, 48, 52] }, // C/G
            // Bar 3 (G/D o D)
            { keys: ["d/3", "a/3", "f#/3"], duration: "hd", midiValues: [50, 57, 54] }, // D o D7
            // Bar 4 (G)
            { keys: ["g/2", "b/2", "d/3"], duration: "hd", midiValues: [43, 47, 50] },

            // Bar 5 (G)
            { keys: ["g/2", "d/3", "g/3"], duration: "hd", midiValues: [43, 50, 55] },
            // Bar 6 (C/G o G)
            { keys: ["g/2", "c/3", "e/3"], duration: "hd", midiValues: [43, 48, 52] },
            // Bar 7 (G/D o D)
            { keys: ["d/3", "a/3", "f#/3"], duration: "hd", midiValues: [50, 57, 54] },
            // Bar 8 (G)
            { keys: ["g/2", "b/2", "d/3"], duration: "hd", midiValues: [43, 47, 50] },

            // Bar 9 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "hd", midiValues: [48, 52, 55] },
            // Bar 10 (G/B)
            { keys: ["b/2", "d/3", "g/3"], duration: "hd", midiValues: [47, 50, 55] },
            // Bar 11 (Am o C)
            { keys: ["a/2", "e/3", "c/4"], duration: "hd", midiValues: [45, 52, 60] }, // Am
            // Bar 12 (D7)
            { keys: ["d/3", "a/3", "f#/3"], duration: "hd", midiValues: [50, 57, 54] },

            // Bar 13 (G)
            { keys: ["g/2", "d/3", "b/2"], duration: "hd", midiValues: [43, 50, 47] },
            // Bar 14 (C/G o G)
            { keys: ["g/2", "c/3", "e/3"], duration: "hd", midiValues: [43, 48, 52] },
            // Bar 15 (D7sus D7)
            { keys: ["d/3", "g/3", "c/4"], duration: "q", midiValues: [50, 55, 60] }, // Dsus
            { keys: ["d/3", "f#/3", "a/3"], duration: "h", midiValues: [50, 54, 57] }, // D7
            // Bar 16 (G)
            { keys: ["g/2", "b/2", "d/3", "g/3"], duration: "hd", midiValues: [43, 47, 50, 55] } // Accordo finale pieno
        ]
    },
        // =================================================================================
    // === Esercizio 7: Oh! Susanna (Do Maggiore) - 16 Battute                       ===
    // === Celebre canzone folk americana di Stephen Foster.                         ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-ohSusanna-CMaj-16bar-v1",
        name: "Melodie Celebri: Oh! Susanna (Do Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",   // Do Maggiore
        timeSignature: "2/4", // Tempo binario vivace

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 2,
        bpm: 108, // Un tempo allegro e spensierato
        description: "Arrangiamento per pianoforte della celebre canzone folk americana 'Oh! Susanna' di Stephen Foster, in Do Maggiore. La mano destra esegue la melodia vivace, mentre la sinistra fornisce un accompagnamento ritmico semplice.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Strofa
            // Bar 1 "I come from Al-a-"
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 2 "ba-ma with my..."
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 3 "ban-jo on my..."
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 4 "...knee."
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 5 "I'm goin' to Lou-si-"
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 6 "an-a, my true..."
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 7 "love for to..."
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 8 "...see."
            { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Ritornello
            // Bar 9 "Oh! Su-san-na"
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 10 "Oh, don't you cry..."
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 11 "...for me,"
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 12 "(pausa)"
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Può essere anche una pausa
            // Bar 13 "For I come from Al-a-"
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 14 "ba-ma with my..."
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 15 "ban-jo on my..."
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 16 "...knee."
            { keys: ["c/4"], duration: "h", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento "oom-pah")
            // Strofa
            // Bar 1 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] }, // C - accordo C
            // Bar 2 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 3 (G7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/3", "d/3", "b/2"], duration: "q", midiValues: [53, 50, 47] }, // G - accordo G7
            // Bar 4 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 5 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 6 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 7 (G7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/3", "d/3", "b/2"], duration: "q", midiValues: [53, 50, 47] },
            // Bar 8 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },

            // Ritornello
            // Bar 9 (G7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/3", "d/3", "b/2"], duration: "q", midiValues: [53, 50, 47] },
            // Bar 10 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 11 (G7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/3", "d/3", "b/2"], duration: "q", midiValues: [53, 50, 47] },
            // Bar 12 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 13 (C)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3", "e/3"], duration: "q", midiValues: [55, 52] },
            // Bar 14 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2", "c/3"], duration: "q", midiValues: [45, 48] }, // F - accordo F
            // Bar 15 (C G7)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, // C poi G (per G7)
            // Bar 16 (C)
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] } // Accordo C finale
        ]
    },
       // =================================================================================
    // === Esercizio 8: Danny Boy (Fa Maggiore) - 20 Battute                         ===
    // === Celebre ballata irlandese (melodia "Londonderry Air").                    ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-dannyBoy-FMaj-20bar-v1",
        name: "Melodie Celebri: Danny Boy (Fa Maggiore)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "F",   // Fa Maggiore (Un bemolle in chiave - Bb)
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1, // Data la natura lirica e la lunghezza
        bpm: 66, // Un tempo lento e molto espressivo (rubato implied)
        description: "Arrangiamento per pianoforte della celebre ballata irlandese 'Danny Boy' (melodia 'Londonderry Air') in Fa Maggiore. La mano destra esegue la melodia espressiva e cantabile, mentre la sinistra fornisce un accompagnamento armonico ricco e sostenuto.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Pickup "Oh Dan-ny"
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 1 "Boy, the pipes, the pipes are..."
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 2 "...call-ing"
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Bar 3 "From glen to glen and..."
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 4 "...down the moun-tain side."
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 5 "The sum-mer's gone and..."
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Bar 6 "...all the ros-es fall-ing,"
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Bar 7 "'Tis you, 'tis you must..."
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 8 "...go and I must bide."
            { keys: ["d/4"], duration: "h.", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },

            // Sezione successiva (simile ma con culmine più alto)
            // Bar 9 "But come ye back when..."
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Bar 10 "...sum-mer's in the mea-dow,"
            { keys: ["c/5"], duration: "h", midiValues: [72] }, { keys: ["bb/4"], duration: "h", midiValues: [70] },
            // Bar 11 "Or when the val-ley's..."
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 12 "...hushed and white with snow."
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 13 "'Tis I'll be here in..."
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 14 "...sun-shine or in sha-dow,"
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Bar 15 "Oh Dan-ny Boy, oh..."
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 16 "...Dan-ny Boy, I love you so."
            { keys: ["g/4"], duration: "h.", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },

            // Coda (Battute 17-20)
            // Bar 17
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Bar 18
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["a/3"], duration: "h", midiValues: [57] },
            // Bar 19
            { keys: ["bb/3"], duration: "h", midiValues: [58] }, { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Bar 20
            { keys: ["f/3"], duration: "w", midiValues: [53] } // Finale sulla tonica
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento armonico ricco)
            // Pickup
            { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 1 (F)
            { keys: ["f/2", "c/3", "f/3", "a/3"], duration: "w", midiValues: [41, 48, 53, 57] },
            // Bar 2 (Bb)
            { keys: ["bb/2", "d/3", "f/3", "bb/3"], duration: "w", midiValues: [46, 50, 53, 58] },
            // Bar 3 (F/C o C7)
            { keys: ["c/3", "g/3", "e/4", "bb/3"], duration: "w", midiValues: [48, 55, 64, 58] }, // C7
            // Bar 4 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            // Bar 5 (Gm)
            { keys: ["g/2", "d/3", "g/3", "bb/3"], duration: "w", midiValues: [43, 50, 55, 58] },
            // Bar 6 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },
            // Bar 7 (F)
            { keys: ["f/2", "c/3", "a/3"], duration: "w", midiValues: [41, 48, 57] },
            // Bar 8 (F C/E)
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }, { keys: ["e/2", "g/2", "c/3"], duration: "h", midiValues: [40, 43, 48] },

            // Bar 9 (Dm)
            { keys: ["d/3", "f/3", "a/3", "d/4"], duration: "w", midiValues: [50, 53, 57, 62] },
            // Bar 10 (Gm)
            { keys: ["g/2", "bb/2", "d/3", "g/3"], duration: "w", midiValues: [43, 46, 50, 55] },
            // Bar 11 (C)
            { keys: ["c/3", "e/3", "g/3", "c/4"], duration: "w", midiValues: [48, 52, 55, 60] },
            // Bar 12 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            // Bar 13 (Bb)
            { keys: ["bb/2", "f/3", "d/4"], duration: "w", midiValues: [46, 53, 62] }, // Bb con 6a e 9a
            // Bar 14 (F/A)
            { keys: ["a/2", "f/3", "c/4"], duration: "w", midiValues: [45, 53, 60] },
            // Bar 15 (Gm7)
            { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "w", midiValues: [43, 46, 50, 53] },
            // Bar 16 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },

            // Coda
            // Bar 17 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            // Bar 18 (Bb)
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            // Bar 19 (F/C C7)
            { keys: ["c/3", "g/3", "e/3"], duration: "h", midiValues: [48, 55, 52] }, { keys: ["c/3", "e/3", "bb/3"], duration: "h", midiValues: [48, 52, 58] },
            // Bar 20 (F)
            { keys: ["f/2", "c/3", "a/2", "f/3"], duration: "w", midiValues: [41, 48, 45, 53] } // Accordo F finale ampio
        ]
    },
     









]; // Chiusura dell'array melodieCelebriExercises