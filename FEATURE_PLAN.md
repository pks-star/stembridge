# STEMBridge Feature Expansion Plan

## Overview
Adding features to make STEMBridge the most comprehensive Canadian STEM tutoring platform, aligned with Ontario curriculum and Canadian student needs.

---

## Feature 1: Financial Literacy (Ontario Grade 9-10 Required)

### Description
Add financial literacy topics required in Ontario Mathematics curriculum (Grade 9-10). This is a mandatory component of Ontario math education.

### Implementation
- Add new subject: `financial-literacy`
- Topics: Budgeting, Taxes, Compound Interest, Investing, Debt Management
- Integrate with AI tutor for personalized financial guidance
- Quiz questions for each topic

### Topics
```typescript
{ id: 'budgeting', name: 'Budgeting', name_fr: 'Budgétisation' }
{ id: 'taxes', name: 'Taxes & Deductions', name_fr: 'Taxes et déductions' }
{ id: 'compound-interest', name: 'Compound Interest', name_fr: 'Intérêt composé' }
{ id: 'investing', name: 'Investing Basics', name_fr: 'Bases de l'investissement' }
{ id: 'debt', name: 'Debt Management', name_fr: 'Gestion de la dette' }
{ id: 'financial-goals', name: 'Financial Goals', name_fr: 'Objectifs financiers' }
```

---

## Feature 2: French Immersion Support

### Description
Full bilingual support for French immersion students, including French math terms, scientific vocabulary, and explanations.

### Implementation
- Expand `name_fr` fields in all curriculum topics
- Add French-specific AI prompts for bilingual explanations
- Language toggle in settings (English/Français)
- French-first option for entire platform

### French Math Terms
| English | French |
|---------|--------|
| Quadratic | Relation quadratique |
| Slope | Pente |
| Variable | Variable |
| Equation | Équation |
| Function | Fonction |
| Derivative | Dérivée |

---

## Feature 3: Provincial Exam Prep

### Description
Practice materials and strategies for Ontario secondary school exams.

### Exam Types
1. **OSSLT** - Ontario Secondary School Literacy Test (Grade 10)
2. **Grade 12 University Prep Exams** - Math, Physics, Chemistry, Biology

### Implementation
- Exam-specific question banks
- Timed practice tests
- Past paper questions
- Study strategies and tips
- Score predictions based on performance

### Topics by Exam
```
OSSLT:
- Reading comprehension
- News literacy
- Essay writing

Grade 12 Math:
- MCV4U (Calculus)
- MHF4U (Advanced Functions)
- MDM4U (Data Management)

Grade 12 Sciences:
- SPH4U (Physics)
- SCH4U (Chemistry)
- SBI4U (Biology)
```

---

## Feature 4: STEM Careers Exploration

### Description
Help students explore STEM career paths and understand course requirements for different programs.

### Implementation
- Career profiles with education requirements
- Canadian university program requirements
- Emerging tech careers in Canada
- Skilled trades pathways
- Salary ranges (Canadian)

### Career Categories
1. **Technology** - Software Developer, Data Scientist, AI/ML Engineer, Cybersecurity
2. **Engineering** - Civil, Mechanical, Electrical, Software
3. **Healthcare** - Medical, Nursing, Pharmacy, Allied Health
4. **Sciences** - Research, Biotechnology, Environmental
5. **Trades** - Electrician, Plumber, HVAC, Construction

### University Program Requirements
- Show which Grade 12 courses needed for each program
- Admission averages for Canadian universities
- Co-op and internship opportunities

---

## Feature 5: French Interface Expansion

### Description
Full French translation of the platform interface, not just curriculum.

### Implementation
- Translate all UI elements (buttons, labels, messages)
- French error messages
- French email templates
- French parent communications

---

## Implementation Order

| Priority | Feature | Timeline | Status |
|----------|---------|----------|--------|
| P0 | Financial Literacy | Week 1 | Planned |
| P1 | French Curriculum Terms | Week 1 | Planned |
| P2 | Provincial Exam Prep | Week 2 | Planned |
| P3 | STEM Careers | Week 2 | Planned |
| P4 | Full French UI | Week 3 | Planned |

---

## Technical Notes

### Database Changes
- New table: `exam_prep` (question banks, user scores)
- New table: `careers` (career profiles)
- Update `subjects` table with new categories

### AI Integration
- New system prompts for financial topics
- French bilingual prompts
- Exam strategy guidance prompts

### UI Updates
- New navigation items
- Career exploration page
- Exam prep dashboard
