/**
 * js/exercises/accordi_rivolti.js
 * Contiene dati per esercizi sui rivolti degli accordi.
 *
 * Piano Tutor Extrame V2
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi sui rivolti degli accordi
const accordiRivoltiExercises = [

    // =======================================================================
    // === ACCORDI MAGGIORI - RIVOLTI ===
    // =======================================================================

    // --- Esercizio M1: Rivolti di Do Maggiore ---
    {
        id: "accordiRivolti-exM1C", // M per Maggiore, C per Do
        name: "Rivolti: Do Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "C", // Do Maggiore
        timeSignature: "4/4",
        repetitions: 3, // Suggerimento, l'utente può variare
        bpm: 70,
        description: "Suonare l'accordo di Do Maggiore in stato fondamentale e nei suoi rivolti, tornando allo stato fondamentale un'ottava sopra. Mani insieme.",

        notesTreble: [ // Mano Destra
            // Bar 1: Do Maggiore (Stato Fondamentale) - C4-E4-G4
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // Bar 2: Do Maggiore (Primo Rivolto) - E4-G4-C5
            { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] },
            // Bar 3: Do Maggiore (Secondo Rivolto) - G4-C5-E5
            { keys: ["g/4", "c/5", "e/5"], duration: "w", midiValues: [67, 72, 76] },
            // Bar 4: Do Maggiore (Stato Fondamentale, Ottava Sopra) - C5-E5-G5
            { keys: ["c/5", "e/5", "g/5"], duration: "w", midiValues: [72, 76, 79] },
        ],

        notesBass: [ // Mano Sinistra (un'ottava sotto la destra)
            // Bar 1: Do Maggiore (Stato Fondamentale) - C3-E3-G3
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] },
            // Bar 2: Do Maggiore (Primo Rivolto) - E3-G3-C4
            { keys: ["e/3", "g/3", "c/4"], duration: "w", midiValues: [52, 55, 60] },
            // Bar 3: Do Maggiore (Secondo Rivolto) - G3-C4-E4
            { keys: ["g/3", "c/4", "e/4"], duration: "w", midiValues: [55, 60, 64] },
            // Bar 4: Do Maggiore (Stato Fondamentale, Ottava Sopra) - C4-E4-G4
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
        ]
    },
        // --- Esercizio M2: Rivolti di Sol Maggiore ---
    {
        id: "accordiRivolti-exM2G", // M per Maggiore, G per Sol
        name: "Rivolti: Sol Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "C", // Tonalità di riferimento per la visualizzazione, l'accordo è di Sol.
                           // Potremmo usare "G" se volessimo l'armatura di chiave di Sol, ma
                           // per esercizi di accordi isolati, "C" è spesso più pulito.
                           // Verranno visualizzate le alterazioni necessarie (nessuna per G-B-D).
        timeSignature: "4/4",
        repetitions: 5, // 5 ripetizioni prima della verifica/AI
        bpm: 70,
        description: "Suonare l'accordo di Sol Maggiore in stato fondamentale e nei suoi rivolti, tornando allo stato fondamentale un'ottava sopra. Mani insieme.",

        notesTreble: [ // Mano Destra
            // Bar 1: Sol Maggiore (Stato Fondamentale) - G3-B3-D4
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            // Bar 2: Sol Maggiore (Primo Rivolto) - B3-D4-G4
            { keys: ["b/3", "d/4", "g/4"], duration: "w", midiValues: [59, 62, 67] },
            // Bar 3: Sol Maggiore (Secondo Rivolto) - D4-G4-B4
            { keys: ["d/4", "g/4", "b/4"], duration: "w", midiValues: [62, 67, 71] },
            // Bar 4: Sol Maggiore (Stato Fondamentale, Ottava Sopra) - G4-B4-D5
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] },
        ],

        notesBass: [ // Mano Sinistra (un'ottava sotto la destra)
            // Bar 1: Sol Maggiore (Stato Fondamentale) - G2-B2-D3
            { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] },
            // Bar 2: Sol Maggiore (Primo Rivolto) - B2-D3-G3
            { keys: ["b/2", "d/3", "g/3"], duration: "w", midiValues: [47, 50, 55] },
            // Bar 3: Sol Maggiore (Secondo Rivolto) - D3-G3-B3
            { keys: ["d/3", "g/3", "b/3"], duration: "w", midiValues: [50, 55, 59] },
            // Bar 4: Sol Maggiore (Stato Fondamentale, Ottava Sopra) - G3-B3-D4
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
        ]
    },
        // --- Esercizio M3: Rivolti di Re Maggiore ---
    {
        id: "accordiRivolti-exM3D",
        name: "Rivolti: Re Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "D", // Per visualizzare F# e C# in chiave
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Rivolti dell'accordo di Re Maggiore.",
        notesTreble: [ // MD: D4-F#4-A4
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            { keys: ["f#/4", "a/4", "d/5"], duration: "w", midiValues: [66, 69, 74] },
            { keys: ["a/4", "d/5", "f#/5"], duration: "w", midiValues: [69, 74, 78] },
            { keys: ["d/5", "f#/5", "a/5"], duration: "w", midiValues: [74, 78, 81] },
        ],
        notesBass: [ // MS: D3-F#3-A3
            { keys: ["d/3", "f#/3", "a/3"], duration: "w", midiValues: [50, 54, 57] },
            { keys: ["f#/3", "a/3", "d/4"], duration: "w", midiValues: [54, 57, 62] },
            { keys: ["a/3", "d/4", "f#/4"], duration: "w", midiValues: [57, 62, 66] },
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
        ]
    },

    // --- Esercizio M4: Rivolti di La Maggiore ---
    {
        id: "accordiRivolti-exM4A",
        name: "Rivolti: La Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "A", // F#, C#, G#
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Rivolti dell'accordo di La Maggiore.",
        notesTreble: [ // MD: A3-C#4-E4
            { keys: ["a/3", "c#/4", "e/4"], duration: "w", midiValues: [57, 61, 64] },
            { keys: ["c#/4", "e/4", "a/4"], duration: "w", midiValues: [61, 64, 69] },
            { keys: ["e/4", "a/4", "c#/5"], duration: "w", midiValues: [64, 69, 73] },
            { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] },
        ],
        notesBass: [ // MS: A2-C#3-E3
            { keys: ["a/2", "c#/3", "e/3"], duration: "w", midiValues: [45, 49, 52] },
            { keys: ["c#/3", "e/3", "a/3"], duration: "w", midiValues: [49, 52, 57] },
            { keys: ["e/3", "a/3", "c#/4"], duration: "w", midiValues: [52, 57, 61] },
            { keys: ["a/3", "c#/4", "e/4"], duration: "w", midiValues: [57, 61, 64] },
        ]
    },

    // --- Esercizio M5: Rivolti di Mi Maggiore ---
    {
        id: "accordiRivolti-exM5E",
        name: "Rivolti: Mi Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "E", // F#, C#, G#, D#
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Rivolti dell'accordo di Mi Maggiore.",
        notesTreble: [ // MD: E4-G#4-B4
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            { keys: ["g#/4", "b/4", "e/5"], duration: "w", midiValues: [68, 71, 76] },
            { keys: ["b/4", "e/5", "g#/5"], duration: "w", midiValues: [71, 76, 80] },
            { keys: ["e/5", "g#/5", "b/5"], duration: "w", midiValues: [76, 80, 83] },
        ],
        notesBass: [ // MS: E3-G#3-B3
            { keys: ["e/3", "g#/3", "b/3"], duration: "w", midiValues: [52, 56, 59] },
            { keys: ["g#/3", "b/3", "e/4"], duration: "w", midiValues: [56, 59, 64] },
            { keys: ["b/3", "e/4", "g#/4"], duration: "w", midiValues: [59, 64, 68] },
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
        ]
    },

    // --- Esercizio M6: Rivolti di Si Maggiore ---
    {
        id: "accordiRivolti-exM6B",
        name: "Rivolti: Si Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "B", // F#, C#, G#, D#, A#
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Rivolti dell'accordo di Si Maggiore.",
        notesTreble: [ // MD: B3-D#4-F#4
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            { keys: ["d#/4", "f#/4", "b/4"], duration: "w", midiValues: [63, 66, 71] },
            { keys: ["f#/4", "b/4", "d#/5"], duration: "w", midiValues: [66, 71, 75] },
            { keys: ["b/4", "d#/5", "f#/5"], duration: "w", midiValues: [71, 75, 78] },
        ],
        notesBass: [ // MS: B2-D#3-F#3
            { keys: ["b/2", "d#/3", "f#/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["d#/3", "f#/3", "b/3"], duration: "w", midiValues: [51, 54, 59] },
            { keys: ["f#/3", "b/3", "d#/4"], duration: "w", midiValues: [54, 59, 63] },
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
        ]
    },

    // --- Esercizio M7: Rivolti di Fa Diesis Maggiore ---
    {
        id: "accordiRivolti-exM7Fs", // Fs per F#
        name: "Rivolti: Fa# Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "F#", // F#, C#, G#, D#, A#, E#
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Rivolti dell'accordo di Fa Diesis Maggiore.",
        notesTreble: [ // MD: F#3-A#3-C#4
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["a#/3", "c#/4", "f#/4"], duration: "w", midiValues: [58, 61, 66] },
            { keys: ["c#/4", "f#/4", "a#/4"], duration: "w", midiValues: [61, 66, 70] },
            { keys: ["f#/4", "a#/4", "c#/5"], duration: "w", midiValues: [66, 70, 73] },
        ],
        notesBass: [ // MS: F#2-A#2-C#3
            { keys: ["f#/2", "a#/2", "c#/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["a#/2", "c#/3", "f#/3"], duration: "w", midiValues: [46, 49, 54] },
            { keys: ["c#/3", "f#/3", "a#/3"], duration: "w", midiValues: [49, 54, 58] },
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
        ]
    },

    // --- Esercizio M8: Rivolti di Do Diesis Maggiore ---
    {
        id: "accordiRivolti-exM8Cs", // Cs per C#
        name: "Rivolti: Do# Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "C#", // F#, C#, G#, D#, A#, E#, B#
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Rivolti dell'accordo di Do Diesis Maggiore.",
        notesTreble: [ // MD: C#4-E#4-G#4
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] }, // E# è F naturale
            { keys: ["e#/4", "g#/4", "c#/5"], duration: "w", midiValues: [65, 68, 73] },
            { keys: ["g#/4", "c#/5", "e#/5"], duration: "w", midiValues: [68, 73, 77] }, // E#5 è F5
            { keys: ["c#/5", "e#/5", "g#/5"], duration: "w", midiValues: [73, 77, 80] },
        ],
        notesBass: [ // MS: C#3-E#3-G#3
            { keys: ["c#/3", "e#/3", "g#/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["e#/3", "g#/3", "c#/4"], duration: "w", midiValues: [53, 56, 61] },
            { keys: ["g#/3", "c#/4", "e#/4"], duration: "w", midiValues: [56, 61, 65] },
            { keys: ["c#/4", "e#/4", "g#/4"], duration: "w", midiValues: [61, 65, 68] },
        ]
    },

    // --- Esercizio M9: Rivolti di Fa Maggiore --- (Riprendiamo il ciclo dei bemolli)
    {
        id: "accordiRivolti-exM9F",
        name: "Rivolti: Fa Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "F", // Bb
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Rivolti dell'accordo di Fa Maggiore.",
        notesTreble: [ // MD: F3-A3-C4
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            { keys: ["a/3", "c/4", "f/4"], duration: "w", midiValues: [57, 60, 65] },
            { keys: ["c/4", "f/4", "a/4"], duration: "w", midiValues: [60, 65, 69] },
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] },
        ],
        notesBass: [ // MS: F2-A2-C3
            { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] },
            { keys: ["a/2", "c/3", "f/3"], duration: "w", midiValues: [45, 48, 53] },
            { keys: ["c/3", "f/3", "a/3"], duration: "w", midiValues: [48, 53, 57] },
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
        ]
    },

    // --- Esercizio M10: Rivolti di Si Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM10Bb", // Bb per Si bemolle
        name: "Rivolti: Sib Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Bb", // Bb, Eb
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 70,
        description: "Rivolti dell'accordo di Si Bemolle Maggiore.",
        notesTreble: [ // MD: Bb3-D4-F4
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            { keys: ["d/4", "f/4", "bb/4"], duration: "w", midiValues: [62, 65, 70] },
            { keys: ["f/4", "bb/4", "d/5"], duration: "w", midiValues: [65, 70, 74] },
            { keys: ["bb/4", "d/5", "f/5"], duration: "w", midiValues: [70, 74, 77] },
        ],
        notesBass: [ // MS: Bb2-D3-F3
            { keys: ["bb/2", "d/3", "f/3"], duration: "w", midiValues: [46, 50, 53] },
            { keys: ["d/3", "f/3", "bb/3"], duration: "w", midiValues: [50, 53, 58] },
            { keys: ["f/3", "bb/3", "d/4"], duration: "w", midiValues: [53, 58, 62] },
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
        ]
    },

    // --- Esercizio M11: Rivolti di Mi Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM11Eb", // Eb per Mi bemolle
        name: "Rivolti: Mib Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Eb", // Bb, Eb, Ab
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Rivolti dell'accordo di Mi Bemolle Maggiore.",
        notesTreble: [ // MD: Eb4-G4-Bb4
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            { keys: ["g/4", "bb/4", "eb/5"], duration: "w", midiValues: [67, 70, 75] },
            { keys: ["bb/4", "eb/5", "g/5"], duration: "w", midiValues: [70, 75, 79] },
            { keys: ["eb/5", "g/5", "bb/5"], duration: "w", midiValues: [75, 79, 82] },
        ],
        notesBass: [ // MS: Eb3-G3-Bb3
            { keys: ["eb/3", "g/3", "bb/3"], duration: "w", midiValues: [51, 55, 58] },
            { keys: ["g/3", "bb/3", "eb/4"], duration: "w", midiValues: [55, 58, 63] },
            { keys: ["bb/3", "eb/4", "g/4"], duration: "w", midiValues: [58, 63, 67] },
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
        ]
    },

    // --- Esercizio M12: Rivolti di La Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM12Ab", // Ab per La bemolle
        name: "Rivolti: Lab Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Ab", // Bb, Eb, Ab, Db
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65,
        description: "Rivolti dell'accordo di La Bemolle Maggiore.",
        notesTreble: [ // MD: Ab3-C4-Eb4
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            { keys: ["c/4", "eb/4", "ab/4"], duration: "w", midiValues: [60, 63, 68] },
            { keys: ["eb/4", "ab/4", "c/5"], duration: "w", midiValues: [63, 68, 72] },
            { keys: ["ab/4", "c/5", "eb/5"], duration: "w", midiValues: [68, 72, 75] },
        ],
        notesBass: [ // MS: Ab2-C3-Eb3
            { keys: ["ab/2", "c/3", "eb/3"], duration: "w", midiValues: [44, 48, 51] },
            { keys: ["c/3", "eb/3", "ab/3"], duration: "w", midiValues: [48, 51, 56] },
            { keys: ["eb/3", "ab/3", "c/4"], duration: "w", midiValues: [51, 56, 60] },
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
        ]
    },

    // --- Esercizio M13: Rivolti di Re Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM13Db", // Db per Re bemolle
        name: "Rivolti: Reb Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Db", // Bb, Eb, Ab, Db, Gb
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Rivolti dell'accordo di Re Bemolle Maggiore.",
        notesTreble: [ // MD: Db4-F4-Ab4
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            { keys: ["f/4", "ab/4", "db/5"], duration: "w", midiValues: [65, 68, 73] },
            { keys: ["ab/4", "db/5", "f/5"], duration: "w", midiValues: [68, 73, 77] },
            { keys: ["db/5", "f/5", "ab/5"], duration: "w", midiValues: [73, 77, 80] },
        ],
        notesBass: [ // MS: Db3-F3-Ab3
            { keys: ["db/3", "f/3", "ab/3"], duration: "w", midiValues: [49, 53, 56] },
            { keys: ["f/3", "ab/3", "db/4"], duration: "w", midiValues: [53, 56, 61] },
            { keys: ["ab/3", "db/4", "f/4"], duration: "w", midiValues: [56, 61, 65] },
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
        ]
    },

    // --- Esercizio M14: Rivolti di Sol Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM14Gb", // Gb per Sol bemolle
        name: "Rivolti: Solb Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Gb", // Bb, Eb, Ab, Db, Gb, Cb
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 60,
        description: "Rivolti dell'accordo di Sol Bemolle Maggiore.",
        notesTreble: [ // MD: Gb3-Bb3-Db4
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
            { keys: ["bb/3", "db/4", "gb/4"], duration: "w", midiValues: [58, 61, 66] },
            { keys: ["db/4", "gb/4", "bb/4"], duration: "w", midiValues: [61, 66, 70] },
            { keys: ["gb/4", "bb/4", "db/5"], duration: "w", midiValues: [66, 70, 73] },
        ],
        notesBass: [ // MS: Gb2-Bb2-Db3
            { keys: ["gb/2", "bb/2", "db/3"], duration: "w", midiValues: [42, 46, 49] },
            { keys: ["bb/2", "db/3", "gb/3"], duration: "w", midiValues: [46, 49, 54] },
            { keys: ["db/3", "gb/3", "bb/3"], duration: "w", midiValues: [49, 54, 58] },
            { keys: ["gb/3", "bb/3", "db/4"], duration: "w", midiValues: [54, 58, 61] },
        ]
    },

    // --- Esercizio M15: Rivolti di Do Bemolle Maggiore ---
    {
        id: "accordiRivolti-exM15Cb", // Cb per Do bemolle
        name: "Rivolti: Dob Maggiore",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "Cb", // Bb, Eb, Ab, Db, Gb, Cb, Fb
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 55,
        description: "Rivolti dell'accordo di Do Bemolle Maggiore.",
        notesTreble: [ // MD: Cb4-Eb4-Gb4
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] }, // Cb è B naturale
            { keys: ["eb/4", "gb/4", "cb/5"], duration: "w", midiValues: [63, 66, 71] },
            { keys: ["gb/4", "cb/5", "eb/5"], duration: "w", midiValues: [66, 71, 75] },
            { keys: ["cb/5", "eb/5", "gb/5"], duration: "w", midiValues: [71, 75, 78] },
        ],
        notesBass: [ // MS: Cb3-Eb3-Gb3
            { keys: ["cb/3", "eb/3", "gb/3"], duration: "w", midiValues: [47, 51, 54] },
            { keys: ["eb/3", "gb/3", "cb/4"], duration: "w", midiValues: [51, 54, 59] },
            { keys: ["gb/3", "cb/4", "eb/4"], duration: "w", midiValues: [54, 59, 63] },
            { keys: ["cb/4", "eb/4", "gb/4"], duration: "w", midiValues: [59, 63, 66] },
        ]
    },
    // ... (tutti gli esercizi degli accordi maggiori M1-M15 che abbiamo appena definito) ...

    // =======================================================================
    // === ACCORDI DI SETTIMA DI DOMINANTE - RIVOLTI ===
    // =======================================================================

    // --- Esercizio D1: Rivolti di Do7 (Settima di Dominante) ---
    {
        id: "accordiRivolti-exD1C7", // D per Dominante, C7 per Do7
        name: "Rivolti: Do7",
        category: "Accordi_Rivolti",
        staveLayout: "grand",
        keySignature: "C", // Per Do7, le alterazioni (Bb) saranno scritte
        timeSignature: "4/4",
        repetitions: 5,
        bpm: 65, // Un po' più lento per 4 note
        description: "Suonare l'accordo di Do7 (settima di dominante) in stato fondamentale e nei suoi tre rivolti, tornando allo stato fondamentale un'ottava sopra. Mani insieme.",

        notesTreble: [ // Mano Destra
            // Bar 1: Do7 (Stato Fondamentale) - C4-E4-G4-Bb4
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 2: Do7 (Primo Rivolto) - E4-G4-Bb4-C5
            { keys: ["e/4", "g/4", "bb/4", "c/5"], duration: "w", midiValues: [64, 67, 70, 72] },
            // Bar 3: Do7 (Secondo Rivolto) - G4-Bb4-C5-E5
            { keys: ["g/4", "bb/4", "c/5", "e/5"], duration: "w", midiValues: [67, 70, 72, 76] },
            // Bar 4: Do7 (Terzo Rivolto) - Bb4-C5-E5-G5
            { keys: ["bb/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [70, 72, 76, 79] },
            // Bar 5: Do7 (Stato Fondamentale, Ottava Sopra) - C5-E5-G5-Bb5
            { keys: ["c/5", "e/5", "g/5", "bb/5"], duration: "w", midiValues: [72, 76, 79, 82] },
        ],

        notesBass: [ // Mano Sinistra (un'ottava sotto la destra)
            // Bar 1: Do7 (Stato Fondamentale) - C3-E3-G3-Bb3
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },
            // Bar 2: Do7 (Primo Rivolto) - E3-G3-Bb3-C4
            { keys: ["e/3", "g/3", "bb/3", "c/4"], duration: "w", midiValues: [52, 55, 58, 60] },
            // Bar 3: Do7 (Secondo Rivolto) - G3-Bb3-C4-E4
            { keys: ["g/3", "bb/3", "c/4", "e/4"], duration: "w", midiValues: [55, 58, 60, 64] },
            // Bar 4: Do7 (Terzo Rivolto) - Bb3-C4-E4-G4
            { keys: ["bb/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [58, 60, 64, 67] },
            // Bar 5: Do7 (Stato Fondamentale, Ottava Sopra) - C4-E4-G4-Bb4
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
        ]
    },
    // Aggiungi qui il prossimo esercizio sui rivolti di settima (es. Sol7), separato da una virgola

];

// Assicura che window.exerciseData esista e aggiunge la nuova categoria
window.exerciseData = window.exerciseData || {};
window.exerciseData.Accordi_Rivolti = accordiRivoltiExercises;

// Messaggio per confermare il caricamento
console.log("Esercizi 'Accordi Rivolti' (accordi_rivolti.js) caricati. Esercizio 'accordiRivolti-exM1C' aggiunto.");