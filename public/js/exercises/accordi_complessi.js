// ====================================================================================
// === accordi_complessi.js                                                         ===
// === Contiene esercizi dedicati all'esplorazione di accordi estesi e complessi. ===
// ====================================================================================

const accordiComplessiExercises = [
    // =======================================================================
    // === Esercizio 1: Estensioni di Do Maggiore (C, C(add4), C6, C7, C9, C11, C13) - Solo Mano Destra ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniC-SoloMDx-v2", // Aggiornato ID per riflettere la modifica
        name: "Accordi Estesi: Do (Solo Mano Destra)",
        category: "Accordi_Complessi",
        staveLayout: "grand", // Manteniamo grand per coerenza, anche se la sx ha pause
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 70,
        description: "Esplorazione delle estensioni dell'accordo di Do Maggiore (C, C(add4), C6, C7, C9, C11, C13) suonate interamente dalla mano destra, con pause nella mano sinistra.",

        // Mano Destra: Accordi estesi
        notesTreble: [
            // Battuta 1: C (Do Maggiore Triade: C-E-G)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] },
            // Battuta 2: C(add4) (C-E-F-G)
            // Voicing: C4-E4-F4-G4.
            { keys: ["c/4", "e/4", "f/4", "g/4"], duration: "w", midiValues: [60, 64, 65, 67] },
            // Battuta 3: C6 (Do Sesta: C-E-G-A)
            { keys: ["c/4", "e/4", "g/4", "a/4"], duration: "w", midiValues: [60, 64, 67, 69] },
            // Battuta 4: C7 (Do Settima Dominante: C-E-G-Bb)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Battuta 5: C9 (Do Nona: C-E-G-Bb-D)
            // Voicing comune per piano solo (mano destra): E-G-Bb-D (3a, 5a, 7m, 9M) con C implicito o suonato prima.
            // Per questo esercizio, includiamo la fondamentale: C4-E4-Bb4-D5 (omessa la 5a G).
            { keys: ["c/4", "e/4", "bb/4", "d/5"], duration: "w", midiValues: [60, 64, 70, 74] },
            // Battuta 6: C11 (Do Undicesima: C-(E omessa)-G-Bb-D-F)
            // Voicing: C-G-Bb-F (Radice, 5a, 7m, 11a).
            { keys: ["c/4", "g/4", "bb/4", "f/5"], duration: "w", midiValues: [60, 67, 70, 77] },
            // Battuta 7: C13 (Do Tredicesima: C-E-G-Bb-D-F-A)
            // Voicing: C-E-Bb-A (Radice, 3M, 7m, 13M).
            { keys: ["c/4", "e/4", "bb/4", "a/5"], duration: "w", midiValues: [60, 64, 70, 81] }
        ],

        // Mano Sinistra: Pause
        notesBass: [
            // Battuta 1
            { keys: ["r/4"], duration: "w" }, // Pausa di semibreve
            // Battuta 2
            { keys: ["r/4"], duration: "w" },
            // Battuta 3
            { keys: ["r/4"], duration: "w" },
            // Battuta 4
            { keys: ["r/4"], duration: "w" },
            // Battuta 5
            { keys: ["r/4"], duration: "w" },
            // Battuta 6
            { keys: ["r/4"], duration: "w" },
            // Battuta 7
            { keys: ["r/4"], duration: "w" }
        ]
    },
