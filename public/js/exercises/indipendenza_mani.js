// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

const indipendenzaManiExercises = [
    // =================================================================================
    // === Esercizio 1: Nota Tenuta (Sx) vs. Note Staccate (Dx) - Do Maggiore - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex1-TenutaSxStaccatoDxC-8bar-v1",
        name: "Indipendenza: Tenuta (Sx) vs. Staccato (Dx) - Do Mag",
        category: "Indipendenza_Mani", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 80, // Moderato per concentrarsi sulla precisione
        description: "Mano sinistra tiene note lunghe (semibrevi) mentre la mano destra suona note singole staccate (semiminime) su una scala di Do. Utile per indipendenza di tocco e durata.",

        // Mano Destra: Note staccate (semiminime) - Scala di Do ascendente e discendente
        // Per lo staccato, idealmente il MIDI accorcerebbe la nota. Visivamente, VexFlow potrebbe aggiungere un punto.
        // Per ora, ci concentriamo sulla notazione base, lo staccato è un'indicazione di performance.
        notesTreble: [
            // Battuta 1 (Ascendente)
            { keys: ["c/4"], duration: "q", midiValue: 60 /* staccato: true */ },
            { keys: ["d/4"], duration: "q", midiValue: 62 /* staccato: true */ },
            { keys: ["e/4"], duration: "q", midiValue: 64 /* staccato: true */ },
            { keys: ["f/4"], duration: "q", midiValue: 65 /* staccato: true */ },
            // Battuta 2
            { keys: ["g/4"], duration: "q", midiValue: 67 /* staccato: true */ },
            { keys: ["a/4"], duration: "q", midiValue: 69 /* staccato: true */ },
            { keys: ["b/4"], duration: "q", midiValue: 71 /* staccato: true */ },
            { keys: ["c/5"], duration: "q", midiValue: 72 /* staccato: true */ },
            // Battuta 3 (Ripete C5 e inizia discesa)
            { keys: ["c/5"], duration: "q", midiValue: 72 /* staccato: true */ },
            { keys: ["b/4"], duration: "q", midiValue: 71 /* staccato: true */ },
            { keys: ["a/4"], duration: "q", midiValue: 69 /* staccato: true */ },
            { keys: ["g/4"], duration: "q", midiValue: 67 /* staccato: true */ },
            // Battuta 4
            { keys: ["f/4"], duration: "q", midiValue: 65 /* staccato: true */ },
            { keys: ["e/4"], duration: "q", midiValue: 64 /* staccato: true */ },
            { keys: ["d/4"], duration: "q", midiValue: 62 /* staccato: true */ },
            { keys: ["c/4"], duration: "q", midiValue: 60 /* staccato: true */ },
            // Battuta 5 (Come Battuta 1)
            { keys: ["c/4"], duration: "q", midiValue: 60 /* staccato: true */ },
            { keys: ["d/4"], duration: "q", midiValue: 62 /* staccato: true */ },
            { keys: ["e/4"], duration: "q", midiValue: 64 /* staccato: true */ },
            { keys: ["f/4"], duration: "q", midiValue: 65 /* staccato: true */ },
            // Battuta 6 (Come Battuta 2)
            { keys: ["g/4"], duration: "q", midiValue: 67 /* staccato: true */ },
            { keys: ["a/4"], duration: "q", midiValue: 69 /* staccato: true */ },
            { keys: ["b/4"], duration: "q", midiValue: 71 /* staccato: true */ },
            { keys: ["c/5"], duration: "q", midiValue: 72 /* staccato: true */ },
            // Battuta 7 (Come Battuta 3)
            { keys: ["c/5"], duration: "q", midiValue: 72 /* staccato: true */ },
            { keys: ["b/4"], duration: "q", midiValue: 71 /* staccato: true */ },
            { keys: ["a/4"], duration: "q", midiValue: 69 /* staccato: true */ },
            { keys: ["g/4"], duration: "q", midiValue: 67 /* staccato: true */ },
            // Battuta 8 (Finale)
            { keys: ["f/4"], duration: "q", midiValue: 65 /* staccato: true */ },
            { keys: ["e/4"], duration: "q", midiValue: 64 /* staccato: true */ },
            { keys: ["d/4"], duration: "h", midiValue: 62 /* staccato: true -> no, tenuta */ }, // Finale un po' più lungo
        ],

        // Mano Sinistra: Note tenute (semibrevi) - Gradi della scala di Do
        notesBass: [
            // Battuta 1
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // Do
            // Battuta 2
            { keys: ["d/3"], duration: "w", midiValues: [50] }, // Re
            // Battuta 3
            { keys: ["e/3"], duration: "w", midiValues: [52] }, // Mi
            // Battuta 4
            { keys: ["f/3"], duration: "w", midiValues: [53] }, // Fa
            // Battuta 5
            { keys: ["g/2"], duration: "w", midiValues: [43] }, // Sol (ottava più bassa per varietà)
            // Battuta 6
            { keys: ["a/2"], duration: "w", midiValues: [45] }, // La
            // Battuta 7
            { keys: ["b/2"], duration: "w", midiValues: [47] }, // Si
            // Battuta 8
            { keys: ["c/3"], duration: "w", midiValues: [48] }  // Do
        ]
    },
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato nel precedente blocco
    // ... (Esercizio 1 già presente) ...
    // =================================================================================
    // === Esercizio 2: Nota Tenuta (Dx) vs. Staccato Sincopato (Sx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex2-TenutaDxStaccatoSincSxCM-8bar-v1", // CM per C Major
        name: "Indipendenza: Tenuta (Dx) vs. Staccato Sinc. (Sx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 75, // Leggermente più lento per la sincope
        description: "Mano destra tiene note lunghe (semibrevi) mentre la mano sinistra suona un pattern ritmico staccato con una sincope (croma in levare) sui gradi della scala di Do.",

        // Mano Destra: Note tenute (semibrevi) - Melodia semplice su armonia di Do
        notesTreble: [
            // Battuta 1
            { keys: ["e/4"], duration: "w", midiValues: [64] }, // Mi (terza di C)
            // Battuta 2
            { keys: ["f/4"], duration: "w", midiValues: [65] }, // Fa (terza di Dm, o 4a di C)
            // Battuta 3
            { keys: ["g/4"], duration: "w", midiValues: [67] }, // Sol (quinta di C)
            // Battuta 4
            { keys: ["e/4"], duration: "w", midiValues: [64] }, // Mi
            // Battuta 5
            { keys: ["d/4"], duration: "w", midiValues: [62] }, // Re (prepara G)
            // Battuta 6
            { keys: ["c/4"], duration: "w", midiValues: [60] }, // Do (tonica)
            // Battuta 7
            { keys: ["b/3"], duration: "w", midiValues: [59] }, // Si (sensibile, prepara C)
            // Battuta 8
            { keys: ["c/4"], duration: "w", midiValues: [60] }  // Do
        ],

        // Mano Sinistra: Pattern staccato con sincope
        // Pattern per battuta: [Croma Stacc.] [Croma Stacc.] [Semiminima Stacc.] | [Pausa Croma] [Croma Stacc. in levare] [Semiminima Stacc.]
        // Ritmo:         1   e   2   e   |   3   e   4   e
        // Note:          X   X   X       |       _   X   X
        // Durate effettive:8   8   q       |   8r  8   q
        notesBass: [
            // Mano Sinistra suona C2, D2, E2, F2, G2, A2, B2, C3 (note singole)
            // Battuta 1 (su C2)
            { keys: ["c/2"], duration: "8", midiValues: [36] /* staccato: true */ }, { keys: ["c/2"], duration: "8", midiValues: [36] /* staccato: true */ }, { keys: ["c/2"], duration: "q", midiValues: [36] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["c/2"], duration: "8", midiValues: [36] /* staccato: true */ }, { keys: ["c/2"], duration: "q", midiValues: [36] /* staccato: true */ },
            // Battuta 2 (su D2)
            { keys: ["d/2"], duration: "8", midiValues: [38] /* staccato: true */ }, { keys: ["d/2"], duration: "8", midiValues: [38] /* staccato: true */ }, { keys: ["d/2"], duration: "q", midiValues: [38] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["d/2"], duration: "8", midiValues: [38] /* staccato: true */ }, { keys: ["d/2"], duration: "q", midiValues: [38] /* staccato: true */ },
            // Battuta 3 (su E2)
            { keys: ["e/2"], duration: "8", midiValues: [40] /* staccato: true */ }, { keys: ["e/2"], duration: "8", midiValues: [40] /* staccato: true */ }, { keys: ["e/2"], duration: "q", midiValues: [40] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["e/2"], duration: "8", midiValues: [40] /* staccato: true */ }, { keys: ["e/2"], duration: "q", midiValues: [40] /* staccato: true */ },
            // Battuta 4 (su F2)
            { keys: ["f/2"], duration: "8", midiValues: [41] /* staccato: true */ }, { keys: ["f/2"], duration: "8", midiValues: [41] /* staccato: true */ }, { keys: ["f/2"], duration: "q", midiValues: [41] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["f/2"], duration: "8", midiValues: [41] /* staccato: true */ }, { keys: ["f/2"], duration: "q", midiValues: [41] /* staccato: true */ },
            // Battuta 5 (su G2)
            { keys: ["g/2"], duration: "8", midiValues: [43] /* staccato: true */ }, { keys: ["g/2"], duration: "8", midiValues: [43] /* staccato: true */ }, { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["g/2"], duration: "8", midiValues: [43] /* staccato: true */ }, { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ },
            // Battuta 6 (su A2)
            { keys: ["a/2"], duration: "8", midiValues: [45] /* staccato: true */ }, { keys: ["a/2"], duration: "8", midiValues: [45] /* staccato: true */ }, { keys: ["a/2"], duration: "q", midiValues: [45] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["a/2"], duration: "8", midiValues: [45] /* staccato: true */ }, { keys: ["a/2"], duration: "q", midiValues: [45] /* staccato: true */ },
            // Battuta 7 (su B2)
            { keys: ["b/2"], duration: "8", midiValues: [47] /* staccato: true */ }, { keys: ["b/2"], duration: "8", midiValues: [47] /* staccato: true */ }, { keys: ["b/2"], duration: "q", midiValues: [47] /* staccato: true */ },
            { keys: ["r/4"], duration: "8" }, { keys: ["b/2"], duration: "8", midiValues: [47] /* staccato: true */ }, { keys: ["b/2"], duration: "q", midiValues: [47] /* staccato: true */ },
            // Battuta 8 (su C3) - Finale, pattern leggermente variato per chiudere
            { keys: ["c/3"], duration: "8", midiValues: [48] /* staccato: true */ }, { keys: ["c/3"], duration: "8", midiValues: [48] /* staccato: true */ }, { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ },
            { keys: ["c/3"], duration: "h", midiValues: [48] /* staccato: false */ }, // Nota finale tenuta
        ]
    },
   // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizio 1 e 2 già presenti) ...
    // =================================================================================
    // === Esercizio 3: Scale Moto Contrario, Ritmi Diversi - Do Mag - 8 Battute       ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex3-MotoContrarioRitmiDivCM-8bar-v1",
        name: "Indipendenza: Scale Moto Contrario, Ritmi Diversi - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 90, // Un po' più veloce per sentire il flusso delle crome
        description: "Mano destra suona una scala di Do ascendente/discendente in semiminime. Mano sinistra suona la scala di Do in moto contrario (discendente/ascendente) in crome.",

        // Mano Destra: Scala di Do in semiminime (ascendente poi discendente)
        // C4-D4-E4-F4 | G4-A4-B4-C5 | C5-B4-A4-G4 | F4-E4-D4-C4 | (ripete)
        notesTreble: [
            // Battuta 1 (Ascendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 2
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 3 (Discendente)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 4
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 5 (Ripete ascendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 6
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 7 (Ripete discendente)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 8 (Finale)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["c/4"], duration: "q", midiValues: [60] }
        ],

        // Mano Sinistra: Scala di Do in crome, moto contrario (discendente poi ascendente)
        // Parte da C4 discendendo, mentre la destra parte da C4 ascendendo.
        // C4-B3-A3-G3-F3-E3-D3-C3 | C3-D3-E3-F3-G3-A3-B3-C4 | (ripete)
        notesBass: [
            // Battuta 1 (Discendente)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 2 (Raggiunge C3 e inverte)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 3 (Ascendente, mentre Dx discende)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, // Errore mio, deve continuare ad ascendere o discendere coerentemente.
            // Correggo: la sinistra continua il pattern iniziato.
            // Se Dx scende da C5, Sx ascende da C3 (o viceversa se vogliamo un punto d'incontro diverso)
            // Coerenza: Dx ASC (C4->C5), Sx DISC (C4->C3). Poi Dx DISC (C5->C4), Sx ASC (C3->C4).
            // Quindi battuta 3 per SX deve essere ascendente
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 4
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, // E qui Sx deve tornare a scendere
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] },

            // Battuta 5 (Ripete pattern: Sx Discendente)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 6 (Sx Ascendente)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 7 (Sx Ascendente)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 8 (Sx Discendente - Finale)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["c/3"], duration: "8", midiValues: [48] }
        ]
    },
 // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1, 2, 3 già presenti) ...
    // =================================================================================
    // === Esercizio 4: Scale Moto Contrario, Ritmi Div (Invertito) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex4-MotoContrarioRitmiDivInvCM-8bar-v1",
        name: "Indipendenza: Scale Moto Contrario, Ritmi Div (Invertito) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 90,
        description: "Mano sinistra suona una scala di Do ascendente/discendente in semiminime. Mano destra suona la scala di Do in moto contrario (discendente/ascendente) in crome.",

        // Mano Destra: Scala di Do in crome, moto contrario (discendente poi ascendente)
        // Rispetto alla sinistra, parte da C5 discendendo.
        // Sx: C3 D3 E3 F3 (asc) -> Dx: C5 B4 A4 G4 F4 E4 D4 C4 (disc)
        // Sx: G3 A3 B3 C4 (asc) -> Dx: C4 D4 E4 F4 G4 A4 B4 C5 (asc)
        notesTreble: [
            // Battuta 1 (Dx Discendente: C5 -> C4)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 2 (Dx Ascendente: C4 -> C5)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Battuta 3 (Dx Discendente: C5 -> C4)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 4 (Dx Ascendente: C4 -> C5)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Battuta 5 (Ripete Dx Discendente: C5 -> C4)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 6 (Ripete Dx Ascendente: C4 -> C5)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Battuta 7 (Ripete Dx Discendente: C5 -> C4)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 8 (Ripete Dx Ascendente: C4 -> C5 - Finale)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
        ],

        // Mano Sinistra: Scala di Do in semiminime (ascendente poi discendente)
        // C3-D3-E3-F3 | G3-A3-B3-C4 | C4-B3-A3-G3 | F3-E3-D3-C3 | (ripete)
        notesBass: [
            // Battuta 1 (Sx Ascendente)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 2
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 3 (Sx Discendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 4
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 5 (Ripete Sx ascendente)
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            // Battuta 6
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 7 (Ripete Sx discendente)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 8 (Finale)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] }
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1, 2, 3, 4 già presenti) ...
    // =================================================================================
    // === Esercizio 5: Due Linee Melodiche Indipendenti - Do Mag - 8 Battute          ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex5-ContrappuntoSempliceCM-8bar-v1",
        name: "Indipendenza: Due Linee Melodiche Indipendenti - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 70, // Lento per permettere di seguire le due linee
        description: "Ogni mano suona una linea melodica indipendente in semiminime, creando un semplice contrappunto a due voci in Do Maggiore.",

        // Mano Destra: Linea Melodica 1 (Soprano)
        notesTreble: [
            // Battuta 1
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 2
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 3
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 4
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 5
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            // Battuta 6
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 7
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 8 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] }
        ],

        // Mano Sinistra: Linea Melodica 2 (Basso/Tenore)
        notesBass: [
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 2
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, // Salto melodico per interesse
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 3
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 4
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 5
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["e/2"], duration: "q", midiValues: [40] }, // Linea discendente
            // Battuta 6
            { keys: ["d/3"], duration: "h", midiValues: [50] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 7
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 8 (Finale)
            { keys: ["c/3"], duration: "w", midiValues: [48] }
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1, 2, 3, 4, 5 già presenti) ...
    // =================================================================================
    // === Esercizio 6: Terzine (Dx) vs. Duine (Sx) - Do Mag - 8 Battute              ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex6-TerzineDxDuineSxCM-8bar-v1",
        name: "Indipendenza: Terzine (Dx) vs. Duine (Sx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Ogni semiminima contiene 3 note Dx e 2 note Sx
        repetitions: 2,
        bpm: 60, // Molto lento all'inizio per padroneggiare il 3 vs 2
        description: "Mano destra suona terzine di crome, mano sinistra suona crome normali (duine). Esercizio per l'indipendenza ritmica (3 contro 2).",

        // Mano Destra: Terzine di crome (3 note per ogni semiminima)
        // VexFlow gestisce le terzine con la proprietà 'tuplet' o specificando la durata come "8t"
        // Per semplicità nella struttura dati, assumiamo che il renderer sappia interpretare
        // tre crome consecutive in un tempo come una terzina, oppure modifichiamo la durata.
        // Usiamo la notazione esplicita con modificatore di durata per VexFlow (es. "8/t") o il modo in cui il tuo sistema gestisce i tupletti.
        // Se il tuo sistema non ha un modo semplice per i tupletti nei dati, potremmo dover "simulare"
        // il suono con durate approssimate o accettare che VexFlow le mostri come crome normali ma l'intenzione è di terzina.
        // Per ora, userò "8" ma l'intenzione è che TRE di queste riempiano una semiminima.
        // Questo significa che per VexFlow, dovrai probabilmente aggiungere un Beam e un Tuplet manualmente.
        // Se il tuo `vexflow_renderer.js` può gestire una proprietà tipo `tuplet: "3/2"` (3 note nello spazio di 2), sarebbe ideale.
        // Per ora, specificherò le note come se fossero crome normali, ma la descrizione e il BPM indicano l'intenzione.
        // L'alternativa è usare durate tipo "8t" se VexFlow le supporta direttamente nei dati.
        // Proviamo a definire ogni nota della terzina come se occupasse 1/3 di semiminima.
        // Una semiminima = 1. Una croma = 0.5. Una croma di terzina = 1/3 ~= 0.333
        // Non c'è una durata standard VexFlow per "croma di terzina" diretta come stringa semplice.
        // Soluzione: definiamo ogni gruppo di 3 crome per ogni semiminima della Sx.
        // La durata "8" è intesa come croma. Servono 3 crome per ogni semiminima.
        // La soluzione più pulita sarebbe che il tuo renderer aggiunga i tupletti.
        // Per l'array di note: inserisco 3 crome per ogni semiminima di riferimento.

        notesTreble: [ // 3 crome per ogni semiminima = 12 crome per battuta 4/4
            // Battuta 1 (su C4)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Tempo 1
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Tempo 2
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Tempo 3
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Tempo 4
            // Battuta 2 (su D4)
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 3 (su E4)
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 4 (su F4)
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            // Battuta 5 (su G4)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 6 (su A4)
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            // Battuta 7 (su B4)
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            // Battuta 8 (su C5 - Finale)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["c/5"], duration: "w", midiValues: [72] } // Ultima nota tenuta (occupa gli ultimi 2 tempi)
        ],

        // Mano Sinistra: Duine (crome normali - 2 note per ogni semiminima)
        notesBass: [ // 8 crome per battuta 4/4
            // Battuta 1 (su C3)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 1
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 2
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 3
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 4
            // Battuta 2 (su D3)
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            // Battuta 3 (su E3)
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            // Battuta 4 (su F3)
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            // Battuta 5 (su G2)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 6 (su A2)
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["a/2"], duration: "8", midiValues: [45] },
            // Battuta 7 (su B2)
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            // Battuta 8 (su C3 - Finale)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "w", midiValues: [48] } // Ultima nota tenuta (occupa gli ultimi 2 tempi)
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-6 già presenti) ...
    // =================================================================================
    // === Esercizio 7: Pattern 5 Note (Dx) vs 2 Note (Sx), poi Invertito - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex7-Pattern5vs2InvertitoCM-8bar-v1",
        name: "Indipendenza: Pattern 5 Note vs 2 Note (Invertito) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 100, // Un tempo moderato per gestire i pattern
        description: "Fase 1: Dx suona un pattern melodico di 5 note (4 crome + 1 semiminima), Sx suona 2 note (semiminime). Fase 2: ruoli invertiti.",

        // ----- FASE 1 (Battute 1-4) -----
        // Mano Destra (Fase 1): Pattern di 5 note (4 crome + 1 semiminima)
        notesTreble: [
            // Battuta 1: Pattern C-D-E-D-C
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["r/4"], duration: "q"} /* Pausa per completare la battuta se necessario, ma 4crome+1semiminima = 4 tempi */,
            // Battuta 2: Pattern D-E-F-E-D
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["r/4"], duration: "q"},
            // Battuta 3: Pattern E-F-G-F-E
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["r/4"], duration: "q"},
            // Battuta 4: Pattern F-G-A-G-F
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["r/4"], duration: "q"},

        // ----- FASE 2 (Battute 5-8) - Ruoli Invertiti -----
        // Mano Destra (Fase 2): Pattern di 2 note (semiminime)
            // Battuta 5: (Sx ha C-D-E-D-C) Dx suona C-G
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["r/4"], duration: "h"},
            // Battuta 6: (Sx ha D-E-F-E-D) Dx suona D-A
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["r/4"], duration: "h"},
            // Battuta 7: (Sx ha E-F-G-F-E) Dx suona E-B
            { keys: ["e/5"], duration: "q", midiValues: [76] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["r/4"], duration: "h"},
            // Battuta 8: (Sx ha F-G-A-G-F) Dx suona F-C
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["r/4"], duration: "h"},
        ],

        // Mano Sinistra
        notesBass: [
        // ----- FASE 1 (Battute 1-4) -----
        // Mano Sinistra (Fase 1): Pattern di 2 note (semiminime)
            // Battuta 1: C-G
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "h"},
            // Battuta 2: D-A
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["r/4"], duration: "h"},
            // Battuta 3: E-B
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["r/4"], duration: "h"},
            // Battuta 4: F-C
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "h"},

        // ----- FASE 2 (Battute 5-8) - Ruoli Invertiti -----
        // Mano Sinistra (Fase 2): Pattern di 5 note (4 crome + 1 semiminima)
            // Battuta 5: Pattern C-D-E-D-C
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "q"},
            // Battuta 6: Pattern D-E-F-E-D
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["r/4"], duration: "q"},
            // Battuta 7: Pattern E-F-G-F-E
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["r/4"], duration: "q"},
            // Battuta 8: Pattern F-G-A-G-F
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["r/4"], duration: "q"},
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-7 già presenti) ...
    // =================================================================================
    // === Esercizio 8: Melodia Do-Sol/Sol-Do (Dx) vs Fond. (Sx), poi Invertito - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex8-DoSolSolDoInvertitoCM-8bar-v1",
        name: "Indipendenza: Do-Sol/Sol-Do vs Fond. (Invertito) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 110, // Moderato-veloce per le crome
        description: "Fase 1: Dx suona C-G (crome+minima) poi G-C (crome+minima). Sx suona fondamentali (semibrevi). Fase 2: ruoli invertiti.",

        // ----- FASE 1 (Battute 1-4) -----
        notesTreble: [ // Mano Destra
            // Battuta 1: C-D-E-F-G
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 2: G-F-E-D-C
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Battuta 3: C-D-E-F-G (ripete)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 4: G-F-E-D-C (ripete)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },

        // ----- FASE 2 (Battute 5-8) - Ruoli Invertiti -----
        // Mano Destra (Fase 2): Fondamentali (semibrevi)
            // Battuta 5 (Sx suona C-G) -> Dx suona C
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Battuta 6 (Sx suona G-C) -> Dx suona G
            { keys: ["g/4"], duration: "w", midiValues: [67] },
            // Battuta 7 (Sx suona C-G) -> Dx suona C
            { keys: ["c/5"], duration: "w", midiValues: [72] },
            // Battuta 8 (Sx suona G-C) -> Dx suona G
            { keys: ["g/4"], duration: "w", midiValues: [67] },
        ],

        notesBass: [ // Mano Sinistra
        // ----- FASE 1 (Battute 1-4) -----
        // Mano Sinistra (Fase 1): Fondamentali (semibrevi)
            // Battuta 1 (Dx: C-G) -> Sx suona C
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 2 (Dx: G-C) -> Sx suona G
            { keys: ["g/2"], duration: "w", midiValues: [43] },
            // Battuta 3 (Dx: C-G) -> Sx suona C
            { keys: ["c/3"], duration: "w", midiValues: [48] },
            // Battuta 4 (Dx: G-C) -> Sx suona G
            { keys: ["g/2"], duration: "w", midiValues: [43] },

        // ----- FASE 2 (Battute 5-8) - Ruoli Invertiti -----
        // Mano Sinistra (Fase 2): Melodia Do-Sol/Sol-Do (crome+minima), un'ottava sotto
            // Battuta 5: C-D-E-F-G
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 6: G-F-E-D-C
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 7: C-D-E-F-G (ripete)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["g/3"], duration: "h", midiValues: [55] },
            // Battuta 8: G-F-E-D-C (ripete)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-8 già presenti) ...
    // =================================================================================
    // === Esercizio 9: Moti Contrappuntistici (Retto, Contrario, Obliquo, Misto) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex9-MotiContrappuntoCM-8bar-v1",
        name: "Indipendenza: Moti Contrappuntistici - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 75, // Lento per analizzare i movimenti
        description: "Esplorazione dei quattro moti del contrappunto a due voci (retto, contrario, obliquo, misto) in semiminime.",

        notesTreble: [ // Voce Superiore (Soprano)
            // --- Battute 1-2: Moto Retto (Terze Parallele) ---
            // Dx: E F G A | G F E D
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // E-C, F-D
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // G-E, A-F
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // G-E, F-D
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // E-C, D-B

            // --- Battute 3-4: Moto Contrario ---
            // Dx: C D E F | G A B C5
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // C-G, D-F
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // E-E, F-D
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // G-C, A-B
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // B-A, C5-G

            // --- Battute 5-6: Moto Obliquo (Dx si muove, Sx tiene) ---
            // Dx: G A G F | E F E D
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, // G-C, A-C
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // G-C, F-C
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // E-G, F-G
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // E-G, D-G

            // --- Battute 7-8: Moto Misto/Libero ---
            // Dx: C E G E | F D E C
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // C-C, E-G (Obliquo, Retto)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, // G-E, E-C (Contrario)
            { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // F-D, D-F (Contrario)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] }  // E-G, C-C (Obliquo, Retto)
        ],

        notesBass: [ // Voce Inferiore (Basso/Tenore)
            // --- Battute 1-2: Moto Retto (Terze Parallele rispetto alla Dx) ---
            // Sx: C D E F | E D C B
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },

            // --- Battute 3-4: Moto Contrario ---
            // Sx: G F E D | C B2 A2 G2  (G2 è molto basso, forse meglio C3 B2 A2 G2)
            // Sx: G3 F3 E3 D3 | C3 B2 A2 G2
            { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },

            // --- Battute 5-6: Moto Obliquo (Sx tiene, Dx si muove) ---
            // Sx: C C C C | G G G G
            { keys: ["c/3"], duration: "w", midiValues: [48] }, // C tenuto per 1 battuta
            { keys: ["g/3"], duration: "w", midiValues: [55] }, // G tenuto per 1 battuta

            // --- Battute 7-8: Moto Misto/Libero ---
            // Sx: C G E C | D F G C
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, // C-C, G-E (Obliquo, Contrario)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // E-G, C-E (Retto)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, // D-F, F-D (Retto)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }  // G-E, C-C (Obliquo, Contrario)
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-9 già presenti) ...
    // =================================================================================
    // === Esercizio 10: Accordi Spezzati (Dx) con Incrocio su Melodia (Sx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex10-ArpDxIncrocioMelSxCM-8bar-v1",
        name: "Indipendenza: Arpeggi Dx con Incrocio su Melodia Sx - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 70, // Lento per gestire l'incrocio con precisione
        description: "Mano sinistra suona una melodia lenta. Mano destra suona accordi spezzati (crome), incrociando sopra la sinistra per le note acute.",

        // Mano Destra: Accordi spezzati (arpeggi in crome) C - G/B - Am - F
        // Pattern arpeggio: Basso-Medio-Acuto-Medio (1-5-8-5 o 1-3-5-3 per triadi)
        // Qui l'acuto richiederà l'incrocio.
        notesTreble: [
            // Battuta 1: Accordo di C (C4-E4-G4-C5) -> Arpeggio: C4 E4 G4 C5 G4 E4 C4 E4 (esempio)
            // Semplifichiamo l'arpeggio per l'incrocio: Radice-Terza-Quinta-Ottava(incrocio)-Quinta-Terza
            // C4 E4 G4 C5(incrocio) G4 E4
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] }, // C5 (acuto, possibile incrocio)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 2: Accordo di G/B (B3-D4-G4-B4) -> Arpeggio: B3 D4 G4 B4(incrocio) G4 D4
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, // B4 (acuto)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 3: Accordo di Am (A3-C4-E4-A4) -> Arpeggio: A3 C4 E4 A4(incrocio) E4 C4
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, // A4 (acuto)
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 4: Accordo di F (F3-A3-C4-F4) -> Arpeggio: F3 A3 C4 F4(incrocio) C4 A3
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, // F4 (acuto)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            // Ripetizione del ciclo per le battute 5-8
            // Battuta 5: Accordo di C
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 6: Accordo di G/B
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["b/4"], duration: "8", midiValues: [71] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            // Battuta 7: Accordo di Am
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["a/4"], duration: "8", midiValues: [69] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 8: Accordo di F (Finale)
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Arpeggio incompleto per finire sulla minima
            { keys: ["f/3"], duration: "h", midiValues: [53] }  // Aggiungo una nota per completare l'accordo finale
        ],

        // Mano Sinistra: Melodia lenta (note lunghe, principalmente minime e semibrevi)
        // La melodia si muove nella regione centrale, potenzialmente "sotto" l'incrocio della destra.
        notesBass: [
            // Battuta 1 (Armonia C)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 2 (Armonia G/B)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Battuta 3 (Armonia Am)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 4 (Armonia F)
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["a/2"], duration: "h", midiValues: [45] },
            // Ripetizione del ciclo per le battute 5-8
            // Battuta 5 (Armonia C)
            { keys: ["c/3"], duration: "h", midiValues: [48] }, { keys: ["e/3"], duration: "h", midiValues: [52] },
            // Battuta 6 (Armonia G/B)
            { keys: ["b/2"], duration: "h", midiValues: [47] }, { keys: ["d/3"], duration: "h", midiValues: [50] },
            // Battuta 7 (Armonia Am)
            { keys: ["a/2"], duration: "h", midiValues: [45] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 8 (Armonia F - Finale)
            { keys: ["f/2"], duration: "w", midiValues: [41] } // Nota finale tenuta
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-10 già presenti) ...
    // =================================================================================
    // === Esercizio 11: Melodia (Dx) con Incrocio su Arpeggi (Sx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex11-MelDxIncrocioArpSxCM-8bar-v1",
        name: "Indipendenza: Melodia Dx con Incrocio su Arpeggi Sx - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 70, // Lento per gestire l'incrocio con precisione
        description: "Mano destra suona una melodia lenta. Mano sinistra suona accordi spezzati (crome), potenzialmente incrociando sotto la destra per le note gravi.",

        // Mano Destra: Melodia lenta (note lunghe, principalmente minime e semibrevi)
        // La melodia si muove nella regione centrale.
        notesTreble: [
            // Battuta 1 (Armonia C)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 2 (Armonia G/B)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // B3 è un po' basso per melodia Dx, ma possibile
            // Battuta 3 (Armonia Am)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 4 (Armonia F)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, { keys: ["a/4"], duration: "h", midiValues: [69] },
            // Ripetizione del ciclo per le battute 5-8
            // Battuta 5 (Armonia C)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 6 (Armonia G/B)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "h", midiValues: [59] },
            // Battuta 7 (Armonia Am)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 8 (Armonia F - Finale)
            { keys: ["f/4"], duration: "w", midiValues: [65] } // Nota finale tenuta
        ],

        // Mano Sinistra: Accordi spezzati (arpeggi in crome) C - G/B - Am - F
        // Pattern arpeggio: Ottava-Quinta-Terza-Radice(incrocio)-Terza-Quinta (invertito rispetto a prima)
        // Es: C3-G2-E2-C2(incrocio)-E2-G2
        notesBass: [
            // Battuta 1: Accordo di C (C3-G2-E2-C2) -> Arpeggio: C3 G2 E2 C2(incrocio) E2 G2 C3 E2
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["c/2"], duration: "8", midiValues: [36] }, // C2 (grave, possibile incrocio)
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            // Battuta 2: Accordo di G/B (B2-G2-D2-B1) -> Arpeggio: B2 G2 D2 B1(incrocio) D2 G2
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["b/1"], duration: "8", midiValues: [35] }, // B1 (molto grave!)
            { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/2"], duration: "8", midiValues: [38] },
            // Battuta 3: Accordo di Am (A2-E2-C2-A1) -> Arpeggio: A2 E2 C2 A1(incrocio) C2 E2
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["a/1"], duration: "8", midiValues: [33] }, // A1 (molto grave!)
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            // Battuta 4: Accordo di F (F2-C2-A1-F1) -> Arpeggio: F2 C2 A1 F1(incrocio) A1 C2
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            { keys: ["a/1"], duration: "8", midiValues: [33] }, { keys: ["f/1"], duration: "8", midiValues: [29] }, // F1 (estremamente grave!)
            { keys: ["a/1"], duration: "8", midiValues: [33] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["a/1"], duration: "8", midiValues: [33] },
            // Ripetizione del ciclo per le battute 5-8
            // Battuta 5: Accordo di C
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            { keys: ["e/2"], duration: "8", midiValues: [40] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            // Battuta 6: Accordo di G/B
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["b/1"], duration: "8", midiValues: [35] },
            { keys: ["d/2"], duration: "8", midiValues: [38] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/2"], duration: "8", midiValues: [38] },
            // Battuta 7: Accordo di Am
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["a/1"], duration: "8", midiValues: [33] },
            { keys: ["c/2"], duration: "8", midiValues: [36] }, { keys: ["e/2"], duration: "8", midiValues: [40] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            // Battuta 8: Accordo di F (Finale)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/2"], duration: "8", midiValues: [36] },
            { keys: ["a/1"], duration: "h", midiValues: [33] }, // Arpeggio incompleto per finire sulla minima
            { keys: ["f/1"], duration: "h", midiValues: [29] }  // Aggiungo una nota per completare l'accordo finale
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-11 già presenti) ...
    // =================================================================================
    // === Esercizio 12: Melodia Legata (Dx) vs. Accordi Staccati (Sx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex12-LegatoDxStaccatoAcSxCM-8bar-v1",
        name: "Indipendenza: Melodia Legata (Dx) vs. Accordi Stacc. (Sx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 85, // Moderato, per curare legato e staccato
        description: "Mano destra suona una melodia legata. Mano sinistra suona triadi di C e G staccate (stile Beyer/Czerny semplice).",

        // Mano Destra: Melodia legata, principalmente semiminime
        notesTreble: [
            // Battuta 1 (Armonia C)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // Battuta 2 (Armonia C)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 3 (Armonia G)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Battuta 4 (Armonia C)
            { keys: ["c/4"], duration: "w", midiValues: [60] },
            // Battuta 5 (Armonia C)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 6 (Armonia F - introdotta per varietà, poi G)
            { keys: ["f/4"], duration: "h", midiValues: [65] }, // F
            { keys: ["d/4"], duration: "h", midiValues: [62] }, // G
            // Battuta 7 (Armonia G)
            { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["c/4"], duration: "q", midiValues: [60] }, // Sensibile -> Tonica (di G)
            { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Battuta 8 (Armonia C - Finale)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
        ],

        // Mano Sinistra: Accordi staccati (semiminime)
        // Triade di C: C3-E3-G3. Triade di G: G2-B2-D3.
        // Suona sul 1° e 3° tempo, o su ogni tempo.
        // Per questo esercizio: 1° e 3° tempo.
        notesBass: [
            // Battuta 1 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 2 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 3 (Accordo G)
            { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 4 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 5 (Accordo C)
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 6 (Accordo F, poi G)
            { keys: ["f/2", "a/2", "c/3"], duration: "q", midiValues: [41, 45, 48] /* staccato: true */ }, { keys: ["r/4"], duration: "q" }, // F
            { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] /* staccato: true */ }, { keys: ["r/4"], duration: "q" }, // G
            // Battuta 7 (Accordo G)
            { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            // Battuta 8 (Accordo C - Finale)
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] /* staccato: true */ }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] /* staccato: false */ }, // Accordo finale tenuto
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-12 già presenti) ...
    // =================================================================================
    // === Esercizio 13: Passaggio del Pollice in Scale (Do Mag, 2 Ottave) - 8 Battute ===
    // =================================================================================
    // Questo esercizio è più tecnico e meno "musicale" nel senso tradizionale,
    // ma fondamentale. Lo dividiamo in sotto-sezioni implicite per la descrizione.
    // Per semplicità, faremo prima Dx, poi Sx, poi insieme, ognuno per 8 battute.
    // Presenterò prima la versione Mani Insieme, che è la più comune per un "brano".
    // Le versioni a mani separate sarebbero esercizi preparatori.
    // Per ora, creiamo la versione a MANI INSIEME (moto parallelo), che allena anche la coordinazione.
    {
        id: "indipendenzaMani-ex13a-PassaggioPolliceManiUniteCM-8bar-v1",
        name: "Indipendenza: Passaggio Pollice - Scale Mani Unite (Do Mag)",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 80, // Moderato per controllo
        description: "Scale di Do Maggiore su due ottave a mani unite (moto parallelo) in semiminime, per esercitare il passaggio del pollice.",

        // Mano Destra: Scala di Do Maggiore, 2 ottave ascendente e discendente
        notesTreble: [
            // Ascendente (2 ottave = 4 battute)
            // Battuta 1 (C4-F4)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, // Pollice passa sotto per Dx
            // Battuta 2 (G4-C5)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, // Pollice passa sotto per Dx
            // Battuta 3 (D5-G5)
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["e/5"], duration: "q", midiValues: [76] },
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            // Battuta 4 (A5-C6, poi C6 per chiudere l'ascesa)
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["b/5"], duration: "q", midiValues: [83] },
            { keys: ["c/6"], duration: "h", midiValues: [84] }, // Cima della scala

            // Discendente (2 ottave = 4 battute)
            // Battuta 5 (C6-G5)
            { keys: ["c/6"], duration: "q", midiValues: [84] }, { keys: ["b/5"], duration: "q", midiValues: [83] }, // 3° dito passa sopra pollice per Dx
            { keys: ["a/5"], duration: "q", midiValues: [81] }, { keys: ["g/5"], duration: "q", midiValues: [79] },
            // Battuta 6 (F5-C5)
            { keys: ["f/5"], duration: "q", midiValues: [77] }, { keys: ["e/5"], duration: "q", midiValues: [76] }, // 3° o 4° dito passa sopra pollice
            { keys: ["d/5"], duration: "q", midiValues: [74] }, { keys: ["c/5"], duration: "q", midiValues: [72] },
            // Battuta 7 (B4-F4)
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 8 (E4-C4)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }  // Fine scala
        ],

        // Mano Sinistra: Scala di Do Maggiore, 2 ottave ascendente e discendente
        notesBass: [
            // Ascendente (2 ottave = 4 battute) - Partiamo da C2 per Sx
            // Battuta 1 (C2-F2)
            { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["d/2"], duration: "q", midiValues: [38] },
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["f/2"], duration: "q", midiValues: [41] }, // Dita passano sopra pollice per Sx
            // Battuta 2 (G2-C3)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, // Dita passano sopra pollice per Sx
            // Battuta 3 (D3-G3)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 4 (A3-C4, poi C4 per chiudere l'ascesa)
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Cima della scala (coincide con C4 della Dx all'inizio)

            // Discendente (2 ottave = 4 battute)
            // Battuta 5 (C4-G3)
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, // Pollice passa sotto per Sx
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            // Battuta 6 (F3-C3)
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, // Pollice passa sotto per Sx
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["c/3"], duration: "q", midiValues: [48] },
            // Battuta 7 (B2-F2)
            { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["a/2"], duration: "q", midiValues: [45] },
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["f/2"], duration: "q", midiValues: [41] },
            // Battuta 8 (E2-C2)
            { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["d/2"], duration: "q", midiValues: [38] },
            { keys: ["c/2"], duration: "h", midiValues: [36] }  // Fine scala
        ]
    },
   // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-13 già presenti) ...
    // =================================================================================
    // === Esercizio 14: Accordi Ribattuti Staccati (Sx) vs. Melodia (Dx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex14-AccRibattutiSxMelDxCM-8bar-v1",
        name: "Indipendenza: Accordi Ribattuti (Sx) vs. Melodia (Dx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 100, // Moderato per precisione ritmica degli accordi
        description: "Mano sinistra suona triadi semplici (C, G, Am, F) come accordi ribattuti e staccati (4 crome per 2 tempi). Mano destra suona una melodia.",

        // Mano Destra: Melodia semplice
        notesTreble: [
            // Battuta 1 (Sx: C per 2 tempi, G per 2 tempi)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, // Su C
            { keys: ["b/4"], duration: "h", midiValues: [71] }, // Su G
            // Battuta 2 (Sx: Am per 2 tempi, F per 2 tempi)
            { keys: ["a/4"], duration: "h", midiValues: [69] }, // Su Am
            { keys: ["c/5"], duration: "h", midiValues: [72] }, // Su F
            // Battuta 3 (Sx: C per 2 tempi, F per 2 tempi)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, // Su C
            { keys: ["a/4"], duration: "h", midiValues: [69] }, // Su F
            // Battuta 4 (Sx: G per 2 tempi, C per 2 tempi)
            { keys: ["d/4"], duration: "h", midiValues: [62] }, // Su G
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Su C
            // Battuta 5 (Ripete schema con melodia variata) (Sx: C, G)
            { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, // Su C e G
            // Battuta 6 (Sx: Am, F)
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] }, // Su Am e F
            // Battuta 7 (Sx: C, G)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, // Su C
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, // Su G
            // Battuta 8 (Sx: F, C - Finale)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Su F (C è la quinta di F)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, // Su C
        ],

        // Mano Sinistra: Accordi ribattuti staccati (4 crome per 2 tempi = 1 accordo per mezza battuta)
        // Triade C: C3-E3-G3
        // Triade G: G2-B2-D3
        // Triade Am: A2-C3-E3
        // Triade F: F2-A2-C3
        notesBass: [
            // Battuta 1: Accordo C (x4), Accordo G (x4)
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            // Battuta 2: Accordo Am (x4), Accordo F (x4)
            { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ },
            { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            // Battuta 3: Accordo C (x4), Accordo F (x4)
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            // Battuta 4: Accordo G (x4), Accordo C (x4)
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            // Battuta 5: Accordo C (x4), Accordo G (x4)
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            // Battuta 6: Accordo Am (x4), Accordo F (x4)
            { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ },
            { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            // Battuta 7: Accordo C (x4), Accordo G (x4)
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] /* staccato: true */ },
            // Battuta 8: Accordo F (x4), Accordo C (x4) - Finale
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] /* staccato: true */ },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] /* staccato: true */ }, // Ultimo C un po' più lungo
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-14 già presenti) ...
    // =================================================================================
    // === Esercizio 15: Arpeggi Crome (Dx) vs. Accordi Semiminime (Sx) - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex15-ArpCromeDxAccMinimeSxCM-8bar-v1",
        name: "Indipendenza: Arpeggi Crome (Dx) vs. Accordi Semiminime (Sx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 90, // Moderato per fluidità delle crome
        description: "Mano destra suona arpeggi di triadi (1-3-5-8) in crome. Mano sinistra suona accordi (triadi) tenuti come semiminime, cambiando ogni due tempi.",

        // Mano Destra: Arpeggi di triadi in crome (4 crome per 2 tempi = 1 arpeggio per minima)
        // Pattern arpeggio ascendente: 1-3-5-8 (ottava della fondamentale)
        // Pattern arpeggio discendente: 8-5-3-1
        notesTreble: [
            // Battuta 1 (Sx: C per 2t, G per 2t)
            // Arpeggio C ascendente: C4-E4-G4-C5
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Arpeggio G ascendente: G3-B3-D4-G4 (per non andare troppo acuto subito)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 2 (Sx: Am per 2t, F per 2t)
            // Arpeggio Am discendente: A4-E4-C4-A3
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            // Arpeggio F discendente: F4-C4-A3-F3
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            // Battuta 3 (Sx: C per 2t, F per 2t)
            // Arpeggio C ascendente
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            // Arpeggio F ascendente
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            // Battuta 4 (Sx: G per 2t, C per 2t)
            // Arpeggio G discendente
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            // Arpeggio C discendente
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            // Battuta 5 (Come Battuta 1)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            // Battuta 6 (Come Battuta 2)
            { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
            { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] },
            // Battuta 7 (Come Battuta 3)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["c/5"], duration: "8", midiValues: [72] },
            { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
            // Battuta 8 (Come Battuta 4 - Finale con accordo Dx)
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
            { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
            { keys: ["c/4","e/4","g/4"], duration: "h", midiValues: [60,64,67] }, // Accordo C finale
        ],

        // Mano Sinistra: Accordi (triadi) tenuti come semiminime (una ogni 2 tempi)
        // Triade C: C3-E3-G3
        // Triade G: G2-B2-D3
        // Triade Am: A2-C3-E3
        // Triade F: F2-A2-C3
        notesBass: [
            // Battuta 1: Accordo C, Accordo G
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
            { keys: ["g/2","b/2","d/3"], duration: "h", midiValues: [43,47,50] },
            // Battuta 2: Accordo Am, Accordo F
            { keys: ["a/2","c/3","e/3"], duration: "h", midiValues: [45,48,52] },
            { keys: ["f/2","a/2","c/3"], duration: "h", midiValues: [41,45,48] },
            // Battuta 3: Accordo C, Accordo F
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
            { keys: ["f/2","a/2","c/3"], duration: "h", midiValues: [41,45,48] },
            // Battuta 4: Accordo G, Accordo C
            { keys: ["g/2","b/2","d/3"], duration: "h", midiValues: [43,47,50] },
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
            // Battuta 5 (Come Battuta 1)
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
            { keys: ["g/2","b/2","d/3"], duration: "h", midiValues: [43,47,50] },
            // Battuta 6 (Come Battuta 2)
            { keys: ["a/2","c/3","e/3"], duration: "h", midiValues: [45,48,52] },
            { keys: ["f/2","a/2","c/3"], duration: "h", midiValues: [41,45,48] },
            // Battuta 7 (Come Battuta 3)
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
            { keys: ["f/2","a/2","c/3"], duration: "h", midiValues: [41,45,48] },
            // Battuta 8 (Come Battuta 4 - Finale)
            { keys: ["g/2","b/2","d/3"], duration: "h", midiValues: [43,47,50] },
            { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] },
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
// ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-15 già presenti) ...
    // =================================================================================
    // === Esercizio 16: Legato/Staccato Alternato tra Mani - Do Mag - 8 Battute       ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex16-LegatoStaccatoAlternatoCM-8bar-v1",
        name: "Indipendenza: Legato/Staccato Alternato tra Mani - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 80, // Moderato per curare le articolazioni
        description: "Sezione 1: Dx legato, Sx staccato. Sezione 2: Dx staccato, Sx legato. Melodia semplice e accompagnamento in semiminime.",

        // ----- SEZIONE 1 (Battute 1-4): Dx Legato, Sx Staccato -----
        notesTreble: [ // Mano Destra
            // Battuta 1 (Dx Legato)
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 2
            { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["c/4"], duration: "h", midiValues: [60] },
            // Battuta 3
            { keys: ["c/4"], duration: "q", midiValues: [60] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            // Battuta 4
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },

        // ----- SEZIONE 2 (Battute 5-8): Dx Staccato, Sx Legato -----
            // Battuta 5 (Dx Staccato)
            { keys: ["g/4"], duration: "q", midiValues: [67] /* staccato: true */ }, { keys: ["a/4"], duration: "q", midiValues: [69] /* staccato: true */ },
            { keys: ["b/4"], duration: "q", midiValues: [71] /* staccato: true */ }, { keys: ["g/4"], duration: "q", midiValues: [67] /* staccato: true */ },
            // Battuta 6
            { keys: ["f/4"], duration: "h", midiValues: [65] /* staccato: true */ }, { keys: ["e/4"], duration: "h", midiValues: [64] /* staccato: true */ },
            // Battuta 7
            { keys: ["e/4"], duration: "q", midiValues: [64] /* staccato: true */ }, { keys: ["d/4"], duration: "q", midiValues: [62] /* staccato: true */ },
            { keys: ["c/4"], duration: "q", midiValues: [60] /* staccato: true */ }, { keys: ["b/3"], duration: "q", midiValues: [59] /* staccato: true */ },
            // Battuta 8 (Finale)
            { keys: ["c/4"], duration: "w", midiValues: [60] /* staccato: false - nota finale tenuta */ },
        ],

        notesBass: [ // Mano Sinistra
        // ----- SEZIONE 1 (Battute 1-4): Sx Staccato -----
        // Accompagnamento con note singole staccate sui tempi principali
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ }, { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ },
            { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ }, { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ },
            // Battuta 2
            { keys: ["f/2"], duration: "q", midiValues: [41] /* staccato: true */ }, { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ },
            { keys: ["f/2"], duration: "q", midiValues: [41] /* staccato: true */ }, { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ }, { keys: ["d/3"], duration: "q", midiValues: [50] /* staccato: true */ },
            { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ }, { keys: ["d/3"], duration: "q", midiValues: [50] /* staccato: true */ },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ }, { keys: ["g/2"], duration: "q", midiValues: [43] /* staccato: true */ },
            { keys: ["e/3"], duration: "q", midiValues: [52] /* staccato: true */ }, { keys: ["c/3"], duration: "q", midiValues: [48] /* staccato: true */ },

        // ----- SEZIONE 2 (Battute 5-8): Sx Legato -----
        // Accompagnamento con note singole legate, che formano una linea di basso
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["b/2"], duration: "q", midiValues: [47] },
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 6
            { keys: ["f/2"], duration: "h", midiValues: [41] }, { keys: ["c/3"], duration: "h", midiValues: [48] },
            // Battuta 7
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["g/2"], duration: "q", midiValues: [43] },
            // Battuta 8 (Finale)
            { keys: ["c/3"], duration: "w", midiValues: [48] },
        ]
    },
    // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-16 già presenti) ...
    // =================================================================================
    // === Esercizio 17: Ostinato Ritmico (Sx) vs. Melodia Libera (Dx) - La Min - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex17-OstinatoSxMelLibDxAm-8bar-v1",
        name: "Indipendenza: Ostinato Ritmico (Sx) vs. Melodia Libera (Dx) - La Min",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "Am", // Nessuna alterazione (useremo G# su E7 se necessario nella melodia Dx)
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 90, // Moderato per permettere alla melodia di fluire sull'ostinato
        description: "Mano sinistra suona un ostinato ritmico-melodico di 2 battute che si ripete. Mano destra suona una melodia più libera e variata.",

        // Mano Destra: Melodia libera in La minore
        notesTreble: [
            // Battuta 1 (Ostinato Sx: A E A C)
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["c/5"], duration: "q", midiValues: [72] }, { keys: ["b/4"], duration: "q", midiValues: [71] },
            // Battuta 2 (Ostinato Sx: G D G B) -> Implica un G maggiore
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["f/4"], duration: "q", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            // Battuta 3 (Ostinato Sx: A E A C) -> Ripete, melodia Dx varia
            { keys: ["e/4"], duration: "q.", midiValues: [64] }, { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 4 (Ostinato Sx: G D G B)
            { keys: ["c/4"], duration: "h", midiValues: [60] }, { keys: ["b/3"], duration: "h", midiValues: [59] }, // Risolve su C, ma l'ostinato è G
                                                                                                                    // Forse meglio una melodia che si adatti a G
            // Correggo battuta 4 melodia per G:
            // { keys: ["d/4"], duration: "h", midiValues: [62] }, { keys: ["b/3"], duration: "q", midiValues: [59] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            // Battuta 5 (Ostinato Sx: A E A C) -> Dominante E7 per la melodia?
            // { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["g#/4"], duration: "q", midiValues: [68] }, { keys: ["b/4"], duration: "q", midiValues: [71] }, { keys: ["d/5"], duration: "q", midiValues: [74] },
            // Manteniamo più semplice per ora:
            { keys: ["a/4"], duration: "h", midiValues: [69] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
            // Battuta 6 (Ostinato Sx: G D G B)
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "h", midiValues: [65] },
            // Battuta 7 (Ostinato Sx: A E A C)
            { keys: ["c/5"], duration: "8", midiValues: [72] }, { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["a/4"], duration: "8", midiValues: [69] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
            { keys: ["f/4"], duration: "8", midiValues: [65] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, // Scala discendente
            // Battuta 8 (Ostinato Sx: G D G B - Finale)
            { keys: ["b/3"], duration: "h", midiValues: [59] }, { keys: ["a/4"], duration: "h", midiValues: [69] } // Finale aperto che potrebbe risolvere su Am se l'ostinato finisse su Am
                                                                                                                  // Se l'ostinato finisce su G, un finale G-B nella destra sarebbe più conclusivo.
                                                                                                                  // Però l'ostinato si ripete... Quindi ok un finale sospeso sulla melodia.
        ],

        // Mano Sinistra: Ostinato ritmico-melodico di 2 battute (si ripete 4 volte)
        // Pattern Ostinato:
        // Battuta X: A2(q) E3(q) A2(8) C3(8) E3(q)  (Am 느낌)
        // Battuta Y: G2(q) D3(q) G2(8) B2(8) D3(q)  (G 느낌)
        // Ritmo: q  q  8 8 q
        notesBass: [
            // Ostinato - Ciclo 1
            // Battuta 1 (Ostinato A)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 2 (Ostinato G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Ostinato - Ciclo 2
            // Battuta 3 (Ostinato A)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 4 (Ostinato G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Ostinato - Ciclo 3
            // Battuta 5 (Ostinato A)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 6 (Ostinato G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            // Ostinato - Ciclo 4
            // Battuta 7 (Ostinato A)
            { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            // Battuta 8 (Ostinato G)
            { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
        ]
    },
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
// ]; // Fine dell'array indipendenzaManiExercises
    // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-17 già presenti) ...
    // =================================================================================
    // === Esercizio 18: Canone Semplice a Due Voci (Imitazione) - Do Mag - 8 Battute   ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex18-CanoneSempliceCM-8bar-v1",
        name: "Indipendenza: Canone Semplice a Due Voci - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 80, // Moderato per seguire l'imitazione
        description: "Un canone semplice a due voci. La mano destra (dux) inizia una melodia, la mano sinistra (comes) la imita una battuta dopo, un'ottava sotto.",

        // Mano Destra (Dux - Voce Guida)
        // Melodia di 4 battute (M1), che si estende fino alla battuta 8.
        // La melodia effettiva del canone è M1.
        notesTreble: [
            // M1 - Battuta 1
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["f/4"], duration: "q", midiValues: [65] },
            { keys: ["g/4"], duration: "h", midiValues: [67] },
            // M1 - Battuta 2
            { keys: ["a/4"], duration: "q", midiValues: [69] }, { keys: ["g/4"], duration: "q", midiValues: [67] },
            { keys: ["f/4"], duration: "h", midiValues: [65] },
            // M1 - Battuta 3
            { keys: ["e/4"], duration: "q", midiValues: [64] }, { keys: ["d/4"], duration: "q", midiValues: [62] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            // M1 - Battuta 4
            { keys: ["d/4"], duration: "q", midiValues: [62] }, { keys: ["e/4"], duration: "q", midiValues: [64] },
            { keys: ["c/4"], duration: "h", midiValues: [60] },
            // La melodia della Dx continua per altre 4 battute, ma l'essenza del canone
            // è l'imitazione delle prime 4 battute. Per semplicità, la Dx potrebbe
            // suonare una contromelodia o pause dopo la battuta 4, o ripetere M1.
            // Per questo esercizio, facciamo continuare la Dx con una linea semplice.
            // Battuta 5 (Sx sta suonando M1-Battuta 4)
            { keys: ["g/4"], duration: "h", midiValues: [67] }, { keys: ["e/4"], duration: "h", midiValues: [64] },
            // Battuta 6 (Sx finisce M1, Dx continua)
            { keys: ["f/4"], duration: "w", midiValues: [65] },
            // Battuta 7
            { keys: ["e/4"], duration: "h", midiValues: [64] }, { keys: ["d/4"], duration: "h", midiValues: [62] },
            // Battuta 8 (Finale Dx)
            { keys: ["c/4"], duration: "w", midiValues: [60] },
        ],

        // Mano Sinistra (Comes - Voce Inseguitrice)
        // Entra una battuta dopo, un'ottava sotto la Dx, suonando M1.
        notesBass: [
            // Battuta 1: Pausa
            { keys: ["r/4"], duration: "w" },
            // M1 - Battuta 1 (suonata nella Battuta 2 dell'esercizio) -> Melodia Dx Battuta 1, un'ottava sotto
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
            { keys: ["g/3"], duration: "h", midiValues: [55] },
            // M1 - Battuta 2 (suonata nella Battuta 3 dell'esercizio)
            { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["g/3"], duration: "q", midiValues: [55] },
            { keys: ["f/3"], duration: "h", midiValues: [53] },
            // M1 - Battuta 3 (suonata nella Battuta 4 dell'esercizio)
            { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["d/3"], duration: "q", midiValues: [50] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // M1 - Battuta 4 (suonata nella Battuta 5 dell'esercizio)
            { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
            { keys: ["c/3"], duration: "h", midiValues: [48] },
            // La Sx ha finito la sua imitazione di M1. Ora potrebbe fare una cadenza o una contromelodia.
            // Per semplicità, facciamo una chiusura cadenzale.
            // Battuta 6 (Dx suona F4 tenuto)
            { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, // Sottodominante -> Dominante
            { keys: ["c/3"], duration: "h", midiValues: [48] }, // Tonica
            // Battuta 7
            { keys: ["g/2"], duration: "h", midiValues: [43] }, { keys: ["c/2"], duration: "h", midiValues: [36] }, // Dominante -> Tonica bassa
            // Battuta 8 (Finale Sx)
            { keys: ["c/3"], duration: "w", midiValues: [48] },
        ]
    },
 // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-18 già presenti) ...
    // =================================================================================
    // === Esercizio 19: Crome con Accenti Spostati e Dinamiche Diverse - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex19-AccentiDinamicheCM-8bar-v1",
        name: "Indipendenza: Accenti Spostati e Dinamiche Diverse - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 100, // Moderato per controllo accenti e dinamiche
        description: "Entrambe le mani suonano crome continue. Fase 1 (1-4): Dx Forte con accenti sui tempi, Sx Piano con accenti in levare. Fase 2 (5-8): ruoli invertiti.",
        // N.B.: L'utente dovrebbe eseguire gli accenti (>). Le dinamiche (f, p) sono generali per sezione.

        // Mano Destra: Crome continue (arpeggi semplici C-E-G / G-B-D)
        // Fase 1 (Battute 1-4): FORTE, accenti SUI TEMPI (1°, 2°, 3°, 4°)
        // Fase 2 (Battute 5-8): PIANO, accenti IN LEVARE ("e" di ogni tempo)
        notesTreble: [
            // ----- FASE 1: Dx FORTE, ACCENTI SUI TEMPI -----
            // Battuta 1 (Accordo C: C-E-G-E)
            { keys: ["c/4"], duration: "8", midiValues: [60] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 2 (Accordo G: G-B-D-B)
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            // Battuta 3 (Accordo C)
            { keys: ["c/4"], duration: "8", midiValues: [60] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["c/4"], duration: "8", midiValues: [60] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            { keys: ["g/4"], duration: "8", midiValues: [67] /* ACCENTO */ }, { keys: ["e/4"], duration: "8", midiValues: [64] },
            // Battuta 4 (Accordo G)
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },
            { keys: ["d/4"], duration: "8", midiValues: [62] /* ACCENTO */ }, { keys: ["b/3"], duration: "8", midiValues: [59] },

            // ----- FASE 2: Dx PIANO, ACCENTI IN LEVARE -----
            // Battuta 5 (Accordo C)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            // Battuta 6 (Accordo G)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] /* ACCENTO */ },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] /* ACCENTO */ },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] /* ACCENTO */ },
            { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["b/3"], duration: "8", midiValues: [59] /* ACCENTO */ },
            // Battuta 7 (Accordo C)
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] /* ACCENTO */ },
            // Battuta 8 (Accordo G - Finale)
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] /* ACCENTO */ },
            { keys: ["d/4"], duration: "h", midiValues: [62] }, // Minima per finire
            { keys: ["g/3"], duration: "q", midiValues: [55] }, // Semiminima per finire
        ],

        // Mano Sinistra: Crome continue (arpeggi semplici C-E-G / G-B-D, un'ottava sotto)
        // Fase 1 (Battute 1-4): PIANO, accenti IN LEVARE ("e" di ogni tempo)
        // Fase 2 (Battute 5-8): FORTE, accenti SUI TEMPI (1°, 2°, 3°, 4°)
        notesBass: [
            // ----- FASE 1: Sx PIANO, ACCENTI IN LEVARE -----
            // Battuta 1 (Accordo C: C-E-G-E)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            // Battuta 2 (Accordo G: G-B-D-B)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            // Battuta 3 (Accordo C)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["e/3"], duration: "8", midiValues: [52] /* ACCENTO */ },
            // Battuta 4 (Accordo G)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },
            { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["b/2"], duration: "8", midiValues: [47] /* ACCENTO */ },

            // ----- FASE 2: Sx FORTE, ACCENTI SUI TEMPI -----
            // Battuta 5 (Accordo C)
            { keys: ["c/3"], duration: "8", midiValues: [48] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["c/3"], duration: "8", midiValues: [48] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            // Battuta 6 (Accordo G)
            { keys: ["g/2"], duration: "8", midiValues: [43] /* ACCENTO */ }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] /* ACCENTO */ }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["g/2"], duration: "8", midiValues: [43] /* ACCENTO */ }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "8", midiValues: [50] /* ACCENTO */ }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            // Battuta 7 (Accordo C)
            { keys: ["c/3"], duration: "8", midiValues: [48] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["c/3"], duration: "8", midiValues: [48] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            { keys: ["g/3"], duration: "8", midiValues: [55] /* ACCENTO */ }, { keys: ["e/3"], duration: "8", midiValues: [52] },
            // Battuta 8 (Accordo G - Finale)
            { keys: ["g/2"], duration: "8", midiValues: [43] /* ACCENTO */ }, { keys: ["b/2"], duration: "8", midiValues: [47] },
            { keys: ["d/3"], duration: "h", midiValues: [50] }, // Minima per finire
            { keys: ["g/2"], duration: "q", midiValues: [43] }, // Semiminima per finire
        ]
    },
  // ====================================================================================
