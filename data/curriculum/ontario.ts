import { Subject } from '@/types'

export const curriculum: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    name_fr: 'Mathématiques',
    topics: [
      { id: 'algebra', name: 'Algebra', name_fr: 'Algèbre', prerequisites: [] },
      { id: 'quadratics', name: 'Quadratic Relations', name_fr: 'Relations quadratiques', prerequisites: ['algebra'] },
      { id: 'trigonometry', name: 'Trigonometry', name_fr: 'Trigonométrie', prerequisites: ['algebra'] },
      { id: 'functions', name: 'Functions', name_fr: 'Fonctions', prerequisites: ['algebra'] },
      { id: 'calculus', name: 'Calculus', name_fr: 'Calcul différentiel', prerequisites: ['functions'] },
      { id: 'statistics', name: 'Statistics', name_fr: 'Statistiques', prerequisites: [] },
      { id: 'probability', name: 'Probability', name_fr: 'Probabilité', prerequisites: ['statistics'] },
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    name_fr: 'Physique',
    topics: [
      { id: 'kinematics', name: 'Kinematics', name_fr: 'Cinématique', prerequisites: [] },
      { id: 'forces', name: 'Forces', name_fr: 'Forces', prerequisites: ['kinematics'] },
      { id: 'energy', name: 'Energy', name_fr: 'Énergie', prerequisites: ['forces'] },
      { id: 'waves', name: 'Waves', name_fr: 'Ondes', prerequisites: [] },
      { id: 'electricity', name: 'Electricity', name_fr: 'Électricité', prerequisites: ['forces'] },
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    name_fr: 'Chimie',
    topics: [
      { id: 'atomic', name: 'Atomic Structure', name_fr: 'Structure atomique', prerequisites: [] },
      { id: 'bonding', name: 'Chemical Bonding', name_fr: 'Liaison chimique', prerequisites: ['atomic'] },
      { id: 'stoichiometry', name: 'Stoichiometry', name_fr: 'Stœchiométrie', prerequisites: ['bonding'] },
      { id: 'solutions', name: 'Solutions', name_fr: 'Solutions', prerequisites: ['stoichiometry'] },
      { id: 'equilibrium', name: 'Chemical Equilibrium', name_fr: 'Équilibre chimique', prerequisites: ['solutions'] },
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    name_fr: 'Biologie',
    topics: [
      { id: 'biochem', name: 'Biochemistry', name_fr: 'Biochimie', prerequisites: [] },
      { id: 'cells', name: 'Cells', name_fr: 'Cellules', prerequisites: [] },
      { id: 'genetics', name: 'Genetics', name_fr: 'Génétique', prerequisites: ['cells'] },
      { id: 'evolution', name: 'Evolution', name_fr: 'Évolution', prerequisites: [] },
      { id: 'ecology', name: 'Ecology', name_fr: 'Écologie', prerequisites: [] },
    ]
  },
  {
    id: 'coding',
    name: 'Programming',
    name_fr: 'Programmation',
    topics: [
      { id: 'python-basics', name: 'Python Basics', name_fr: 'Bases Python', prerequisites: [] },
      { id: 'python-functions', name: 'Functions', name_fr: 'Fonctions', prerequisites: ['python-basics'] },
      { id: 'python-oop', name: 'Object-Oriented Programming', name_fr: 'POO', prerequisites: ['python-functions'] },
      { id: 'js-basics', name: 'JavaScript Basics', name_fr: 'Bases JavaScript', prerequisites: [] },
      { id: 'web-dev', name: 'Web Development', name_fr: 'Développement web', prerequisites: ['js-basics'] },
    ]
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy',
    name_fr: 'Littératie financière',
    topics: [
      { id: 'budgeting', name: 'Budgeting', name_fr: 'Budgétisation', prerequisites: [] },
      { id: 'taxes', name: 'Taxes & Deductions', name_fr: 'Taxes et déductions', prerequisites: [] },
      { id: 'compound-interest', name: 'Compound Interest', name_fr: 'Intérêt composé', prerequisites: [] },
      { id: 'investing', name: 'Investing Basics', name_fr: "Bases de l'investissement", prerequisites: [] },
      { id: 'debt', name: 'Debt Management', name_fr: 'Gestion de la dette', prerequisites: [] },
      { id: 'financial-goals', name: 'Financial Goals', name_fr: 'Objectifs financiers', prerequisites: [] },
    ]
  }
]

export const gradeLevels = [
  { id: 'grade9', name: 'Grade 9', name_fr: '9e année' },
  { id: 'grade10', name: 'Grade 10', name_fr: '10e année' },
  { id: 'grade11', name: 'Grade 11', name_fr: '11e année' },
  { id: 'grade12', name: 'Grade 12', name_fr: '12e année' },
  { id: 'university', name: 'University', name_fr: 'Université' },
]

export function getSubjectById(id: string): Subject | undefined {
  return curriculum.find(s => s.id === id)
}

export function getTopicById(subjectId: string, topicId: string): { subject: Subject; topic: Subject['topics'][0] } | undefined {
  const subject = curriculum.find(s => s.id === subjectId)
  if (!subject) return undefined
  const topic = subject.topics.find(t => t.id === topicId)
  if (!topic) return undefined
  return { subject, topic }
}

export function getPrerequisiteChain(subjectId: string, topicId: string): Subject['topics'][0][] {
  const chain: Subject['topics'][0][] = []
  const data = getTopicById(subjectId, topicId)
  if (!data) return chain

  const { subject, topic } = data

  function addPrereqs(prereqIds: string[], subj: Subject) {
    for (const prereqId of prereqIds) {
      const prereq = subj.topics.find(t => t.id === prereqId)
      if (prereq) {
        chain.push(prereq)
        addPrereqs(prereq.prerequisites, subj)
      }
    }
  }
  addPrereqs(topic.prerequisites, subject)
  return chain
}
