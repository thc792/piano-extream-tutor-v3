/**
 * js/exercises/scale_animate.js
 * Contiene dati per esercizi della categoria "Scale Animate".
 * Focus: Scale, Inversione e Mani Parallele.
 * Esercizio scaleAnimate-exS1: Scale in Do Maggiore con variazioni.
 *
 * Piano Tutor Extrame V2 (o nome progetto)
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi della categoria "Scale Animate"
const scaleAnimateExercises = [

    // =======================================================================
    // === Esercizio S1 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Do Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS1",
        name: "Scale: Asc/Disc, Invertita, Parallela (Do Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Do Maggiore. Parte 1: Scala in chiave di violino (asc/disc) con accordo in basso. Parte 2: Scala in chiave di basso (asc/disc) con accordo in alto. Parte 3: Scale a mani parallele (ottava) senza accordo aggiuntivo.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // --- PARTE 3: Mani Parallele (Scala Treble un'ottava sopra Scala Bass) ---
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 },
            { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            { keys: ["c/3"], duration: "q", midiValues: [48] }, // CORRETTO
            { keys: ["d/3"], duration: "q", midiValues: [50] }, // CORRETTO
            { keys: ["e/3"], duration: "q", midiValues: [52] }, // CORRETTO
            { keys: ["f/3"], duration: "q", midiValues: [53] }, // CORRETTO
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // --- PARTE 3: Mani Parallele (Scala Treble un'ottava sopra Scala Bass) ---
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        ]
    },
    // =======================================================================
    // === Esercizio S2 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Sol Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS2",
        name: "Scale: Asc/Disc, Invertita, Parallela (Sol Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "G",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Sol Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // Accordo G-B-D5 corretto
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] },
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] },
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        ],

        notesBass: [
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f#/4"], duration: "q", midiValues: [66] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
        ]
    },
    // =======================================================================
    // === Esercizio S3 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Re Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS3",
        name: "Scale: Asc/Disc, Invertita, Parallela (Re Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "D",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Re Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        ],

        notesBass: [
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
        ]
    },
    // =======================================================================
    // === Esercizio S4 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - La Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS4",
        name: "Scale: Asc/Disc, Invertita, Parallela (La Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "A",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in La Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "q", midiValue: 81 },
            { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] }, // CORRETTO: A4-C#5-E5
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
        ],
        notesBass: [
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
        ]
    },
    // =======================================================================
    // === Esercizio S5 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Mi Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS5",
        name: "Scale: Asc/Disc, Invertita, Parallela (Mi Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Mi Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        ],

        notesBass: [
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d#/4"], duration: "q", midiValues: [63] }, { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
        ]
    },
    // =======================================================================
    // === Esercizio S6 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Si Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS6", // ID Corretto (prima era duplicato)
        name: "Scale: Asc/Disc, Invertita, Parallela (Si Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "B",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 75,
        description: "Esercizio di scale in Si Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a#/5"], duration: "q", midiValue: 82 }, { keys: ["b/5"], duration: "q", midiValue: 83 },
            { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a#/5"], duration: "q", midiValue: 82 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["f#/5"], duration: "q", midiValue: 78 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        ],

        notesBass: [
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
        ]
    },
    // =======================================================================
    // === Esercizio S7 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Fa# Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS7", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Fa# Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "F#",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Esercizio di scale in Fa Diesis Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e#/5"], duration: "q", midiValue: 77 }, { keys: ["f#/5"], duration: "q", midiValue: 78 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e#/5"], duration: "q", midiValue: 77 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c#/5"], duration: "q", midiValue: 73 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["a#/3"], duration: "q", midiValue: 58 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["c#/4"], duration: "q", midiValue: 61 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a#/3"], duration: "q", midiValue: 58 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
        ],

        notesBass: [
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["f#/2"], duration: "q", midiValues: [42] }, { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["a#/2"], duration: "q", midiValues: [46] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a#/2"], duration: "q", midiValues: [46] }, { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["f#/2"], duration: "q", midiValues: [42] },
            { keys: ["f#/2"], duration: "q", midiValues: [42] }, { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["a#/2"], duration: "q", midiValues: [46] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a#/2"], duration: "q", midiValues: [46] }, { keys: ["g#/2"], duration: "q", midiValues: [44] }, { keys: ["f#/2"], duration: "q", midiValues: [42] },
        ]
    },
    // =======================================================================
    // === Esercizio S8 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Do# Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS8", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Do# Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "C#",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Esercizio di scale in Do Diesis Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["b#/4"], duration: "q", midiValue: 72 }, { keys: ["c#/5"], duration: "q", midiValue: 73 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b#/4"], duration: "q", midiValue: 72 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["g#/4"], duration: "q", midiValue: 68 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["c#/4"], duration: "q", midiValue: 61 },
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["b#/4"], duration: "q", midiValue: 72 }, { keys: ["c#/5"], duration: "q", midiValue: 73 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b#/4"], duration: "q", midiValue: 72 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["g#/4"], duration: "q", midiValue: 68 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e#/4"], duration: "q", midiValue: 65 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["c#/4"], duration: "q", midiValue: 61 },
        ],

        notesBass: [
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["b#/3"], duration: "q", midiValues: [60] }, { keys: ["c#/4"], duration: "q", midiValues: [61] },
            { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b#/3"], duration: "q", midiValues: [60] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["g#/3"], duration: "q", midiValues: [56] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
            { keys: ["c#/3"], duration: "q", midiValues: [49] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["f#/3"], duration: "q", midiValues: [54] },
            { keys: ["g#/3"], duration: "q", midiValues: [56] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["b#/3"], duration: "q", midiValues: [60] }, { keys: ["c#/4"], duration: "q", midiValues: [61] },
            { keys: ["c#/4"], duration: "q", midiValues: [61] }, { keys: ["b#/3"], duration: "q", midiValues: [60] }, { keys: ["a#/3"], duration: "q", midiValues: [58] }, { keys: ["g#/3"], duration: "q", midiValues: [56] },
            { keys: ["f#/3"], duration: "q", midiValues: [54] }, { keys: ["e#/3"], duration: "q", midiValues: [53] }, { keys: ["d#/3"], duration: "q", midiValues: [51] }, { keys: ["c#/3"], duration: "q", midiValues: [49] },
        ]
    },
    // =======================================================================
    // === Esercizio S9 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Fa Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS9", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Fa Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Fa Maggiore.",

        notesTreble: [
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["e/5"], duration: "q", midiValue: 76 },{ keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["f/5"], duration: "q", midiValue: 77 },{ keys: ["e/5"], duration: "q", midiValue: 76 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 }
        ],
        notesBass: [
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] },{ keys: ["g/2"], duration: "q", midiValues: [43] },{ keys: ["a/2"], duration: "q", midiValues: [45] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["e/3"], duration: "q", midiValues: [52] },{ keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["e/3"], duration: "q", midiValues: [52] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["a/2"], duration: "q", midiValues: [45] },{ keys: ["g/2"], duration: "q", midiValues: [43] },{ keys: ["f/2"], duration: "q", midiValues: [41] },
            { keys: ["f/2"], duration: "q", midiValues: [41] },{ keys: ["g/2"], duration: "q", midiValues: [43] },{ keys: ["a/2"], duration: "q", midiValues: [45] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["e/3"], duration: "q", midiValues: [52] },{ keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["e/3"], duration: "q", midiValues: [52] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["a/2"], duration: "q", midiValues: [45] },{ keys: ["g/2"], duration: "q", midiValues: [43] },{ keys: ["f/2"], duration: "q", midiValues: [41] }
        ]
    },

    // =======================================================================
    // === Esercizio S10 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Sib Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS10", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Sib Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Bb",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 75,
        description: "Esercizio di scale in Si bemolle Maggiore.",

        notesTreble: [
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 }
        ],
        notesBass: [
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["a/3"], duration: "q", midiValues: [57] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["a/3"], duration: "q", midiValues: [57] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["a/3"], duration: "q", midiValues: [57] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["a/3"], duration: "q", midiValues: [57] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["d/3"], duration: "q", midiValues: [50] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["bb/2"], duration: "q", midiValues: [46] }
        ]
    },

    // =======================================================================
    // === Esercizio S11 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Mib Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS11", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Mib Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Eb",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Esercizio di scale in Mi bemolle Maggiore.",

        notesTreble: [
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 }
        ],
        notesBass: [
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["d/4"], duration: "q", midiValues: [62] },{ keys: ["eb/4"], duration: "q", midiValues: [63] },
            { keys: ["eb/4"], duration: "q", midiValues: [63] },{ keys: ["d/4"], duration: "q", midiValues: [62] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["d/4"], duration: "q", midiValues: [62] },{ keys: ["eb/4"], duration: "q", midiValues: [63] },
            { keys: ["eb/4"], duration: "q", midiValues: [63] },{ keys: ["d/4"], duration: "q", midiValues: [62] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] }
        ]
    },

    // =======================================================================
    // === Esercizio S12 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Lab Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS12", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Lab Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Ab",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Esercizio di scale in La bemolle Maggiore.",

        notesTreble: [
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 }
        ],
        notesBass: [
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["db/3"], duration: "q", midiValues: [49] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["ab/2"], duration: "q", midiValues: [44] },
            { keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["db/3"], duration: "q", midiValues: [49] },
            { keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["g/3"], duration: "q", midiValues: [55] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["c/3"], duration: "q", midiValues: [48] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["ab/2"], duration: "q", midiValues: [44] }
        ]
    },

    // =======================================================================
    // === Esercizio S13 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Reb Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS13", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Reb Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Db",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Esercizio di scale in Re bemolle Maggiore.",

        notesTreble: [
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["db/5"], duration: "q", midiValue: 73 },
            { keys: ["db/5"], duration: "q", midiValue: 73 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["db/5"], duration: "q", midiValue: 73 },
            { keys: ["db/5"], duration: "q", midiValue: 73 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 }
        ],
        notesBass: [
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["db/4"], duration: "q", midiValues: [61] },
            { keys: ["db/4"], duration: "q", midiValues: [61] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["db/4"], duration: "q", midiValues: [61] },
            { keys: ["db/4"], duration: "q", midiValues: [61] },{ keys: ["c/4"], duration: "q", midiValues: [60] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] }
        ]
    },

    // =======================================================================
    // === Esercizio S14 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Solb Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS14", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Solb Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Gb",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 55,
        description: "Esercizio di scale in Sol bemolle Maggiore.",

        notesTreble: [
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 }
        ],
        notesBass: [
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2"], duration: "q", midiValues: [42] },{ keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["cb/3"], duration: "q", midiValues: [47] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] },
            { keys: ["cb/3"], duration: "q", midiValues: [47] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["gb/2"], duration: "q", midiValues: [42] },
            { keys: ["gb/2"], duration: "q", midiValues: [42] },{ keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["cb/3"], duration: "q", midiValues: [47] },
            { keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["f/3"], duration: "q", midiValues: [53] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] },
            { keys: ["cb/3"], duration: "q", midiValues: [47] },{ keys: ["bb/2"], duration: "q", midiValues: [46] },{ keys: ["ab/2"], duration: "q", midiValues: [44] },{ keys: ["gb/2"], duration: "q", midiValues: [42] }
        ]
    },

    // =======================================================================
    // === Esercizio S15 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Dob Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS15", // ID Corretto
        name: "Scale: Asc/Disc, Invertita, Parallela (Dob Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Cb",
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 50,
        description: "Esercizio di scale in Do bemolle Maggiore.",

        notesTreble: [
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["fb/4"], duration: "q", midiValue: 64 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["cb/5"], duration: "q", midiValue: 71 },
            { keys: ["cb/5"], duration: "q", midiValue: 71 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["fb/4"], duration: "q", midiValue: 64 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["fb/4"], duration: "q", midiValue: 64 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["cb/5"], duration: "q", midiValue: 71 },
            { keys: ["cb/5"], duration: "q", midiValue: 71 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["fb/4"], duration: "q", midiValue: 64 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["cb/4"], duration: "q", midiValue: 59 }
        ],
        notesBass: [
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3"], duration: "q", midiValues: [47] },{ keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["fb/3"], duration: "q", midiValues: [52] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["cb/4"], duration: "q", midiValues: [59] },
            { keys: ["cb/4"], duration: "q", midiValues: [59] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["fb/3"], duration: "q", midiValues: [52] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["cb/3"], duration: "q", midiValues: [47] },
            { keys: ["cb/3"], duration: "q", midiValues: [47] },{ keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["fb/3"], duration: "q", midiValues: [52] },
            { keys: ["gb/3"], duration: "q", midiValues: [54] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["cb/4"], duration: "q", midiValues: [59] },
            { keys: ["cb/4"], duration: "q", midiValues: [59] },{ keys: ["bb/3"], duration: "q", midiValues: [58] },{ keys: ["ab/3"], duration: "q", midiValues: [56] },{ keys: ["gb/3"], duration: "q", midiValues: [54] },
            { keys: ["fb/3"], duration: "q", midiValues: [52] },{ keys: ["eb/3"], duration: "q", midiValues: [51] },{ keys: ["db/3"], duration: "q", midiValues: [49] },{ keys: ["cb/3"], duration: "q", midiValues: [47] }
        ]
    },
    // =================================================================================
    // === Esercizio 9: When the Saints Go Marching In (Fa Mag) - 18 Battute         ===
    // =================================================================================
    {
        id: "melodieCelebri-whenTheSaints-FMaj-18bar-v1",
        name: "Melodie Celebri: When the Saints Go Marching In (Fa Mag)",
        category: "Melodie_Celebri",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 112,
        description: "Arrangiamento per pianoforte del celebre brano tradizionale 'When the Saints Go Marching In' in Fa Maggiore. Un classico spiritual/gospel con una melodia energica e un accompagnamento ritmico.",

        notesTreble: [
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "w", midiValue: 65 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "w", midiValue: 65 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["f/4"], duration: "w", midiValue: 65 }
        ],

        notesBass: [
            { keys: ["r/4"], duration: "q", midiValues: [] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["eb/3"], duration: "q", midiValues: [51] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["eb/3"], duration: "q", midiValues: [51] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["bb/2"], duration: "q", midiValues: [46] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "h", midiValues: [43, 46, 50, 53] },
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48, 52, 55, 58] },
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            { keys: ["f/2", "c/3", "a/2", "f/3"], duration: "w", midiValues: [41, 48, 45, 53] }
        ]
    },
    // =================================================================================
    // === Esercizio 10: The Entertainer (Sezione A - Do Mag) - 16 Battute           ===
    // =================================================================================
    {
        id: "melodieCelebri-theEntertainerA-CMaj-16bar-v1",
        name: "Melodie Celebri: The Entertainer (Sez. A - Do Mag)",
        category: "Melodie_Celebri",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 1,
        bpm: 92,
        description: "Arrangiamento semplificato della celebre Sezione A del ragtime 'The Entertainer' di Scott Joplin, in Do Maggiore. La mano destra esegue la melodia sincopata, mentre la sinistra fornisce un tipico accompagnamento ragtime 'stride' semplificato.",

        notesTreble: [
            { keys: ["r/4"], duration: "16"}, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["r/4"], duration: "16"}, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["r/4"], duration: "16"}, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["r/4"], duration: "8" }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["r/4"], duration: "16"}, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],

        notesBass: [
            { keys: ["r/4"], duration: "q", midiValues: [] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "bb/3"], duration: "8", midiValues: [55, 64, 58] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "bb/3"], duration: "8", midiValues: [55, 64, 58] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/2", "c/3", "f/3"], duration: "8", midiValues: [45, 48, 53] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/2", "c/3", "f/3"], duration: "8", midiValues: [45, 48, 53] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            { keys: ["c/2", "g/2", "c/3", "e/3"], duration: "h", midiValues: [36, 43, 48, 52] }
        ]
    }
];

// Assicura che window.exerciseData esista e aggiunge/aggiorna la categoria "Scale_Animate"
window.exerciseData = window.exerciseData || {};
window.exerciseData.Scale_Animate = scaleAnimateExercises;

// Aggiungiamo anche i brani celebri alla loro categoria
window.exerciseData.Melodie_Celebri = window.exerciseData.Melodie_Celebri || [];
scaleAnimateExercises.forEach(ex => {
    if (ex.category === 'Melodie_Celebri') {
        // Controlla per evitare duplicati se lo script viene eseguito più volte
        if (!window.exerciseData.Melodie_Celebri.some(existingEx => existingEx.id === ex.id)) {
            window.exerciseData.Melodie_Celebri.push(ex);
        }
    }
});


// Messaggio per confermare il caricamento
console.log("Esercizi 'Scale Animate' (scale_animate.js) caricati e corretti.");