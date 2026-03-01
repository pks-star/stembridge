export interface Career {
  id: string
  name: string
  name_fr: string
  category: 'technology' | 'engineering' | 'healthcare' | 'sciences' | 'trades'
  description: string
  description_fr: string
  education: string
  education_fr: string
  courses_needed: string[]
  avg_salary: string
  growth: 'high' | 'medium' | 'low'
}

export const careers: Career[] = [
  // Technology
  {
    id: 'software-dev',
    name: 'Software Developer',
    name_fr: 'Développeur de logiciels',
    category: 'technology',
    description: 'Build applications, websites, and software systems',
    description_fr: 'Créer des applications, sites web et systèmes logiciels',
    education: 'University degree in Computer Science (4 years)',
    education_fr: "Diplôme universitaire en informatique (4 ans)",
    courses_needed: ['ICS4U', 'MCV4U', 'SPH4U'],
    avg_salary: '$85,000 - $150,000',
    growth: 'high'
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    name_fr: 'Scientifique des données',
    category: 'technology',
    description: 'Analyze data to derive insights and build predictive models',
    description_fr: 'Analyser les données pour obtenir des informations et construire des modèles prédictifs',
    education: 'University degree in CS, Math, or Statistics',
    education_fr: 'Diplôme en informatique, mathématiques ou statistiques',
    courses_needed: ['MCV4U', 'MDM4U', 'ICS4U'],
    avg_salary: '$90,000 - $160,000',
    growth: 'high'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Analyst',
    name_fr: 'Analyste en cybersécurité',
    category: 'technology',
    description: 'Protect organizations from digital threats and attacks',
    description_fr: "Protéger les organisations contre les menaces et attaques numériques",
    education: 'College diploma or University degree in IT Security',
    education_fr: "Diplôme d'études supérieures ou universitaire en sécurité informatique",
    courses_needed: ['ICS4U', 'SPH4U'],
    avg_salary: '$75,000 - $130,000',
    growth: 'high'
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Engineer',
    name_fr: "Ingénieur en IA/ML",
    category: 'technology',
    description: 'Develop artificial intelligence and machine learning systems',
    description_fr: 'Développer des systèmes intelligence artificielle et apprentissage automatique',
    education: 'University degree in CS, AI, or related field',
    education_fr: 'Diplôme universitaire en IA ou domaine connexe',
    courses_needed: ['MCV4U', 'MHF4U', 'ICS4U'],
    avg_salary: '$100,000 - $180,000',
    growth: 'high'
  },
  // Engineering
  {
    id: 'civil-eng',
    name: 'Civil Engineer',
    name_fr: 'Ingénieur civil',
    category: 'engineering',
    description: 'Design and build infrastructure like roads, bridges, buildings',
    description_fr: 'Concevoir et construire des infrastructures routes, ponts, bâtiments',
    education: 'University degree in Civil Engineering (4-5 years)',
    education_fr: 'Diplôme en génie civil (4-5 ans)',
    courses_needed: ['MCV4U', 'SPH4U', 'SCH4U'],
    avg_salary: '$75,000 - $140,000',
    growth: 'medium'
  },
  {
    id: 'mechanical-eng',
    name: 'Mechanical Engineer',
    name_fr: 'Ingénieur mécanique',
    category: 'engineering',
    description: 'Design and develop mechanical systems and machines',
    description_fr: 'Concevoir et développer des systèmes et machines mécaniques',
    education: 'University degree in Mechanical Engineering',
    education_fr: 'Diplôme en génie mécanique',
    courses_needed: ['MCV4U', 'SPH4U', 'SCH4U'],
    avg_salary: '$70,000 - $130,000',
    growth: 'medium'
  },
  {
    id: 'electrical-eng',
    name: 'Electrical Engineer',
    name_fr: 'Ingénieur électrique',
    category: 'engineering',
    description: 'Design and develop electrical systems and equipment',
    description_fr: 'Concevoir et développer des systèmes et équipements électriques',
    education: 'University degree in Electrical Engineering',
    education_fr: 'Diplôme en génie électrique',
    courses_needed: ['MCV4U', 'SPH4U'],
    avg_salary: '$75,000 - $140,000',
    growth: 'medium'
  },
  // Healthcare
  {
    id: 'nurse',
    name: 'Registered Nurse',
    name_fr: 'Infirmier/ière enregistré(e)',
    category: 'healthcare',
    description: 'Provide patient care in hospitals and healthcare settings',
    description_fr: 'Soigner les patients dans les hôpitaux et établissements de santé',
    education: 'University degree in Nursing (4 years) or College',
    education_fr: 'Diplôme universitaire en soins infirmiers (4 ans)',
    courses_needed: ['SBI4U', 'SCH4U'],
    avg_salary: '$75,000 - $110,000',
    growth: 'high'
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    name_fr: 'Pharmacien/ne',
    category: 'healthcare',
    description: 'Dispense medications and provide health advice',
    description_fr: 'Dispenser des médicaments etconseils de santé',
    education: 'University degree in Pharmacy (5-6 years)',
    education_fr: 'Diplôme en pharmacie (5-6 ans)',
    courses_needed: ['SCH4U', 'SBI4U'],
    avg_salary: '$100,000 - $150,000',
    growth: 'medium'
  },
  // Sciences
  {
    id: 'biotech',
    name: 'Biotechnologist',
    name_fr: 'Biotechnologue',
    category: 'sciences',
    description: 'Use biology to develop products and technologies',
    description_fr: 'Utiliser la biologie pour développer des produits et technologies',
    education: 'University degree in Biotechnology or Biology',
    education_fr: 'Diplôme en biotechnologie ou biologie',
    courses_needed: ['SBI4U', 'SCH4U'],
    avg_salary: '$60,000 - $120,000',
    growth: 'high'
  },
  {
    id: 'environmental',
    name: 'Environmental Scientist',
    name_fr: 'Scientifique environnement',
    category: 'sciences',
    description: 'Study and protect the environment',
    description_fr: "Étudier et protéger l'environnement",
    education: 'University degree in Environmental Science',
    education_fr: "Diplôme en sciences de l'environnement",
    courses_needed: ['SBI4U', 'SCH4U', 'SPH4U'],
    avg_salary: '$55,000 - $100,000',
    growth: 'medium'
  },
  // Trades
  {
    id: 'electrician',
    name: 'Electrician',
    name_fr: 'Électricien/ne',
    category: 'trades',
    description: 'Install and maintain electrical systems',
    description_fr: 'Installer et entretenir les systèmes électriques',
    education: 'Apprenticeship (5 years) + Trade certification',
    education_fr: "Apprentissage (5 ans) + certification de métier",
    courses_needed: ['Math Grade 10', 'Physics Grade 11'],
    avg_salary: '$60,000 - $100,000',
    growth: 'high'
  },
  {
    id: 'hvac',
    name: 'HVAC Technician',
    name_fr: 'Technicien(ne) CVC',
    category: 'trades',
    description: 'Install and maintain heating, ventilation, and cooling systems',
    description_fr: "Installer et entretenir les systèmes de chauffage, ventilation et climatisation",
    education: 'College diploma (1-2 years) + Apprenticeship',
    education_fr: "Diplôme d'études supérieures (1-2 ans) + Apprentissage",
    courses_needed: ['Math Grade 10', 'Physics Grade 10'],
    avg_salary: '$55,000 - $90,000',
    growth: 'medium'
  },
  {
    id: 'plumber',
    name: 'Plumber',
    name_fr: 'Plombier/ère',
    category: 'trades',
    description: 'Install and repair plumbing systems',
    description_fr: 'Installer et réparer les systèmes de plomberie',
    education: 'Apprenticeship (5 years) + Trade certification',
    education_fr: "Apprentissage (5 ans) + certification",
    courses_needed: ['Math Grade 10'],
    avg_salary: '$60,000 - $100,000',
    growth: 'medium'
  }
]

export const careerCategories = [
  { id: 'technology', name: 'Technology', name_fr: 'Technologie' },
  { id: 'engineering', name: 'Engineering', name_fr: 'Ingénierie' },
  { id: 'healthcare', name: 'Healthcare', name_fr: 'Santé' },
  { id: 'sciences', name: 'Sciences', name_fr: 'Sciences' },
  { id: 'trades', name: 'Skilled Trades', name_fr: 'Métiers spécialisés' },
]

export function getCareerById(id: string): Career | undefined {
  return careers.find(c => c.id === id)
}

export function getCareersByCategory(category: string): Career[] {
  return careers.filter(c => c.category === category)
}

export function getHighGrowthCareers(): Career[] {
  return careers.filter(c => c.growth === 'high')
}
