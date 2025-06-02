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
        id: "scaleAnimate-exS1", // ID univoco per questo esercizio
        name: "Scale: Asc/Disc, Invertita, Parallela (Do Mag)", // Nome visualizzato
        category: "Scale_Animate",  // Categoria corretta
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 5, // L'utente deve eseguire l'intera forma 5 volte
        bpm: 80,        // BPM suggerito
        description: "Esercizio di scale in Do Maggiore. Parte 1: Scala in chiave di violino (asc/disc) con accordo in basso. Parte 2: Scala in chiave di basso (asc/disc) con accordo in alto. Parte 3: Scale a mani parallele (ottava) senza accordo aggiuntivo.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala C4-F4)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 2 (Scala G4-C5)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 3 (Scala C5-G4 discendente)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 4 (Scala F4-C4 discendente)
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo C4-E4-G4)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // Bar 6 (Accordo C4-E4-G4)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // Bar 7 (Accordo C4-E4-G4)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // Bar 8 (Accordo C4-E4-G4)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },

            // --- PARTE 3: Mani Parallele (Scala Treble un'ottava sopra Scala Bass) ---
            // Bar 9 (Scala C5-F5)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["f/5"], duration: "q", midiValue: 77 },
            // Bar 10 (Scala G5-C6)
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["a/5"], duration: "q", midiValue: 81 },
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            { keys: ["c/6"], duration: "q", midiValue: 84 },
            // Bar 11 (Scala C6-G5 discendente)
            { keys: ["c/6"], duration: "q", midiValue: 84 },
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            { keys: ["a/5"], duration: "q", midiValue: 81 },
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            // Bar 12 (Scala F5-C5 discendente)
            { keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo C3-E3-G3)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            // Bar 2 (Accordo C3-E3-G3)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            // Bar 3 (Accordo C3-E3-G3)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            // Bar 4 (Accordo C3-E3-G3)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala C3-F3)
            { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 6 (Scala G3-C4)
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 7 (Scala C4-G3 discendente)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 8 (Scala F3-C3 discendente)
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["c/3"], duration: "q", midiValue: 48 },

            // --- PARTE 3: Mani Parallele (Scala Treble un'ottava sopra Scala Bass) ---
            // Bar 9 (Scala C4-F4)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 10 (Scala G4-C5)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 11 (Scala C5-G4 discendente)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 12 (Scala F4-C4 discendente)
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
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
        keySignature: "G", // Sol Maggiore (un diesis: F#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Sol Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala G4-C5)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 2 (Scala D5-G5)
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            // Bar 3 (Scala G5-D5 discendente)
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 4 (Scala C5-G4 discendente)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo G4-B4-D4)
            { keys: ["g/4", "b/4", "d/4"], duration: "w", midiValues: [67, 71, 74] }, // G-B-D
            // Bar 6 (Accordo G4-B4-D4)
            { keys: ["g/4", "b/4", "d/4"], duration: "w", midiValues: [67, 71, 74] },
            // Bar 7 (Accordo G4-B4-D4)
            { keys: ["g/4", "b/4", "d/4"], duration: "w", midiValues: [67, 71, 74] },
            // Bar 8 (Accordo G4-B4-D4)
            { keys: ["g/4", "b/4", "d/4"], duration: "w", midiValues: [67, 71, 74] },

            // --- PARTE 3: Mani Parallele (MD: G4-G5, MS: G3-G4) ---
            // Bar 9 (Scala G4-C5 MD)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 10 (Scala D5-G5 MD)
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            // Bar 11 (Scala G5-D5 discendente MD)
            { keys: ["g/5"], duration: "q", midiValue: 79 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 12 (Scala C5-G4 discendente MD)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo G3-B3-D3)
            { keys: ["g/3", "b/3", "d/3"], duration: "w", midiValues: [55, 59, 62] }, // G-B-D
            // Bar 2 (Accordo G3-B3-D3)
            { keys: ["g/3", "b/3", "d/3"], duration: "w", midiValues: [55, 59, 62] },
            // Bar 3 (Accordo G3-B3-D3)
            { keys: ["g/3", "b/3", "d/3"], duration: "w", midiValues: [55, 59, 62] },
            // Bar 4 (Accordo G3-B3-D3)
            { keys: ["g/3", "b/3", "d/3"], duration: "w", midiValues: [55, 59, 62] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala G3-C4 MS)
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 6 (Scala D4-G4 MS)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 7 (Scala G4-D4 discendente MS)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 8 (Scala C4-G3 discendente MS)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g/3"], duration: "q", midiValue: 55 },

            // --- PARTE 3: Mani Parallele (MD: G4-G5, MS: G3-G4) ---
            // Bar 9 (Scala G3-C4 MS)
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 10 (Scala D4-G4 MS)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 11 (Scala G4-D4 discendente MS)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 12 (Scala C4-G3 discendente MS)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g/3"], duration: "q", midiValue: 55 },
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
        keySignature: "D", // Re Maggiore (due diesis: F#, C#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Re Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala D4-G4)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (Scala A4-D5)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 3 (Scala D5-A4 discendente)
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 4 (Scala G4-D4 discendente)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo D4-F#4-A4)
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] }, // D-F#-A
            // Bar 6 (Accordo D4-F#4-A4)
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            // Bar 7 (Accordo D4-F#4-A4)
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            // Bar 8 (Accordo D4-F#4-A4)
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },

            // --- PARTE 3: Mani Parallele (MD: D4-D5, MS: D3-D4) ---
            // Bar 9 (Scala D4-G4 MD)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 10 (Scala A4-D5 MD)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 11 (Scala D5-A4 discendente MD)
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 12 (Scala G4-D4 discendente MD)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo D3-F#3-A3)
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] }, // D-F#-A
            // Bar 2 (Accordo D3-F#3-A3)
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            // Bar 3 (Accordo D3-F#3-A3)
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            // Bar 4 (Accordo D3-F#3-A3)
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala D3-G3 MS)
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 6 (Scala A3-D4 MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 7 (Scala D4-A3 discendente MS)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 8 (Scala G3-D3 discendente MS)
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },

            // --- PARTE 3: Mani Parallele (MD: D4-D5, MS: D3-D4) ---
            // Bar 9 (Scala D3-G3 MS)
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 10 (Scala A3-D4 MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 11 (Scala D4-A3 discendente MS)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 12 (Scala G3-D3 discendente MS)
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
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
        keySignature: "A", // La Maggiore (tre diesis: F#, C#, G#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in La Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala A4-D5)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 2 (Scala E5-A5)
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["a/5"], duration: "q", midiValue: 81 },
            // Bar 3 (Scala A5-E5 discendente)
            { keys: ["a/5"], duration: "q", midiValue: 81 },
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            // Bar 4 (Scala D5-A4 discendente)
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo A4-C#4-E4)
            { keys: ["a/4", "c#/4", "e/4"], duration: "w", midiValues: [69, 61, 64] }, // Errore: C#4 è 61, E4 è 64. Corretto A4-C#5-E5
            // { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] }, // A4-C#5-E5
            // Bar 6 (Accordo A4-C#5-E5)
            // { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            // Bar 7 (Accordo A4-C#5-E5)
            // { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            // Bar 8 (Accordo A4-C#5-E5)
            // { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
            // CORREZIONE per accordo in chiave di violino A4-C#5-E5 (come sarebbe più comune):
             { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] }, // A4, C#5, E5
             { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
             { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
             { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },


            // --- PARTE 3: Mani Parallele (MD: A3-A4, MS: A2-A3) ---
            // Bar 9 (Scala A3-D4 MD)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (Scala E4-A4 MD)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 11 (Scala A4-E4 discendente MD)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 12 (Scala D4-A3 discendente MD)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo A3-C#3-E3) -> Corretto A2-C#3-E3 per suono più basso
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] }, // A2-C#3-E3
            // Bar 2 (Accordo A2-C#3-E3)
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            // Bar 3 (Accordo A2-C#3-E3)
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            // Bar 4 (Accordo A2-C#3-E3)
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala A3-D4 MS) -> Corretto A2-D3 MS
            { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Bar 6 (Scala E3-A3 MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 7 (Scala A3-E3 discendente MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 8 (Scala D3-A2 discendente MS)
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a/2"], duration: "q", midiValue: 45 },

            // --- PARTE 3: Mani Parallele (MD: A3-A4, MS: A2-A3) ---
            // Bar 9 (Scala A2-D3 MS)
            { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Bar 10 (Scala E3-A3 MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 11 (Scala A3-E3 discendente MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 12 (Scala D3-A2 discendente MS)
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a/2"], duration: "q", midiValue: 45 },
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
        keySignature: "E", // Mi Maggiore (quattro diesis: F#, C#, G#, D#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Mi Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala E4-A4)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 2 (Scala B4-E5)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            // Bar 3 (Scala E5-B4 discendente)
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 4 (Scala A4-E4 discendente)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo E4-G#4-B4)
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] }, // E-G#-B
            // Bar 6 (Accordo E4-G#4-B4)
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            // Bar 7 (Accordo E4-G#4-B4)
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            // Bar 8 (Accordo E4-G#4-B4)
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },

            // --- PARTE 3: Mani Parallele (MD: E4-E5, MS: E3-E4) ---
            // Bar 9 (Scala E4-A4 MD)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 10 (Scala B4-E5 MD)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            // Bar 11 (Scala E5-B4 discendente MD)
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 12 (Scala A4-E4 discendente MD)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo E3-G#3-B3)
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] }, // E-G#-B
            // Bar 2 (Accordo E3-G#3-B3)
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            // Bar 3 (Accordo E3-G#3-B3)
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            // Bar 4 (Accordo E3-G#3-B3)
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala E3-A3 MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 6 (Scala B3-E4 MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 7 (Scala E4-B3 discendente MS)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 8 (Scala A3-E3 discendente MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },

            // --- PARTE 3: Mani Parallele (MD: E4-E5, MS: E3-E4) ---
            // Bar 9 (Scala E3-A3 MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 10 (Scala B3-E4 MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 11 (Scala E4-B3 discendente MS)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 12 (Scala A3-E3 discendente MS)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
        ]
    },
    // =======================================================================
    // === Esercizio S6 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Si Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS6",
        name: "Scale: Asc/Disc, Invertita, Parallela (Si Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "B", // Si Maggiore (cinque diesis: F#, C#, G#, D#, A#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 75, // Leggermente più lento per via dei diesis
        description: "Esercizio di scale in Si Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala B4-E5)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            // Bar 2 (Scala F#5-B5)
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["a#/5"], duration: "q", midiValue: 82 }, // A#
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            // Bar 3 (Scala B5-F#5 discendente)
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            { keys: ["a#/5"], duration: "q", midiValue: 82 }, // A#
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            // Bar 4 (Scala E5-B4 discendente)
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] }, // B-D#-F#
            // Bar 6 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            // Bar 7 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            // Bar 8 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },

            // --- PARTE 3: Mani Parallele (MD: B3-B4, MS: B2-B3) ---
            // Bar 9 (Scala B3-E4 MD)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 10 (Scala F#4-B4 MD)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 11 (Scala B4-F#4 discendente MD)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 12 (Scala E4-B3 discendente MD)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] }, // B-D#-F#
            // Bar 2 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            // Bar 3 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            // Bar 4 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala B2-E3 MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 6 (Scala F#3-B3 MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 7 (Scala B3-F#3 discendente MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 8 (Scala E3-B2 discendente MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },

            // --- PARTE 3: Mani Parallele (MD: B3-B4, MS: B2-B3) ---
            // Bar 9 (Scala B2-E3 MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 10 (Scala F#3-B3 MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 11 (Scala B3-F#3 discendente MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 12 (Scala E3-B2 discendente MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
        ]
    },    // =======================================================================
    // === Esercizio S6 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Si Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS6",
        name: "Scale: Asc/Disc, Invertita, Parallela (Si Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "B", // Si Maggiore (cinque diesis: F#, C#, G#, D#, A#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 75, // Leggermente più lento per via dei diesis
        description: "Esercizio di scale in Si Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala B4-E5)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            // Bar 2 (Scala F#5-B5)
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["a#/5"], duration: "q", midiValue: 82 }, // A#
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            // Bar 3 (Scala B5-F#5 discendente)
            { keys: ["b/5"], duration: "q", midiValue: 83 },
            { keys: ["a#/5"], duration: "q", midiValue: 82 }, // A#
            { keys: ["g#/5"], duration: "q", midiValue: 80 }, // G#
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            // Bar 4 (Scala E5-B4 discendente)
            { keys: ["e/5"], duration: "q", midiValue: 76 },
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b/4"], duration: "q", midiValue: 71 },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] }, // B-D#-F#
            // Bar 6 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            // Bar 7 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            // Bar 8 (Accordo B3-D#4-F#4)
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },

            // --- PARTE 3: Mani Parallele (MD: B3-B4, MS: B2-B3) ---
            // Bar 9 (Scala B3-E4 MD)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 10 (Scala F#4-B4 MD)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 11 (Scala B4-F#4 discendente MD)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 12 (Scala E4-B3 discendente MD)
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] }, // B-D#-F#
            // Bar 2 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            // Bar 3 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            // Bar 4 (Accordo B2-D#3-F#3)
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala B2-E3 MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 6 (Scala F#3-B3 MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 7 (Scala B3-F#3 discendente MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 8 (Scala E3-B2 discendente MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },

            // --- PARTE 3: Mani Parallele (MD: B3-B4, MS: B2-B3) ---
            // Bar 9 (Scala B2-E3 MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 10 (Scala F#3-B3 MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 11 (Scala B3-F#3 discendente MS)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 12 (Scala E3-B2 discendente MS)
            { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
        ]
    },
    // =======================================================================
    // === Esercizio S7 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Fa# Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS7",
        name: "Scale: Asc/Disc, Invertita, Parallela (Fa# Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "F#", // Fa Diesis Maggiore (sei diesis: F#, C#, G#, D#, A#, E#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70, // Molto lento per la complessità
        description: "Esercizio di scale in Fa Diesis Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala F#4-B4)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 2 (Scala C#5-F#5)
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["e#/5"], duration: "q", midiValue: 77 }, // E# (equiv. F5)
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            // Bar 3 (Scala F#5-C#5 discendente)
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, // F#
            { keys: ["e#/5"], duration: "q", midiValue: 77 }, // E#
            { keys: ["d#/5"], duration: "q", midiValue: 75 }, // D#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            // Bar 4 (Scala B4-F#4 discendente)
            { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo F#3-A#3-C#4)
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] }, // F#-A#-C#
            // Bar 6 (Accordo F#3-A#3-C#4)
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            // Bar 7 (Accordo F#3-A#3-C#4)
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            // Bar 8 (Accordo F#3-A#3-C#4)
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },

            // --- PARTE 3: Mani Parallele (MD: F#3-F#4, MS: F#2-F#3) ---
            // Bar 9 (Scala F#3-B3 MD)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 10 (Scala C#4-F#4 MD)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E# (equiv. F4)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 11 (Scala F#4-C#4 discendente MD)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            // Bar 12 (Scala B3-F#3 discendente MD)
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo F#2-A#2-C#3)
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] }, // F#-A#-C#
            // Bar 2 (Accordo F#2-A#2-C#3)
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            // Bar 3 (Accordo F#2-A#2-C#3)
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            // Bar 4 (Accordo F#2-A#2-C#3)
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala F#2-B2 MS)
            { keys: ["f#/2"], duration: "q", midiValue: 42 }, // F#
            { keys: ["g#/2"], duration: "q", midiValue: 44 }, // G#
            { keys: ["a#/2"], duration: "q", midiValue: 46 }, // A#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Bar 6 (Scala C#3-F#3 MS)
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E# (equiv. F3)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 7 (Scala F#3-C#3 discendente MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            // Bar 8 (Scala B2-F#2 discendente MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a#/2"], duration: "q", midiValue: 46 }, // A#
            { keys: ["g#/2"], duration: "q", midiValue: 44 }, // G#
            { keys: ["f#/2"], duration: "q", midiValue: 42 }, // F#

            // --- PARTE 3: Mani Parallele (MD: F#3-F#4, MS: F#2-F#3) ---
            // Bar 9 (Scala F#2-B2 MS)
            { keys: ["f#/2"], duration: "q", midiValue: 42 }, // F#
            { keys: ["g#/2"], duration: "q", midiValue: 44 }, // G#
            { keys: ["a#/2"], duration: "q", midiValue: 46 }, // A#
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Bar 10 (Scala C#3-F#3 MS)
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E# (equiv. F3)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 11 (Scala F#3-C#3 discendente MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            // Bar 12 (Scala B2-F#2 discendente MS)
            { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a#/2"], duration: "q", midiValue: 46 }, // A#
            { keys: ["g#/2"], duration: "q", midiValue: 44 }, // G#
            { keys: ["f#/2"], duration: "q", midiValue: 42 }, // F#
        ]
    },
    // =======================================================================
    // === Esercizio S8 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Do# Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS8",
        name: "Scale: Asc/Disc, Invertita, Parallela (Do# Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "C#", // Do Diesis Maggiore (sette diesis: F#, C#, G#, D#, A#, E#, B#)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65, // Estremamente lento per la complessità
        description: "Esercizio di scale in Do Diesis Maggiore. Parte 1: Scala MD con accordo MS. Parte 2: Scala MS con accordo MD. Parte 3: Scale a mani parallele.",

        notesTreble: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Scala C#4-F#4)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E# (equiv. F4)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 2 (Scala G#4-C#5)
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["b#/4"], duration: "q", midiValue: 72 }, // B# (equiv. C5)
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            // Bar 3 (Scala C#5-G#4 discendente)
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b#/4"], duration: "q", midiValue: 72 }, // B#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            // Bar 4 (Scala F#4-C#4 discendente)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Accordo C#4-E#4-G#4)
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] }, // C#-E#-G#
            // Bar 6 (Accordo C#4-E#4-G#4)
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            // Bar 7 (Accordo C#4-E#4-G#4)
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
            // Bar 8 (Accordo C#4-E#4-G#4)
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },

            // --- PARTE 3: Mani Parallele (MD: C#4-C#5, MS: C#3-C#4) ---
            // Bar 9 (Scala C#4-F#4 MD)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E#
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 10 (Scala G#4-C#5 MD)
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["b#/4"], duration: "q", midiValue: 72 }, // B#
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            // Bar 11 (Scala C#5-G#4 discendente MD)
            { keys: ["c#/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["b#/4"], duration: "q", midiValue: 72 }, // B#
            { keys: ["a#/4"], duration: "q", midiValue: 70 }, // A#
            { keys: ["g#/4"], duration: "q", midiValue: 68 }, // G#
            // Bar 12 (Scala F#4-C#4 discendente MD)
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["e#/4"], duration: "q", midiValue: 65 }, // E#
            { keys: ["d#/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
        ],

        notesBass: [
            // --- PARTE 1: Scala Treble (Mano Dx), Accordo Bass (Mano Sx) ---
            // Bar 1 (Accordo C#3-E#3-G#3)
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] }, // C#-E#-G#
            // Bar 2 (Accordo C#3-E#3-G#3)
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            // Bar 3 (Accordo C#3-E#3-G#3)
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            // Bar 4 (Accordo C#3-E#3-G#3)
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },

            // --- PARTE 2: Accordo Treble (Mano Dx), Scala Bass (Mano Sx) ---
            // Bar 5 (Scala C#3-F#3 MS)
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E# (equiv. F3)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 6 (Scala G#3-C#4 MS)
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b#/3"], duration: "q", midiValue: 60 }, // B# (equiv. C4)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            // Bar 7 (Scala C#4-G#3 discendente MS)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b#/3"], duration: "q", midiValue: 60 }, // B#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            // Bar 8 (Scala F#3-C#3 discendente MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#

            // --- PARTE 3: Mani Parallele (MD: C#4-C#5, MS: C#3-C#4) ---
            // Bar 9 (Scala C#3-F#3 MS)
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E#
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            // Bar 10 (Scala G#3-C#4 MS)
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["b#/3"], duration: "q", midiValue: 60 }, // B#
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            // Bar 11 (Scala C#4-G#3 discendente MS)
            { keys: ["c#/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["b#/3"], duration: "q", midiValue: 60 }, // B#
            { keys: ["a#/3"], duration: "q", midiValue: 58 }, // A#
            { keys: ["g#/3"], duration: "q", midiValue: 56 }, // G#
            // Bar 12 (Scala F#3-C#3 discendente MS)
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["e#/3"], duration: "q", midiValue: 53 }, // E#
            { keys: ["d#/3"], duration: "q", midiValue: 51 }, // D#
            { keys: ["c#/3"], duration: "q", midiValue: 49 }, // C#
        ]
    },
    // =======================================================================
    // === Esercizio S9 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Fa Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS9",
        name: "Scale: Asc/Disc, Invertita, Parallela (Fa Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "F", // Fa Maggiore (1 bemolle: Bb)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 80,
        description: "Esercizio di scale in Fa Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (F4-F5), MS Accordo (F2-A2-C3)
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["e/5"], duration: "q", midiValue: 76 },{ keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["f/5"], duration: "q", midiValue: 77 },{ keys: ["e/5"], duration: "q", midiValue: 76 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            // PARTE 2: MD Accordo (F3-A3-C4), MS Scala (F2-F3)
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            // PARTE 3: Mani Parallele (MD: F3-F4, MS: F2-F3)
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            // PARTE 2
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["f/2"], duration: "q", midiValue: 41 },
            // PARTE 3
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["f/2"], duration: "q", midiValue: 41 }
        ]
    },

    // =======================================================================
    // === Esercizio S10 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Sib Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS10",
        name: "Scale: Asc/Disc, Invertita, Parallela (Sib Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Bb", // Si bemolle Maggiore (2 bemolli: Bb, Eb)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 75,
        description: "Esercizio di scale in Si bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Bb3-Bb4), MS Accordo (Bb2-D3-F3)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            // PARTE 2: MD Accordo (Bb3-D4-F4), MS Scala (Bb2-Bb3)
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            // PARTE 3: Mani Parallele (MD: Bb3-Bb4, MS: Bb2-Bb3)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            // PARTE 2
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // PARTE 3
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["bb/2"], duration: "q", midiValue: 46 }
        ]
    },

    // =======================================================================
    // === Esercizio S11 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Mib Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS11",
        name: "Scale: Asc/Disc, Invertita, Parallela (Mib Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Eb", // Mi bemolle Maggiore (3 bemolli: Bb, Eb, Ab)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Esercizio di scale in Mi bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Eb4-Eb5), MS Accordo (Eb3-G3-Bb3)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            // PARTE 2: MD Accordo (Eb4-G4-Bb4), MS Scala (Eb3-Eb4)
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            // PARTE 3: Mani Parallele (MD: Eb4-Eb5, MS: Eb3-Eb4)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },{ keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            // PARTE 2
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            // PARTE 3
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 }
        ]
    },

    // =======================================================================
    // === Esercizio S12 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Lab Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS12",
        name: "Scale: Asc/Disc, Invertita, Parallela (Lab Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Ab", // La bemolle Maggiore (4 bemolli: Bb, Eb, Ab, Db)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Esercizio di scale in La bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Ab3-Ab4), MS Accordo (Ab2-C3-Eb3)
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            // PARTE 2: MD Accordo (Ab3-C4-Eb4), MS Scala (Ab2-Ab3)
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            // PARTE 3: Mani Parallele (MD: Ab3-Ab4, MS: Ab2-Ab3)
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            // PARTE 2
            { keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["ab/2"], duration: "q", midiValue: 44 },
            // PARTE 3
            { keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["ab/2"], duration: "q", midiValue: 44 }
        ]
    },

    // =======================================================================
    // === Esercizio S13 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Reb Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS13",
        name: "Scale: Asc/Disc, Invertita, Parallela (Reb Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Db", // Re bemolle Maggiore (5 bemolli: Bb, Eb, Ab, Db, Gb)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Esercizio di scale in Re bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Db4-Db5), MS Accordo (Db3-F3-Ab3)
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["db/5"], duration: "q", midiValue: 73 },
            { keys: ["db/5"], duration: "q", midiValue: 73 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            // PARTE 2: MD Accordo (Db4-F4-Ab4), MS Scala (Db3-Db4)
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            // PARTE 3: Mani Parallele (MD: Db4-Db5, MS: Db3-Db4)
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["db/5"], duration: "q", midiValue: 73 },
            { keys: ["db/5"], duration: "q", midiValue: 73 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            // PARTE 2
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 },
            // PARTE 3
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 }
        ]
    },

    // =======================================================================
    // === Esercizio S14 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Solb Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS14",
        name: "Scale: Asc/Disc, Invertita, Parallela (Solb Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Gb", // Sol bemolle Maggiore (6 bemolli: Bb, Eb, Ab, Db, Gb, Cb)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 55,
        description: "Esercizio di scale in Sol bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Gb3-Gb4), MS Accordo (Gb2-Bb2-Db3)
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 }, // Cb
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            // PARTE 2: MD Accordo (Gb3-Bb3-Db4), MS Scala (Gb2-Gb3)
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            // PARTE 3: Mani Parallele (MD: Gb3-Gb4, MS: Gb2-Gb3)
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            // PARTE 2
            { keys: ["gb/2"], duration: "q", midiValue: 42 },{ keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["cb/3"], duration: "q", midiValue: 47 }, // Cb
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["cb/3"], duration: "q", midiValue: 47 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["gb/2"], duration: "q", midiValue: 42 },
            // PARTE 3
            { keys: ["gb/2"], duration: "q", midiValue: 42 },{ keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["cb/3"], duration: "q", midiValue: 47 },
            { keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["cb/3"], duration: "q", midiValue: 47 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["ab/2"], duration: "q", midiValue: 44 },{ keys: ["gb/2"], duration: "q", midiValue: 42 }
        ]
    },

    // =======================================================================
    // === Esercizio S15 - Scale Animate (Scale: Asc/Disc, Invertita, Parallela - Dob Mag) ===
    // =======================================================================
    {
        id: "scaleAnimate-exS15",
        name: "Scale: Asc/Disc, Invertita, Parallela (Dob Mag)",
        category: "Scale_Animate",
        staveLayout: "grand",
        keySignature: "Cb", // Do bemolle Maggiore (7 bemolli: Bb, Eb, Ab, Db, Gb, Cb, Fb)
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 50,
        description: "Esercizio di scale in Do bemolle Maggiore.",

        notesTreble: [
            // PARTE 1: MD Scala (Cb4-Cb5), MS Accordo (Cb3-Eb3-Gb3)
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["fb/4"], duration: "q", midiValue: 64 }, // Fb
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["cb/5"], duration: "q", midiValue: 71 }, // Cb
            { keys: ["cb/5"], duration: "q", midiValue: 71 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["fb/4"], duration: "q", midiValue: 64 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            // PARTE 2: MD Accordo (Cb4-Eb4-Gb4), MS Scala (Cb3-Cb4)
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
            // PARTE 3: Mani Parallele (MD: Cb4-Cb5, MS: Cb3-Cb4)
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["fb/4"], duration: "q", midiValue: 64 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["cb/5"], duration: "q", midiValue: 71 },
            { keys: ["cb/5"], duration: "q", midiValue: 71 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["fb/4"], duration: "q", midiValue: 64 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["cb/4"], duration: "q", midiValue: 59 }
        ],
        notesBass: [
            // PARTE 1
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            // PARTE 2
            { keys: ["cb/3"], duration: "q", midiValue: 47 },{ keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["fb/3"], duration: "q", midiValue: 52 }, // Fb
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 }, // Cb
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["fb/3"], duration: "q", midiValue: 52 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["cb/3"], duration: "q", midiValue: 47 },
            // PARTE 3
            { keys: ["cb/3"], duration: "q", midiValue: 47 },{ keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["fb/3"], duration: "q", midiValue: 52 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["cb/4"], duration: "q", midiValue: 59 },
            { keys: ["cb/4"], duration: "q", midiValue: 59 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },{ keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["fb/3"], duration: "q", midiValue: 52 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },{ keys: ["db/3"], duration: "q", midiValue: 49 },{ keys: ["cb/3"], duration: "q", midiValue: 47 }
        ]
    },
    // =================================================================================
    // === Esercizio 9: When the Saints Go Marching In (Fa Mag) - 18 Battute         ===
    // === Celebre brano spiritual/gospel/jazz tradizionale.                        ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-whenTheSaints-FMaj-18bar-v1",
        name: "Melodie Celebri: When the Saints Go Marching In (Fa Mag)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "F",   // Fa Maggiore (Un bemolle in chiave - Bb)
        timeSignature: "4/4",

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 2,
        bpm: 112, // Un tempo allegro e trascinante
        description: "Arrangiamento per pianoforte del celebre brano tradizionale 'When the Saints Go Marching In' in Fa Maggiore. Un classico spiritual/gospel con una melodia energica e un accompagnamento ritmico.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia)
            // Pickup "Oh when the..."
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 1 "...saints, go march-ing..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 2 "...in, Oh when the..."
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 3 "...saints go march-ing..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 4 "...in."
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 5 "Oh Lord I want to..."
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Bar 6 "...be in that..."
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Bar 7 "...num-ber, Oh when the..."
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 8 "...saints go march-ing in."
            { keys: ["f/4"], duration: "w", midiValues: [65] },

            // Ripetizione della forma con leggera variazione o enfasi (Battute 9-16)
            // Bar 9
            { keys: ["c/4"], duration: "q", midiValues: [60] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 10
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            // Bar 11
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 12
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Bar 13
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["d/5"], duration: "q", midiValues: [74] }, // Salita
            // Bar 14
            { keys: ["bb/4"], duration: "h", midiValues: [70] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Bar 15
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Bar 16
            { keys: ["f/4"], duration: "w", midiValues: [65] },
            
            // Coda (Battute 17-18)
            // Bar 17 (C7)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["bb/4"], duration: "q", midiValues: [70] },
            // Bar 18 (F)
            { keys: ["f/4"], duration: "w", midiValues: [65] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento ritmico, stile "stride" semplificato o walking bass)
            // Pickup
            { keys: ["r/4"], duration: "q", midiValues: [] },
            // Bar 1 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 2 (F o F7)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["eb/3"], duration: "q", midiValues: [51] }, // Per F7
            // Bar 3 (Bb)
            { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 4 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 5 (C7)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Naturale per C7
            // Bar 6 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 7 (C7)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Bar 8 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] }, // Accordo pieno

            // Ripetizione
            // Bar 9 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 10 (F7)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["eb/3"], duration: "q", midiValues: [51] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            // Bar 11 (Bb)
            { keys: ["bb/2"], duration: "q", midiValues: [46] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["bb/2"], duration: "q", midiValues: [46] },
            // Bar 12 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            // Bar 13 (C7)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Bar 14 (F)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Bar 15 (Gm7 C7)
            { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "h", midiValues: [43, 46, 50, 53] }, // Gm7
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48, 52, 55, 58] }, // C7
            // Bar 16 (F)
            { keys: ["f/2", "a/2", "c/3", "f/3"], duration: "w", midiValues: [41, 45, 48, 53] },

            // Coda
            // Bar 17 (C7)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["bb/3"], duration: "q", midiValues: [58] },
            // Bar 18 (F)
            { keys: ["f/2", "c/3", "a/2", "f/3"], duration: "w", midiValues: [41, 48, 45, 53] } // Accordo F finale ampio
        ]
    },
        // =================================================================================
    // === Esercizio 10: The Entertainer (Sezione A - Do Mag) - 16 Battute           ===
    // === Celebre ragtime di Scott Joplin (melodia principale semplificata).        ===
    // =================================================================================
    {
        // --- METADATI OBBLIGATORI ---
        id: "melodieCelebri-theEntertainerA-CMaj-16bar-v1",
        name: "Melodie Celebri: The Entertainer (Sez. A - Do Mag)",
        category: "Melodie_Celebri",

        // --- METADATI TECNICI ---
        staveLayout: "grand",
        keySignature: "C",   // Do Maggiore
        timeSignature: "2/4", // Tipico del ragtime

        // --- METADATI OPZIONALI MA CONSIGLIATI ---
        repetitions: 1, // La sezione è già ripetuta nell'esercizio
        bpm: 92, // Un tempo moderato per il ragtime, per permettere chiarezza
        description: "Arrangiamento semplificato della celebre Sezione A del ragtime 'The Entertainer' di Scott Joplin, in Do Maggiore. La mano destra esegue la melodia sincopata, mentre la sinistra fornisce un tipico accompagnamento ragtime 'stride' semplificato.",

        // --- DATI MUSICALI (NOTE) ---
        notesTreble: [ // Mano Destra (Melodia Sincopata)
            // Pickup
            { keys: ["r/4"], duration: "16", midiValues: [] }, { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] },
            // Bar 1
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 2
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Bar 3
            { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 4
            { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Bar 5 (Ripetizione della prima frase)
            { keys: ["r/4"], duration: "16", midiValues: [] }, { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 6
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Bar 7
            { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 8
            { keys: ["c/4"], duration: "h", midiValues: [60] },

            // Sezione A ripetuta (o seconda parte della Sez. A originale)
            // Bar 9
            { keys: ["r/4"], duration: "16", midiValues: [] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["e/4"], duration: "16", midiValues: [64] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Bar 10
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            // Bar 11
            { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["e/4"], duration: "16", midiValues: [64] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Bar 12
            { keys: ["g/4"], duration: "h", midiValues: [67] },

            // Bar 13 (Come battuta 5)
            { keys: ["r/4"], duration: "16", midiValues: [] }, { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 14 (Come battuta 6)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["r/4"], duration: "8", midiValues: [] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Bar 15 (Come battuta 7)
            { keys: ["d/5"], duration: "16", midiValues: [74] }, { keys: ["c/5"], duration: "16", midiValues: [72] }, { keys: ["a/4"], duration: "16", midiValues: [69] }, { keys: ["b/4"], duration: "16", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Bar 16 (Finale)
            { keys: ["c/4"], duration: "h", midiValues: [60] }
        ],

        notesBass: [ // Mano Sinistra (Accompagnamento "stride" semplificato: basso-accordo)
            // Pickup
            { keys: ["r/4"], duration: "q", midiValues: [] }, // Pausa per pickup MD
            // Bar 1 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 2 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 3 (G7)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            // Bar 4 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },

            // Bar 5 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 6 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 7 (G7)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            // Bar 8 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },

            // Bar 9 (C7)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "bb/3"], duration: "8", midiValues: [55, 64, 58] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "bb/3"], duration: "8", midiValues: [55, 64, 58] },
            // Bar 10 (F)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/2", "c/3", "f/3"], duration: "8", midiValues: [45, 48, 53] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/2", "c/3", "f/3"], duration: "8", midiValues: [45, 48, 53] },
            // Bar 11 (C/G)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 12 (G7)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },

            // Bar 13 (C) (Come battuta 1 MS)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 14 (C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3", "e/4", "c/4"], duration: "8", midiValues: [55, 64, 60] },
            // Bar 15 (G7)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["f/3", "b/3", "d/4"], duration: "8", midiValues: [53, 59, 62] },
            // Bar 16 (C) Finale
            { keys: ["c/2", "g/2", "c/3", "e/3"], duration: "h", midiValues: [36, 43, 48, 52] } // Accordo C finale ampio
        ]
    },







];

// Assicura che window.exerciseData esista e aggiunge/aggiorna la categoria "Scale_Animate"
window.exerciseData = window.exerciseData || {};
window.exerciseData.Scale_Animate = scaleAnimateExercises; // Usiamo "Scale_Animate" come chiave per coerenza

// Messaggio per confermare il caricamento
console.log("Esercizi 'Scale Animate' (scale_animate.js) caricati. Esercizio 'scaleAnimate-exS1' aggiunto.");