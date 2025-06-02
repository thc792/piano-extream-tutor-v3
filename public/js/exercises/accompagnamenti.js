/**
 * js/exercises/accompagnamenti.js
 * Contiene dati per esercizi di accompagnamento al pianoforte.
 * Ogni esercizio presenta una melodia (MD) e un pattern di accompagnamento (MS).
 *
 * Piano Tutor Extrame V2
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi di accompagnamento
const accompagnamentiExercises = [

    // =======================================================================
    // === Esercizio 1 (Corretto V5): Melodia con Alberti Bass (Do Maggiore) - 18 Battute ===
    // =======================================================================
    {
        id: "accompagnamenti-ex1-AlbertiC-18bar-v5", // ID aggiornato per la nuova versione definitiva
        name: "Melodia con Alberti Bass (Do Mag - 18b v5)",
        category: "Accompagnamenti",
        staveLayout: "grand",
        keySignature: "C", // Do Maggiore
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 90,
        description: "Melodia in Do Mag. Accompagnamento Alberti Bass MS continuo fino alla penultima battuta. Ultima battuta con fondamentale lunga.",

        // Melodia (Mano Destra) - 18 battute (rimane invariata dalla v3)
        notesTreble: [
            // Progressione C (4 battute)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            { keys: ["c/4"], duration: "h.", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },

            // Progressione G (4 battute)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "w", midiValue: 67 },

            // Progressione Am (4 battute)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "w", midiValue: 64 },

            // Progressione F (4 battute)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/4"], duration: "h.", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },

            // Cadenza Finale G7 (1 battuta)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // C (1 battuta finale)
            { keys: ["c/4"], duration: "w", midiValue: 60 }
        ],

        // Accompagnamento (Mano Sinistra) - Alberti Bass continuo fino a battuta 17
        notesBass: [
            // === Sezione C Major (Battute 1-4) === Alberti Bass continuo
            { keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["g/3"], duration: "8", midiValue: 55 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["g/3"], duration: "8", midiValue: 55 }, // Bar 1
            { keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["g/3"], duration: "8", midiValue: 55 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["g/3"], duration: "8", midiValue: 55 }, // Bar 2
            { keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["g/3"], duration: "8", midiValue: 55 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["g/3"], duration: "8", midiValue: 55 }, // Bar 3
            { keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["g/3"], duration: "8", midiValue: 55 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["g/3"], duration: "8", midiValue: 55 }, // Bar 4

            // === Sezione G Major (Battute 5-8) === Alberti Bass continuo
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["b/2"], duration: "8", midiValue: 47 },{ keys: ["d/3"], duration: "8", midiValue: 50 }, // Bar 5
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["b/2"], duration: "8", midiValue: 47 },{ keys: ["d/3"], duration: "8", midiValue: 50 }, // Bar 6
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["b/2"], duration: "8", midiValue: 47 },{ keys: ["d/3"], duration: "8", midiValue: 50 }, // Bar 7
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["b/2"], duration: "8", midiValue: 47 },{ keys: ["d/3"], duration: "8", midiValue: 50 }, // Bar 8

            // === Sezione A minor (Battute 9-12) === Alberti Bass continuo
            { keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["e/3"], duration: "8", midiValue: 52 }, // Bar 9
            { keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["e/3"], duration: "8", midiValue: 52 }, // Bar 10
            { keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["e/3"], duration: "8", midiValue: 52 }, // Bar 11
            { keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["e/3"], duration: "8", midiValue: 52 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["e/3"], duration: "8", midiValue: 52 }, // Bar 12

            // === Sezione F Major (Battute 13-16) === Alberti Bass continuo
            { keys: ["f/2"], duration: "8", midiValue: 41 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["c/3"], duration: "8", midiValue: 48 }, // Bar 13
            { keys: ["f/2"], duration: "8", midiValue: 41 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["c/3"], duration: "8", midiValue: 48 }, // Bar 14
            { keys: ["f/2"], duration: "8", midiValue: 41 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["c/3"], duration: "8", midiValue: 48 }, // Bar 15
            { keys: ["f/2"], duration: "8", midiValue: 41 },{ keys: ["c/3"], duration: "8", midiValue: 48 },{ keys: ["a/2"], duration: "8", midiValue: 45 },{ keys: ["c/3"], duration: "8", midiValue: 48 }, // Bar 16

            // === Cadenza Finale (Battute 17-18) ===
            // Bar 17: Alberti Bass G7 (G-D-F-D pattern per G7)
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["f/3"], duration: "8", midiValue: 53 },{ keys: ["d/3"], duration: "8", midiValue: 50 },
            // Bar 18: Fondamentale Lunga C (Finale)
            { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },
      // =======================================================================
    // === Esercizio 2: Melodia con Accordi Spezzati (Do Maggiore) - 18 Battute ===
    // =======================================================================
    {
        id: "accompagnamenti-ex2-ArpeggiatoC-18bar",
        name: "Melodia con Accordi Spezzati (Do Mag)",
        category: "Accompagnamenti",
        staveLayout: "grand",
        keySignature: "C", // Do Maggiore
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 85, // Leggermente più lento dell'Alberti per la chiarezza degli arpeggi
        description: "Melodia in Do Mag accompagnata da accordi spezzati (Radice-Quinta-Ottava/Decima-Quinta) nella mano sinistra. Cadenza finale con accordo spezzato e poi accordo tenuto.",

        // Melodia (Mano Destra) - 18 battute (stessa del primo esercizio per confronto)
        notesTreble: [
            // Progressione C (4 battute)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            { keys: ["c/4"], duration: "h.", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },

            // Progressione G (4 battute)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "w", midiValue: 67 },

            // Progressione Am (4 battute)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "w", midiValue: 64 },

            // Progressione F (4 battute)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/4"], duration: "h.", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },

            // Cadenza Finale G7 (1 battuta)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // C (1 battuta finale)
            { keys: ["c/4"], duration: "w", midiValue: 60 }
        ],

        // Accompagnamento Accordi Spezzati (Mano Sinistra) - Pattern: R-5-8-5 (o R-5-10-5)
        notesBass: [
            // C Major (4 battute) - C3-G3-C4-G3
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 1
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 2
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 3
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 4

            // G Major (4 battute) - G2-D3-G3-D3
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["d/3"], duration: "q", midiValue: 50 }, // Bar 5
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["d/3"], duration: "q", midiValue: 50 }, // Bar 6
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["d/3"], duration: "q", midiValue: 50 }, // Bar 7
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["d/3"], duration: "q", midiValue: 50 }, // Bar 8

            // A minor (4 battute) - A2-E3-A3-E3
            { keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["e/3"], duration: "q", midiValue: 52 }, // Bar 9
            { keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["e/3"], duration: "q", midiValue: 52 }, // Bar 10
            { keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["e/3"], duration: "q", midiValue: 52 }, // Bar 11
            { keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["e/3"], duration: "q", midiValue: 52 }, // Bar 12

            // F Major (4 battute) - F2-C3-F3-C3
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["c/3"], duration: "q", midiValue: 48 }, // Bar 13
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["c/3"], duration: "q", midiValue: 48 }, // Bar 14
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["c/3"], duration: "q", midiValue: 48 }, // Bar 15
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["c/3"], duration: "q", midiValue: 48 }, // Bar 16

            // Cadenza Finale
            // Bar 17: G7 spezzato (G2-D3-F3-B3 - Radice, Quinta, Settima, Terza come crome per riempire)
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["f/3"], duration: "8", midiValue: 53 },{ keys: ["b/2"], duration: "8", midiValue: 47 },
            { keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["d/3"], duration: "8", midiValue: 50 },{ keys: ["f/3"], duration: "8", midiValue: 53 },{ keys: ["b/2"], duration: "8", midiValue: 47 },
            // Bar 18: C Major accordo tenuto (C3-E3-G3)
            { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] }
        ]
    },
// =======================================================================
    // === Esercizio 3: Melodia con Accordi Ribattuti (Sol Maggiore) - 18 Battute ===
    // =======================================================================
    {
        id: "accompagnamenti-ex3-RibattutiG-18bar",
        name: "Melodia con Accordi Ribattuti (Sol Mag)",
        category: "Accompagnamenti",
        staveLayout: "grand",
        keySignature: "G", // Sol Maggiore (F#)
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 100, // Un po' più mosso per lo stile pop
        description: "Melodia in Sol Mag accompagnata da accordi ribattuti (semiminime) nella mano sinistra. Flusso costante.",

        // Nuova Melodia (Mano Destra) - 18 battute
        notesTreble: [
            // Progressione G (4 battute)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["d/4"], duration: "h.", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "w", midiValue: 59 },

            // Progressione D (4 battute)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["c#/4"], duration: "h", midiValue: 61 }, // C# in Dmaj
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "h", midiValue: 66 },
            { keys: ["e/4"], duration: "h.", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c#/4"], duration: "w", midiValue: 61 },

            // Progressione Em (4 battute)
            { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["b/3"], duration: "h.", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g/3"], duration: "w", midiValue: 55 },

            // Progressione C (4 battute)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "h.", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },


            // Cadenza ii-V-I (Am - D7 - G) - (2 battute)
            // Am (ii) - melodia su D7
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c#/4"], duration: "h", midiValue: 61 }, // Melodia per D7
            // D7 (V7) - melodia su G
            { keys: ["d/4"], duration: "w", midiValue: 62 }  // Risoluzione su G
        ],

        // Accompagnamento Accordi Ribattuti (Mano Sinistra) - 4 semiminime per battuta
        notesBass: [
            // G Major (4 battute) - G2-B2-D3
            { keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },
            { keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },
            { keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },
            { keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },{ keys: ["g/2","b/2","d/3"], duration: "q", midiValues: [43,47,50] },

            // D Major (4 battute) - D3-F#3-A3
            { keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },
            { keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },
            { keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },
            { keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },{ keys: ["d/3","f#/3","a/3"], duration: "q", midiValues: [50,54,57] },

            // E minor (4 battute) - E2-G2-B2
            { keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },
            { keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },
            { keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },
            { keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },{ keys: ["e/2","g/2","b/2"], duration: "q", midiValues: [40,43,47] },

            // C Major (4 battute) - C3-E3-G3
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },{ keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },

            // Cadenza ii-V-I (Am - D7 - G)
            // Am (ii) - A2-C3-E3 (Battuta 17)
            { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52] },{ keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52] },{ keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52] },{ keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52] },
            // D7 (V7) - D2-F#2-A2-C3 (Battuta 18)
            { keys: ["d/2","f#/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","f#/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","f#/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","f#/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            // G Major (Battuta 19 - OPZIONALE, se vogliamo la risoluzione completa dell'accordo finale)
            // { keys: ["g/2","b/2","d/3"], duration: "w", midiValues: [43,47,50] } // Lo lascio commentato, l'esercizio finisce a 18 battute.
        ]
    },
    // =======================================================================
    // === Esercizio 4 (CORRETTO): Melodia con Walking Bass Semplice (Fa Maggiore) - 18 Battute ===
    // =======================================================================
    {
        id: "accompagnamenti-ex4-WalkingF-18bar-v2", // Aggiorno ID per la correzione
        name: "Melodia con Walking Bass Semplice (Fa Mag v2)",
        category: "Accompagnamenti",
        staveLayout: "grand",
        keySignature: "F", // Fa Maggiore (Bb)
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 110,
        description: "Melodia in stile bluesy/jazzy in Fa Mag, accompagnata da una linea di walking bass semplice (note singole) nella mano sinistra.",

        // Melodia (Mano Destra) - 18 battute (questa parte dovrebbe essere OK)
        notesTreble: [
            // F7 (4 battute)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/4"], duration: "q." }, { keys: ["d/4"], duration: "8" }, { keys: ["eb/4"], duration: "h", midiValue: 63 },
            { keys: ["c/4"], duration: "w", midiValue: 60 },

            // Bb7 (2 battute)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["ab/4"], duration: "h", midiValue: 68 },

            // F7 (2 battute)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },

            // C7 (1 battuta)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bb7 (1 battuta)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // F7 (2 battute)
            { keys: ["f/4"], duration: "h.", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/4"], duration: "w", midiValue: 65 },

            // Estensione/Turnaround: Gm7 - C7 - F7 - D7 - Gm7 - C7 (6 battute)
            // Gm7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
            // C7
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // F7
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // D7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Gm7
            { keys: ["g/4"], duration: "q." }, { keys: ["f/4"], duration: "8" }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // C7 (finale)
            { keys: ["c/4"], duration: "w", midiValue: 60 }
        ],

        // Accompagnamento Walking Bass (Mano Sinistra) - Semiminime - CORRETTO con midiValue
        notesBass: [
            // F7 (4 battute)
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["a/2"], duration: "q", midiValue: 45 },

            // Bb7 (2 battute)
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["c/3"], duration: "q", midiValue: 48 },

            // F7 (2 battute)
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["g/2"], duration: "q", midiValue: 43 },

            // C7 (1 battuta)
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bb7 (1 battuta)
            { keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["f/3"], duration: "q", midiValue: 53 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            // F7 (2 battute)
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["f/2"], duration: "q", midiValue: 41 },

            // Estensione/Turnaround: Gm7 - C7 - F7 - D7 - Gm7 - C7 (6 battute)
            // Gm7
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            // C7
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["bb/3"], duration: "q", midiValue: 58 },
            // F7
            { keys: ["f/2"], duration: "q", midiValue: 41 },{ keys: ["a/2"], duration: "q", midiValue: 45 },{ keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["eb/3"], duration: "q", midiValue: 51 },
            // D7
            { keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["f#/3"], duration: "q", midiValue: 54 },{ keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Gm7
            { keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },{ keys: ["d/3"], duration: "q", midiValue: 50 },{ keys: ["f/3"], duration: "q", midiValue: 53 },
            // C7 (finale)
            { keys: ["c/3"], duration: "q", midiValue: 48 },{ keys: ["e/3"], duration: "q", midiValue: 52 },{ keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["c/3"], duration: "q", midiValue: 48 }
        ]
    },


// =======================================================================
    // === Esercizio 5 (CORRETTO v2): Melodia con Stride Semplificato (Do Maggiore) - 18 Battute ===
    // =======================================================================
    {
        id: "accompagnamenti-ex5-StrideSimpC-18bar-v2", // ID aggiornato
        name: "Melodia con Stride Semplificato (Do Mag v2)",
        category: "Accompagnamenti",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        bpm: 120,
        description: "Melodia vivace in Do Mag, accompagnata da un pattern basso-accordo semplificato in stile stride nella mano sinistra.",

        // Melodia (Mano Destra) - 18 battute (questa dovrebbe essere OK)
        notesTreble: [
            // C (2 battute)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            // G7 (2 battute)
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // C (2 battute)
            { keys: ["c/4"], duration: "q." }, { keys: ["e/4"], duration: "8" }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // F (2 battute)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // C (2 battute)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // G7 (2 battute)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            // C (2 battute)
            { keys: ["c/5"], duration: "h.", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // G7 (2 battute)
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // C (2 battute - Finale)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["c/4"], duration: "w", midiValue: 60 },
        ],

        // Accompagnamento Stride Semplificato (Mano Sinistra) - CORRETTO E COERENTE
        notesBass: [
            // C (2 battute)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, // Basso
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] }, // Accordo
            { keys: ["g/2"], duration: "q", midiValue: 43 }, // Basso (quinta)
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] }, // Accordo
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            // G7 (2 battute)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, // Basso
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] }, // Accordo
            { keys: ["d/3"], duration: "q", midiValue: 50 }, // Basso (quinta)
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] }, // Accordo
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            // C (2 battute)
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            // F (2 battute)
            { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["f/2","a/2","c/3"], duration: "q", midiValues: [41,45,48] },
            { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/2","a/2","c/3"], duration: "q", midiValues: [41,45,48] },
            { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["f/2","a/2","c/3"], duration: "q", midiValues: [41,45,48] },
            { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/2","a/2","c/3"], duration: "q", midiValues: [41,45,48] },
            // C (2 battute)
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            // G7 (2 battute)
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            // C (2 battute)
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
             // G7 (2 battute) - Ripetizione per arrivare a 18
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53] },
            // C (2 battute - Finale)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, // Basso
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] }, // Accordo
            { keys: ["g/2"], duration: "q", midiValue: 43 }, // Basso (quinta)
            { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] }, // Accordo
            { keys: ["c/2"], duration: "w", midiValue: 36 } // Nota finale lunga del basso
        ]
    },
// =======================================================================
// === Esercizio 6: Melodia Lenta con Arpeggi Ampi (La minore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex6-ArpeggiAmpiAm-16bar-v1",
    name: "Melodia Lenta con Arpeggi Ampi (La Min)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "Am", // VexFlow dovrebbe gestire G# su E7 automaticamente se presente nelle note
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 70,
    description: "Melodia lenta ed espressiva in La minore, accompagnata da arpeggi ampi e ascendenti nella mano sinistra.",

    // Melodia (Mano Destra) - 16 battute
    notesTreble: [
        // Battuta 1-2: Am
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["a/4"], duration: "h.", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Battuta 3-4: Dm
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
        // Battuta 5-6: G
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        { keys: ["d/4"], duration: "h.", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 7-8: C
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        { keys: ["g/4"], duration: "w", midiValue: 67 },
        // Battuta 9-10: F
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["c/5"], duration: "h.", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 11-12: E7
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g#/4"], duration: "h", midiValue: 68 }, // G#
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        // Battuta 13-14: Am
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        // Battuta 15-16: Am (Cadenza finale)
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // G naturale per scendere ad A
        { keys: ["a/4"], duration: "w", midiValue: 69 }
    ],

    // Accompagnamento: Arpeggi Ampi Ascendenti (Mano Sinistra) - 16 battute
    // Pattern: Fond_low - Quint_low - Fond_mid - Terza_mid (come semiminime)
    // Ogni nota dell'arpeggio usa midiValues: [valoreSingolo] come da nostra specifica.
    notesBass: [
        // Battuta 1: Am (A-C-E) -> A2-E3-A3-C4
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 2: Am
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 3: Dm (D-F-A) -> D2-A2-D3-F3
        { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        // Battuta 4: Dm
        { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f/3"], duration: "q", midiValues: [53] },
        // Battuta 5: G (G-B-D) -> G2-D3-G3-B3
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
        // Battuta 6: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["b/3"], duration: "q", midiValues: [59] },
        // Battuta 7: C (C-E-G) -> C2-G2-C3-E3 (per mantenere ampiezza e non troppo acuto)
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
        // Battuta 8: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3"], duration: "q", midiValues: [52] },
        // Battuta 9: F (F-A-C) -> F2-C3-F3-A3
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
        // Battuta 10: F
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["f/3"], duration: "q", midiValues: [53] }, { keys: ["a/3"], duration: "q", midiValues: [57] },
        // Battuta 11: E7 (E-G#-B-D) -> E2-B2-E3-G#3 (G# è la terza)
        { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, // G#
        // Battuta 12: E7
        { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["g#/3"], duration: "q", midiValues: [56] }, // G#
        // Battuta 13: Am
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 14: Am
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 15: Am (Arpeggio conclusivo)
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["c/4"], duration: "q", midiValues: [60] },
        // Battuta 16: Am (Accordo tenuto finale)
        { keys: ["a/2", "e/3", "a/3"], duration: "w", midiValues: [45, 52, 57] } // Accordo Am tenuto (senza la terza C per un finale più aperto, o con A2-C3-E3)
                                                                                   // Oppure { keys: ["a/2", "c/3", "e/3", "a/3"], duration: "w", midiValues: [45, 48, 52, 57] } per un accordo più pieno.
                                                                                   // Per semplicità e chiarezza, un A2-E3-A3 è comune come accordo finale aperto.
                                                                                   // Se preferisci A-C-E: { keys: ["a/2", "c/3", "e/3"], duration: "w", midiValues: [45, 48, 52] }
    ]
},
// =======================================================================
// === Esercizio 7: Melodia con Boogie Woogie (Do Maggiore) - 8 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex7-BoogieC-8bar-v1",
    name: "Melodia con Boogie Woogie (Do Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 140, // Tempo vivace tipico del boogie
    description: "Melodia ritmica in Do Maggiore, accompagnata da un classico pattern di basso Boogie Woogie.",

    // Melodia (Mano Destra) - 8 battute
    notesTreble: [
        // Battuta 1: C
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, // Pausa
        // Battuta 2: C
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 3: F
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, // Pausa
        // Battuta 4: F
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 5: C
        { keys: ["g/4"], duration: "q.", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
        // Battuta 6: G7
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Note dell'accordo G7 (G-B-D-F)
        // Battuta 7: C
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 8: C (Cadenza)
        { keys: ["c/4"], duration: "w", midiValue: 60 }
    ],

    // Accompagnamento: Boogie Woogie Bass (Mano Sinistra) - 8 battute
    // Pattern: Crome. Per C e F: Tonica-Terza-Quinta-Sesta. Per G7: Tonica-Terza-Quinta-Settima minore.
    // Ogni nota dell'arpeggio usa midiValues: [valoreSingolo].
    notesBass: [
        // Battuta 1: C (C3-E3-G3-A3, ripetuto)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        // Battuta 2: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        // Battuta 3: F (F3-A3-C4-D4, ripetuto)
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
        // Battuta 4: F
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
        { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["d/4"], duration: "8", midiValues: [62] },
        // Battuta 5: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        // Battuta 6: G7 (G3-B3-D4-F4, ripetuto) - F4 è la settima minore
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/4"], duration: "8", midiValues: [62] }, { keys: ["f/4"], duration: "8", midiValues: [65] },
        // Battuta 7: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        // Battuta 8: C (Cadenza - pattern con chiusura su C basso)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/2"], duration: "8", midiValues: [36] } // Ultima nota un C più basso
    ]
},
// =======================================================================
// === Esercizio 8: Melodia con Accompagnamento Blues (Sol Maggiore) - 12 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex8-BluesG-12bar-v1",
    name: "Melodia con Accompagnamento Blues (Sol Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "G", // Una sola alterazione (F#), le altre (come Bb su C7, Eb su G7) saranno in nota
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 110, // Un tempo medio per il blues
    description: "Melodia con inflessioni blues in Sol Maggiore, accompagnata da un pattern di basso e accordi tipico del blues.",

    // Melodia (Mano Destra) - 12 battute (Giro Blues standard)
    notesTreble: [
        // Battuta 1: G7
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bb = "blue note"
        // Battuta 2: G7
        { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "8" }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["b/4"], duration: "8" }, { keys: ["d/5"], duration: "h", midiValue: 74 }, // cromatismo G-A-Bb-B
        // Battuta 3: G7
        { keys: ["r/4"], duration: "q" }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 4: G7
        { keys: ["g/4"], duration: "h.", midiValue: 67 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 5: C7
        { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Eb = "blue note" su C7
        // Battuta 6: C7
        { keys: ["c/5"], duration: "8" }, { keys: ["d/5"], duration: "8" }, { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["e/5"], duration: "8" }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // cromatismo C-D-Eb-E
        // Battuta 7: G7
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["bb/4"], duration: "h", midiValue: 70 },
        // Battuta 8: G7
        { keys: ["g/4"], duration: "w", midiValue: 67 },
        // Battuta 9: D7 (Dominante di G)
        { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
        // Battuta 10: C7 (Sottodominante)
        { keys: ["eb/5"], duration: "h", midiValue: 75 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        // Battuta 11: G7 (Turnaround)
        { keys: ["d/5"], duration: "q" }, { keys: ["bb/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 12: D7 (Chiusura su dominante per ripetere, o G7 per finire)
        // Per questo esercizio chiudiamo su D7 per il "turnaround"
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 } // C naturale (settima di D7)
    ],

    // Accompagnamento: Blues Bass & Chords (Mano Sinistra) - 12 battute
    // Pattern: Basso semiminima (1° e 3° movimento) e Accordo (2° e 4° movimento)
    notesBass: [
        // Battuta 1: G7 (G-B-D-F)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, // Basso
        { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] }, // Accordo (terza e settima)
        { keys: ["d/3"], duration: "q", midiValues: [50] }, // Basso (quinta)
        { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] }, // Accordo
        // Battuta 2: G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 3: G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 4: G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 5: C7 (C-E-G-Bb)
        { keys: ["c/3"], duration: "q", midiValues: [48] }, // Basso
        { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] }, // Accordo (terza e settima)
        { keys: ["g/3"], duration: "q", midiValues: [55] }, // Basso (quinta)
        { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] }, // Accordo
        // Battuta 6: C7
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] },
        // Battuta 7: G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 8: G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 9: D7 (D-F#-A-C)
        { keys: ["d/3"], duration: "q", midiValues: [50] }, // Basso
        { keys: ["f#/3", "c/4"], duration: "q", midiValues: [54, 60] }, // Accordo (terza e settima)
        { keys: ["a/3"], duration: "q", midiValues: [57] }, // Basso (quinta)
        { keys: ["f#/3", "c/4"], duration: "q", midiValues: [54, 60] }, // Accordo
        // Battuta 10: C7
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["e/3", "bb/3"], duration: "q", midiValues: [52, 58] },
        // Battuta 11: G7 (Turnaround)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["b/2", "f/3"], duration: "q", midiValues: [47, 53] },
        // Battuta 12: D7 (Turnaround)
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["f#/3", "c/4"], duration: "q", midiValues: [54, 60] },
        { keys: ["a/3"], duration: "q", midiValues: [57] }, { keys: ["f#/3", "c/4"], duration: "q", midiValues: [54, 60] }
    ]
},
// =======================================================================
// === Esercizio 9: Melodia Ragtime (Do Maggiore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex9-RagtimeC-16bar-v1",
    name: "Melodia Ragtime (Do Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4", // Tipico del Ragtime, enfatizza il "due"
    repetitions: 2,
    bpm: 100, // Un tempo moderato per il ragtime, può essere anche più veloce
    description: "Melodia sincopata in stile Ragtime in Do Maggiore, con un classico accompagnamento basso-accordo alternato.",

    // Melodia (Mano Destra) - 16 battute
    // Molte sincopi e note brevi
    notesTreble: [
        // Sezione A (8 battute)
        // Battuta 1: C
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
        // Battuta 2: C
        { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 3: G7
        { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
        // Battuta 4: G7
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 5: C
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 6: F
        { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
        // Battuta 7: C/G (C con G al basso) - G7
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, // G7
        // Battuta 8: C
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },

        // Sezione B (8 battute) - Leggermente diversa
        // Battuta 9: C
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
        // Battuta 10: C
        { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        // Battuta 11: Am (relativa minore)
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
        // Battuta 12: D7 (dominante della dominante)
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // F#
        // Battuta 13: G
        { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
        // Battuta 14: G7
        { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
        // Battuta 15: C
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
        // Battuta 16: C (Finale)
        { keys: ["c/4"], duration: "h", midiValue: 60 } // Mezza nota per riempire 2/4
    ],

    // Accompagnamento: Ragtime Stride Bass (Mano Sinistra) - 16 battute
    // Pattern: Basso (1° ottavo) - Accordo (2° ottavo) - Basso (3° ottavo, spesso la quinta) - Accordo (4° ottavo)
    // In 2/4: Basso sul primo movimento, Accordo sul secondo movimento.
    // Qui lo facciamo Basso (1° semiminima), Accordo (2° semiminima) per semplicità di notazione VexFlow,
    // ma il feeling è quello di ottavi alternati. Perciò ogni elemento è una semiminima.
    // Ma per il vero feeling "basso-accordo-basso-accordo" in 2/4, dovremmo avere 4 eventi per battuta (crome).
    // Rivedo per un più classico "basso-accordo" in 2/4, dove il basso è sul beat 1 e l'accordo sul beat 2.
    // Ogni nota/accordo quindi è una semiminima.

    notesBass: [
        // Sezione A
        // Battuta 1: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },
        // Battuta 2: C
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, // Alterna con quinta al basso
        // Battuta 3: G7 (G-B-D-F)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "q", midiValues: [43, 47, 50, 53] },
        // Battuta 4: G7
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "q", midiValues: [43, 47, 50, 53] }, // Alterna con quinta al basso
        // Battuta 5: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },
        // Battuta 6: F (F-A-C)
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["f/2", "a/2", "c/3"], duration: "q", midiValues: [41, 45, 48] },
        // Battuta 7: C/G (G al basso) poi G7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "q", midiValues: [43, 47, 50, 53] }, // G7
        // Battuta 8: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },

        // Sezione B
        // Battuta 9: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },
        // Battuta 10: C
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },
        // Battuta 11: Am (A-C-E)
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["a/2", "c/3", "e/3"], duration: "q", midiValues: [45, 48, 52] },
        // Battuta 12: D7 (D-F#-A-C)
        { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["d/3", "f#/3", "a/3", "c/4"], duration: "q", midiValues: [50, 54, 57, 60] }, // Accordo D7 più alto
        // Battuta 13: G (G-B-D)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/2", "b/2", "d/3"], duration: "q", midiValues: [43, 47, 50] },
        // Battuta 14: G7
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "q", midiValues: [43, 47, 50, 53] },
        // Battuta 15: C
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] },
        // Battuta 16: C (Finale)
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] } // Basso-accordo finale
    ]
},
// =======================================================================
// === Esercizio 10: Melodia con Accompagnamento Tango (La Minore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex10-TangoAm-16bar-v1",
    name: "Melodia con Accompagnamento Tango (La Min)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "Am", // Nessuna alterazione fissa, G# sarà in nota su E7
    timeSignature: "4/4", // Comune per il tango, anche se il feeling ritmico è spesso binario
    repetitions: 2,
    bpm: 95, // Un tempo moderato per il tango, che permette espressività
    description: "Melodia drammatica in La minore, accompagnata da un caratteristico ritmo di tango Habanera nella mano sinistra.",

    // Melodia (Mano Destra) - 16 battute
    // Con staccati e fraseggi decisi
    notesTreble: [
        // Sezione 1 (8 battute)
        // Battuta 1: Am
        { keys: ["a/4"], duration: "q", midiValue: 69, staccato: true }, { keys: ["c/5"], duration: "q", midiValue: 72, staccato: true }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 2: Am
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["r/4"], duration: "q" }, { keys: ["a/4"], duration: "8", midiValue: 69, staccato: true }, { keys: ["b/4"], duration: "8", midiValue: 71, staccato: true },
        // Battuta 3: Dm
        { keys: ["d/5"], duration: "q", midiValue: 74, staccato: true }, { keys: ["f/5"], duration: "q", midiValue: 77, staccato: true }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
        // Battuta 4: Dm
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "8", midiValue: 72, staccato: true }, { keys: ["d/5"], duration: "8", midiValue: 74, staccato: true },
        // Battuta 5: E7
        { keys: ["e/5"], duration: "q", midiValue: 76, staccato: true }, { keys: ["g#/4"], duration: "q", midiValue: 68, staccato: true }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, //G#
        // Battuta 6: E7
        { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, // Linea ascendente verso A
        // Battuta 7: Am
        { keys: ["a/4"], duration: "q.", midiValue: 69 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // Appoggiatura g# a a
        // Battuta 8: Am
        { keys: ["c/5"], duration: "q", midiValue: 72, staccato: true }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },

        // Sezione 2 (8 battute)
        // Battuta 9: C (Relativa Maggiore, poi torna in Am)
        { keys: ["c/5"], duration: "q", midiValue: 72, staccato: true }, { keys: ["e/5"], duration: "q", midiValue: 76, staccato: true }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        // Battuta 10: G7 (Dominante di C)
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67, staccato: true }, { keys: ["f/4"], duration: "q", midiValue: 65, staccato: true },
        // Battuta 11: E7 (Dominante di Am)
        { keys: ["e/5"], duration: "q.", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72, staccato: true }, { keys: ["b/4"], duration: "q", midiValue: 71, staccato: true },
        // Battuta 12: Am
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["r/4"], duration: "h" },
        // Battuta 13: Dm
        { keys: ["f/4"], duration: "q", midiValue: 65, staccato: true }, { keys: ["e/4"], duration: "q", midiValue: 64, staccato: true }, { keys: ["d/4"], duration: "q", midiValue: 62, staccato: true }, { keys: ["c#/4"], duration: "q", midiValue: 61, staccato: true }, // C# per Dm6 o A7/C#
        // Battuta 14: E7
        { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["e/4"], duration: "q", midiValue: 64, staccato: true }, { keys: ["g#/4"], duration: "q", midiValue: 68, staccato: true },
        // Battuta 15: Am (Finale Drammatico)
        { keys: ["a/4"], duration: "q", midiValue: 69, staccato: true }, { keys: ["c/5"], duration: "q", midiValue: 72, staccato: true }, { keys: ["e/5"], duration: "q", midiValue: 76, staccato: true }, { keys: ["a/5"], duration: "q", midiValue: 81, staccato: true }, // Ascendente
        // Battuta 16: Am (Accordo finale secco)
        { keys: ["a/3", "e/4", "a/4", "c/5"], duration: "q", midiValues: [57, 64, 69, 72], staccato: true }, { keys: ["r/4"], duration: "q" }, { keys: ["r/4"], duration: "h" } // Accordo e pausa
    ],

    // Accompagnamento: Tango - Ritmo Habanera (Mano Sinistra)
    // Pattern base: [Nota Bassa (qd)] - [Accordo (8)] - [Accordo (q)]
    // Oppure [Nota Bassa (q)] - [Accordo (8)] - [Pausa (8)] - [Accordo (q)]
    // Adotteremo: Basso (semiminima puntata) - Accordo (croma) - Accordo (semiminima)
    // Per semplicità con midiValues e per chiarezza visiva, ogni elemento è un oggetto.
    notesBass: [
        // Sezione 1
        // Battuta 1: Am (A-C-E)
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52], staccato: true },
        // Battuta 2: Am
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52], staccato: true },
        // Battuta 3: Dm (D-F-A)
        { keys: ["d/3"], duration: "qd", midiValues: [50] }, { keys: ["d/3","f/3","a/3"], duration: "8", midiValues: [50,53,57] }, { keys: ["d/3","f/3","a/3"], duration: "q", midiValues: [50,53,57], staccato: true },
        // Battuta 4: Dm
        { keys: ["d/3"], duration: "qd", midiValues: [50] }, { keys: ["d/3","f/3","a/3"], duration: "8", midiValues: [50,53,57] }, { keys: ["d/3","f/3","a/3"], duration: "q", midiValues: [50,53,57], staccato: true },
        // Battuta 5: E7 (E-G#-B-D)
        { keys: ["e/2"], duration: "qd", midiValues: [40] }, { keys: ["e/3","g#/3","b/3"], duration: "8", midiValues: [52,56,59] }, { keys: ["e/3","g#/3","b/3"], duration: "q", midiValues: [52,56,59], staccato: true }, // G#
        // Battuta 6: E7
        { keys: ["e/2"], duration: "qd", midiValues: [40] }, { keys: ["e/3","g#/3","b/3"], duration: "8", midiValues: [52,56,59] }, { keys: ["e/3","g#/3","b/3"], duration: "q", midiValues: [52,56,59], staccato: true }, // G#
        // Battuta 7: Am
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52], staccato: true },
        // Battuta 8: Am
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52], staccato: true },

        // Sezione 2
        // Battuta 9: C (C-E-G)
        { keys: ["c/3"], duration: "qd", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55], staccato: true },
        // Battuta 10: G7 (G-B-D-F)
        { keys: ["g/2"], duration: "qd", midiValues: [43] }, { keys: ["g/2","b/2","d/3","f/3"], duration: "8", midiValues: [43,47,50,53] }, { keys: ["g/2","b/2","d/3","f/3"], duration: "q", midiValues: [43,47,50,53], staccato: true },
        // Battuta 11: E7
        { keys: ["e/2"], duration: "qd", midiValues: [40] }, { keys: ["e/3","g#/3","b/3"], duration: "8", midiValues: [52,56,59] }, { keys: ["e/3","g#/3","b/3"], duration: "q", midiValues: [52,56,59], staccato: true }, // G#
        // Battuta 12: Am
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["a/2","c/3","e/3"], duration: "q", midiValues: [45,48,52], staccato: true },
        // Battuta 13: Dm
        { keys: ["d/3"], duration: "qd", midiValues: [50] }, { keys: ["d/3","f/3","a/3"], duration: "8", midiValues: [50,53,57] }, { keys: ["d/3","f/3","a/3"], duration: "q", midiValues: [50,53,57], staccato: true },
        // Battuta 14: E7
        { keys: ["e/2"], duration: "qd", midiValues: [40] }, { keys: ["e/3","g#/3","b/3"], duration: "8", midiValues: [52,56,59] }, { keys: ["e/3","g#/3","b/3"], duration: "q", midiValues: [52,56,59], staccato: true }, // G#
        // Battuta 15: Am (Finale Drammatico)
        { keys: ["a/2"], duration: "qd", midiValues: [45] }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] }, { keys: ["e/2","a/2","c/3","e/3"], duration: "q", midiValues: [40,45,48,52], staccato: true }, // Accordo più pieno
        // Battuta 16: Am (Accordo finale secco)
        { keys: ["a/2", "e/3", "a/3"], duration: "q", midiValues: [45, 52, 57], staccato: true }, { keys: ["r/4"], duration: "q" }, { keys: ["r/4"], duration: "h" }
    ]
},
// =======================================================================
// === Esercizio 11 (o nuovo 10 se Tango non va usato): Melodia Country (Sol Maggiore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex11-CountryG-16bar-v1", // Aggiorna l'ID se necessario
    name: "Melodia Country (Sol Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "G", // F#
    timeSignature: "4/4", // Comune, anche se il feeling può essere un "due" accentuato
    repetitions: 2,
    bpm: 120, // Un tempo allegro e ballabile
    description: "Melodia vivace in stile Country in Sol Maggiore, con un classico accompagnamento 'boom-chick'.",

    // Melodia (Mano Destra) - 16 battute
    // Semplice, cantabile, con qualche inflessione tipica
    notesTreble: [
        // Sezione A (8 battute)
        // Battuta 1: G
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 2: G
        { keys: ["g/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["d/5"], duration: "q", midiValue: 74 },
        // Battuta 3: C
        { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 4: G
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
        // Battuta 5: G
        { keys: ["g/4"], duration: "q.", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 6: D7
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        // Battuta 7: G
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 8: G (con D7 di passaggio)
        { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // C e A preparano D7

        // Sezione B (8 battute)
        // Battuta 9: C
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 10: G
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 11: A7 (dominante di D)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, // C# per A7
        // Battuta 12: D7
        { keys: ["d/4"], duration: "q" }, { keys: ["f#/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Note di D7
        // Battuta 13: G
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 14: C
        { keys: ["c/5"], duration: "q.", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 15: G - D7
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, // G, F# (per D7)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // G, A (per D7)
        // Battuta 16: G (Finale)
        { keys: ["g/4"], duration: "w", midiValue: 67 }
    ],

    // Accompagnamento: Country "Boom-Chick" (Mano Sinistra)
    // Pattern: [Basso (Fondamentale, q)] - [Accordo (q)] - [Basso (Quinta, q)] - [Accordo (q)]
    notesBass: [
        // Sezione A
        // Battuta 1: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 2: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 3: C (C-E-G)
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        // Battuta 4: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 5: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 6: D7 (D-F#-A-C)
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "q", midiValues: [50,54,57,60] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "q", midiValues: [50,54,57,60] },
        // Battuta 7: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 8: G (con D7 di passaggio nel basso per la melodia) -> Si potrebbe tenere G o anticipare D7 nel basso. Teniamo G per coerenza.
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },

        // Sezione B
        // Battuta 9: C
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        // Battuta 10: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 11: A7 (A-C#-E-G)
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["a/2","c#/3","e/3","g/3"], duration: "q", midiValues: [45,49,52,55] }, // C#
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["a/2","c#/3","e/3","g/3"], duration: "q", midiValues: [45,49,52,55] }, // C#
        // Battuta 12: D7
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "q", midiValues: [50,54,57,60] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "q", midiValues: [50,54,57,60] },
        // Battuta 13: G
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        // Battuta 14: C
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        { keys: ["g/3"], duration: "q", midiValues: [55] }, { keys: ["c/3","e/3","g/3"], duration: "q", midiValues: [48,52,55] },
        // Battuta 15: G - D7 (prepariamo la cadenza)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] }, // G
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "q", midiValues: [50,54,57,60] }, // D7
        // Battuta 16: G (Finale)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["g/3","b/3","d/4"], duration: "q", midiValues: [55,59,62] },
        { keys: ["g/2"], duration: "h", midiValues: [43] } // Basso finale tenuto
    ]
},
// =======================================================================
// === Esercizio 12 (o come da numerazione): Melodia con Bossa Nova (Do Maggiore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex12-BossaC-16bar-v1", // Aggiorna l'ID se necessario
    name: "Melodia con Bossa Nova (Do Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4", // Anche se il feeling è spesso in 2, si scrive in 4/4
    repetitions: 2,
    bpm: 110, // Un tempo rilassato, tipico della Bossa Nova
    description: "Melodia suadente in Do Maggiore, accompagnata da un pattern ritmico di Bossa Nova e armonie morbide.",

    // Melodia (Mano Destra) - 16 battute
    // Sincopata, con note lunghe e legature, fraseggio morbido
    notesTreble: [
        // Sezione A (8 battute)
        // Battuta 1: Cmaj7
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 2: Cmaj7
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q.", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, // b naturale per Cmaj7
        // Battuta 3: Fmaj7
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // e naturale per Fmaj7
        // Battuta 4: Fm6 (o Bb7sus, ma Fm6 è più semplice qui)
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["ab/4"], duration: "q.", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // d naturale per Fm6
        // Battuta 5: Em7
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 6: A7(b9) (A-C#-E-G-Bb) o più semplicemente A7
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c#/5"], duration: "q.", midiValue: 73 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // C# per A7
        // Battuta 7: Dm7
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 8: G7
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/3"], duration: "q.", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },

        // Sezione B (8 battute)
        // Battuta 9: Cmaj7
        { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        // Battuta 10: Cmaj7
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q.", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 11: Fmaj7
        { keys: ["a/4"], duration: "h.", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 12: G7sus4 - G7 (un classico cambio bossa)
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // G7sus4 (G-C-D-F)
        { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // G7 (G-B-D-F)
        // Battuta 13: Em7
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        // Battuta 14: A7(b9) o A7
        { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // C#
        // Battuta 15: Dm7 - G7 (Turnaround)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Dm7
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // G7
        // Battuta 16: Cmaj7 (Finale morbido)
        { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] } // Accordo Cmaj7 tenuto
    ],

    // Accompagnamento: Bossa Nova (Mano Sinistra)
    // Pattern base per battuta (due mezze battute):
    // [Basso (Fond.) q] - [Accordo q] || [Basso (Quint.) q] - [Accordo q]
    // Ma il ritmo è più sincopato. Un pattern comune è:
    // [Basso (Fond.) sul tempo 1 (q)] - [Accordo sul "e" del 2 (8)] - [Accordo sul tempo 4 (8)]
    // Questo è complesso da scrivere in modo pulito.
    // Semplifichiamo per VexFlow:
    // 1° tempo: Basso (fondamentale) - semiminima
    // 2° tempo: Pausa (ottavo) - Accordo (ottavo)
    // 3° tempo: Basso (quinta) - semiminima
    // 4° tempo: Pausa (ottavo) - Accordo (ottavo)
    // O un pattern ancora più semplice: [Basso q] [Accordo q] [Basso q] [Accordo q] con i bassi che alternano fond/quinta.
    // Adotteremo: [Basso (Fond.) q. ] [Accordo 8] || [Basso (Quint.) q. ] [Accordo 8] per un feeling sincopato.
    // O ancora più fedele: [Basso (Fond.) q] [Accordo 8 sulla "e" del 2] [Basso (Quint.) q sul 3] [Accordo 8 sulla "e" del 4]
    // Questo significa: [Basso q] [Pausa 8] [Accordo 8] || [Basso q] [Pausa 8] [Accordo 8]

    notesBass: [
        // Sezione A
        // Battuta 1: Cmaj7 (C-E-G-B)
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        // Battuta 2: Cmaj7
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        // Battuta 3: Fmaj7 (F-A-C-E)
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] },
        // Battuta 4: Fm6 (F-Ab-C-D)
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["r/4"], duration: "8" }, { keys: ["ab/2","c/3","d/3"], duration: "8", midiValues: [44,48,50] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "8" }, { keys: ["ab/2","c/3","d/3"], duration: "8", midiValues: [44,48,50] },
        // Battuta 5: Em7 (E-G-B-D)
        { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] },
        { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] },
        // Battuta 6: A7 (A-C#-E-G)
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["r/4"], duration: "8" }, { keys: ["c#/3","e/3","g/3"], duration: "8", midiValues: [49,52,55] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["r/4"], duration: "8" }, { keys: ["c#/3","e/3","g/3"], duration: "8", midiValues: [49,52,55] },
        // Battuta 7: Dm7 (D-F-A-C)
        { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] },
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] },
        // Battuta 8: G7 (G-B-D-F)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2","d/3","f/3"], duration: "8", midiValues: [47,50,53] },
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2","d/3","f/3"], duration: "8", midiValues: [47,50,53] },

        // Sezione B
        // Battuta 9: Cmaj7
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        // Battuta 10: Cmaj7
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        // Battuta 11: Fmaj7
        { keys: ["f/2"], duration: "q", midiValues: [41] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] },
        { keys: ["c/3"], duration: "q", midiValues: [48] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2","c/3","e/3"], duration: "8", midiValues: [45,48,52] },
        // Battuta 12: G7sus4 (G-C-D-F) poi G7 (G-B-D-F)
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["c/3","d/3","f/3"], duration: "8", midiValues: [48,50,53] }, // G7sus4 chord
        { keys: ["d/3"], duration: "q", midiValues: [50] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2","d/3","f/3"], duration: "8", midiValues: [47,50,53] }, // G7 chord
        // Battuta 13: Em7
        { keys: ["e/2"], duration: "q", midiValues: [40] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] },
        { keys: ["b/2"], duration: "q", midiValues: [47] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2","b/2","d/3"], duration: "8", midiValues: [43,47,50] },
        // Battuta 14: A7
        { keys: ["a/2"], duration: "q", midiValues: [45] }, { keys: ["r/4"], duration: "8" }, { keys: ["c#/3","e/3","g/3"], duration: "8", midiValues: [49,52,55] },
        { keys: ["e/3"], duration: "q", midiValues: [52] }, { keys: ["r/4"], duration: "8" }, { keys: ["c#/3","e/3","g/3"], duration: "8", midiValues: [49,52,55] },
        // Battuta 15: Dm7 - G7
        { keys: ["d/2"], duration: "q", midiValues: [38] }, { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] }, // Dm7
        { keys: ["g/2"], duration: "q", midiValues: [43] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2","d/3","f/3"], duration: "8", midiValues: [47,50,53] }, // G7
        // Battuta 16: Cmaj7 (Finale)
        { keys: ["c/2"], duration: "q", midiValues: [36] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/3","g/3","b/3"], duration: "8", midiValues: [52,55,59] },
        { keys: ["c/2", "e/2", "g/2", "b/2"], duration: "h", midiValues: [36,40,43,47] } // Accordo Cmaj7 basso e tenuto
    ]
},
// =======================================================================
// === Esercizio 13 (o come da numerazione): Melodia con Salsa (Sol Minore) - 8 o 16 Battute ===
// =======================================================================
// Optiamo per 8 battute per concentrarci sul pattern, ma può essere esteso facilmente.
{
    id: "accompagnamenti-ex13-SalsaGm-8bar-v1", // Aggiorna l'ID se necessario
    name: "Melodia con Salsa/Montuno (Sol Min)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "Gm", // Bb, Eb
    timeSignature: "4/4", // La base ritmica è spesso in clave, ma si scrive in 4/4
    repetitions: 2,
    bpm: 180, // La Salsa è tipicamente veloce e energica
    description: "Melodia vibrante in Sol Minore, accompagnata da un pattern di Montuno pianistico tipico della Salsa.",

    // Melodia (Mano Destra) - 8 battute
    // Sincopata, con accenti forti, spesso suonata in ottave o con accordi per dare impatto.
    // Qui una melodia più semplice per iniziare.
    notesTreble: [
        // Progressione Gm - C - F - Bb | Eb - D7 - Gm - (D7)
        // Battuta 1: Gm
        { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["r/4"], duration: "8" }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["r/4"], duration: "8" },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" },
        // Battuta 2: C (o Cm7)
        { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8" },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" },
        // Battuta 3: F (o F7)
        { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8" },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["r/4"], duration: "q" },
        // Battuta 4: Bb
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["r/4"], duration: "q" },
        // Battuta 5: Eb
        { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["r/4"], duration: "8" }, { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["r/4"], duration: "8" },
        { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["r/4"], duration: "q" },
        // Battuta 6: D7
        { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["r/4"], duration: "8" }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["r/4"], duration: "8" },
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // A e C come parte di D7
        // Battuta 7: Gm
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, // Arpeggio Gm ascendente
        // Battuta 8: D7 (Turnaround)
        { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f#/4"], duration: "h", midiValue: 66 } // D7 per ritornare
    ],

    // Accompagnamento: Montuno Pianistico (Mano Sinistra e Destra spesso interagiscono)
    // Il Montuno classico spesso usa ottave spezzate o pattern arpeggiati sincopati.
    // Per semplicità, qui un pattern di accordi sincopati che può essere suonato dalla mano sinistra
    // o diviso tra le mani se la melodia ha pause.
    // Qui, lo assegniamo alla mano sinistra (`notesBass`).
    // Pattern ritmico per battuta (molto comune):
    // [Accordo (8)] [Pausa (8)] [Accordo (8)] [Accordo (8)] | [Pausa (8)] [Accordo (8)] [Accordo (8)] [Pausa (8)]
    //   1           e           2           e     |   3           e           4           e
    //   X           _           X           X     |   _           X           X           _

    notesBass: [
        // Progressione: Gm - Cm7 - F7 - Bbmaj7 | Ebmaj7 - D7 - Gm - D7
        // Battuta 1: Gm (G-Bb-D)
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["r/4"], duration: "8" },
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] },
        { keys: ["r/4"], duration: "8" }, { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] },
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["r/4"], duration: "8" },
        // Battuta 2: Cm7 (C-Eb-G-Bb)
        { keys: ["c/3","eb/3","g/3","bb/3"], duration: "8", midiValues: [48,51,55,58] }, { keys: ["r/4"], duration: "8" },
        { keys: ["c/3","eb/3","g/3","bb/3"], duration: "8", midiValues: [48,51,55,58] }, { keys: ["c/3","eb/3","g/3","bb/3"], duration: "8", midiValues: [48,51,55,58] },
        { keys: ["r/4"], duration: "8" }, { keys: ["c/3","eb/3","g/3","bb/3"], duration: "8", midiValues: [48,51,55,58] },
        { keys: ["c/3","eb/3","g/3","bb/3"], duration: "8", midiValues: [48,51,55,58] }, { keys: ["r/4"], duration: "8" },
        // Battuta 3: F7 (F-A-C-Eb)
        { keys: ["f/3","a/3","c/4","eb/4"], duration: "8", midiValues: [53,57,60,63] }, { keys: ["r/4"], duration: "8" },
        { keys: ["f/3","a/3","c/4","eb/4"], duration: "8", midiValues: [53,57,60,63] }, { keys: ["f/3","a/3","c/4","eb/4"], duration: "8", midiValues: [53,57,60,63] },
        { keys: ["r/4"], duration: "8" }, { keys: ["f/3","a/3","c/4","eb/4"], duration: "8", midiValues: [53,57,60,63] },
        { keys: ["f/3","a/3","c/4","eb/4"], duration: "8", midiValues: [53,57,60,63] }, { keys: ["r/4"], duration: "8" },
        // Battuta 4: Bbmaj7 (Bb-D-F-A)
        { keys: ["bb/2","d/3","f/3","a/3"], duration: "8", midiValues: [46,50,53,57] }, { keys: ["r/4"], duration: "8" },
        { keys: ["bb/2","d/3","f/3","a/3"], duration: "8", midiValues: [46,50,53,57] }, { keys: ["bb/2","d/3","f/3","a/3"], duration: "8", midiValues: [46,50,53,57] },
        { keys: ["r/4"], duration: "8" }, { keys: ["bb/2","d/3","f/3","a/3"], duration: "8", midiValues: [46,50,53,57] },
        { keys: ["bb/2","d/3","f/3","a/3"], duration: "8", midiValues: [46,50,53,57] }, { keys: ["r/4"], duration: "8" },
        // Battuta 5: Ebmaj7 (Eb-G-Bb-D)
        { keys: ["eb/3","g/3","bb/3","d/4"], duration: "8", midiValues: [51,55,58,62] }, { keys: ["r/4"], duration: "8" },
        { keys: ["eb/3","g/3","bb/3","d/4"], duration: "8", midiValues: [51,55,58,62] }, { keys: ["eb/3","g/3","bb/3","d/4"], duration: "8", midiValues: [51,55,58,62] },
        { keys: ["r/4"], duration: "8" }, { keys: ["eb/3","g/3","bb/3","d/4"], duration: "8", midiValues: [51,55,58,62] },
        { keys: ["eb/3","g/3","bb/3","d/4"], duration: "8", midiValues: [51,55,58,62] }, { keys: ["r/4"], duration: "8" },
        // Battuta 6: D7 (D-F#-A-C)
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["r/4"], duration: "8" },
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] },
        { keys: ["r/4"], duration: "8" }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] },
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["r/4"], duration: "8" },
        // Battuta 7: Gm
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["r/4"], duration: "8" },
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] },
        { keys: ["r/4"], duration: "8" }, { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] },
        { keys: ["g/3","bb/3","d/4"], duration: "8", midiValues: [55,58,62] }, { keys: ["r/4"], duration: "8" },
        // Battuta 8: D7 (Turnaround)
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["r/4"], duration: "8" },
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] },
        { keys: ["r/4"], duration: "8" }, { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] },
        { keys: ["d/3","f#/3","a/3","c/4"], duration: "8", midiValues: [50,54,57,60] }, { keys: ["r/4"], duration: "8" }
    ]
},
// =======================================================================
// === Esercizio 14 (o come da numerazione): Melodia con Merengue (Do Maggiore) - 8 Battute ===
// =======================================================================
// Optiamo per 8 battute, tipico per una sezione di merengue che si ripete.
{
    id: "accompagnamenti-ex14-MerengueC-8bar-v1", // Aggiorna l'ID se necessario
    name: "Melodia con Merengue (Do Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4", // Il Merengue è fortemente binario, il 2/4 è il più appropriato
    repetitions: 3, // Si presta a molte ripetizioni
    bpm: 130, // Veloce e ballabile (può arrivare anche a 150-160+)
    description: "Melodia festosa in Do Maggiore, accompagnata da un ritmo di Merengue incisivo e sincopato.",

    // Melodia (Mano Destra) - 8 battute
    // Sincopata, brillante, spesso con frasi brevi e ripetitive.
    notesTreble: [
        // Progressione semplice: C - G7 - C - C | F - C - G7 - C
        // Battuta 1: C
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        // Battuta 2: G7
        { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        // Battuta 3: C
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 4: C
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["r/4"], duration: "q" },
        // Battuta 5: F
        { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
        // Battuta 6: C
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        // Battuta 7: G7
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
        // Battuta 8: C (Finale di sezione)
        { keys: ["c/4"], duration: "h", midiValue: 60 } // Minima per riempire la battuta in 2/4
    ],

    // Accompagnamento: Merengue Piano (Mano Sinistra)
    // Pattern tipico enfatizza il "e" del 1 e il 2.
    // [Basso (8) sul "e" del tempo 1] - [Accordo (8) sul tempo 2]
    // Quindi: [Pausa (8)] - [Basso (8)] | [Accordo (8)] - [Pausa (8)]
    // Questo è un pattern base. Un altro comune è un accordo staccato sul tempo 2.
    // O ancora più tipico: Basso sul 1, accordo sul "e" del 1, e accordo sul "e" del 2.
    // [Basso (8)] [Accordo (8)] | [Pausa (8)] [Accordo (8)]
    // Scegliamo questo:
    // Tempo 1: Basso (croma) - Accordo (croma)
    // Tempo 2: Accordo (croma) - Pausa (croma)
    // Questo dà:  X X | X _
    //              1 e | 2 e
    // Per il piano è comune anche [Basso (sul tempo 1)] - [Accordo (sul tempo 2, spesso staccato e sincopato)]
    // Adottiamo un pattern: [Basso (q)] sul tempo 1, [Accordo (q) staccato] sul tempo 2
    // È più semplice ma cattura il "punch".
    // NO, per merengue è più corretto:
    // Battuta di 2/4:
    // Movimento 1: Basso (croma) - Accordo (croma)
    // Movimento 2: Accordo (croma) - Pausa (croma)
    // Questa è la cellula ritmica base del piano merengue.

    notesBass: [
        // Progressione: C - G7 - C - C | F - C - G7 - C
        // Battuta 1: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] },
        { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["r/4"], duration: "8" },
        // Battuta 2: G7 (G-B-D-F)
        { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2","b/2","d/3","f/3"], duration: "8", midiValues: [43,47,50,53] },
        { keys: ["g/2","b/2","d/3","f/3"], duration: "8", midiValues: [43,47,50,53] }, { keys: ["r/4"], duration: "8" },
        // Battuta 3: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] },
        { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["r/4"], duration: "8" },
        // Battuta 4: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] },
        { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["r/4"], duration: "8" },
        // Battuta 5: F (F-A-C)
        { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] },
        { keys: ["f/2","a/2","c/3"], duration: "8", midiValues: [41,45,48] }, { keys: ["r/4"], duration: "8" },
        // Battuta 6: C
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] },
        { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["r/4"], duration: "8" },
        // Battuta 7: G7
        { keys: ["g/2"], duration: "8", midiValues: [43] }, { keys: ["g/2","b/2","d/3","f/3"], duration: "8", midiValues: [43,47,50,53] },
        { keys: ["g/2","b/2","d/3","f/3"], duration: "8", midiValues: [43,47,50,53] }, { keys: ["r/4"], duration: "8" },
        // Battuta 8: C (Finale di sezione)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] },
        { keys: ["c/3","e/3","g/3"], duration: "8", midiValues: [48,52,55] }, { keys: ["r/4"], duration: "8" } // Potrebbe finire con un accordo tenuto o secco. Qui ripetiamo il pattern.
                                                                                                        // Oppure: { keys: ["c/3","e/3","g/3"], duration: "h", midiValues: [48,52,55] } per un finale tenuto
    ]
},
// =======================================================================
// === Esercizio 15: Melodia con Swing Jazz Comping (Fa Blues) - 12 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex15-SwingCompFBlues-12bar-v1",
    name: "Melodia con Swing Jazz Comping (Fa Blues)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "F", // Bb
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 130, // Un tempo medio per lo swing
    description: "Melodia jazzistica su un giro di blues in Fa, con accompagnamento 'comping' sincopato in stile swing nella mano sinistra.",

    // Melodia (Mano Destra) - 12 battute (Blues in F: F7-Bb7-F7-F7 | Bb7-Bb7-F7-D7alt | Gm7-C7-F7-C7 )
    // Sincopata, con fraseggio tipico del jazz. Le pause sono importanti.
    notesTreble: [
        // Battuta 1: F7
        { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Eb (settima di F7)
        // Battuta 2: Bb7
        { keys: ["r/4"], duration: "8" }, { keys: ["d/5"], duration: "q.", midiValue: 74 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, // Ab (settima di Bb7)
        // Battuta 3: F7
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 4: F7
        { keys: ["f/4"], duration: "8" }, { keys: ["g/4"], duration: "8" }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["eb/4"], duration: "h", midiValue: 63 },
        // Battuta 5: Bb7
        { keys: ["r/4"], duration: "q" }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
        // Battuta 6: Bb7 (o Bbm7 per colore)
        { keys: ["db/5"], duration: "q", midiValue: 73 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Db (terza minore per Bbm7)
        // Battuta 7: F7
        { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 8: D7alt (o D7#9, D-F#-A-C-E#)
        { keys: ["r/4"], duration: "8" }, { keys: ["f/5"], duration: "8", midiValue: 77 }, // F naturale (nona aumentata, enarmonico di E#)
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // A naturale (quinta)
        // Battuta 9: Gm7
        { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 10: C7
        { keys: ["c/5"], duration: "8" }, { keys: ["e/5"], duration: "8" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "h", midiValue: 70 }, // Bb (settima di C7)
        // Battuta 11: F7 (Turnaround)
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
        // Battuta 12: C7 (Turnaround, o F7 per chiudere)
        { keys: ["g/4"], duration: "q.", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 } // C7
    ],

    // Accompagnamento: Swing Jazz Comping (Mano Sinistra)
    // Accordi sincopati, spesso "shell voicings" (Radice-3-7 o Radice-7-3) o "rootless" (3-7)
    // Il ritmo è cruciale: molte note in levare, tipico "Charleston" o variazioni.
    // Pattern: [Pausa (q)] [Accordo (q)] | [Pausa (8)] [Accordo (8)] [Pausa (q)]
    // Oppure: [Pausa (8)] [Accordo (8)] [Pausa (8)] [Accordo (8)] | [Pausa (q)] [Accordo (q)]
    // Scegliamo un mix di ritmi sincopati. Ogni accordo è un evento.
    notesBass: [
        // Battuta 1: F7 (F-A-Eb)
        { keys: ["r/4"], duration: "q" }, { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] },
        { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","eb/3"], duration: "8", midiValues: [41,45,51] }, { keys: ["r/4"], duration: "q" },
        // Battuta 2: Bb7 (Bb-D-Ab)
        { keys: ["r/4"], duration: "8" }, { keys: ["bb/2","d/3","ab/3"], duration: "8", midiValues: [46,50,56] }, { keys: ["r/4"], duration: "8" }, { keys: ["bb/2","d/3","ab/3"], duration: "8", midiValues: [46,50,56] },
        { keys: ["r/4"], duration: "q" }, { keys: ["bb/2","d/3","ab/3"], duration: "q", midiValues: [46,50,56] },
        // Battuta 3: F7
        { keys: ["f/2","eb/3","a/3"], duration: "q", midiValues: [41,51,57] }, { keys: ["r/4"], duration: "q." }, { keys: ["f/2","eb/3","a/3"], duration: "8", midiValues: [41,51,57] },
        // Battuta 4: F7 ("Charleston" rhythm: accordo sul 2 e sul "e" del 4)
        { keys: ["r/4"], duration: "q" }, { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] },
        { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","eb/3"], duration: "8", midiValues: [41,45,51] },
        // Battuta 5: Bb7
        { keys: ["bb/2","ab/3","d/4"], duration: "h", midiValues: [46,56,62] }, { keys: ["r/4"], duration: "q" }, { keys: ["bb/2","ab/3","d/4"], duration: "q", midiValues: [46,56,62] },
        // Battuta 6: Bb7 (o Bbm7: Bb-Db-F-Ab)
        { keys: ["r/4"], duration: "8" }, { keys: ["bb/2","db/3","f/3"], duration: "q.", midiValues: [46,49,53] }, // Bbm7 voicing senza quinta
        { keys: ["bb/2","db/3","f/3"], duration: "h", midiValues: [46,49,53] },
        // Battuta 7: F7
        { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] }, { keys: ["r/4"], duration: "q" },
        { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] }, { keys: ["r/4"], duration: "q" },
        // Battuta 8: D7alt (Voicing: D-F#-C-E# -> D-F#-C-Fnat. Usiamo D-F#-C)
        { keys: ["r/4"], duration: "q" }, { keys: ["d/3","f#/3","c/4"], duration: "h", midiValues: [50,54,60] }, { keys: ["d/3","f#/3","c/4"], duration: "q", midiValues: [50,54,60] },
        // Battuta 9: Gm7 (G-Bb-D-F -> Voicing Bb-D-F o G-Bb-F)
        { keys: ["g/2","bb/2","f/3"], duration: "q", midiValues: [43,46,53] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2","bb/2","f/3"], duration: "8", midiValues: [43,46,53] },
        { keys: ["r/4"], duration: "q" }, { keys: ["g/2","bb/2","f/3"], duration: "q", midiValues: [43,46,53] },
        // Battuta 10: C7 (C-E-G-Bb -> Voicing E-G-Bb o C-E-Bb)
        { keys: ["c/3","e/3","bb/3"], duration: "h.", midiValues: [48,52,58] }, { keys: ["c/3","e/3","bb/3"], duration: "q", midiValues: [48,52,58] },
        // Battuta 11: F7 (Turnaround)
        { keys: ["r/4"], duration: "q" }, { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] },
        { keys: ["f/2","a/2","eb/3"], duration: "8", midiValues: [41,45,51] }, { keys: ["r/4"], duration: "8" }, { keys: ["f/2","a/2","eb/3"], duration: "q", midiValues: [41,45,51] },
        // Battuta 12: C7 (Turnaround)
        { keys: ["c/3","e/3","bb/3"], duration: "q", midiValues: [48,52,58] }, { keys: ["r/4"], duration: "q" },
        { keys: ["c/3","e/3","bb/3"], duration: "q", midiValues: [48,52,58] }, { keys: ["r/4"], duration: "q" },
    ]
},
// =======================================================================
// === Esercizio 16: Melodia con Pop Ballad Moderna (Do Maggiore) - 16 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex16-PopBalladC-16bar-v1",
    name: "Melodia con Pop Ballad Moderna (Do Mag)",
    category: "Accompagnamenti",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 72, // Un tempo lento tipico delle ballad
    description: "Melodia espressiva in stile Pop Ballad in Do Maggiore, con un accompagnamento pianistico emotivo che alterna arpeggi e accordi.",

    // Melodia (Mano Destra) - 16 battute
    // Cantabile, con note tenute e un certo lirismo.
    notesTreble: [
        // Sezione A (Giro: C - G/B - Am - F)
        // Battuta 1: C
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        // Battuta 2: G/B (Sol con Si al basso)
        { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        // Battuta 3: Am
        { keys: ["c/4"], duration: "h.", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 4: F
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 5: C
        { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 6: G/B
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
        // Battuta 7: Am
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
        // Battuta 8: F (poi G per preparare il ritornello)
        { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // G prepara il C

        // Sezione B (Ritornello/Bridge - Giro: C - Em - F - G)
        // Battuta 9: C
        { keys: ["e/5"], duration: "q.", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
        // Battuta 10: Em
        { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 11: F
        { keys: ["a/4"], duration: "h.", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
        // Battuta 12: G
        { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
        // Battuta 13: C
        { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["g/5"], duration: "h", midiValue: 79 },
        // Battuta 14: Em
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
        // Battuta 15: F
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, // Arpeggio ascendente
        // Battuta 16: C (Finale)
        { keys: ["c/5"], duration: "w", midiValue: 72 }
    ],

    // Accompagnamento: Pop Ballad (Mano Sinistra)
    // Pattern: Arpeggi in ottavi o accordi ribattuti in ottavi/semiminime.
    // Alterneremo tra arpeggi fluidi e accordi più pieni e ritmici.
    notesBass: [
        // Sezione A (Arpeggi in ottavi: Basso-5-8-3-5-8-3-5)
        // Battuta 1: C (C-G-C-E-G-C-E-G)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
        { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/3"], duration: "8", midiValues: [55] },
        // Battuta 2: G/B (B-D-G-B-D-G-B-D)
        { keys: ["b/2"], duration: "8", midiValues: [47] }, { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
        { keys: ["d/3"], duration: "8", midiValues: [50] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["d/3"], duration: "8", midiValues: [50] },
        // Battuta 3: Am (A-E-A-C-E-A-C-E)
        { keys: ["a/2"], duration: "8", midiValues: [45] }, { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] },
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/3"], duration: "8", midiValues: [52] },
        // Battuta 4: F (F-C-F-A-C-F-A-C)
        { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        // Battuta 5: C (Accordi ribattuti in semiminime per cambio di texture)
        { keys: ["c/3","g/3","c/4"], duration: "q", midiValues: [48,55,60] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "q", midiValues: [48,55,60,64] },
        { keys: ["c/3","g/3","c/4"], duration: "q", midiValues: [48,55,60] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "q", midiValues: [48,55,60,64] },
        // Battuta 6: G/B
        { keys: ["b/2","g/3","d/4"], duration: "q", midiValues: [47,55,62] }, { keys: ["b/2","g/3","d/4","b/3"], duration: "q", midiValues: [47,55,62,59] },
        { keys: ["b/2","g/3","d/4"], duration: "q", midiValues: [47,55,62] }, { keys: ["b/2","g/3","d/4","b/3"], duration: "q", midiValues: [47,55,62,59] },
        // Battuta 7: Am
        { keys: ["a/2","e/3","a/3"], duration: "q", midiValues: [45,52,57] }, { keys: ["a/2","e/3","a/3","c/4"], duration: "q", midiValues: [45,52,57,60] },
        { keys: ["a/2","e/3","a/3"], duration: "q", midiValues: [45,52,57] }, { keys: ["a/2","e/3","a/3","c/4"], duration: "q", midiValues: [45,52,57,60] },
        // Battuta 8: F - G (Accordi tenuti per la transizione)
        { keys: ["f/2","c/3","f/3","a/3"], duration: "h", midiValues: [41,48,53,57] }, // F
        { keys: ["g/2","d/3","g/3","b/3"], duration: "h", midiValues: [43,50,55,59] }, // G

        // Sezione B (Accordi più pieni e ritmici in ottavi)
        // Pattern: [Accordo(8)] [Accordo(8)] [Accordo(8)] [Accordo(8)] ...
        // Battuta 9: C
        { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] },
        { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] },
        { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] },
        { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] }, { keys: ["c/3","g/3","c/4","e/4"], duration: "8", midiValues: [48,55,60,64] },
        // Battuta 10: Em (E-G-B)
        { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] }, { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] },
        { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] }, { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] },
        { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] }, { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] },
        { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] }, { keys: ["e/3","b/3","e/4","g/4"], duration: "8", midiValues: [52,59,64,67] },
        // Battuta 11: F (F-A-C)
        { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] }, { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] },
        { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] }, { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] },
        { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] }, { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] },
        { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] }, { keys: ["f/2","c/3","f/3","a/3"], duration: "8", midiValues: [41,48,53,57] },
        // Battuta 12: G (G-B-D)
        { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] }, { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] },
        { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] }, { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] },
        { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] }, { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] },
        { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] }, { keys: ["g/2","d/3","g/3","b/3"], duration: "8", midiValues: [43,50,55,59] },
        // Battuta 13: C (Torniamo ad arpeggi per variare)
        { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["e/4"], duration: "8", midiValues: [64] },
        { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["g/3"], duration: "8", midiValues: [55] }, // Arpeggio più ampio
        // Battuta 14: Em
        { keys: ["e/3"], duration: "8", midiValues: [52] }, { keys: ["b/3"], duration: "8", midiValues: [59] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["g/4"], duration: "8", midiValues: [67] },
        { keys: ["b/4"], duration: "8", midiValues: [71] }, { keys: ["g/4"], duration: "8", midiValues: [67] }, { keys: ["e/4"], duration: "8", midiValues: [64] }, { keys: ["b/3"], duration: "8", midiValues: [59] },
        // Battuta 15: F
        { keys: ["f/2"], duration: "8", midiValues: [41] }, { keys: ["c/3"], duration: "8", midiValues: [48] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["a/3"], duration: "8", midiValues: [57] },
        { keys: ["c/4"], duration: "8", midiValues: [60] }, { keys: ["a/3"], duration: "8", midiValues: [57] }, { keys: ["f/3"], duration: "8", midiValues: [53] }, { keys: ["c/3"], duration: "8", midiValues: [48] },
        // Battuta 16: C (Finale)
        { keys: ["c/3","g/3","c/4","e/4"], duration: "w", midiValues: [48,55,60,64] } // Accordo C maggiore tenuto
    ]
},
// =======================================================================
// === Esercizio 17: Corale Classico a 4 Voci (Stile Bach - Sol Maggiore) - 8 Battute ===
// =======================================================================
{
    id: "accompagnamenti-ex17-CoraleBachG-8bar-v1",
    name: "Corale Classico a 4 Voci (Sol Mag)",
    category: "Accompagnamenti", // O una nuova categoria "Polifonia" o "StudiClassici" se preferisci
    staveLayout: "grand",
    keySignature: "G", // F#
    timeSignature: "4/4",
    repetitions: 2,
    bpm: 60, // Lento e maestoso, per permettere di seguire le voci
    description: "Breve corale a quattro voci in stile J.S. Bach, per lo studio dell'indipendenza delle mani e della conduzione delle voci. Mano destra: Soprano e Alto. Mano sinistra: Tenore e Basso.",

    // Voci: Soprano (S), Alto (A), Tenore (T), Basso (B)
    // Mano Destra (notesTreble): S (superiore) + A (inferiore)
    // Mano Sinistra (notesBass): T (superiore) + B (inferiore)
    // Ogni evento è un bicordo per mano, salvo note tenute.

    notesTreble: [ // Soprano & Alto
        // Battuta 1: G (S:d5, A:g4)
        { keys: ["d/5", "g/4"], duration: "q", midiValues: [74, 67] }, { keys: ["c/5", "g/4"], duration: "q", midiValues: [72, 67] }, // G -> C/G (A tiene G)
        { keys: ["b/4", "g/4"], duration: "q", midiValues: [71, 67] }, { keys: ["a/4", "f#/4"], duration: "q", midiValues: [69, 66] }, // G -> D/F# (A scende a F#)
        // Battuta 2: G (S:g4, A:d4)
        { keys: ["g/4", "d/4"], duration: "h", midiValues: [67, 62] }, { keys: ["a/4", "d/4"], duration: "q", midiValues: [69, 62] }, // G -> D (S: A, A tiene D)
        { keys: ["b/4", "d/4"], duration: "q", midiValues: [71, 62] }, // D
        // Battuta 3: C (S:c5, A:e4)
        { keys: ["c/5", "e/4"], duration: "q", midiValues: [72, 64] }, { keys: ["b/4", "e/4"], duration: "q", midiValues: [71, 64] }, // C -> G/B (A tiene E)
        { keys: ["a/4", "e/4"], duration: "q", midiValues: [69, 64] }, { keys: ["g/4", "d/4"], duration: "q", midiValues: [67, 62] }, // Am -> D
        // Battuta 4: G (S:g4, A:b3) - Cadenza perfetta
        { keys: ["g/4", "b/3"], duration: "w", midiValues: [67, 59] },

        // Battuta 5: Em (S:b4, A:g4)
        { keys: ["b/4", "g/4"], duration: "q", midiValues: [71, 67] }, { keys: ["a/4", "g/4"], duration: "q", midiValues: [69, 67] }, // Em -> C/G (A tiene G)
        { keys: ["g/4", "e/4"], duration: "q", midiValues: [67, 64] }, { keys: ["f#/4", "d/4"], duration: "q", midiValues: [66, 62] }, // C -> D
        // Battuta 6: C (S:e4, A:c4)
        { keys: ["e/4", "c/4"], duration: "h", midiValues: [64, 60] }, { keys: ["d/4", "b/3"], duration: "h", midiValues: [62, 59] }, // C -> G/B
        // Battuta 7: Am (S:c4, A:a3) D7 (S:d4, A:a3)
        { keys: ["c/4", "a/3"], duration: "q", midiValues: [60, 57] }, { keys: ["d/4", "a/3"], duration: "q", midiValues: [62, 57] }, // Am -> D7 (A tiene A)
        { keys: ["c/4", "a/3"], duration: "q", midiValues: [60, 57] }, { keys: ["b/3", "g/3"], duration: "q", midiValues: [59, 55] }, // D7 -> G (A scende a G)
        // Battuta 8: G (S:g3, A:d4) - Cadenza finale (Amen plagale implicita prima)
        { keys: ["g/4", "d/4"], duration: "w", midiValues: [67, 62] } // S: G4, non G3.
    ],

    notesBass: [ // Tenore & Basso
        // Battuta 1: G (T:b3, B:g2)
        { keys: ["b/3", "g/2"], duration: "q", midiValues: [59, 43] }, { keys: ["c/4", "e/3"], duration: "q", midiValues: [60, 52] }, // G -> C (Basso E è sospetto, dovrebbe essere C3 per C/G)
                                                                                                                                // Correggo: G -> C/G (T:c4, B:g2)
        // { keys: ["c/4", "g/2"], duration: "q", midiValues: [60, 43] }, // C/G
        // Se il soprano ha C5, l'alto G4, il tenore B3 e il basso G2, l'accordo è G.
        // Se il soprano ha C5, l'alto G4, il tenore C4, il basso G2, l'accordo è C/G.
        // La prima versione era: S:d5,A:g4, T:b3,B:g2 = Gmaj
        // Seconda: S:c5,A:g4, T:b3,B:g2 = Gsus4 o C/G se T fosse C4. Manteniamo T:b3, B:g2. = Gmaj
        // Era: { keys: ["b/3", "g/2"], duration: "q", midiValues: [59, 43] }, { keys: ["c/4", "g/2"], duration: "q", midiValues: [60, 43] }, // G -> C/G
        { keys: ["b/3", "g/2"], duration: "q", midiValues: [59, 43] }, // G (con S:c5, A:g4 -> Gsus4)
        { keys: ["d/4", "d/3"], duration: "q", midiValues: [62, 50] }, { keys: ["d/4", "f#/2"], duration: "q", midiValues: [62, 42] }, // G -> D/F#
        // Battuta 2: G (T:g3, B:g2)
        { keys: ["g/3", "g/2"], duration: "h", midiValues: [55, 43] }, { keys: ["f#/3", "d/3"], duration: "q", midiValues: [54, 50] }, // G -> D
        { keys: ["g/3", "b/2"], duration: "q", midiValues: [55, 47] }, // D -> G/B
        // Battuta 3: C (T:g3, B:c3)
        { keys: ["g/3", "c/3"], duration: "q", midiValues: [55, 48] }, { keys: ["g/3", "b/2"], duration: "q", midiValues: [55, 47] }, // C -> G/B
        { keys: ["f#/3", "a/2"], duration: "q", midiValues: [54, 45] }, { keys: ["e/3", "d/3"], duration: "q", midiValues: [52, 50] }, // Am -> D
        // Battuta 4: G (T:d3, B:g2)
        { keys: ["d/3", "g/2"], duration: "w", midiValues: [50, 43] },

        // Battuta 5: Em (T:g3, B:e2)
        { keys: ["g/3", "e/2"], duration: "q", midiValues: [55, 40] }, { keys: ["f#/3", "e/2"], duration: "q", midiValues: [54, 40] }, // Em -> C/E (T scende a F#, B tiene E)
                                                                                                                                // Corretto Em -> C/G (T:f#3, B:c3) se A e S sono su G e C/G.
                                                                                                                                // Se S:b4,A:g4, T:g3,B:e2 = Em.
                                                                                                                                // Se S:a4,A:g4, T:f#3,B:c3 = C/G.  Meglio T:e3, B:c3 per C.
        // { keys: ["e/3", "c/3"], duration: "q", midiValues: [52, 48] }, // C
        // Ritorniamo alla logica: S:b4 A:g4 T:g3 B:e2 = Em
        // S:a4 A:g4 T:f#3 B:c3 = C/G. Basso C3, Tenore F#3
        { keys: ["f#/3", "c/3"], duration: "q", midiValues: [54, 48] }, // C/G
        { keys: ["e/3", "c/3"], duration: "q", midiValues: [52, 48] }, { keys: ["d/3", "b/2"], duration: "q", midiValues: [50, 47] }, // C -> G/B (T scende a D, B scende a B)
                                                                                                                                // S:f#4 A:d4 T:d3 B:b2 -> D/B.
        // Battuta 6: C (T:g3, B:c3)
        { keys: ["g/3", "c/3"], duration: "h", midiValues: [55, 48] }, { keys: ["g/3", "g/2"], duration: "h", midiValues: [55, 43] }, // C -> G (T tiene G, Basso G)
        // Battuta 7: Am (T:e3, B:a2) D7 (T:f#3, B:d2)
        { keys: ["e/3", "a/2"], duration: "q", midiValues: [52, 45] }, { keys: ["f#/3", "d/2"], duration: "q", midiValues: [54, 38] }, // Am -> D7
        { keys: ["e/3", "d/2"], duration: "q", midiValues: [52, 38] }, { keys: ["d/3", "g/2"], duration: "q", midiValues: [50, 43] }, // D7 -> G
        // Battuta 8: G (T:b3, B:g2)
        { keys: ["b/3", "g/2"], duration: "w", midiValues: [59, 43] }
    ]
},



];

// Assicura che window.exerciseData esista e aggiunge la nuova categoria
window.exerciseData = window.exerciseData || {};
window.exerciseData.Accompagnamenti = accompagnamentiExercises;

// Messaggio per confermare il caricamento
console.log("Esercizi 'Accompagnamenti' (accompagnamenti.js) aggiornati. Aggiunto 'accompagnamenti-ex2-ArpeggiatoC-18bar'.");


