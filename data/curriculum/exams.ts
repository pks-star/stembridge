export interface Exam {
  id: string
  name: string
  name_fr: string
  description: string
  description_fr: string
  grade: number
  subjects: ExamSubject[]
}

export interface ExamSubject {
  id: string
  name: string
  name_fr: string
  topics: string[]
}

export const exams: Exam[] = [
  {
    id: 'osslt',
    name: 'OSSLT',
    name_fr: 'OSSLT',
    description: 'Ontario Secondary School Literacy Test - Required for graduation',
    description_fr: 'Test de littératie secondaire de lOntario - Requis pour lobtention du diplôme',
    grade: 10,
    subjects: [
      { id: 'reading', name: 'Reading Comprehension', name_fr: 'Compréhension de lecture', topics: ['News articles', 'Informational texts', 'Visual texts'] },
      { id: 'writing', name: 'Writing', name_fr: 'Écriture', topics: ['News report', 'Opinion essay', 'Summary writing'] },
    ]
  },
  {
    id: 'grade12-math-mcv',
    name: 'Grade 12 Calculus (MCV4U)',
    name_fr: 'Calculus 12e année (MCV4U)',
    description: 'University preparation calculus course',
    description_fr: 'Cours universitaire de calcul',
    grade: 12,
    subjects: [
      { id: 'limits', name: 'Limits', name_fr: 'Limites', topics: ['Limit laws', 'Continuity', 'Lhospital rule'] },
      { id: 'derivatives', name: 'Derivatives', name_fr: 'Dérivées', topics: ['Rate of change', 'Chain rule', 'Product rule', 'Optimization'] },
      { id: 'integrals', name: 'Integrals', name_fr: 'Intégrales', topics: ['Riemann sums', 'Fundamental theorem', 'Area under curves'] },
    ]
  },
  {
    id: 'grade12-math-mhf',
    name: 'Grade 12 Advanced Functions (MHF4U)',
    name_fr: 'Fonctions avancées 12e année (MHF4U)',
    description: 'University preparation functions course',
    description_fr: 'Cours universitaire de fonctions',
    grade: 12,
    subjects: [
      { id: 'polynomials', name: 'Polynomials', name_fr: 'Polynômes', topics: ['Degree 3+', 'Roots', 'Graphing'] },
      { id: 'trig', name: 'Trigonometry', name_fr: 'Trigonométrie', topics: ['Identities', 'Equations', 'Graphs'] },
      { id: 'exponential', name: 'Exponential Functions', name_fr: 'Fonctions exponentielles', topics: ['Growth/decay', 'Logarithms'] },
    ]
  },
  {
    id: 'grade12-math-mdm',
    name: 'Grade 12 Data Management (MDM4U)',
    name_fr: 'Gestion de données 12e année (MDM4U)',
    description: 'University preparation statistics course',
    description_fr: 'Cours universitaire de statistiques',
    grade: 12,
    subjects: [
      { id: 'counting', name: 'Counting Principles', name_fr: 'Principes de dénombrement', topics: ['Permutations', 'Combinations'] },
      { id: 'probability', name: 'Probability', name_fr: 'Probabilité', topics: ['Conditional', 'Binomial distribution'] },
      { id: 'statistics', name: 'Statistics', name_fr: 'Statistiques', topics: ['Normal distribution', 'Hypothesis testing'] },
    ]
  },
  {
    id: 'grade12-physics',
    name: 'Grade 12 Physics (SPH4U)',
    name_fr: 'Physique 12e année (SPH4U)',
    description: 'University preparation physics course',
    description_fr: 'Cours universitaire de physique',
    grade: 12,
    subjects: [
      { id: 'kinematics', name: 'Kinematics', name_fr: 'Cinématique', topics: ['2D motion', 'Projectiles', 'Circular motion'] },
      { id: 'dynamics', name: 'Dynamics', name_fr: 'Dynamique', topics: ['Forces', 'Friction', 'Tension'] },
      { id: 'energy', name: 'Energy & Momentum', name_fr: 'Énergie et quantité de mouvement', topics: ['Work', 'Conservation', 'Collisions'] },
      { id: 'waves', name: 'Waves', name_fr: 'Ondes', topics: ['Sound', 'Light', 'Doppler effect'] },
    ]
  },
  {
    id: 'grade12-chemistry',
    name: 'Grade 12 Chemistry (SCH4U)',
    name_fr: 'Chimie 12e année (SCH4U)',
    description: 'University preparation chemistry course',
    description_fr: 'Cours universitaire de chimie',
    grade: 12,
    subjects: [
      { id: 'organic', name: 'Organic Chemistry', name_fr: 'Chimie organique', topics: ['Functional groups', 'Reactions', 'Polymers'] },
      { id: 'equilibrium', name: 'Equilibrium', name_fr: 'Équilibre', topics: ['Le Chatelier', 'Ksp', 'pH'] },
      { id: 'electrochem', name: 'Electrochemistry', name_fr: 'Électrochimie', topics: ['Redox', 'Galvanic cells', 'Electrolytic cells'] },
    ]
  },
  {
    id: 'grade12-biology',
    name: 'Grade 12 Biology (SBI4U)',
    name_fr: 'Biologie 12e année (SBI4U)',
    description: 'University preparation biology course',
    description_fr: 'Cours universitaire de biologie',
    grade: 12,
    subjects: [
      { id: 'biochem', name: 'Biochemistry', name_fr: 'Biochimie', topics: ['Enzymes', 'Metabolism', 'Cellular respiration'] },
      { id: 'molecular', name: 'Molecular Genetics', name_fr: 'Génétique moléculaire', topics: ['DNA/RNA', 'Protein synthesis', 'Biotechnology'] },
      { id: 'evolution', name: 'Evolution', name_fr: 'Évolution', topics: ['Natural selection', 'Speciation', 'Cladistics'] },
    ]
  }
]

export function getExamById(id: string): Exam | undefined {
  return exams.find(e => e.id === id)
}

export function getExamsByGrade(grade: number): Exam[] {
  return exams.filter(e => e.grade === grade)
}

export function getAllGrade12Exams(): Exam[] {
  return exams.filter(e => e.grade === 12)
}
