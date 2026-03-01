import type { Quiz, FinalExam } from '@/types'

export const assessments: Record<string, { quizzes: Quiz[], final_exams: FinalExam[] }> = {
  math: {
    quizzes: [
      {
        id: 'math-algebra-quiz',
        title: 'Algebra Basics Quiz',
        title_fr: 'Quiz sur les bases de l\'algèbre',
        description: 'Test your knowledge of algebraic expressions and equations',
        description_fr: 'Testez vos connaissances des expressions et équations algébriques',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'alg-q1',
            question: 'What is the value of x if 2x + 5 = 15?',
            question_fr: 'Quelle est la valeur de x si 2x + 5 = 15?',
            options: ['x = 5', 'x = 10', 'x = 7.5', 'x = 4'],
            options_fr: ['x = 5', 'x = 10', 'x = 7.5', 'x = 4'],
            correct_answer: 0,
            explanation: '2x + 5 = 15 → 2x = 10 → x = 5',
            explanation_fr: '2x + 5 = 15 → 2x = 10 → x = 5'
          },
          {
            id: 'alg-q2',
            question: 'Simplify: 3x + 2x - x',
            question_fr: 'Simplifiez: 3x + 2x - x',
            options: ['4x', '5x', '6x', '3x'],
            options_fr: ['4x', '5x', '6x', '3x'],
            correct_answer: 0,
            explanation: '3x + 2x - x = (3+2-1)x = 4x',
            explanation_fr: '3x + 2x - x = (3+2-1)x = 4x'
          },
          {
            id: 'alg-q3',
            question: 'If y = 2x + 3, what is y when x = 4?',
            question_fr: 'Si y = 2x + 3, quelle est la valeur de y quand x = 4?',
            options: ['8', '11', '14', '9'],
            options_fr: ['8', '11', '14', '9'],
            correct_answer: 1,
            explanation: 'y = 2(4) + 3 = 8 + 3 = 11',
            explanation_fr: 'y = 2(4) + 3 = 8 + 3 = 11'
          },
          {
            id: 'alg-q4',
            question: 'Solve: x/3 = 9',
            question_fr: 'Résolvez: x/3 = 9',
            options: ['x = 3', 'x = 27', 'x = 12', 'x = 6'],
            options_fr: ['x = 3', 'x = 27', 'x = 12', 'x = 6'],
            correct_answer: 1,
            explanation: 'x/3 = 9 → x = 9 × 3 = 27',
            explanation_fr: 'x/3 = 9 → x = 9 × 3 = 27'
          },
          {
            id: 'alg-q5',
            question: 'What is 3² + 4²?',
            question_fr: 'Quelle est la valeur de 3² + 4²?',
            options: ['12', '25', '49', '7'],
            options_fr: ['12', '25', '49', '7'],
            correct_answer: 1,
            explanation: '3² = 9, 4² = 16, 9 + 16 = 25',
            explanation_fr: '3² = 9, 4² = 16, 9 + 16 = 25'
          }
        ]
      },
      {
        id: 'math-quadratics-quiz',
        title: 'Quadratic Relations Quiz',
        title_fr: 'Quiz sur les relations quadratiques',
        description: 'Test your understanding of factoring and quadratic equations',
        description_fr: 'Testez votre compréhension de la factorisation et des équations quadratiques',
        passing_score: 70,
        xp_reward: 75,
        time_limit: 20,
        questions: [
          {
            id: 'quad-q1',
            question: 'Factor: x² - 9',
            question_fr: 'Factorisez: x² - 9',
            options: ['(x+3)(x-3)', '(x+9)(x-1)', '(x-3)²', '(x+3)²'],
            options_fr: ['(x+3)(x-3)', '(x+9)(x-1)', '(x-3)²', '(x+3)²'],
            correct_answer: 0,
            explanation: 'This is a difference of squares: x² - 9 = (x+3)(x-3)',
            explanation_fr: 'C\'est une différence de carrés: x² - 9 = (x+3)(x-3)'
          },
          {
            id: 'quad-q2',
            question: 'Solve: x² = 16',
            question_fr: 'Résolvez: x² = 16',
            options: ['x = 4', 'x = -4', 'x = ±4', 'x = 8'],
            options_fr: ['x = 4', 'x = -4', 'x = ±4', 'x = 8'],
            correct_answer: 2,
            explanation: 'x² = 16 → x = ±4 (both 4 and -4 squared give 16)',
            explanation_fr: 'x² = 16 → x = ±4 (4 et -4 au carré donnent 16)'
          },
          {
            id: 'quad-q3',
            question: 'Factor: x² + 5x + 6',
            question_fr: 'Factorisez: x² + 5x + 6',
            options: ['(x+1)(x+6)', '(x+2)(x+3)', '(x+5)(x+1)', '(x-2)(x-3)'],
            options_fr: ['(x+1)(x+6)', '(x+2)(x+3)', '(x+5)(x+1)', '(x-2)(x-3)'],
            correct_answer: 1,
            explanation: 'Find two numbers that multiply to 6 and add to 5: 2 and 3',
            explanation_fr: 'Trouvez deux nombres qui multiplient à 6 et additionnent à 5: 2 et 3'
          },
          {
            id: 'quad-q4',
            question: 'What is the vertex of y = x² + 4x + 3?',
            question_fr: 'Quel est le sommet de y = x² + 4x + 3?',
            options: ['(2, -1)', '(-2, -1)', '(2, 7)', '(-2, 7)'],
            options_fr: ['(2, -1)', '(-2, -1)', '(2, 7)', '(-2, 7)'],
            correct_answer: 1,
            explanation: 'Complete the square: (x+2)² - 4 + 3 = (x+2)² - 1, vertex at (-2, -1)',
            explanation_fr: 'Complétez le carré: (x+2)² - 4 + 3 = (x+2)² - 1, sommet à (-2, -1)'
          }
        ]
      },
      {
        id: 'math-trig-quiz',
        title: 'Trigonometry Quiz',
        title_fr: 'Quiz de trigonométrie',
        description: 'Test your knowledge of sine, cosine, and tangent',
        description_fr: 'Testez vos connaissances du sinus, cosinus et tangente',
        passing_score: 70,
        xp_reward: 75,
        time_limit: 15,
        questions: [
          {
            id: 'trig-q1',
            question: 'In a right triangle, sin(θ) = opposite/hypotenuse. What is cos(θ)?',
            question_fr: 'Dans un triangle rectangle, sin(θ) = opossite/hypoténuse. Qu\'est-ce que cos(θ)?',
            options: ['opposite/adjacent', 'adjacent/hypotenuse', 'hypotenuse/opposite', 'hypotenuse/adjacent'],
            options_fr: ['opposé/adjacent', 'adjacent/hypoténuse', 'hypoténuse/opposé', 'hypoténuse/adjacent'],
            correct_answer: 1,
            explanation: 'SOH CAH TOA: Cos = Adjacent/Hypotenuse',
            explanation_fr: 'SOH CAH TOA: Cos = Adjacent/Hypoténuse'
          },
          {
            id: 'trig-q2',
            question: 'What is sin(30°)?',
            question_fr: 'Quelle est la valeur de sin(30°)?',
            options: ['1', '0.5', '0.707', '0.866'],
            options_fr: ['1', '0.5', '0.707', '0.866'],
            correct_answer: 1,
            explanation: 'sin(30°) = 1/2 = 0.5 (special angle)',
            explanation_fr: 'sin(30°) = 1/2 = 0.5 (angle spécial)'
          },
          {
            id: 'trig-q3',
            question: 'If tan(θ) = 1, what is θ?',
            question_fr: 'Si tan(θ) = 1, quelle est la valeur de θ?',
            options: ['30°', '45°', '60°', '90°'],
            options_fr: ['30°', '45°', '60°', '90°'],
            correct_answer: 1,
            explanation: 'tan(45°) = 1 (special angle)',
            explanation_fr: 'tan(45°) = 1 (angle spécial)'
          }
        ]
      }
    ],
    final_exams: [
      {
        id: 'math-grade9-final',
        subject_id: 'math',
        grade_level: 'Grade 9',
        title: 'Grade 9 Mathematics Final Exam',
        title_fr: 'Examen final de mathématiques 9e année',
        description: 'Comprehensive exam covering all Grade 9 mathematics topics',
        description_fr: 'Examen complet couvrant tous les sujets de mathématiques de 9e année',
        passing_score: 60,
        xp_reward: 200,
        time_limit: 60,
        sections: [
          {
            title: 'Algebra',
            title_fr: 'Algèbre',
            questions: [
              {
                id: 'g9-q1',
                question: 'Solve for x: 3x - 7 = 14',
                question_fr: 'Résolvez pour x: 3x - 7 = 14',
                options: ['x = 7', 'x = 21', 'x = 3', 'x = 9'],
                options_fr: ['x = 7', 'x = 21', 'x = 3', 'x = 9'],
                correct_answer: 0,
                explanation: '3x - 7 = 14 → 3x = 21 → x = 7',
                explanation_fr: '3x - 7 = 14 → 3x = 21 → x = 7'
              },
              {
                id: 'g9-q2',
                question: 'Simplify: 4(2x + 3) - 5x',
                question_fr: 'Simplifiez: 4(2x + 3) - 5x',
                options: ['13x + 3', '3x + 12', '13x + 12', '3x + 3'],
                options_fr: ['13x + 3', '3x + 12', '13x + 12', '3x + 3'],
                correct_answer: 1,
                explanation: '4(2x + 3) - 5x = 8x + 12 - 5x = 3x + 12',
                explanation_fr: '4(2x + 3) - 5x = 8x + 12 - 5x = 3x + 12'
              }
            ]
          },
          {
            title: 'Number Sense',
            title_fr: 'Sens du nombre',
            questions: [
              {
                id: 'g9-q3',
                question: 'Calculate: (-3) × (-5) × (-2)',
                question_fr: 'Calculez: (-3) × (-5) × (-2)',
                options: ['30', '-30', '15', '-15'],
                options_fr: ['30', '-30', '15', '-15'],
                correct_answer: 1,
                explanation: '(-3)(-5) = 15, 15(-2) = -30',
                explanation_fr: '(-3)(-5) = 15, 15(-2) = -30'
              }
            ]
          }
        ]
      }
    ]
  },
  physics: {
    quizzes: [
      {
        id: 'physics-kinematics-quiz',
        title: 'Kinematics Quiz',
        title_fr: 'Quiz de cinématique',
        description: 'Test your understanding of motion',
        description_fr: 'Testez votre compréhension du mouvement',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'kin-q1',
            question: 'A car accelerates from rest at 2 m/s² for 5 seconds. What is its final velocity?',
            question_fr: 'Une voiture accélère depuis le repos à 2 m/s² pendant 5 secondes. Quelle est sa vitesse finale?',
            options: ['10 m/s', '7 m/s', '2.5 m/s', '5 m/s'],
            options_fr: ['10 m/s', '7 m/s', '2.5 m/s', '5 m/s'],
            correct_answer: 0,
            explanation: 'v = v₀ + at = 0 + 2(5) = 10 m/s',
            explanation_fr: 'v = v₀ + at = 0 + 2(5) = 10 m/s'
          },
          {
            id: 'kin-q2',
            question: 'What does acceleration measure?',
            question_fr: 'Qu\'est-ce que l\'accélération mesure?',
            options: ['Speed', 'Rate of change of velocity', 'Distance', 'Force'],
            options_fr: ['Vitesse', 'Taux de variation de la vitesse', 'Distance', 'Force'],
            correct_answer: 1,
            explanation: 'Acceleration is the rate at which velocity changes',
            explanation_fr: 'L\'accélération est le taux de variation de la vitesse'
          },
          {
            id: 'kin-q3',
            question: 'An object falls freely. After 3 seconds, what is its velocity (ignore air resistance)?',
            question_fr: 'Un objet tombe librement. Après 3 secondes, quelle est sa vitesse?',
            options: ['9.8 m/s', '19.6 m/s', '29.4 m/s', '3 m/s'],
            options_fr: ['9.8 m/s', '19.6 m/s', '29.4 m/s', '3 m/s'],
            correct_answer: 2,
            explanation: 'v = gt = 9.8 × 3 = 29.4 m/s',
            explanation_fr: 'v = gt = 9.8 × 3 = 29.4 m/s'
          }
        ]
      },
      {
        id: 'physics-forces-quiz',
        title: 'Forces Quiz',
        title_fr: 'Quiz de forces',
        description: 'Test Newton\'s laws understanding',
        description_fr: 'Testez votre compréhension des lois de Newton',
        passing_score: 70,
        xp_reward: 75,
        time_limit: 15,
        questions: [
          {
            id: 'force-q1',
            question: 'According to Newton\'s Second Law, F = ma. If mass doubles and force stays the same, acceleration becomes:',
            question_fr: 'Selon la deuxième loi de Newton, F = ma. Si la masse double et la force reste la même, l\'accélération devient:',
            options: ['Doubled', 'Halved', 'Quadrupled', 'Stays the same'],
            options_fr: ['Doublée', 'Réduite de moitié', 'Quadruplée', 'Reste la même'],
            correct_answer: 1,
            explanation: 'If mass doubles and F is constant, a = F/(2m) = a/2 (halved)',
            explanation_fr: 'Si la masse double et F est constant, a = F/(2m) = a/2 (moitié)'
          },
          {
            id: 'force-q2',
            question: 'A 10 kg object has an acceleration of 2 m/s². What is the force?',
            question_fr: 'Un objet de 10 kg a une accélération de 2 m/s². Quelle est la force?',
            options: ['5 N', '20 N', '12 N', '8 N'],
            options_fr: ['5 N', '20 N', '12 N', '8 N'],
            correct_answer: 1,
            explanation: 'F = ma = 10 × 2 = 20 N',
            explanation_fr: 'F = ma = 10 × 2 = 20 N'
          }
        ]
      }
    ],
    final_exams: [
      {
        id: 'physics-grade11-final',
        subject_id: 'physics',
        grade_level: 'Grade 11',
        title: 'Grade 11 Physics Final Exam',
        title_fr: 'Examen final de physique 11e année',
        description: 'Comprehensive exam covering Grade 11 Physics',
        description_fr: 'Examen complet de physique de 11e année',
        passing_score: 60,
        xp_reward: 250,
        time_limit: 90,
        sections: [
          {
            title: 'Kinematics',
            title_fr: 'Cinématique',
            questions: [
              {
                id: 'phys-g11-q1',
                question: 'A car travels 100 m in 5 seconds at constant velocity. What is its velocity?',
                question_fr: 'Une voiture parcourt 100 m en 5 secondes à vitesse constante. Quelle est sa vitesse?',
                options: ['500 m/s', '20 m/s', '95 m/s', '105 m/s'],
                options_fr: ['500 m/s', '20 m/s', '95 m/s', '105 m/s'],
                correct_answer: 1,
                explanation: 'v = d/t = 100/5 = 20 m/s',
                explanation_fr: 'v = d/t = 100/5 = 20 m/s'
              }
            ]
          },
          {
            title: 'Forces',
            title_fr: 'Forces',
            questions: [
              {
                id: 'phys-g11-q2',
                question: 'What is the weight of a 5 kg mass on Earth (g = 9.8 m/s²)?',
                question_fr: 'Quelle est le poids d\'une masse de 5 kg sur Terre (g = 9.8 m/s²)?',
                options: ['49 N', '5 N', '14.8 N', '0.51 N'],
                options_fr: ['49 N', '5 N', '14.8 N', '0.51 N'],
                correct_answer: 0,
                explanation: 'W = mg = 5 × 9.8 = 49 N',
                explanation_fr: 'W = mg = 5 × 9.8 = 49 N'
              }
            ]
          }
        ]
      }
    ]
  },
  chemistry: {
    quizzes: [
      {
        id: 'chem-atomic-quiz',
        title: 'Atomic Structure Quiz',
        title_fr: 'Quiz de structure atomique',
        description: 'Test knowledge of atoms and the periodic table',
        description_fr: 'Testez vos connaissances des atomes et du tableau périodique',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'atom-q1',
            question: 'How many protons does Carbon-14 have?',
            question_fr: 'Combien de protons le carbone-14 a-t-il?',
            options: ['6', '8', '14', '20'],
            options_fr: ['6', '8', '14', '20'],
            correct_answer: 0,
            explanation: 'Atomic number (protons) = 6 for Carbon',
            explanation_fr: 'Numéro atomique (protons) = 6 pour le Carbone'
          },
          {
            id: 'atom-q2',
            question: 'An atom with 12 protons and 10 electrons has what charge?',
            question_fr: 'Un atome avec 12 protons et 10 électrons a quelle charge?',
            options: ['+2', '-2', '0', '+22'],
            options_fr: ['+2', '-2', '0', '+22'],
            correct_answer: 0,
            explanation: 'Protons (12+) minus electrons (10-) = +2',
            explanation_fr: 'Protons (12+) moins électrons (10-) = +2'
          },
          {
            id: 'atom-q3',
            question: 'What particle has no charge?',
            question_fr: 'Quelle particule n\'a pas de charge?',
            options: ['Proton', 'Electron', 'Neutron', 'Ion'],
            options_fr: ['Proton', 'Électron', 'Neutron', 'Ion'],
            correct_answer: 2,
            explanation: 'Neutrons have no charge (neutral)',
            explanation_fr: 'Les neutrons n\'ont pas de charge (neutre)'
          }
        ]
      },
      {
        id: 'chem-bonding-quiz',
        title: 'Chemical Bonding Quiz',
        title_fr: 'Quiz de liaison chimique',
        description: 'Test understanding of ionic and covalent bonds',
        description_fr: 'Testez votre compréhension des liaisons ioniques et covalentes',
        passing_score: 70,
        xp_reward: 75,
        time_limit: 15,
        questions: [
          {
            id: 'bond-q1',
            question: 'What type of bond forms between Na (metal) and Cl (nonmetal)?',
            question_fr: 'Quel type de liaison se forme entre Na (métal) et Cl (non-métal)?',
            options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
            options_fr: ['Covalente', 'Ionique', 'Métallique', 'Hydrogène'],
            correct_answer: 1,
            explanation: 'Metal + nonmetal = ionic bond (electron transfer)',
            explanation_fr: 'Métal + non-métal = liaison ionique (transfert d\'électrons)'
          },
          {
            id: 'bond-q2',
            question: 'In a covalent bond, atoms:',
            question_fr: 'Dans une liaison covalente, les atomes:',
            options: ['Transfer electrons', 'Share electrons', 'Lose electrons', 'Gain electrons'],
            options_fr: ['Transfèrent des électrons', 'Partagent des électrons', 'Perdent des électrons', 'Gagnent des électrons'],
            correct_answer: 1,
            explanation: 'Covalent bonds involve sharing electrons between atoms',
            explanation_fr: 'Les liaisons covalentes impliquent le partage d\'électrons'
          }
        ]
      }
    ],
    final_exams: [
      {
        id: 'chemistry-grade11-final',
        subject_id: 'chemistry',
        grade_level: 'Grade 11',
        title: 'Grade 11 Chemistry Final Exam',
        title_fr: 'Examen final de chimie 11e année',
        description: 'Comprehensive exam covering Grade 11 Chemistry',
        description_fr: 'Examen complet de chimie de 11e année',
        passing_score: 60,
        xp_reward: 250,
        time_limit: 90,
        sections: [
          {
            title: 'Atomic Structure',
            title_fr: 'Structure atomique',
            questions: [
              {
                id: 'chem-g11-q1',
                question: 'What is the electron configuration of Carbon (atomic number 6)?',
                question_fr: 'Quelle est la configuration électronique du Carbone (numéro atomique 6)?',
                options: ['1s² 2s² 2p²', '1s² 2s⁴', '1s⁶', '2s² 2p⁴'],
                options_fr: ['1s² 2s² 2p²', '1s² 2s⁴', '1s⁶', '2s² 2p⁴'],
                correct_answer: 0,
                explanation: 'Carbon has 6 electrons: 2 in 1s, 2 in 2s, 2 in 2p',
                explanation_fr: 'Le Carbone a 6 électrons: 2 en 1s, 2 en 2s, 2 en 2p'
              }
            ]
          }
        ]
      }
    ]
  },
  biology: {
    quizzes: [
      {
        id: 'bio-cells-quiz',
        title: 'Cell Biology Quiz',
        title_fr: 'Quiz de biologie cellulaire',
        description: 'Test your knowledge of cells and organelles',
        description_fr: 'Testez vos connaissances des cellules et organites',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'cell-q1',
            question: 'Which organelle is the "powerhouse" of the cell?',
            question_fr: 'Quel organite est la "centrale énergétique" de la cellule?',
            options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'],
            options_fr: ['Noyau', 'Ribosome', 'Mitochondrie', 'Chloroplaste'],
            correct_answer: 2,
            explanation: 'Mitochondria produce ATP through cellular respiration',
            explanation_fr: 'Les mitochondries produisent l\'ATP par respiration cellulaire'
          },
          {
            id: 'cell-q2',
            question: 'What is the site of photosynthesis?',
            question_fr: 'Quel est le site de la photosynthèse?',
            options: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Nucleus'],
            options_fr: ['Mitochondrie', 'Chloroplaste', 'Ribosome', 'Noyau'],
            correct_answer: 1,
            explanation: 'Chloroplasts contain chlorophyll for photosynthesis',
            explanation_fr: 'Les chloroplastes contiennent la chlorophylle pour la photosynthèse'
          },
          {
            id: 'cell-q3',
            question: 'DNA is found in which organelle?',
            question_fr: 'L\'ADN se trouve dans quel organite?',
            options: ['Cytoplasm', 'Ribosome', 'Nucleus', 'Cell membrane'],
            options_fr: ['Cytoplasme', 'Ribosome', 'Noyau', 'Membrane cellulaire'],
            correct_answer: 2,
            explanation: 'DNA is stored in the nucleus (in eukaryotes)',
            explanation_fr: 'L\'ADN est stocké dans le noyau (chez les eucaryotes)'
          }
        ]
      }
    ],
    final_exams: []
  },
  coding: {
    quizzes: [
      {
        id: 'python-basics-quiz',
        title: 'Python Basics Quiz',
        title_fr: 'Quiz de bases Python',
        description: 'Test your Python fundamentals',
        description_fr: 'Testez vos fondamentaux Python',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'py-q1',
            question: 'What is the output of: print(type(3.14))',
            question_fr: 'Quel est le résultat de: print(type(3.14))',
            options: ['<class \'int\'>', '<class \'float\'>', '<class \'str\'>', '<class \'number\'>'],
            options_fr: ['<class \'int\'>', '<class \'float\'>', '<class \'str\'>', '<class \'number\'>'],
            correct_answer: 1,
            explanation: '3.14 is a decimal, so it\'s a float',
            explanation_fr: '3.14 est un nombre décimal, donc c\'est un float'
          },
          {
            id: 'py-q2',
            question: 'Which operator is used for integer division in Python?',
            question_fr: 'Quel opérateur est utilisé pour la division entière en Python?',
            options: ['/', '//', '%', 'div'],
            options_fr: ['/', '//', '%', 'div'],
            correct_answer: 1,
            explanation: '// is the integer division operator in Python',
            explanation_fr: '// est l\'opérateur de division entière en Python'
          },
          {
            id: 'py-q3',
            question: 'What is the correct way to create a variable in Python?',
            question_fr: 'Quelle est la bonne façon de créer une variable en Python?',
            options: ['var x = 5', 'x := 5', 'x = 5', 'int x = 5'],
            options_fr: ['var x = 5', 'x := 5', 'x = 5', 'int x = 5'],
            correct_answer: 2,
            explanation: 'Python uses = for assignment, no type declaration needed',
            explanation_fr: 'Python utilise = pour l\'assignation, pas de déclaration de type'
          }
        ]
      }
    ],
    final_exams: []
  },
  'financial-literacy': {
    quizzes: [
      {
        id: 'fin-budget-quiz',
        title: 'Budgeting Quiz',
        title_fr: 'Quiz de budgétisation',
        description: 'Test your budgeting knowledge',
        description_fr: 'Testez vos connaissances en budgétisation',
        passing_score: 70,
        xp_reward: 50,
        time_limit: 15,
        questions: [
          {
            id: 'bud-q1',
            question: 'According to the 50/30/20 rule, what percentage should go to savings?',
            question_fr: 'Selon la règle 50/30/20, quel pourcentage devrait aller à l\'épargne?',
            options: ['20%', '30%', '50%', '10%'],
            options_fr: ['20%', '30%', '50%', '10%'],
            correct_answer: 0,
            explanation: '50/30/20: 50% needs, 30% wants, 20% savings',
            explanation_fr: '50/30/20: 50% besoins, 30% envies, 20% épargne'
          },
          {
            id: 'bud-q2',
            question: 'Which is a fixed expense?',
            question_fr: 'Laquelle est une dépense fixe?',
            options: ['Groceries', 'Entertainment', 'Rent', 'Dining out'],
            options_fr: ['Épicerie', 'Divertissement', 'Loyer', 'Restaurants'],
            correct_answer: 2,
            explanation: 'Rent is typically the same each month',
            explanation_fr: 'Le loyer est généralement le même chaque mois'
          }
        ]
      },
      {
        id: 'fin-compound-quiz',
        title: 'Compound Interest Quiz',
        title_fr: 'Quiz d\'intérêt composé',
        description: 'Test understanding of compound interest',
        description_fr: 'Testez votre compréhension de l\'intérêt composé',
        passing_score: 70,
        xp_reward: 75,
        time_limit: 15,
        questions: [
          {
            id: 'comp-q1',
            question: 'Using the Rule of 72, how long to double money at 8% interest?',
            question_fr: 'En utilisant la règle de 72, combien de temps pour doubler à 8%?',
            options: ['6 years', '8 years', '9 years', '10 years'],
            options_fr: ['6 ans', '8 ans', '9 ans', '10 ans'],
            correct_answer: 2,
            explanation: 'Rule of 72: 72 ÷ 8 = 9 years',
            explanation_fr: 'Règle de 72: 72 ÷ 8 = 9 ans'
          }
        ]
      }
    ],
    final_exams: []
  }
}

export function getQuizById(quizId: string): Quiz | undefined {
  for (const subject of Object.values(assessments)) {
    const quiz = subject.quizzes.find(q => q.id === quizId)
    if (quiz) return quiz
  }
  return undefined
}

export function getFinalExamsBySubject(subjectId: string): FinalExam[] {
  return assessments[subjectId]?.final_exams || []
}

export function getQuizzesBySubject(subjectId: string): Quiz[] {
  return assessments[subjectId]?.quizzes || []
}

export function getAllQuizzes(): Quiz[] {
  return Object.values(assessments).flatMap(s => s.quizzes)
}

export function getAllFinalExams(): FinalExam[] {
  return Object.values(assessments).flatMap(s => s.final_exams)
}