// === indipendenza_mani.js                                                         ===
// === Contiene esercizi focalizzati sullo sviluppo dell'indipendenza tra le mani.  ===
// ====================================================================================

// const indipendenzaManiExercises = [ // Array già iniziato
    // ... (Esercizi 1-19 già presenti) ...
    // =================================================================================
    // === Esercizio 20: Poliritmia 4 (Dx) vs 3 (Sx) su Note Ripetute - Do Mag - 8 Battute ===
    // =================================================================================
    {
        id: "indipendenzaMani-ex20-Poliritmia4vs3CM-8bar-v1",
        name: "Indipendenza: Poliritmia 4 (Dx) vs 3 (Sx) - Do Mag",
        category: "Indipendenza_Mani",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // La poliritmia avviene all'interno di ogni semiminima
        repetitions: 2,
        bpm: 50, // ESTREMAMENTE LENTO per interiorizzare il 4 contro 3
        description: "Mano destra suona gruppi di 4 note per ogni semiminima. Mano sinistra suona gruppi di 3 note per ogni semiminima (Poliritmia 4:3). Su note ripetute.",
        // N.B.: Questo esercizio è avanzato ritmicamente.
        // Ogni "gruppo" riempie la durata di una semiminima.
        // Per la Dx: 4 note, ognuna dura 1/4 di semiminima (come un sedicesimo)
        // Per la Sx: 3 note, ognuna dura 1/3 di semiminima (come una croma di terzina)

        notesTreble: [ // Mano Destra (4 note per ogni semiminima)
            // Battuta 1 (Su C4)
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, // Tempo 1
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, // Tempo 2
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, // Tempo 3
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, // Tempo 4
            // Battuta 2 (Su C4)
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            // Battuta 3 (Su G4)
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            // Battuta 4 (Su G4)
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] }, { keys: ["g/4"], duration: "16", midiValues: [67] },
            // Battuta 5 (Su F4)
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            // Battuta 6 (Su F4)
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] }, { keys: ["f/4"], duration: "16", midiValues: [65] },
            // Battuta 7 (Su C4 - Ritorno)
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            // Battuta 8 (Su C4 - Finale)
            { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] }, { keys: ["c/4"], duration: "16", midiValues: [60] },
            { keys: ["c/4"], duration: "w", midiValues: [60] } // Ultima nota tenuta (occupa gli ultimi 3 tempi)
        ],

        notesBass: [ // Mano Sinistra (3 note per ogni semiminima - terzine di crome)
                     // Ho usato la durata "8" qui, assumendo che il renderer possa raggrupparle in terzine.
                     // Se il renderer non gestisce i tupletti automaticamente, la visualizzazione potrebbe non essere precisa.
                     // L'intenzione è che tre di queste note "8" riempiano una semiminima.
            // Battuta 1 (Su C3)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 1
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 2
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 3
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, // Tempo 4
            // Battuta 2 (Su C3)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 3 (Su G2)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 4 (Su G2)
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2"], duration: "8", midiValues: [43] },
            // Battuta 5 (Su F2)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            // Battuta 6 (Su F2)
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2"], duration: "8", midiValues: [41] },
            // Battuta 7 (Su C3 - Ritorno)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            // Battuta 8 (Su C3 - Finale)
            { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
            { keys: ["c/3"], duration: "w", midiValues: [48] } // Ultima nota tenuta (occupa gli ultimi 3 tempi e 1/3)
        ]
    },
    // --- FINE DEGLI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---

    
    
    // --- QUI VERRANNO AGGIUNTI ALTRI ESERCIZI PER L'INDIPENDENZA DELLE MANI ---
]; // Fine dell'array indipendenzaManiExercises