// ====================================================================================
// === accordi_complessi.js                                                         ===
// === Contiene esercizi dedicati all'esplorazione di accordi estesi e complessi. ===
// ====================================================================================


    // =======================================================================
    // === Esercizio 1.1: Estensioni di Do Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniC-SoloMDx-v2",
        name: "Accordi Estesi: Do (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1, // Mettiamo 1 ripetizione per esercizio per non rendere troppo lungo il test
        bpm: 70,
        description: "Estensioni dell'accordo di Do Maggiore (C, C(add4), C6, C7, C9, C11, C13) suonate dalla mano destra.",
        notesTreble: [
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["c/4", "e/4", "f/4", "g/4"], duration: "w", midiValues: [60, 64, 65, 67] }, // C(add4)
            { keys: ["c/4", "e/4", "g/4", "a/4"], duration: "w", midiValues: [60, 64, 67, 69] }, // C6
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["c/4", "e/4", "bb/4", "d/5"], duration: "w", midiValues: [60, 64, 70, 74] }, // C9
            { keys: ["c/4", "g/4", "bb/4", "f/5"], duration: "w", midiValues: [60, 67, 70, 77] }, // C11
            { keys: ["c/4", "e/4", "bb/4", "a/5"], duration: "w", midiValues: [60, 64, 70, 81] }  // C13
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.2: Estensioni di SOL Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniG-SoloMDx-v1",
        name: "Accordi Estesi: Sol (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "G", // F#
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Sol Maggiore (G, G(add4), G6, G7, G9, G11, G13) suonate dalla mano destra.",
        notesTreble: [
            // G: G-B-D
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] },
            // G(add4): G-B-C-D (C è la 4a di G)
            { keys: ["g/3", "b/3", "c/4", "d/4"], duration: "w", midiValues: [55, 59, 60, 62] },
            // G6: G-B-D-E (E è la 6a di G)
            { keys: ["g/3", "b/3", "d/4", "e/4"], duration: "w", midiValues: [55, 59, 62, 64] },
            // G7: G-B-D-F (F naturale è la 7m di G)
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] },
            // G9: G-B-F-A (Radice, 3M, 7m, 9M. D omessa) (A è la 9a di G)
            { keys: ["g/3", "b/3", "f/4", "a/4"], duration: "w", midiValues: [55, 59, 65, 69] },
            // G11: G-D-F-C (Radice, 5G, 7m, 11G. B omessa) (C è la 11a di G)
            { keys: ["g/3", "d/4", "f/4", "c/5"], duration: "w", midiValues: [55, 62, 65, 72] },
            // G13: G-B-F-E (Radice, 3M, 7m, 13M. E è la 13a di G)
            { keys: ["g/3", "b/3", "f/4", "e/5"], duration: "w", midiValues: [55, 59, 65, 76] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.3: Estensioni di RE Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniD-SoloMDx-v1",
        name: "Accordi Estesi: Re (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "D", // F#, C#
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Re Maggiore (D, D(add4), D6, D7, D9, D11, D13) suonate dalla mano destra.",
        notesTreble: [
            // D: D-F#-A
            { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] },
            // D(add4): D-F#-G-A (G è la 4a)
            { keys: ["d/4", "f#/4", "g/4", "a/4"], duration: "w", midiValues: [62, 66, 67, 69] },
            // D6: D-F#-A-B (B è la 6a)
            { keys: ["d/4", "f#/4", "a/4", "b/4"], duration: "w", midiValues: [62, 66, 69, 71] },
            // D7: D-F#-A-C (C naturale è la 7m)
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] },
            // D9: D-F#-C-E (E è la 9a)
            { keys: ["d/4", "f#/4", "c/5", "e/5"], duration: "w", midiValues: [62, 66, 72, 76] },
            // D11: D-A-C-G (G è la 11a)
            { keys: ["d/4", "a/4", "c/5", "g/5"], duration: "w", midiValues: [62, 69, 72, 79] },
            // D13: D-F#-C-B (B è la 13a)
            { keys: ["d/4", "f#/4", "c/5", "b/5"], duration: "w", midiValues: [62, 66, 72, 83] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.4: Estensioni di LA Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniA-SoloMDx-v1",
        name: "Accordi Estesi: La (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "A", // F#, C#, G#
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di La Maggiore (A, A(add4), A6, A7, A9, A11, A13) suonate dalla mano destra.",
        notesTreble: [
            // A: A-C#-E
            { keys: ["a/3", "c#/4", "e/4"], duration: "w", midiValues: [57, 61, 64] },
            // A(add4): A-C#-D-E (D è la 4a)
            { keys: ["a/3", "c#/4", "d/4", "e/4"], duration: "w", midiValues: [57, 61, 62, 64] },
            // A6: A-C#-E-F# (F# è la 6a)
            { keys: ["a/3", "c#/4", "e/4", "f#/4"], duration: "w", midiValues: [57, 61, 64, 66] },
            // A7: A-C#-E-G (G naturale è la 7m)
            { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] },
            // A9: A-C#-G-B (B è la 9a)
            { keys: ["a/3", "c#/4", "g/4", "b/4"], duration: "w", midiValues: [57, 61, 67, 71] },
            // A11: A-E-G-D (D è la 11a)
            { keys: ["a/3", "e/4", "g/4", "d/5"], duration: "w", midiValues: [57, 64, 67, 74] },
            // A13: A-C#-G-F# (F# è la 13a)
            { keys: ["a/3", "c#/4", "g/4", "f#/5"], duration: "w", midiValues: [57, 61, 67, 78] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.5: Estensioni di MI Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniE-SoloMDx-v1",
        name: "Accordi Estesi: Mi (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "E", // F#, C#, G#, D#
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Mi Maggiore (E, E(add4), E6, E7, E9, E11, E13) suonate dalla mano destra.",
        notesTreble: [
            // E: E-G#-B
            { keys: ["e/4", "g#/4", "b/4"], duration: "w", midiValues: [64, 68, 71] },
            // E(add4): E-G#-A-B (A è la 4a)
            { keys: ["e/4", "g#/4", "a/4", "b/4"], duration: "w", midiValues: [64, 68, 69, 71] },
            // E6: E-G#-B-C# (C# è la 6a)
            { keys: ["e/4", "g#/4", "b/4", "c#/5"], duration: "w", midiValues: [64, 68, 71, 73] },
            // E7: E-G#-B-D (D naturale è la 7m)
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] },
            // E9: E-G#-D-F# (F# è la 9a)
            { keys: ["e/4", "g#/4", "d/5", "f#/5"], duration: "w", midiValues: [64, 68, 74, 78] },
            // E11: E-B-D-A (A è la 11a)
            { keys: ["e/4", "b/4", "d/5", "a/5"], duration: "w", midiValues: [64, 71, 74, 81] },
            // E13: E-G#-D-C# (C# è la 13a)
            { keys: ["e/4", "g#/4", "d/5", "c#/6"], duration: "w", midiValues: [64, 68, 74, 85] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.6: Estensioni di SI Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniB-SoloMDx-v1",
        name: "Accordi Estesi: Si (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "B", // F#, C#, G#, D#, A#
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Si Maggiore (B, B(add4), B6, B7, B9, B11, B13) suonate dalla mano destra.",
        notesTreble: [
            // B: B-D#-F#
            { keys: ["b/3", "d#/4", "f#/4"], duration: "w", midiValues: [59, 63, 66] },
            // B(add4): B-D#-E-F# (E è la 4a)
            { keys: ["b/3", "d#/4", "e/4", "f#/4"], duration: "w", midiValues: [59, 63, 64, 66] },
            // B6: B-D#-F#-G# (G# è la 6a)
            { keys: ["b/3", "d#/4", "f#/4", "g#/4"], duration: "w", midiValues: [59, 63, 66, 68] },
            // B7: B-D#-F#-A (A naturale è la 7m)
            { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] },
            // B9: B-D#-A-C# (C# è la 9a)
            { keys: ["b/3", "d#/4", "a/4", "c#/5"], duration: "w", midiValues: [59, 63, 69, 73] },
            // B11: B-F#-A-E (E è la 11a)
            { keys: ["b/3", "f#/4", "a/4", "e/5"], duration: "w", midiValues: [59, 66, 69, 76] },
            // B13: B-D#-A-G# (G# è la 13a)
            { keys: ["b/3", "d#/4", "a/4", "g#/5"], duration: "w", midiValues: [59, 63, 69, 80] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.7: Estensioni di FA# Maggiore (Solo Mano Destra) ===
    // =======================================================================
    // FA# è enarmonico di SOLb. Useremo FA# per il circolo dei diesis.
    {
        id: "accordiComplessi-ex1-EstensioniFs-SoloMDx-v1", // Fs per F#
        name: "Accordi Estesi: Fa# (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "F#", // F#, C#, G#, D#, A#, E# (E# è F naturale)
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Fa# Maggiore (F#, F#(add4), F#6, F#7, F#9, F#11, F#13) suonate dalla mano destra.",
        notesTreble: [
            // F#: F#-A#-C#
            { keys: ["f#/3", "a#/3", "c#/4"], duration: "w", midiValues: [54, 58, 61] },
            // F#(add4): F#-A#-B-C# (B è la 4a)
            { keys: ["f#/3", "a#/3", "b/3", "c#/4"], duration: "w", midiValues: [54, 58, 59, 61] },
            // F#6: F#-A#-C#-D# (D# è la 6a)
            { keys: ["f#/3", "a#/3", "c#/4", "d#/4"], duration: "w", midiValues: [54, 58, 61, 63] },
            // F#7: F#-A#-C#-E (E naturale è la 7m)
            { keys: ["f#/3", "a#/3", "c#/4", "e/4"], duration: "w", midiValues: [54, 58, 61, 64] },
            // F#9: F#-A#-E-G# (G# è la 9a)
            { keys: ["f#/3", "a#/3", "e/4", "g#/4"], duration: "w", midiValues: [54, 58, 64, 68] },
            // F#11: F#-C#-E-B (B è la 11a)
            { keys: ["f#/3", "c#/4", "e/4", "b/4"], duration: "w", midiValues: [54, 61, 64, 71] },
            // F#13: F#-A#-E-D# (D# è la 13a)
            { keys: ["f#/3", "a#/3", "e/4", "d#/5"], duration: "w", midiValues: [54, 58, 64, 75] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // Ora le tonalità con i bemolli
    // =======================================================================
    // === Esercizio 1.8: Estensioni di FA Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniF-SoloMDx-v1",
        name: "Accordi Estesi: Fa (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "F", // Bb
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Fa Maggiore (F, F(add4), F6, F7, F9, F11, F13) suonate dalla mano destra.",
        notesTreble: [
            // F: F-A-C
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] },
            // F(add4): F-A-Bb-C (Bb è la 4a)
            { keys: ["f/3", "a/3", "bb/3", "c/4"], duration: "w", midiValues: [53, 57, 58, 60] },
            // F6: F-A-C-D (D è la 6a)
            { keys: ["f/3", "a/3", "c/4", "d/4"], duration: "w", midiValues: [53, 57, 60, 62] },
            // F7: F-A-C-Eb (Eb è la 7m)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // F9: F-A-Eb-G (G è la 9a)
            { keys: ["f/3", "a/3", "eb/4", "g/4"], duration: "w", midiValues: [53, 57, 63, 67] },
            // F11: F-C-Eb-Bb (Bb è la 11a)
            { keys: ["f/3", "c/4", "eb/4", "bb/4"], duration: "w", midiValues: [53, 60, 63, 70] },
            // F13: F-A-Eb-D (D è la 13a)
            { keys: ["f/3", "a/3", "eb/4", "d/5"], duration: "w", midiValues: [53, 57, 63, 74] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.9: Estensioni di SIb Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniBb-SoloMDx-v1", // Bb per Si bemolle
        name: "Accordi Estesi: Sib (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "Bb", // Bb, Eb
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Sib Maggiore (Bb, Bb(add4), Bb6, Bb7, Bb9, Bb11, Bb13) suonate dalla mano destra.",
        notesTreble: [
            // Bb: Bb-D-F
            { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] },
            // Bb(add4): Bb-D-Eb-F (Eb è la 4a)
            { keys: ["bb/3", "d/4", "eb/4", "f/4"], duration: "w", midiValues: [58, 62, 63, 65] },
            // Bb6: Bb-D-F-G (G è la 6a)
            { keys: ["bb/3", "d/4", "f/4", "g/4"], duration: "w", midiValues: [58, 62, 65, 67] },
            // Bb7: Bb-D-F-Ab (Ab è la 7m)
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] },
            // Bb9: Bb-D-Ab-C (C è la 9a)
            { keys: ["bb/3", "d/4", "ab/4", "c/5"], duration: "w", midiValues: [58, 62, 68, 72] },
            // Bb11: Bb-F-Ab-Eb (Eb è la 11a)
            { keys: ["bb/3", "f/4", "ab/4", "eb/5"], duration: "w", midiValues: [58, 65, 68, 75] },
            // Bb13: Bb-D-Ab-G (G è la 13a)
            { keys: ["bb/3", "d/4", "ab/4", "g/5"], duration: "w", midiValues: [58, 62, 68, 79] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.10: Estensioni di MIb Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniEb-SoloMDx-v1", // Eb per Mi bemolle
        name: "Accordi Estesi: Mib (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "Eb", // Bb, Eb, Ab
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Mib Maggiore (Eb, Eb(add4), Eb6, Eb7, Eb9, Eb11, Eb13) suonate dalla mano destra.",
        notesTreble: [
            // Eb: Eb-G-Bb
            { keys: ["eb/4", "g/4", "bb/4"], duration: "w", midiValues: [63, 67, 70] },
            // Eb(add4): Eb-G-Ab-Bb (Ab è la 4a)
            { keys: ["eb/4", "g/4", "ab/4", "bb/4"], duration: "w", midiValues: [63, 67, 68, 70] },
            // Eb6: Eb-G-Bb-C (C è la 6a)
            { keys: ["eb/4", "g/4", "bb/4", "c/5"], duration: "w", midiValues: [63, 67, 70, 72] },
            // Eb7: Eb-G-Bb-Db (Db è la 7m)
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] },
            // Eb9: Eb-G-Db-F (F è la 9a)
            { keys: ["eb/4", "g/4", "db/5", "f/5"], duration: "w", midiValues: [63, 67, 73, 77] },
            // Eb11: Eb-Bb-Db-Ab (Ab è la 11a)
            { keys: ["eb/4", "bb/4", "db/5", "ab/5"], duration: "w", midiValues: [63, 70, 73, 80] },
            // Eb13: Eb-G-Db-C (C è la 13a)
            { keys: ["eb/4", "g/4", "db/5", "c/6"], duration: "w", midiValues: [63, 67, 73, 84] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.11: Estensioni di LAb Maggiore (Solo Mano Destra) ===
    // =======================================================================
    {
        id: "accordiComplessi-ex1-EstensioniAb-SoloMDx-v1", // Ab per La bemolle
        name: "Accordi Estesi: Lab (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "Ab", // Bb, Eb, Ab, Db
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Lab Maggiore (Ab, Ab(add4), Ab6, Ab7, Ab9, Ab11, Ab13) suonate dalla mano destra.",
        notesTreble: [
            // Ab: Ab-C-Eb
            { keys: ["ab/3", "c/4", "eb/4"], duration: "w", midiValues: [56, 60, 63] },
            // Ab(add4): Ab-C-Db-Eb (Db è la 4a)
            { keys: ["ab/3", "c/4", "db/4", "eb/4"], duration: "w", midiValues: [56, 60, 61, 63] },
            // Ab6: Ab-C-Eb-F (F è la 6a)
            { keys: ["ab/3", "c/4", "eb/4", "f/4"], duration: "w", midiValues: [56, 60, 63, 65] },
            // Ab7: Ab-C-Eb-Gb (Gb è la 7m)
            { keys: ["ab/3", "c/4", "eb/4", "gb/4"], duration: "w", midiValues: [56, 60, 63, 66] },
            // Ab9: Ab-C-Gb-Bb (Bb è la 9a)
            { keys: ["ab/3", "c/4", "gb/4", "bb/4"], duration: "w", midiValues: [56, 60, 66, 70] },
            // Ab11: Ab-Eb-Gb-Db (Db è la 11a)
            { keys: ["ab/3", "eb/4", "gb/4", "db/5"], duration: "w", midiValues: [56, 63, 66, 73] },
            // Ab13: Ab-C-Gb-F (F è la 13a)
            { keys: ["ab/3", "c/4", "gb/4", "f/5"], duration: "w", midiValues: [56, 60, 66, 77] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },

    // =======================================================================
    // === Esercizio 1.12: Estensioni di REb Maggiore (Solo Mano Destra) ===
    // =======================================================================
    // REb è enarmonico di DO#. Useremo REb per il circolo dei bemolli.
    {
        id: "accordiComplessi-ex1-EstensioniDb-SoloMDx-v1", // Db per Re bemolle
        name: "Accordi Estesi: Reb (Solo MDx)",
        category: "Accordi_Complessi",
        staveLayout: "grand",
        keySignature: "Db", // Bb, Eb, Ab, Db, Gb
        timeSignature: "4/4",
        repetitions: 1,
        bpm: 70,
        description: "Estensioni dell'accordo di Reb Maggiore (Db, Db(add4), Db6, Db7, Db9, Db11, Db13) suonate dalla mano destra.",
        notesTreble: [
            // Db: Db-F-Ab
            { keys: ["db/4", "f/4", "ab/4"], duration: "w", midiValues: [61, 65, 68] },
            // Db(add4): Db-F-Gb-Ab (Gb è la 4a)
            { keys: ["db/4", "f/4", "gb/4", "ab/4"], duration: "w", midiValues: [61, 65, 66, 68] },
            // Db6: Db-F-Ab-Bb (Bb è la 6a)
            { keys: ["db/4", "f/4", "ab/4", "bb/4"], duration: "w", midiValues: [61, 65, 68, 70] },
            // Db7: Db-F-Ab-Cb (Cb è B naturale, la 7m)
            { keys: ["db/4", "f/4", "ab/4", "cb/5"], duration: "w", midiValues: [61, 65, 68, 71] }, // Cb5 = MIDI 71
            // Db9: Db-F-Cb-Eb (Eb è la 9a)
            { keys: ["db/4", "f/4", "cb/5", "eb/5"], duration: "w", midiValues: [61, 65, 71, 75] },
            // Db11: Db-Ab-Cb-Gb (Gb è la 11a)
            { keys: ["db/4", "ab/4", "cb/5", "gb/5"], duration: "w", midiValues: [61, 68, 71, 78] },
            // Db13: Db-F-Cb-Bb (Bb è la 13a)
            { keys: ["db/4", "f/4", "cb/5", "bb/5"], duration: "w", midiValues: [61, 65, 71, 82] }
        ],
        notesBass: [
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }
        ]
    },
    // Opzionale: DO# (enarmonico di REb) e SOLb (enarmonico di FA#) se si vuole essere ultra-completi
    // Ma le 12 tonalità di base (C, G, D, A, E, B, F#, F, Bb, Eb, Ab, Db) coprono tutti i suoni.

    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI SUGLI ACCORDI COMPLESSI ---
]; // Fine dell'array accordiComplessiExercises
