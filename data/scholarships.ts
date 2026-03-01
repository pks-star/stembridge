export interface Scholarship {
  id: string
  name: string
  provider: string
  amount: number
  deadline: string
  eligibility: string[]
  requirements: string[]
  url: string
  category: 'academic' | 'need-based' | 'athletic' | 'arts' | 'stem' | 'community'
}

export const scholarships: Scholarship[] = [
  {
    id: '1',
    name: ' Schulich Leader Scholarships',
    provider: 'Schulich Foundation',
    amount: 100000,
    deadline: 'March 1, 2026',
    eligibility: ['Grade 12 students', 'STEM major', 'Canadian citizen'],
    requirements: ['Academic excellence', 'Leadership', 'Community involvement'],
    url: '#',
    category: 'stem'
  },
  {
    id: '2',
    name: 'Loran Scholars Foundation',
    provider: 'Loran Scholars Foundation',
    amount: 100000,
    deadline: 'October 1, 2026',
    eligibility: ['Grade 11/12', 'Canadian citizen', 'Demonstrated character'],
    requirements: ['Community service', 'Leadership', 'Academic achievement'],
    url: '#',
    category: 'academic'
  },
  {
    id: '3',
    name: 'TD Scholarship',
    provider: 'TD Bank Group',
    amount: 70000,
    deadline: 'March 1, 2026',
    eligibility: ['Grade 12', 'Financial need', 'Community involvement'],
    requirements: ['Volunteer hours', 'Financial need', 'Academic standing'],
    url: '#',
    category: 'need-based'
  },
  {
    id: '4',
    name: 'U of T National Scholarship',
    provider: 'University of Toronto',
    amount: 75000,
    deadline: 'January 15, 2026',
    eligibility: ['Grade 12 students', 'High academic achievement'],
    requirements: ['Academic excellence', 'Leadership', 'Admission to U of T'],
    url: '#',
    category: 'academic'
  },
  {
    id: '5',
    name: 'Canada Merit Scholarship',
    provider: 'Canada Life',
    amount: 50000,
    deadline: 'March 31, 2026',
    eligibility: ['Grade 12', 'Post-secondary acceptance'],
    requirements: ['Academic excellence', 'Community involvement'],
    url: '#',
    category: 'academic'
  },
  {
    id: '6',
    name: 'Tomkins Scholarship',
    provider: 'University of Waterloo',
    amount: 30000,
    deadline: 'March 1, 2026',
    eligibility: ['STEM programs', 'Financial need'],
    requirements: ['Academic achievement', 'Financial need'],
    url: '#',
    category: 'need-based'
  },
  {
    id: '7',
    name: 'CAA Scholarship',
    provider: 'Canadian Automobile Association',
    amount: 5000,
    deadline: 'April 30, 2026',
    eligibility: ['Grade 12 students'],
    requirements: ['Academic standing', 'Community involvement'],
    url: '#',
    category: 'academic'
  },
  {
    id: '8',
    name: 'RBC Scholarship',
    provider: 'RBC',
    amount: 10000,
    deadline: 'March 15, 2026',
    eligibility: ['Finance/Business/STEM', 'Canadian resident'],
    requirements: ['Academic excellence', 'Leadership'],
    url: '#',
    category: 'stem'
  },
  {
    id: '9',
    name: 'McMaster Entrance Award',
    provider: 'McMaster University',
    amount: 25000,
    deadline: 'February 1, 2026',
    eligibility: ['Grade 12', 'McMaster applicant'],
    requirements: ['Academic achievement', 'Admission average 95+'],
    url: '#',
    category: 'academic'
  },
  {
    id: '10',
    name: 'CAA National Scholarship',
    provider: 'Canadian Automobile Association',
    amount: 5000,
    deadline: 'March 31, 2026',
    eligibility: ['Post-secondary students'],
    requirements: ['Academic achievement', 'Community service'],
    url: '#',
    category: 'academic'
  },
  {
    id: '11',
    name: 'Women in STEM Scholarship',
    provider: 'Canadian Women in STEM',
    amount: 15000,
    deadline: 'June 1, 2026',
    eligibility: ['Female students', 'STEM program'],
    requirements: ['Academic achievement', 'STEM involvement'],
    url: '#',
    category: 'stem'
  },
  {
    id: '12',
    name: 'Indspire Awards',
    provider: 'Indspire',
    amount: 10000,
    deadline: 'March 1, 2026',
    eligibility: ['Indigenous students', 'Post-secondary'],
    requirements: ['Academic achievement', 'Community involvement'],
    url: '#',
    category: 'need-based'
  }
]

export const categories = [
  { id: 'all', name: 'All Scholarships' },
  { id: 'academic', name: 'Academic Excellence' },
  { id: 'need-based', name: 'Financial Need' },
  { id: 'stem', name: 'STEM' },
  { id: 'community', name: 'Community Service' },
]

export function getScholarshipsByCategory(category: string): Scholarship[] {
  if (category === 'all') return scholarships
  return scholarships.filter(s => s.category === category)
}

export function getUpcomingDeadlines(): Scholarship[] {
  return [...scholarships].sort((a, b) => {
    const dateA = new Date(a.deadline).getTime()
    const dateB = new Date(b.deadline).getTime()
    return dateA - dateB
  }).slice(0, 5)
}
