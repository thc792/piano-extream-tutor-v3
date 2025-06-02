/**
 * js/exercises/giri_armonici.js
 * Contiene dati per esercizi sui giri armonici.
 * Ogni esercizio:
 * 1. MD accordi, MS fondamentale (alzati di un'ottava rispetto alla versione precedente).
 * 2. MS accordi, MD fondamentale (alzati di un'ottava rispetto alla versione precedente).
 * 3. Mani Insieme accordi (alzati di un'ottava rispetto alla versione precedente).
 *
 * Piano Tutor Extrame V2
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi sui giri armonici
const giriArmoniciExercises = [

    // =======================================================================
    // === GIRO DI DO (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exC1-ottavaAlta", // Aggiunto identificatore per la versione ad ottava alta
        name: "Giro di Do (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 80,
        description: "Giro I-vi-ii-V7 in Do Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Cmaj - Am - Dm - G7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1: MD Accordo, MS Fondamentale
            { keys: ["c/5", "e/5", "g/5"], duration: "w", midiValues: [72, 76, 79] }, // C
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am
            { keys: ["d/5", "f/5", "a/5"], duration: "w", midiValues: [74, 77, 81] }, // Dm
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            // PARTE 2: MS Accordo, MD Fondamentale
            { keys: ["c/5"], duration: "w", midiValue: 72 }, // C (Fondamentale MD)
            { keys: ["a/4"], duration: "w", midiValue: 69 }, // A (Fondamentale MD)
            { keys: ["d/5"], duration: "w", midiValue: 74 }, // D (Fondamentale MD)
            { keys: ["g/4"], duration: "w", midiValue: 67 }, // G (Fondamentale MD)
            // PARTE 3: Mani Insieme (Accordi)
            { keys: ["c/5", "e/5", "g/5"], duration: "w", midiValues: [72, 76, 79] }, // C
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am
            { keys: ["d/5", "f/5", "a/5"], duration: "w", midiValues: [74, 77, 81] }, // Dm
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1: MD Accordo, MS Fondamentale
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // C (Fondamentale MS)
            { keys: ["a/3"], duration: "w", midiValue: 57 }, // A (Fondamentale MS)
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // D (Fondamentale MS)
            { keys: ["g/3"], duration: "w", midiValue: 55 }, // G (Fondamentale MS)
            // PARTE 2: MS Accordo, MD Fondamentale
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] }, // Dm
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }, // G7
            // PARTE 3: Mani Insieme (Accordi)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] }, // Dm
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }, // G7
        ]
    },

    // =======================================================================
    // === GIRO DI SOL (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exG1-ottavaAlta",
        name: "Giro di Sol (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 80,
        description: "Giro I-vi-ii-V7 in Sol Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Gmaj - Em - Am - D7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] }, // Em
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            // PARTE 2
            { keys: ["g/4"], duration: "w", midiValue: 67 }, // G
            { keys: ["e/4"], duration: "w", midiValue: 64 }, // E
            { keys: ["a/4"], duration: "w", midiValue: 69 }, // A
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // D
            // PARTE 3
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] }, // Em
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["g/3"], duration: "w", midiValue: 55 }, // G
            { keys: ["e/3"], duration: "w", midiValue: 52 }, // E
            { keys: ["a/3"], duration: "w", midiValue: 57 }, // A
            { keys: ["d/3"], duration: "w", midiValue: 50 }, // D
            // PARTE 2
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] }, // G
            { keys: ["e/3", "g/3", "b/3"], duration: "w", midiValues: [52, 55, 59] }, // Em
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["d/3", "f#/3", "a/3", "c/4"], duration: "w", midiValues: [50, 54, 57, 60] }, // D7
            // PARTE 3
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] }, // G
            { keys: ["e/3", "g/3", "b/3"], duration: "w", midiValues: [52, 55, 59] }, // Em
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["d/3", "f#/3", "a/3", "c/4"], duration: "w", midiValues: [50, 54, 57, 60] }, // D7
        ]
    },

    // =======================================================================
    // === GIRO DI RE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exD1-ottavaAlta",
        name: "Giro di Re (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "D",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 75,
        description: "Giro I-vi-ii-V7 in Re Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Dmaj - Bm - Em - A7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["d/5", "f#/5", "a/5"], duration: "w", midiValues: [74, 78, 81] }, // D
            { keys: ["b/4", "d/5", "f#/5"], duration: "w", midiValues: [71, 74, 78] }, // Bm
            { keys: ["e/5", "g/5", "b/5"], duration: "w", midiValues: [76, 79, 83] }, // Em
            { keys: ["a/4", "c#/5", "e/5", "g/5"], duration: "w", midiValues: [69, 73, 76, 79] }, // A7
            // PARTE 2
            { keys: ["d/5"], duration: "w", midiValue: 74 }, // D
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // B
            { keys: ["e/5"], duration: "w", midiValue: 76 }, // E
            { keys: ["a/4"], duration: "w", midiValue: 69 }, // A
            // PARTE 3
            { keys: ["d/5", "f#/5", "a/5"], duration: "w", midiValues: [74, 78, 81] }, // D
            { keys: ["b/4", "d/5", "f#/5"], duration: "w", midiValues: [71, 74, 78] }, // Bm
            { keys: ["e/5", "g/5", "b/5"], duration: "w", midiValues: [76, 79, 83] }, // Em
            { keys: ["a/4", "c#/5", "e/5", "g/5"], duration: "w", midiValues: [69, 73, 76, 79] }, // A7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // D
            { keys: ["b/3"], duration: "w", midiValue: 59 }, // B
            { keys: ["e/4"], duration: "w", midiValue: 64 }, // E
            { keys: ["a/3"], duration: "w", midiValue: 57 }, // A
            // PARTE 2
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] }, // D
            { keys: ["b/3", "d/4", "f#/4"], duration: "w", midiValues: [59, 62, 66] }, // Bm
            { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] }, // Em
            { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, // A7
            // PARTE 3
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] }, // D
            { keys: ["b/3", "d/4", "f#/4"], duration: "w", midiValues: [59, 62, 66] }, // Bm
            { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] }, // Em
            { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, // A7
        ]
    },

    // =======================================================================
    // === GIRO DI LA (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exA1-ottavaAlta",
        name: "Giro di La (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "A",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 70,
        description: "Giro I-vi-ii-V7 in La Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Amaj - F#m - Bm - E7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] }, // A
            { keys: ["f#/4", "a/4", "c#/5"], duration: "w", midiValues: [66, 69, 73] }, // F#m
            { keys: ["b/4", "d/5", "f#/5"], duration: "w", midiValues: [71, 74, 78] }, // Bm
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, // E7
            // PARTE 2
            { keys: ["a/4"], duration: "w", midiValue: 69 }, // A
            { keys: ["f#/4"], duration: "w", midiValue: 66 }, // F#
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // B
            { keys: ["e/4"], duration: "w", midiValue: 64 }, // E
            // PARTE 3
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] }, // A
            { keys: ["f#/4", "a/4", "c#/5"], duration: "w", midiValues: [66, 69, 73] }, // F#m
            { keys: ["b/4", "d/5", "f#/5"], duration: "w", midiValues: [71, 74, 78] }, // Bm
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, // E7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["a/3"], duration: "w", midiValue: 57 }, // A
            { keys: ["f#/3"], duration: "w", midiValue: 54 }, // F#
            { keys: ["b/3"], duration: "w", midiValue: 59 }, // B
            { keys: ["e/3"], duration: "w", midiValue: 52 }, // E
            // PARTE 2
            { keys: ["a/3", "c#/4", "e/4"], duration: "w", midiValues: [57, 61, 64] }, // A
            { keys: ["f#/3", "a/3", "c#/4"], duration: "w", midiValues: [54, 57, 61] }, // F#m
            { keys: ["b/3", "d/4", "f#/4"], duration: "w", midiValues: [59, 62, 66] }, // Bm
            { keys: ["e/3", "g#/3", "b/3", "d/4"], duration: "w", midiValues: [52, 56, 59, 62] }, // E7
            // PARTE 3
            { keys: ["a/3", "c#/4", "e/4"], duration: "w", midiValues: [57, 61, 64] }, // A
            { keys: ["f#/3", "a/3", "c#/4"], duration: "w", midiValues: [54, 57, 61] }, // F#m
            { keys: ["b/3", "d/4", "f#/4"], duration: "w", midiValues: [59, 62, 66] }, // Bm
            { keys: ["e/3", "g#/3", "b/3", "d/4"], duration: "w", midiValues: [52, 56, 59, 62] }, // E7
        ]
    },

    // =======================================================================
    // === GIRO DI MI (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exE1-ottavaAlta",
        name: "Giro di Mi (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 65,
        description: "Giro I-vi-ii-V7 in Mi Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Emaj - C#m - F#m - B7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["e/5", "g#/5", "b/5"], duration: "w", midiValues: [76, 80, 83] }, // E
            { keys: ["c#/5", "e/5", "g#/5"], duration: "w", midiValues: [73, 76, 80] }, // C#m
            { keys: ["f#/4", "a/4", "c#/5"], duration: "w", midiValues: [66, 69, 73] }, // F#m
            { keys: ["b/4", "d#/5", "f#/5", "a/5"], duration: "w", midiValues: [71, 75, 78, 81] }, // B7
            // PARTE 2
            { keys: ["e/5"], duration: "w", midiValue: 76 }, // E
            { keys: ["c#/5"], duration: "w", midiValue: 73 }, // C#
            { keys: ["f#/4"], duration: "w", midiValue: 66 }, // F#
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // B
            // PARTE 3
            { keys: ["e/5", "g#/5", "b/5"], duration: "w", midiValues: [76, 80, 83] }, // E
            { keys: ["c#/5", "e/5", "g#/5"], duration: "w", midiValues: [73, 76, 80] }, // C#m
            { keys: ["f#/4", "a/4", "c#/5"], duration: "w", midiValues: [66, 69, 73] }, // F#m
            { keys: ["b/4", "d#/5", "f#/5", "a/5"], duration: "w", midiValues: [71, 75, 78, 81] }, // B7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["e/4"], duration: "w", midiValue: 64 }, // E
            { keys: ["c#/4"], duration: "w", midiValue: 61 }, // C#
            { keys: ["f#/3"], duration: "w", midiValue: 54 }, // F#
            { keys: ["b/3"], duration: "w", midiValue: 59 }, // B
            // PARTE 2
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] }, // E
            { keys: ["c#/4", "e/4", "g#/4"], duration: "w", midiValues: [61, 64, 68] }, // C#m
            { keys: ["f#/3", "a/3", "c#/4"], duration: "w", midiValues: [54, 57, 61] }, // F#m
            { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] }, // B7
            // PARTE 3
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] }, // E
            { keys: ["c#/4", "e/4", "g#/4"], duration: "w", midiValues: [61, 64, 68] }, // C#m
            { keys: ["f#/3", "a/3", "c#/4"], duration: "w", midiValues: [54, 57, 61] }, // F#m
            { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] }, // B7
        ]
    },

    // =======================================================================
    // === GIRO DI SI (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exB1-ottavaAlta",
        name: "Giro di Si (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "B",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 60,
        description: "Giro I-vi-ii-V7 in Si Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Bmaj - G#m - C#m - F#7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["b/4", "d#/5", "f#/5"], duration: "w", midiValues: [71, 75, 78] }, // B
            { keys: ["g#/4", "b/4", "d#/5"], duration: "w", midiValues: [68, 71, 75] }, // G#m
            { keys: ["c#/5", "e/5", "g#/5"], duration: "w", midiValues: [73, 76, 80] }, // C#m
            { keys: ["f#/4", "a#/4", "c#/5", "e/5"], duration: "w", midiValues: [66, 70, 73, 76] }, // F#7
            // PARTE 2
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // B
            { keys: ["g#/4"], duration: "w", midiValue: 68 }, // G#
            { keys: ["c#/5"], duration: "w", midiValue: 73 }, // C#
            { keys: ["f#/4"], duration: "w", midiValue: 66 }, // F#
            // PARTE 3
            { keys: ["b/4", "d#/5", "f#/5"], duration: "w", midiValues: [71, 75, 78] }, // B
            { keys: ["g#/4", "b/4", "d#/5"], duration: "w", midiValues: [68, 71, 75] }, // G#m
            { keys: ["c#/5", "e/5", "g#/5"], duration: "w", midiValues: [73, 76, 80] }, // C#m
            { keys: ["f#/4", "a#/4", "c#/5", "e/5"], duration: "w", midiValues: [66, 70, 73, 76] }, // F#7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["b/3"], duration: "w", midiValue: 59 }, // B
            { keys: ["g#/3"], duration: "w", midiValue: 56 }, // G#
            { keys: ["c#/4"], duration: "w", midiValue: 61 }, // C#
            { keys: ["f#/3"], duration: "w", midiValue: 54 }, // F#
            // PARTE 2
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] }, // B
            { keys: ["g#/3", "b/3", "d#/4"], duration: "w", midiValues: [56, 59, 63] }, // G#m
            { keys: ["c#/4", "e/4", "g#/4"], duration: "w", midiValues: [61, 64, 68] }, // C#m
            { keys: ["f#/3", "a#/3", "c#/4", "e/4"], duration: "w", midiValues: [54, 58, 61, 64] }, // F#7
            // PARTE 3
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] }, // B
            { keys: ["g#/3", "b/3", "d#/4"], duration: "w", midiValues: [56, 59, 63] }, // G#m
            { keys: ["c#/4", "e/4", "g#/4"], duration: "w", midiValues: [61, 64, 68] }, // C#m
            { keys: ["f#/3", "a#/3", "c#/4", "e/4"], duration: "w", midiValues: [54, 58, 61, 64] }, // F#7
        ]
    },

    // =======================================================================
    // === GIRO DI FA DIESIS (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exFs1-ottavaAlta",
        name: "Giro di Fa# (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "F#",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 55,
        description: "Giro I-vi-ii-V7 in Fa# Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: F#maj - D#m - G#m - C#7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["f#/4", "a#/4", "c#/5"], duration: "w", midiValues: [66, 70, 73] }, // F#
            { keys: ["d#/4", "f#/4", "a#/4"], duration: "w", midiValues: [63, 66, 70] }, // D#m
            { keys: ["g#/4", "b/4", "d#/5"], duration: "w", midiValues: [68, 71, 75] }, // G#m
            { keys: ["c#/4", "e#/4", "g#/4", "b/4"], duration: "w", midiValues: [61, 65, 68, 71] }, // C#7
            // PARTE 2
            { keys: ["f#/4"], duration: "w", midiValue: 66 }, // F#
            { keys: ["d#/4"], duration: "w", midiValue: 63 }, // D#
            { keys: ["g#/4"], duration: "w", midiValue: 68 }, // G#
            { keys: ["c#/4"], duration: "w", midiValue: 61 }, // C#
            // PARTE 3
            { keys: ["f#/4", "a#/4", "c#/5"], duration: "w", midiValues: [66, 70, 73] }, // F#
            { keys: ["d#/4", "f#/4", "a#/4"], duration: "w", midiValues: [63, 66, 70] }, // D#m
            { keys: ["g#/4", "b/4", "d#/5"], duration: "w", midiValues: [68, 71, 75] }, // G#m
            { keys: ["c#/4", "e#/4", "g#/4", "b/4"], duration: "w", midiValues: [61, 65, 68, 71] }, // C#7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["f#/3"], duration: "w", midiValue: 54 }, // F#
            { keys: ["d#/3"], duration: "w", midiValue: 51 }, // D#
            { keys: ["g#/3"], duration: "w", midiValue: 56 }, // G#
            { keys: ["c#/3"], duration: "w", midiValue: 49 }, // C#
            // PARTE 2
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] }, // F#
            { keys: ["d#/3", "f#/3", "a#/3"], duration: "w", midiValues: [51, 54, 58] }, // D#m
            { keys: ["g#/3", "b/3", "d#/4"], duration: "w", midiValues: [56, 59, 63] }, // G#m
            { keys: ["c#/3", "e#/3", "g#/3", "b/3"], duration: "w", midiValues: [49, 53, 56, 59] }, // C#7
            // PARTE 3
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] }, // F#
            { keys: ["d#/3", "f#/3", "a#/3"], duration: "w", midiValues: [51, 54, 58] }, // D#m
            { keys: ["g#/3", "b/3", "d#/4"], duration: "w", midiValues: [56, 59, 63] }, // G#m
            { keys: ["c#/3", "e#/3", "g#/3", "b/3"], duration: "w", midiValues: [49, 53, 56, 59] }, // C#7
        ]
    },

    // =======================================================================
    // === GIRO DI DO DIESIS (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exCs1-ottavaAlta",
        name: "Giro di Do# (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "C#",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 50,
        description: "Giro I-vi-ii-V7 in Do# Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: C#maj - A#m - D#m - G#7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["c#/5", "e#/5", "g#/5"], duration: "w", midiValues: [73, 77, 80] }, // C#
            { keys: ["a#/4", "c#/5", "e#/5"], duration: "w", midiValues: [70, 73, 77] }, // A#m
            { keys: ["d#/5", "f#/5", "a#/5"], duration: "w", midiValues: [75, 78, 82] }, // D#m
            { keys: ["g#/4", "b#/4", "d#/5", "f#/5"], duration: "w", midiValues: [68, 72, 75, 78] }, // G#7
            // PARTE 2
            { keys: ["c#/5"], duration: "w", midiValue: 73 }, // C#
            { keys: ["a#/4"], duration: "w", midiValue: 70 }, // A#
            { keys: ["d#/5"], duration: "w", midiValue: 75 }, // D#
            { keys: ["g#/4"], duration: "w", midiValue: 68 }, // G#
            // PARTE 3
            { keys: ["c#/5", "e#/5", "g#/5"], duration: "w", midiValues: [73, 77, 80] }, // C#
            { keys: ["a#/4", "c#/5", "e#/5"], duration: "w", midiValues: [70, 73, 77] }, // A#m
            { keys: ["d#/5", "f#/5", "a#/5"], duration: "w", midiValues: [75, 78, 82] }, // D#m
            { keys: ["g#/4", "b#/4", "d#/5", "f#/5"], duration: "w", midiValues: [68, 72, 75, 78] }, // G#7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["c#/4"], duration: "w", midiValue: 61 }, // C#
            { keys: ["a#/3"], duration: "w", midiValue: 58 }, // A#
            { keys: ["d#/4"], duration: "w", midiValue: 63 }, // D#
            { keys: ["g#/3"], duration: "w", midiValue: 56 }, // G#
            // PARTE 2
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] }, // C#
            { keys: ["a#/3", "c#/4", "e#/4"], duration: "w", midiValues: [58, 61, 65] }, // A#m
            { keys: ["d#/4", "f#/4", "a#/4"], duration: "w", midiValues: [63, 66, 70] }, // D#m
            { keys: ["g#/3", "b#/3", "d#/4", "f#/4"], duration: "w", midiValues: [56, 60, 63, 66] }, // G#7
            // PARTE 3
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] }, // C#
            { keys: ["a#/3", "c#/4", "e#/4"], duration: "w", midiValues: [58, 61, 65] }, // A#m
            { keys: ["d#/4", "f#/4", "a#/4"], duration: "w", midiValues: [63, 66, 70] }, // D#m
            { keys: ["g#/3", "b#/3", "d#/4", "f#/4"], duration: "w", midiValues: [56, 60, 63, 66] }, // G#7
        ]
    },

    // =======================================================================
    // === GIRO DI FA (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exF1-ottavaAlta",
        name: "Giro di Fa (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 80,
        description: "Giro I-vi-ii-V7 in Fa Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Fmaj - Dm - Gm - C7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
            { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] }, // Dm
            { keys: ["g/4", "bb/4", "d/5"], duration: "w", midiValues: [67, 70, 74] }, // Gm
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            // PARTE 2
            { keys: ["f/4"], duration: "w", midiValue: 65 }, // F
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // D
            { keys: ["g/4"], duration: "w", midiValue: 67 }, // G
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // C
            // PARTE 3
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
            { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] }, // Dm
            { keys: ["g/4", "bb/4", "d/5"], duration: "w", midiValues: [67, 70, 74] }, // Gm
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["f/3"], duration: "w", midiValue: 53 }, // F
            { keys: ["d/3"], duration: "w", midiValue: 50 }, // D
            { keys: ["g/3"], duration: "w", midiValue: 55 }, // G
            { keys: ["c/3"], duration: "w", midiValue: 48 }, // C
            // PARTE 2
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] }, // F
            { keys: ["d/3", "f/3", "a/3"], duration: "w", midiValues: [50, 53, 57] }, // Dm
            { keys: ["g/3", "bb/3", "d/4"], duration: "w", midiValues: [55, 58, 62] }, // Gm
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] }, // C7
            // PARTE 3
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] }, // F
            { keys: ["d/3", "f/3", "a/3"], duration: "w", midiValues: [50, 53, 57] }, // Dm
            { keys: ["g/3", "bb/3", "d/4"], duration: "w", midiValues: [55, 58, 62] }, // Gm
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] }, // C7
        ]
    },

    // =======================================================================
    // === GIRO DI SI BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exBb1-ottavaAlta",
        name: "Giro di Sib (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Bb",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 75,
        description: "Giro I-vi-ii-V7 in Sib Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Bbmaj - Gm - Cm - F7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["bb/4", "d/5", "f/5"], duration: "w", midiValues: [70, 74, 77] }, // Bb
            { keys: ["g/4", "bb/4", "d/5"], duration: "w", midiValues: [67, 70, 74] }, // Gm
            { keys: ["c/5", "eb/5", "g/5"], duration: "w", midiValues: [72, 75, 79] }, // Cm
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            // PARTE 2
            { keys: ["bb/4"], duration: "w", midiValue: 70 }, // Bb
            { keys: ["g/4"], duration: "w", midiValue: 67 }, // G
            { keys: ["c/5"], duration: "w", midiValue: 72 }, // C
            { keys: ["f/4"], duration: "w", midiValue: 65 }, // F
            // PARTE 3
            { keys: ["bb/4", "d/5", "f/5"], duration: "w", midiValues: [70, 74, 77] }, // Bb
            { keys: ["g/4", "bb/4", "d/5"], duration: "w", midiValues: [67, 70, 74] }, // Gm
            { keys: ["c/5", "eb/5", "g/5"], duration: "w", midiValues: [72, 75, 79] }, // Cm
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["bb/3"], duration: "w", midiValue: 58 }, // Bb
            { keys: ["g/3"], duration: "w", midiValue: 55 }, // G
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // C
            { keys: ["f/3"], duration: "w", midiValue: 53 }, // F
            // PARTE 2
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] }, // Bb
            { keys: ["g/3", "bb/3", "d/4"], duration: "w", midiValues: [55, 58, 62] }, // Gm
            { keys: ["c/4", "eb/4", "g/4"], duration: "w", midiValues: [60, 63, 67] }, // Cm
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] }, // F7
            // PARTE 3
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] }, // Bb
            { keys: ["g/3", "bb/3", "d/4"], duration: "w", midiValues: [55, 58, 62] }, // Gm
            { keys: ["c/4", "eb/4", "g/4"], duration: "w", midiValues: [60, 63, 67] }, // Cm
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] }, // F7
        ]
    },

    // =======================================================================
    // === GIRO DI MI BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exEb1-ottavaAlta",
        name: "Giro di Mib (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Eb",
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 70,
        description: "Giro I-vi-ii-V7 in Mib Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Ebmaj - Cm - Fm - Bb7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["eb/5", "g/5", "bb/5"], duration: "w", midiValues: [75, 79, 82] }, // Eb
            { keys: ["c/5", "eb/5", "g/5"], duration: "w", midiValues: [72, 75, 79] }, // Cm
            { keys: ["f/4", "ab/4", "c/5"], duration: "w", midiValues: [65, 68, 72] }, // Fm
            { keys: ["bb/4", "d/5", "f/5", "ab/5"], duration: "w", midiValues: [70, 74, 77, 80] }, // Bb7
            // PARTE 2
            { keys: ["eb/5"], duration: "w", midiValue: 75 }, // Eb
            { keys: ["c/5"], duration: "w", midiValue: 72 }, // C
            { keys: ["f/4"], duration: "w", midiValue: 65 }, // F
            { keys: ["bb/4"], duration: "w", midiValue: 70 }, // Bb
            // PARTE 3
            { keys: ["eb/5", "g/5", "bb/5"], duration: "w", midiValues: [75, 79, 82] }, // Eb
            { keys: ["c/5", "eb/5", "g/5"], duration: "w", midiValues: [72, 75, 79] }, // Cm
            { keys: ["f/4", "ab/4", "c/5"], duration: "w", midiValues: [65, 68, 72] }, // Fm
            { keys: ["bb/4", "d/5", "f/5", "ab/5"], duration: "w", midiValues: [70, 74, 77, 80] }, // Bb7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["eb/4"], duration: "w", midiValue: 63 }, // Eb
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // C
            { keys: ["f/3"], duration: "w", midiValue: 53 }, // F
            { keys: ["bb/3"], duration: "w", midiValue: 58 }, // Bb
            // PARTE 2
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] }, // Eb
            { keys: ["c/4", "eb/4", "g/4"], duration: "w", midiValues: [60, 63, 67] }, // Cm
            { keys: ["f/3", "ab/3", "c/4"], duration: "w", midiValues: [53, 56, 60] }, // Fm
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, // Bb7
            // PARTE 3
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] }, // Eb
            { keys: ["c/4", "eb/4", "g/4"], duration: "w", midiValues: [60, 63, 67] }, // Cm
            { keys: ["f/3", "ab/3", "c/4"], duration: "w", midiValues: [53, 56, 60] }, // Fm
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, // Bb7
        ]
    },
     // =======================================================================
    // === GIRO DI LA BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exAb1-ottavaAlta",
        name: "Giro di Lab (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Ab", // Lab Maggiore (Bb, Eb, Ab, Db)
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 65,
        description: "Giro I-vi-ii-V7 in Lab Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Abmaj - Fm - Bbm - Eb7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["ab/4", "c/5", "eb/5"], duration: "w", midiValues: [68, 72, 75] }, // Ab
            { keys: ["f/4", "ab/4", "c/5"], duration: "w", midiValues: [65, 68, 72] }, // Fm
            { keys: ["bb/4", "db/5", "f/5"], duration: "w", midiValues: [70, 73, 77] }, // Bbm
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, // Eb7
            // PARTE 2
            { keys: ["ab/4"], duration: "w", midiValue: 68 }, // Ab
            { keys: ["f/4"], duration: "w", midiValue: 65 }, // F
            { keys: ["bb/4"], duration: "w", midiValue: 70 }, // Bb
            { keys: ["eb/4"], duration: "w", midiValue: 63 }, // Eb
            // PARTE 3
            { keys: ["ab/4", "c/5", "eb/5"], duration: "w", midiValues: [68, 72, 75] }, // Ab
            { keys: ["f/4", "ab/4", "c/5"], duration: "w", midiValues: [65, 68, 72] }, // Fm
            { keys: ["bb/4", "db/5", "f/5"], duration: "w", midiValues: [70, 73, 77] }, // Bbm
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, // Eb7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["ab/3"], duration: "w", midiValue: 56 }, // Ab
            { keys: ["f/3"], duration: "w", midiValue: 53 }, // F
            { keys: ["bb/3"], duration: "w", midiValue: 58 }, // Bb
            { keys: ["eb/3"], duration: "w", midiValue: 51 }, // Eb
            // PARTE 2
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] }, // Ab
            { keys: ["f/3", "ab/3", "c/4"], duration: "w", midiValues: [53, 56, 60] }, // Fm
            { keys: ["bb/3", "db/4", "f/4"], duration: "w", midiValues: [58, 61, 65] }, // Bbm
            { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "w", midiValues: [51, 55, 58, 61] }, // Eb7
            // PARTE 3
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] }, // Ab
            { keys: ["f/3", "ab/3", "c/4"], duration: "w", midiValues: [53, 56, 60] }, // Fm
            { keys: ["bb/3", "db/4", "f/4"], duration: "w", midiValues: [58, 61, 65] }, // Bbm
            { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "w", midiValues: [51, 55, 58, 61] }, // Eb7
        ]
    },

    // =======================================================================
    // === GIRO DI RE BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exDb1-ottavaAlta",
        name: "Giro di Reb (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Db", // Reb Maggiore (Bb, Eb, Ab, Db, Gb)
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 60,
        description: "Giro I-vi-ii-V7 in Reb Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Dbmaj - Bbm - Ebm - Ab7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["db/5", "f/5", "ab/5"], duration: "w", midiValues: [73, 77, 80] }, // Db
            { keys: ["bb/4", "db/5", "f/5"], duration: "w", midiValues: [70, 73, 77] }, // Bbm
            { keys: ["eb/5", "gb/5", "bb/5"], duration: "w", midiValues: [75, 78, 82] }, // Ebm
            { keys: ["ab/4", "c/5", "eb/5", "gb/5"], duration: "w", midiValues: [68, 72, 75, 78] }, // Ab7
            // PARTE 2
            { keys: ["db/5"], duration: "w", midiValue: 73 }, // Db
            { keys: ["bb/4"], duration: "w", midiValue: 70 }, // Bb
            { keys: ["eb/5"], duration: "w", midiValue: 75 }, // Eb
            { keys: ["ab/4"], duration: "w", midiValue: 68 }, // Ab
            // PARTE 3
            { keys: ["db/5", "f/5", "ab/5"], duration: "w", midiValues: [73, 77, 80] }, // Db
            { keys: ["bb/4", "db/5", "f/5"], duration: "w", midiValues: [70, 73, 77] }, // Bbm
            { keys: ["eb/5", "gb/5", "bb/5"], duration: "w", midiValues: [75, 78, 82] }, // Ebm
            { keys: ["ab/4", "c/5", "eb/5", "gb/5"], duration: "w", midiValues: [68, 72, 75, 78] }, // Ab7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["db/4"], duration: "w", midiValue: 61 }, // Db
            { keys: ["bb/3"], duration: "w", midiValue: 58 }, // Bb
            { keys: ["eb/4"], duration: "w", midiValue: 63 }, // Eb
            { keys: ["ab/3"], duration: "w", midiValue: 56 }, // Ab
            // PARTE 2
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] }, // Db
            { keys: ["bb/3", "db/4", "f/4"], duration: "w", midiValues: [58, 61, 65] }, // Bbm
            { keys: ["eb/4", "gb/4", "bb/4"], duration: "w", midiValues: [63, 66, 70] }, // Ebm
            { keys: ["ab/3", "c/4", "eb/4", "gb/4"], duration: "w", midiValues: [56, 60, 63, 66] }, // Ab7
            // PARTE 3
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] }, // Db
            { keys: ["bb/3", "db/4", "f/4"], duration: "w", midiValues: [58, 61, 65] }, // Bbm
            { keys: ["eb/4", "gb/4", "bb/4"], duration: "w", midiValues: [63, 66, 70] }, // Ebm
            { keys: ["ab/3", "c/4", "eb/4", "gb/4"], duration: "w", midiValues: [56, 60, 63, 66] }, // Ab7
        ]
    },

    // =======================================================================
    // === GIRO DI SOL BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exGb1-ottavaAlta",
        name: "Giro di Solb (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Gb", // Solb Maggiore (Bb,Eb,Ab,Db,Gb,Cb)
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 55,
        description: "Giro I-vi-ii-V7 in Solb Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Gbmaj - Ebm - Abm - Db7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["gb/4", "bb/4", "db/5"], duration: "w", midiValues: [66, 70, 73] }, // Gb
            { keys: ["eb/4", "gb/4", "bb/4"], duration: "w", midiValues: [63, 66, 70] }, // Ebm
            { keys: ["ab/4", "cb/5", "eb/5"], duration: "w", midiValues: [68, 71, 75] }, // Abm (Cb è B nat)
            { keys: ["db/4", "f/4", "ab/4", "cb/5"], duration: "w", midiValues: [61, 65, 68, 71] }, // Db7
            // PARTE 2
            { keys: ["gb/4"], duration: "w", midiValue: 66 }, // Gb
            { keys: ["eb/4"], duration: "w", midiValue: 63 }, // Eb
            { keys: ["ab/4"], duration: "w", midiValue: 68 }, // Ab
            { keys: ["db/4"], duration: "w", midiValue: 61 }, // Db
            // PARTE 3
            { keys: ["gb/4", "bb/4", "db/5"], duration: "w", midiValues: [66, 70, 73] }, // Gb
            { keys: ["eb/4", "gb/4", "bb/4"], duration: "w", midiValues: [63, 66, 70] }, // Ebm
            { keys: ["ab/4", "cb/5", "eb/5"], duration: "w", midiValues: [68, 71, 75] }, // Abm
            { keys: ["db/4", "f/4", "ab/4", "cb/5"], duration: "w", midiValues: [61, 65, 68, 71] }, // Db7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["gb/3"], duration: "w", midiValue: 54 }, // Gb
            { keys: ["eb/3"], duration: "w", midiValue: 51 }, // Eb
            { keys: ["ab/3"], duration: "w", midiValue: 56 }, // Ab
            { keys: ["db/3"], duration: "w", midiValue: 49 }, // Db
            // PARTE 2
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] }, // Gb
            { keys: ["eb/3", "gb/3", "bb/3"], duration: "w", midiValues: [51, 54, 58] }, // Ebm
            { keys: ["ab/3", "cb/4", "eb/4"], duration: "w", midiValues: [56, 59, 63] }, // Abm
            { keys: ["db/3", "f/3", "ab/3", "cb/4"], duration: "w", midiValues: [49, 53, 56, 59] }, // Db7
            // PARTE 3
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] }, // Gb
            { keys: ["eb/3", "gb/3", "bb/3"], duration: "w", midiValues: [51, 54, 58] }, // Ebm
            { keys: ["ab/3", "cb/4", "eb/4"], duration: "w", midiValues: [56, 59, 63] }, // Abm
            { keys: ["db/3", "f/3", "ab/3", "cb/4"], duration: "w", midiValues: [49, 53, 56, 59] }, // Db7
        ]
    },

    // =======================================================================
    // === GIRO DI DO BEMOLLE (I-vi-ii-V7) - OTTAVA ALZATA ===
    // =======================================================================
    {
        id: "giriArmonici-exCb1-ottavaAlta",
        name: "Giro di Dob (I-vi-ii-V7) - Ottava Alta",
        category: "Giri_Armonici",
        staveLayout: "grand",
        keySignature: "Cb", // Dob Maggiore (7 bemolli)
        timeSignature: "4/4",
        repetitions: 3,
        bpm: 50, // Molto lento
        description: "Giro I-vi-ii-V7 in Dob Mag (Ottava Alta). P1: MD Acc, MS Fond. P2: MS Acc, MD Fond. P3: Mani Insieme.",
        // Accordi: Cbmaj - Abm - Dbm - Gb7
        notesTreble: [ // Mano Destra - Ottava Alzata
            // PARTE 1
            { keys: ["cb/5", "eb/5", "gb/5"], duration: "w", midiValues: [71, 75, 78] }, // Cb (Cb5 è B4)
            { keys: ["ab/4", "cb/5", "eb/5"], duration: "w", midiValues: [68, 71, 75] }, // Abm
            { keys: ["db/5", "fb/5", "ab/5"], duration: "w", midiValues: [73, 76, 80] }, // Dbm (Fb5 è E5)
            { keys: ["gb/4", "bb/4", "db/5", "fb/5"], duration: "w", midiValues: [66, 70, 73, 76] }, // Gb7
            // PARTE 2
            { keys: ["cb/5"], duration: "w", midiValue: 71 }, // Cb
            { keys: ["ab/4"], duration: "w", midiValue: 68 }, // Ab
            { keys: ["db/5"], duration: "w", midiValue: 73 }, // Db
            { keys: ["gb/4"], duration: "w", midiValue: 66 }, // Gb
            // PARTE 3
            { keys: ["cb/5", "eb/5", "gb/5"], duration: "w", midiValues: [71, 75, 78] }, // Cb
            { keys: ["ab/4", "cb/5", "eb/5"], duration: "w", midiValues: [68, 71, 75] }, // Abm
            { keys: ["db/5", "fb/5", "ab/5"], duration: "w", midiValues: [73, 76, 80] }, // Dbm
            { keys: ["gb/4", "bb/4", "db/5", "fb/5"], duration: "w", midiValues: [66, 70, 73, 76] }, // Gb7
        ],
        notesBass: [ // Mano Sinistra - Ottava Alzata
            // PARTE 1
            { keys: ["cb/4"], duration: "w", midiValue: 59 }, // Cb (Cb4 è B3)
            { keys: ["ab/3"], duration: "w", midiValue: 56 }, // Ab
            { keys: ["db/4"], duration: "w", midiValue: 61 }, // Db
            { keys: ["gb/3"], duration: "w", midiValue: 54 }, // Gb
            // PARTE 2
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] }, // Cb
            { keys: ["ab/3", "cb/4", "eb/4"], duration: "w", midiValues: [56, 59, 63] }, // Abm
            { keys: ["db/4", "fb/4", "ab/4"], duration: "w", midiValues: [61, 64, 68] }, // Dbm (Fb4 è E4)
            { keys: ["gb/3", "bb/3", "db/4", "fb/4"], duration: "w", midiValues: [54, 58, 61, 64] }, // Gb7
            // PARTE 3
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] }, // Cb
            { keys: ["ab/3", "cb/4", "eb/4"], duration: "w", midiValues: [56, 59, 63] }, // Abm
            { keys: ["db/4", "fb/4", "ab/4"], duration: "w", midiValues: [61, 64, 68] }, // Dbm
            { keys: ["gb/3", "bb/3", "db/4", "fb/4"], duration: "w", midiValues: [54, 58, 61, 64] }, // Gb7
        ]
    },
    // Fine degli esercizi I-vi-ii-V7 per tutte le tonalità maggiori (versione ottava alta)
];

// Assicura che window.exerciseData esista e aggiunge/aggiorna la categoria
// window.exerciseData = window.exerciseData || {}; // Già fatto all'inizio del file
// window.exerciseData.Giri_Armonici = giriArmoniciExercises; // Già fatto all'inizio del file





// Assicura che window.exerciseData esista e aggiunge la nuova categoria
window.exerciseData = window.exerciseData || {};
window.exerciseData.Giri_Armonici = giriArmoniciExercises;

// Messaggio per confermare il caricamento
console.log("File Esercizi 'Giri Armonici' (giri_armonici.js) aggiornato con 11 giri I-vi-ii-V7 (Ottava Alta).");