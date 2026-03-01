import { Subject } from '@/types'

export const curriculum: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    name_fr: 'Mathématiques',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra',
        name_fr: 'Algèbre',
        prerequisites: [],
        grade_level: 'Grade 9',
        description: 'Learn the foundations of algebra including variables, expressions, and solving equations.',
        description_fr: 'Apprenez les bases de l\'algèbre incluant les variables, les expressions et la résolution d\'équations.',
        objectives: [
          'Understand and use variables in expressions',
          'Simplify algebraic expressions',
          'Solve single-variable linear equations',
          'Solve linear equations with fractions',
          'Apply algebra to real-world problems'
        ],
        objectives_fr: [
          'Comprendre et utiliser les variables dans les expressions',
          'Simplifier les expressions algébriques',
          'Résoudre les équations linéaires à une variable',
          'Résoudre les équations linéaires avec fractions',
          'Appliquer l\'algèbre aux problèmes réels'
        ],
        content: `## Introduction to Algebra

Algebra is a branch of mathematics that uses letters (called variables) to represent numbers. This allows us to write general rules and solve problems where we don't know all the values.

### Variables
A variable is a symbol (usually a letter) that represents an unknown value. Common variables include x, y, n, and t.

**Examples:**
- Let x = the number of apples
- Let n = the cost of a textbook in dollars

### Expressions
An algebraic expression combines numbers, variables, and operations.

**Examples:**
- 3x means 3 times x
- x + 5 means x plus 5
- 2y - 7 means 2 times y minus 7

### Solving Equations
An equation states that two expressions are equal. Our goal is to find the value of the variable that makes the equation true.

**Steps to solve:**
1. Simplify both sides if needed
2. Get all variable terms on one side
3. Get all constant terms on the other side
4. Divide or multiply to isolate the variable

**Example:**
Solve: x + 5 = 12

x + 5 - 5 = 12 - 5
x = 7

### Key Formulas
- Distributive: a(b + c) = ab + ac
- Combining like terms: ax + bx = (a+b)x
- Solving: ax + b = c → x = (c - b)/a`,
        content_fr: `## Introduction à l'algèbre

L'algèbre est une branche des mathématiques qui utilise des lettres (appelées variables) pour représenter des nombres. Cela nous permet d'écrire des règles générales et de résoudre des problèmes où nous ne connaissons pas toutes les valeurs.

### Variables
Une variable est un symbole (généralement une lettre) qui représente une valeur inconnue. Les variables courantes incluent x, y, n et t.

### Expressions
Une expression algébrique combine des nombres, des variables et des opérations.

### Résolution d'équations
Une équation утверждает que deux expressions sont égales. Notre objectif est de trouver la valeur de la variable qui rend l'équation vraie.

### Formules clés
- Distributive: a(b + c) = ab + ac
- Combiner les termes similaires: ax + bx = (a+b)x`,
        examples: [
          { question: 'If x + 3 = 10, what is x?', solution: 'x = 7 (subtract 3 from both sides)' },
          { question: 'Solve: 2x = 18', solution: 'x = 9 (divide both sides by 2)' },
          { question: 'Solve: x/4 = 5', solution: 'x = 20 (multiply both sides by 4)' }
        ],
        practice_problems: [
          { question: 'Solve: x + 8 = 15', answer: 'x = 7', hint: 'Subtract 8 from both sides' },
          { question: 'Solve: 3x = 21', answer: 'x = 7', hint: 'Divide both sides by 3' },
          { question: 'Solve: x - 4 = 11', answer: 'x = 15', hint: 'Add 4 to both sides' },
          { question: 'Solve: 2x + 3 = 13', answer: 'x = 5', hint: 'First subtract 3, then divide by 2' }
        ],
        key_formulas: ['x + a = b → x = b - a', 'ax = b → x = b/a', 'ax + b = c → x = (c-b)/a']
      },
      {
        id: 'quadratics',
        name: 'Quadratic Relations',
        name_fr: 'Relations quadratiques',
        prerequisites: ['algebra'],
        grade_level: 'Grade 10',
        description: 'Explore quadratic relations, parabolas, and learn to factor quadratic equations.',
        description_fr: 'Explorez les relations quadratiques, les paraboles et apprenez à factoriser les équations quadratiques.',
        objectives: [
          'Identify quadratic relations',
          'Graph parabolas and understand vertex form',
          'Factor quadratic expressions',
          'Solve quadratic equations by factoring',
          'Apply quadratics to real-world problems'
        ],
        objectives_fr: [
          'Identifier les relations quadratiques',
          'Tracer des paraboles et comprendre la forme vertex',
          'Factoriser les expressions quadratiques',
          'Résoudre les équations quadratiques par factorisation',
          'Appliquer les quadratiques aux problèmes réels'
        ],
        content: `## Quadratic Relations

A quadratic relation is a relationship where the relationship between variables forms a parabola when graphed. The general form is y = ax² + bx + c.

### Standard Form
y = ax² + bx + c
- a, b, and c are constants
- a ≠ 0 (if a = 0, it's linear, not quadratic)

### Factoring Quadratics
Factoring is one way to solve quadratic equations.

**Perfect Square Trinomials:**
- x² + 2bx + b² = (x + b)²
- x² - 2bx + b² = (x - b)²

**Difference of Squares:**
- x² - b² = (x + b)(x - b)

**Example - Factoring:**
x² + 5x + 6 = 0
Look for two numbers that:
- multiply to +6 (the constant)
- add to +5 (the coefficient of x)

Answer: (x + 2)(x + 3) = 0
Therefore: x = -2 or x = -3

### The Quadratic Formula
When factoring doesn't work, use:
x = (-b ± √(b² - 4ac)) / 2a

This works for ALL quadratic equations!`,
        content_fr: `## Relations quadratiques

Une relation quadratique est une relation où la forme parabole. La forme générale est y = ax² + bx + c.

### Factorisation
x² + 5x + 6 = (x + 2)(x + 3)

### Formule quadratique
x = (-b ± √(b² - 4ac)) / 2a`,
        examples: [
          { question: 'Factor: x² - 9', solution: '(x + 3)(x - 3)' },
          { question: 'Solve: x² = 16', solution: 'x = ±4' },
          { question: 'Factor: x² + 6x + 9', solution: '(x + 3)²' }
        ],
        practice_problems: [
          { question: 'Factor: x² + 7x + 12', answer: '(x + 3)(x + 4)', hint: 'Find numbers that multiply to 12 and add to 7' },
          { question: 'Solve: x² - 4 = 0', answer: 'x = ±2', hint: 'This is a difference of squares' },
          { question: 'Factor: 2x² + 8x', answer: '2x(x + 4)', hint: 'Factor out the GCF first' }
        ],
        key_formulas: ['x² - b² = (x+b)(x-b)', '(x+b)² = x²+2bx+b²', 'x = (-b ± √(b²-4ac))/2a']
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        name_fr: 'Trigonométrie',
        prerequisites: ['algebra'],
        grade_level: 'Grade 10-11',
        description: 'Master sine, cosine, and tangent ratios to solve triangles.',
        description_fr: 'Maîtrisez les rapports sinus, cosinus et tangente pour résoudre des triangles.',
        objectives: [
          'Understand the unit circle',
          'Define and use sine, cosine, and tangent ratios',
          'Solve right triangles using trigonometry',
          'Apply trigonometry to real-world problems',
          'Use the Law of Sines and Cosines'
        ],
        objectives_fr: [
          'Comprendre le cercle trigonométrique',
          'Définir et utiliser les rapports sinus, cosinus et tangente',
          'Résoudre les triangles rectangles',
          'Appliquer la trigonométrie aux problèmes réels'
        ],
        content: `## Trigonometry

Trigonometry deals with the relationships between the sides and angles of triangles.

### Right Triangle Trigonometry

For a right triangle with angle θ:

**SOH CAH TOA:**
- **S**in = **O**pposite / **H**ypotenuse
- **C**os = **A**djacent / **H**ypotenuse
- **T**an = **O**pposite / **A**djacent

### Example
In a right triangle:
- Opposite side = 3
- Adjacent side = 4
- Hypotenuse = 5

sin(θ) = 3/5 = 0.6
cos(θ) = 4/5 = 0.8
tan(θ) = 3/4 = 0.75

### Solving Problems
To find a missing side:
1. Identify which trig ratio to use
2. Set up the equation
3. Solve for the unknown

To find a missing angle:
- Use inverse trig functions: sin⁻¹, cos⁻¹, tan⁻¹

### Special Angles
| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 30° | 1/2 | √3/2 | 1/√3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |`,
        content_fr: `## Trigonométrie

### SOH CAH TOA
- Sin = Opp/Hyp
- Cos = Adj/Hyp
- Tan = Opp/Adj

### Angles spéciaux
30°, 45°, 60° ont des valeurs spécifiques`,
        examples: [
          { question: 'Find sin(30°)', solution: '1/2 or 0.5' },
          { question: 'If cos(θ) = 0.5, find θ', solution: 'θ = 60°' },
          { question: 'In a triangle, opposite=3, hypotenuse=5, find sin(θ)', solution: '3/5 = 0.6' }
        ],
        practice_problems: [
          { question: 'Find tan(45°)', answer: '1', hint: 'At 45°, opposite equals adjacent' },
          { question: 'If sin(θ) = 0.707, approximate θ', answer: '≈ 45°', hint: 'Think about special triangles' },
          { question: 'Opposite=12, Adjacent=5, find tan(θ)', answer: '12/5 = 2.4', hint: 'Use tan = opp/adj' }
        ],
        key_formulas: ['sin(θ) = opp/hyp', 'cos(θ) = adj/hyp', 'tan(θ) = opp/adj', 'sin²θ + cos²θ = 1']
      },
      {
        id: 'functions',
        name: 'Functions',
        name_fr: 'Fonctions',
        prerequisites: ['algebra'],
        grade_level: 'Grade 11',
        description: 'Understand functions, function notation, and different types of functions.',
        description_fr: 'Comprenez les fonctions, la notation fonctionnelle et les différents types de fonctions.',
        objectives: [
          'Define and understand functions',
          'Use function notation f(x)',
          'Analyze linear and quadratic functions',
          'Understand domain and range',
          'Compose and transform functions'
        ],
        objectives_fr: [
          'Définir et comprendre les fonctions',
          'Utiliser la notation fonctionnelle f(x)',
          'Analyser les fonctions linéaires et quadratiques',
          'Comprendre le domaine et l\'image'
        ],
        content: `## Functions

A function is a relationship where each input has exactly one output.

### Function Notation
f(x) = 2x + 3
- f is the function name
- x is the input (the argument)
- 2x + 3 is the output

### Domain and Range
- **Domain**: All possible input values (x-values)
- **Range**: All possible output values (y-values)

### Types of Functions
1. **Linear**: f(x) = mx + b (straight line)
2. **Quadratic**: f(x) = ax² + bx + c (parabola)
3. **Exponential**: f(x) = aˣ (rapid growth/decay)
4. **Polynomial**: Sum of power functions

### Operations on Functions
- **Addition**: (f + g)(x) = f(x) + g(x)
- **Multiplication**: (f · g)(x) = f(x) · g(x)
- **Composition**: (f ∘ g)(x) = f(g(x))

### Inverse Functions
If f(x) = y, then f⁻¹(y) = x`,
        content_fr: `## Fonctions

Une fonction est une relation où chaque entrée a exactement une sortie.

### Notation fonctionnelle
f(x) = 2x + 3

### Types de fonctions
- Linéaire: f(x) = mx + b
- Quadratique: f(x) = ax² + bx + c
- Exponentielle: f(x) = aˣ`,
        examples: [
          { question: 'If f(x) = 2x + 1, find f(3)', solution: 'f(3) = 2(3) + 1 = 7' },
          { question: 'Find the inverse of f(x) = 3x', solution: 'f⁻¹(x) = x/3' },
          { question: 'What is the domain of f(x) = 1/x?', solution: 'All real numbers except 0' }
        ],
        practice_problems: [
          { question: 'If g(x) = x² - 2, find g(4)', answer: '14', hint: 'Substitute 4 for x' },
          { question: 'Find the y-intercept of f(x) = 3x - 7', answer: '-7', hint: 'Set x = 0' },
          { question: 'Is f(x) = x² a function?', answer: 'Yes', hint: 'Each x has one y value' }
        ],
        key_formulas: ['f(g(x)) = (f ∘ g)(x)', 'f⁻¹(f(x)) = x', 'y = mx + b for linear']
      },
      {
        id: 'calculus',
        name: 'Calculus',
        name_fr: 'Calcul différentiel',
        prerequisites: ['functions'],
        grade_level: 'Grade 12',
        description: 'Introduction to derivatives and integrals, the foundations of calculus.',
        description_fr: 'Introduction aux dérivées et intégrales, les fondements du calcul.',
        objectives: [
          'Understand limits and continuity',
          'Calculate derivatives using rules',
          'Apply derivatives to optimization problems',
          'Understand the Fundamental Theorem of Calculus'
        ],
        objectives_fr: [
          'Comprendre les limites et la continuité',
          'Calculer les dérivées',
          'Appliquer les dérivées'
        ],
        content: `## Introduction to Calculus

Calculus is the mathematics of change. It has two main branches: differential calculus and integral calculus.

### Limits
A limit describes what happens as a function approaches a certain value.

lim(x→a) f(x) = L
This reads: "the limit of f(x) as x approaches a equals L"

### Derivatives
The derivative measures the instantaneous rate of change of a function.

**Power Rule:**
d/dx(xⁿ) = n·xⁿ⁻¹

**Examples:**
- d/dx(x²) = 2x
- d/dx(x³) = 3x²
- d/dx(5) = 0 (derivative of a constant)

### Applications of Derivatives
1. **Slope of tangent lines**
2. **Velocity and acceleration**
3. **Optimization** (finding maximum/minimum values)
4. **Rates of change**

### Integration
Integration is the reverse of differentiation. It's used to find areas under curves.

∫xⁿ dx = xⁿ⁺¹/(n+1) + C

where C is the constant of integration.`,
        content_fr: `## Introduction au calcul

### Dérivées
d/dx(xⁿ) = n·xⁿ⁻¹

### Intégration
∫xⁿ dx = xⁿ⁺¹/(n+1) + C`,
        examples: [
          { question: 'Find d/dx(x⁴)', solution: '4x³' },
          { question: 'Find d/dx(3x² + 2x)', solution: '6x + 2' },
          { question: '∫2x dx', solution: 'x² + C' }
        ],
        practice_problems: [
          { question: 'Find d/dx(x⁵)', answer: '5x⁴', hint: 'Use power rule' },
          { question: 'Find d/dx(4)', answer: '0', hint: 'Derivative of constant is 0' },
          { question: '∫x² dx', answer: 'x³/3 + C', hint: 'Add 1 to exponent, divide by new exponent' }
        ],
        key_formulas: ['d/dx(xⁿ) = nxⁿ⁻¹', 'd/dx(fg) = f\'g + fg\'', '∫xⁿ dx = xⁿ⁺¹/(n+1) + C']
      },
      {
        id: 'statistics',
        name: 'Statistics',
        name_fr: 'Statistiques',
        prerequisites: [],
        grade_level: 'Grade 11-12',
        description: 'Learn to collect, analyze, and interpret data.',
        description_fr: 'Apprenez à collecter, analyser et interpréter des données.',
        objectives: [
          'Understand measures of central tendency',
          'Calculate and interpret standard deviation',
          'Create and interpret histograms and box plots',
          'Understand normal distribution'
        ],
        objectives_fr: [
          'Comprendre les mesures de tendance centrale',
          'Calculer et interpréter l\'écart-type',
          'Créer et interpréter des histogrammes'
        ],
        content: `## Statistics

Statistics is the science of collecting, analyzing, and interpreting data.

### Measures of Central Tendency
- **Mean (Average)**: Sum of all values divided by count
- **Median**: The middle value when data is ordered
- **Mode**: The most frequent value

### Measures of Spread
- **Range**: Max - Min
- **Variance**: Average of squared differences from mean
- **Standard Deviation (σ)**: Square root of variance

### The Normal Distribution
Many natural phenomena follow a bell-shaped curve called the normal distribution.

**Key Properties:**
- 68% of data within 1 standard deviation
- 95% within 2 standard deviations
- 99.7% within 3 standard deviations

**Z-Score:**
z = (x - μ) / σ
This tells you how many standard deviations a value is from the mean.`,
        content_fr: `## Statistiques

### Mesures de tendance centrale
- Moyenne: somme des valeurs / nombre
- Médiane: valeur du milieu
- Mode: valeur la plus fréquente

### Écart-type
σ = √(variance)`,
        examples: [
          { question: 'Find the mean of 2, 4, 6, 8', solution: '5' },
          { question: 'Find the median of 1, 3, 5, 7, 9', solution: '5' },
          { question: 'If mean=50 and σ=10, what is z-score for x=70?', solution: 'z = (70-50)/10 = 2' }
        ],
        practice_problems: [
          { question: 'Find mean of 10, 20, 30', answer: '20', hint: 'Sum/number of values' },
          { question: 'Find median of 3, 1, 5, 2', answer: '3.5', hint: 'Order first: 1,2,3,5' }
        ],
        key_formulas: ['mean = Σx/n', 'z = (x - μ)/σ', '68-95-99.7 rule']
      },
      {
        id: 'probability',
        name: 'Probability',
        name_fr: 'Probabilité',
        prerequisites: ['statistics'],
        grade_level: 'Grade 11-12',
        description: 'Understand the mathematics of chance and likelihood.',
        description_fr: 'Comprenez les mathématiques du hasard et de la probabilité.',
        objectives: [
          'Calculate basic probabilities',
          'Understand independent and dependent events',
          'Use counting principles and permutations',
          'Apply probability to real-world scenarios'
        ],
        objectives_fr: [
          'Calculer les probabilités de base',
          'Comprendre les événements indépendants et dépendants',
          'Utiliser les principes de comptage'
        ],
        content: `## Probability

Probability measures how likely an event is to occur.

### Basic Probability
P(A) = Number of favorable outcomes / Total number of outcomes

**Rules:**
- Probability is always between 0 and 1
- P(certain event) = 1
- P(impossible event) = 0
- P(event not A) = 1 - P(A)

### Compound Events
- **AND (∩)**: Multiply probabilities (for independent events)
- **OR (∪)**: Add probabilities (for mutually exclusive events)

### Counting Principles
- **Fundamental Counting Principle**: If task A has m ways and task B has n ways, together they have m × n ways
- **Permutations**: Order matters: P(n,r) = n!/(n-r)!
- **Combinations**: Order doesn't matter: C(n,r) = n!/r!(n-r)!`,
        content_fr: `## Probabilité

### Formule de base
P(A) = résultats favorables / résultats totaux

### Règles
- P(A) + P(non-A) = 1
- Pour AND: multiplier les probabilités
- Pour OR: additionner les probabilités`,
        examples: [
          { question: 'What is probability of rolling a 6 on a fair die?', solution: '1/6' },
          { question: 'Flip a coin twice, probability of both heads?', solution: '1/4 or 0.25' },
          { question: 'P(A) = 0.3, find P(not A)', solution: '0.7' }
        ],
        practice_problems: [
          { question: 'Draw a card from deck, P(queen)', answer: '4/52 = 1/13', hint: '4 queens in 52 cards' },
          { question: 'Roll die, P(even number)', answer: '3/6 = 1/2', hint: 'Even: 2,4,6' }
        ],
        key_formulas: ['P(A) = favorable/total', 'P(A∪B) = P(A)+P(B)-P(A∩B)', 'P(A∩B) = P(A)×P(B|A)']
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    name_fr: 'Physique',
    topics: [
      {
        id: 'kinematics',
        name: 'Kinematics',
        name_fr: 'Cinématique',
        prerequisites: [],
        grade_level: 'Grade 11',
        description: 'Study motion without considering its causes. Learn about displacement, velocity, and acceleration.',
        description_fr: 'Étudiez le mouvement sans considérer ses causes. Apprenez le déplacement, la vitesse et l\'accélération.',
        objectives: [
          'Understand displacement, velocity, and acceleration',
          'Use kinematic equations',
          'Analyze motion graphs',
          'Solve projectile motion problems'
        ],
        objectives_fr: [
          'Comprendre le déplacement, la vitesse et l\'accélération',
          'Utiliser les équations cinématiques',
          'Analyser les graphiques de mouvement'
        ],
        content: `## Kinematics

Kinematics describes how objects move without explaining why.

### Key Quantities
- **Displacement (d)**: Change in position (vector - has direction)
- **Velocity (v)**: Rate of change of position
- **Acceleration (a)**: Rate of change of velocity

### The Kinematic Equations
1. v = v₀ + at
2. d = v₀t + ½at²
3. v² = v₀² + 2ad
4. d = ½(v + v₀)t

### Example Problem
A car accelerates from rest at 3 m/s² for 5 seconds.
- v₀ = 0 m/s
- a = 3 m/s²
- t = 5 s

Find: final velocity and displacement

v = v₀ + at = 0 + 3(5) = 15 m/s
d = v₀t + ½at² = 0 + ½(3)(25) = 37.5 m`,
        content_fr: `## Cinématique

### Équations cinématiques
1. v = v₀ + at
2. d = v₀t + ½at²
3. v² = v₀² + 2ad`,
        examples: [
          { question: 'A car accelerates from 10 m/s to 30 m/s in 4 s. Find acceleration.', solution: 'a = (30-10)/4 = 5 m/s²' },
          { question: 'Object falls for 3 s. Find displacement.', solution: 'd = ½(9.8)(9) = 44.1 m' }
        ],
        practice_problems: [
          { question: 'v₀ = 0, a = 2 m/s², t = 6s. Find v.', answer: '12 m/s', hint: 'v = v₀ + at' },
          { question: 'v₀ = 20 m/s, a = -10 m/s², find stopping distance', answer: '20 m', hint: 'Use v² = v₀² + 2ad' }
        ],
        key_formulas: ['v = v₀ + at', 'd = v₀t + ½at²', 'v² = v₀² + 2ad']
      },
      {
        id: 'forces',
        name: 'Forces',
        name_fr: 'Forces',
        prerequisites: ['kinematics'],
        grade_level: 'Grade 11',
        description: 'Study Newton\'s laws and how forces affect motion.',
        description_fr: 'Étudiez les lois de Newton et comment les forces affectent le mouvement.',
        objectives: [
          'Understand Newton\'s Three Laws',
          'Calculate net force and resulting acceleration',
          'Analyze friction and normal force',
          'Solve force problems with free body diagrams'
        ],
        objectives_fr: [
          'Comprendre les trois lois de Newton',
          'Calculer la force nette',
          'Analyser le frottement'
        ],
        content: `## Newton's Laws of Motion

### First Law (Inertia)
An object at rest stays at rest, and an object in motion stays in motion unless acted upon by a net force.

### Second Law (F = ma)
The acceleration of an object is directly proportional to net force and inversely proportional to mass.

**F = ma**
- F = force (Newtons, N)
- m = mass (kilograms, kg)
- a = acceleration (m/s²)

### Third Law
For every action, there is an equal and opposite reaction.

### Free Body Diagrams
Draw all forces acting on an object:
- Weight (down): mg
- Normal force (up): N
- Friction (opposes motion): f = μN
- Applied force: F

### Example
A 5 kg box is pushed with 30 N. Friction = 10 N.
Net force = 30 - 10 = 20 N
a = F/m = 20/5 = 4 m/s²`,
        content_fr: `## Lois de Newton

### Deuxième loi
F = ma

### Troisième loi
Action = -Réaction`,
        examples: [
          { question: 'F = 100 N on 5 kg mass. Find a.', solution: 'a = F/m = 100/5 = 20 m/s²' },
          { question: 'Mass = 10 kg, a = 2 m/s². Find F.', solution: 'F = ma = 20 N' }
        ],
        practice_problems: [
          { question: '50 N pushes 10 kg. a = ?', answer: '5 m/s²', hint: 'F = ma, so a = F/m' },
          { question: 'Mass doubles, force same. a becomes?', answer: 'Half', hint: 'a inversely proportional to m' }
        ],
        key_formulas: ['F = ma', 'W = mg', 'f = μN']
      },
      {
        id: 'energy',
        name: 'Energy',
        name_fr: 'Énergie',
        prerequisites: ['forces'],
        grade_level: 'Grade 11',
        description: 'Understand kinetic energy, potential energy, and energy conservation.',
        description_fr: 'Comprenez l\'énergie cinétique, l\'énergie potentielle et la conservation de l\'énergie.',
        objectives: [
          'Define and calculate kinetic energy',
          'Define and calculate gravitational potential energy',
          'Understand work and power',
          'Apply conservation of energy'
        ],
        objectives_fr: [
          'Définir et calculer l\'énergie cinétique',
          'Définir l\'énergie potentielle gravitationnelle',
          'Comprendre le travail et la puissance'
        ],
        content: `## Energy and Work

### Work
Work is done when a force causes displacement.

**W = Fd cos(θ)**
- W = work (Joules, J)
- F = force (N)
- d = displacement (m)
- θ = angle between force and displacement

### Kinetic Energy
Energy of motion.

**KE = ½mv²**
- m = mass (kg)
- v = velocity (m/s)

### Potential Energy
Stored energy due to position.

**Gravitational: PE = mgh**
- m = mass (kg)
- g = 9.8 m/s²
- h = height (m)

### Conservation of Energy
Energy cannot be created or destroyed, only transformed.

KE₁ + PE₁ = KE₂ + PE₂

### Power
Rate of doing work.

**P = W/t = Fv** (in Watts, W)`,
        content_fr: `## Énergie et travail

### Travail
W = Fd cos(θ)

### Énergie cinétique
KE = ½mv²

### Énergie potentielle
PE = mgh

### Conservation
KE + PE = constant`,
        examples: [
          { question: '2 kg ball at 3 m/s. Find KE.', solution: 'KE = ½(2)(3)² = 9 J' },
          { question: '5 kg at 10 m height. Find PE (g=10).', solution: 'PE = (5)(10)(10) = 500 J' }
        ],
        practice_problems: [
          { question: 'KE = 100 J, v = 10 m/s. Find m.', answer: '2 kg', hint: 'KE = ½mv²' },
          { question: 'm=2kg, h=5m, g=10. PE = ?', answer: '100 J', hint: 'PE = mgh' }
        ],
        key_formulas: ['KE = ½mv²', 'PE = mgh', 'W = Fd', 'P = W/t']
      },
      {
        id: 'waves',
        name: 'Waves',
        name_fr: 'Ondes',
        prerequisites: [],
        grade_level: 'Grade 11',
        description: 'Learn about wave properties, types, and interactions.',
        description_fr: 'Apprenez les propriétés des ondes, les types et les interactions.',
        objectives: [
          'Understand wave properties (amplitude, frequency, wavelength)',
          'Distinguish between transverse and longitudinal waves',
          'Use the wave equation',
          'Understand reflection, refraction, and diffraction'
        ],
        objectives_fr: [
          'Comprendre les propriétés des ondes',
          'Distinguer les ondes transversales et longitudinales',
          'Utiliser l\'équation des ondes'
        ],
        content: `## Waves

A wave transfers energy without transferring matter.

### Wave Properties
- **Wavelength (λ)**: Distance between successive peaks (m)
- **Frequency (f)**: Number of waves per second (Hz)
- **Amplitude (A)**: Maximum displacement from rest position
- **Period (T)**: Time for one complete wave (T = 1/f)

### Wave Equation
**v = fλ**
- v = wave speed (m/s)
- f = frequency (Hz)
- λ = wavelength (m)

### Types of Waves
1. **Transverse**: Particles move perpendicular to wave direction (light, water waves)
2. **Longitudinal**: Particles move parallel to wave direction (sound)

### Wave Interactions
- **Reflection**: Wave bounces off a surface
- **Refraction**: Wave changes direction entering new medium
- **Diffraction**: Wave bends around obstacles
- **Interference**: Waves combine (constructive or destructive)`,
        content_fr: `## Ondes

### Propriétés
- λ = longueur d\'onde
- f = fréquence
- v = vitesse

### Équation
v = fλ

### Types
- Transversale: particules perpendiculaires
- Longitudinale: particules parallèles`,
        examples: [
          { question: 'f = 100 Hz, λ = 2 m. Find v.', solution: 'v = fλ = 100 × 2 = 200 m/s' },
          { question: 'v = 340 m/s, f = 85 Hz. Find λ.', solution: 'λ = v/f = 340/85 = 4 m' }
        ],
        practice_problems: [
          { question: 'f = 50 Hz, v = 100 m/s. λ = ?', answer: '2 m', hint: 'λ = v/f' },
          { question: 'λ = 0.5 m, v = 150 m/s. f = ?', answer: '300 Hz', hint: 'f = v/λ' }
        ],
        key_formulas: ['v = fλ', 'T = 1/f', 'f = 1/T']
      },
      {
        id: 'electricity',
        name: 'Electricity',
        name_fr: 'Électricité',
        prerequisites: ['forces'],
        grade_level: 'Grade 12',
        description: 'Understand electric circuits, voltage, current, and resistance.',
        description_fr: 'Comprenez les circuits électriques, la tension, le courant et la résistance.',
        objectives: [
          'Understand voltage, current, and resistance',
          'Apply Ohm\'s Law',
          'Calculate power in circuits',
          'Analyze series and parallel circuits'
        ],
        objectives_fr: [
          'Comprendre la tension, le courant et la résistance',
          'Appliquer la loi d\'Ohm',
          'Calculer la puissance'
        ],
        content: `## Electricity

### Electric Charge
- Protons: positive charge
- Electrons: negative charge
- Like charges repel, opposites attract

### Current (I)
Flow of electric charge.
- I = q/t (Amperes, A)
- Conventional current flows from + to -

### Voltage (V)
Electric potential difference.
- V = W/q (Volts, V)

### Resistance (R)
Opposition to current flow.
- R = ρL/A (Ohms, Ω)

### Ohm's Law
**V = IR**

### Power
Rate of energy transfer.
- P = IV = I²R = V²/R (Watts, W)

### Circuits
- **Series**: R_total = R₁ + R₂ + R₃
- **Parallel**: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

### Example
V = 12V, R = 4Ω
I = V/R = 12/4 = 3 A
P = IV = 12 × 3 = 36 W`,
        content_fr: `## Électricité

### Loi d\'Ohm
V = IR

### Résistance
- Série: R_total = R₁ + R₂
- Parallèle: 1/R_total = 1/R₁ + 1/R₂

### Puissance
P = IV`,
        examples: [
          { question: 'V = 120V, R = 60Ω. Find I.', solution: 'I = V/R = 120/60 = 2 A' },
          { question: 'I = 5A, R = 10Ω. Find P.', solution: 'P = I²R = 25 × 10 = 250 W' }
        ],
        practice_problems: [
          { question: 'V = 9V, I = 3A. R = ?', answer: '3 Ω', hint: 'R = V/I' },
          { question: 'R = 100Ω, I = 0.5A. P = ?', answer: '25 W', hint: 'P = I²R' }
        ],
        key_formulas: ['V = IR', 'P = IV', 'R_series = R₁+R₂', '1/R_parallel = 1/R₁+1/R₂']
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    name_fr: 'Chimie',
    topics: [
      {
        id: 'atomic',
        name: 'Atomic Structure',
        name_fr: 'Structure atomique',
        prerequisites: [],
        grade_level: 'Grade 11',
        description: 'Learn about atoms, subatomic particles, and the periodic table.',
        description_fr: 'Apprenez les atomes, les particules subatomiques et le tableau périodique.',
        objectives: [
          'Identify subatomic particles and their properties',
          'Understand atomic number and mass number',
          'Read the periodic table',
          'Understand isotopes and ions'
        ],
        objectives_fr: [
          'Identifier les particules subatomiques',
          'Comprendre le numéro atomique',
          'Lire le tableau périodique'
        ],
        content: `## Atomic Structure

### Subatomic Particles
- **Protons (p⁺)**: Positive charge, in nucleus, determines element
- **Neutrons (n⁰)**: No charge, in nucleus, contributes to mass
- **Electrons (e⁻)**: Negative charge, in electron cloud, determines bonding

### Key Terms
- **Atomic Number (Z)**: Number of protons (defines element)
- **Mass Number (A)**: Protons + neutrons
- **Isotopes**: Same protons, different neutrons
- **Ions**: Charged atoms (gained/lost electrons)

### Periodic Table Trends
- **Groups (columns)**: Similar chemical properties
- **Periods (rows)**: Same energy levels
- **Metals**: Left side, lose electrons
- **Nonmetals**: Right side, gain electrons

### Electron Configuration
Electrons occupy energy levels/shells.
- Shell 1: max 2 electrons
- Shell 2: max 8 electrons
- Shell 3: max 18 electrons

### Lewis Diagrams
Show valence electrons as dots around element symbol.`,
        content_fr: `## Structure atomique

### Particules subatomiques
- Protons: charge positive
- Neutrons: sans charge
- Électrons: charge négative

### Tableau périodique
- Groupes: propriétés similaires
- Périodes: mêmes niveaux d\'énergie`,
        examples: [
          { question: 'Carbon: Z=6, A=14. Protons, neutrons, electrons?', solution: '6p⁺, 8n⁰, 6e⁻' },
          { question: 'Ca²⁺ has how many electrons?', solution: '20 - 2 = 18 electrons' }
        ],
        practice_problems: [
          { question: 'Oxygen: Z=8. Electrons in neutral atom?', answer: '8', hint: 'Protons = electrons' },
          { question: 'Na⁺ (atomic # = 11). Electron count?', answer: '10', hint: 'Lost 1 electron' }
        ],
        key_formulas: ['A = protons + neutrons', 'Isotopes: same Z, different A']
      },
      {
        id: 'bonding',
        name: 'Chemical Bonding',
        name_fr: 'Liaison chimique',
        prerequisites: ['atomic'],
        grade_level: 'Grade 11',
        description: 'Understand ionic, covalent, and metallic bonds.',
        description_fr: 'Comprenez les liaisons ioniques, covalentes et métalliques.',
        objectives: [
          'Understand ionic bonding',
          'Understand covalent bonding',
          'Understand metallic bonding',
          'Draw Lewis structures'
        ],
        objectives_fr: [
          'Comprendre la liaison ionique',
          'Comprendre la liaison covalente',
          'Dessiner les structures de Lewis'
        ],
        content: `## Chemical Bonding

Chemical bonds hold atoms together.

### Ionic Bonding
- Transfer of electrons
- Metal + Nonmetal
- Creates ions (charged atoms)
- Strong electrostatic attraction
- Example: NaCl (table salt)
  Na → Na⁺ + e⁻
  Cl + e⁻ → Cl⁻
  Na⁺ + Cl⁻ → NaCl

### Covalent Bonding
- Sharing of electrons
- Nonmetal + Nonmetal
- Can be single, double, or triple bond
- Examples: H₂O, CO₂, CH₄

### Metallic Bonding
- Sea of electrons
- Metal atoms share delocalized electrons
- Explains conductivity

### Electronegativity
- Measures how strongly an atom attracts electrons
- Difference determines bond type:
  - > 1.7: Ionic
  - 0.4 - 1.7: Polar covalent
  - < 0.4: Nonpolar covalent`,
        content_fr: `## Liaison chimique

### Liaison ionique
Transfert d\'électrons (métal + non-métal)

### Liaison covalente
Partage d\'électrons (non-métal + non-métal)

### Liaison métallique
Mer d\'électrons`,
        examples: [
          { question: 'Na (metal) + Cl (nonmetal). Bond type?', solution: 'Ionic' },
          { question: 'H₂O uses what bond type?', solution: 'Covalent' }
        ],
        practice_problems: [
          { question: 'MgO is what bond type?', answer: 'Ionic', hint: 'Metal + nonmetal' },
          { question: 'CO₂ uses what bond?', answer: 'Covalent', hint: 'Two nonmetals' }
        ],
        key_formulas: ['EN difference > 1.7: Ionic', 'EN difference 0.4-1.7: Polar covalent', 'EN difference < 0.4: Nonpolar']
      },
      {
        id: 'stoichiometry',
        name: 'Stoichiometry',
        name_fr: 'Stœchiométrie',
        prerequisites: ['bonding'],
        grade_level: 'Grade 11',
        description: 'Calculate amounts of reactants and products in chemical reactions.',
        description_fr: 'Calculez les quantités de réactifs et produits dans les réactions chimiques.',
        objectives: [
          'Balance chemical equations',
          'Convert between moles and mass',
          'Use mole ratios',
          'Calculate limiting reagents'
        ],
        objectives_fr: [
          'Équilibrer les équations chimiques',
          'Convertir entre moles et masse',
          'Utiliser les rapports molaires'
        ],
        content: `## Stoichiometry

Stoichiometry calculates quantities in chemical reactions.

### Balancing Equations
Coefficients must balance atoms on both sides.

Example: CH₄ + O₂ → CO₂ + H₂O

Balance: CH₄ + 2O₂ → CO₂ + 2H₂O

### Mole Conversions
- **Molar mass**: Mass of 1 mole (g/mol)
- **n = m/M**: moles = mass/molar mass

### Mole Ratio
From balanced equation:
2H₂ + O₂ → 2H₂O

Mole ratios:
- 2 mol H₂ : 1 mol O₂ : 2 mol H₂O

### Example Problem
How many grams of O₂ needed for 16g CH₄?

1. M(CH₄) = 12 + 4(1) = 16 g/mol
2. n(CH₄) = 16/16 = 1 mol
3. From equation: need 2 mol O₂ per 1 mol CH₄
4. n(O₂) = 2 mol
5. M(O₂) = 32 g/mol
6. mass = 2 × 32 = 64 g`,
        content_fr: `## Stœchiométrie

### Équilibrer
CH₄ + 2O₂ → CO₂ + 2H₂O

### Conversions
n = m/M (moles = masse/masse molaire)

### Rapport molaire
De l\'équation équilibrée`,
        examples: [
          { question: 'Balance: H₂ + O₂ → H₂O', solution: '2H₂ + O₂ → 2H₂O' },
          { question: 'Molar mass of NaCl?', solution: '23 + 35.5 = 58.5 g/mol' }
        ],
        practice_problems: [
          { question: '16g O₂. M=32g/mol. Moles?', answer: '0.5 mol', hint: 'n = m/M' },
          { question: '2 mol H₂O. H: moles?', answer: '4 mol H', hint: '2 H per H₂O' }
        ],
        key_formulas: ['n = m/M', 'n = N/NA', 'Mole ratio from balanced equation']
      },
      {
        id: 'solutions',
        name: 'Solutions',
        name_fr: 'Solutions',
        prerequisites: ['stoichiometry'],
        grade_level: 'Grade 12',
        description: 'Understand solution chemistry, concentration, and solubility.',
        description_fr: 'Comprenez la chimie des solutions, la concentration et la solubilité.',
        objectives: [
          'Calculate concentration (molarity, %)',
          'Understand dilution',
          'Apply solubility rules',
          'Calculate pH'
        ],
        objectives_fr: [
          'Calculer la concentration',
          'Comprendre la dilution',
          'Appliquer les règles de solubilité'
        ],
        content: `## Solutions

A solution is a homogeneous mixture of solute dissolved in solvent.

### Concentration Units
- **Molarity (M)**: moles solute / liters solution
- **% by mass**: (mass solute / mass solution) × 100
- **% by volume**: (volume solute / volume solution) × 100

### Dilution
M₁V₁ = M₂V₂

### Solubility Rules
- **Soluble**: Group 1 ions, NH₄⁺, nitrates, acetates
- **Most chlorides**: Soluble except Ag⁺, Pb²⁺
- **Most sulfates**: Soluble except Ba²⁺, Pb²⁺, Ca²⁺
- **Most hydroxides**: Insoluble except Group 1, NH₄⁺

### Acids and Bases
- **Acids**: H⁺ donors, pH < 7
- **Bases**: OH⁻ donors, pH > 7
- **pH = -log[H⁺]**
- pH + pOH = 14`,
        content_fr: `## Solutions

### Concentration
M = moles / litres

### Dilution
M₁V₁ = M₂V₂

### pH
pH = -log[H⁺]`,
        examples: [
          { question: '0.5 mol in 2L. Molarity?', solution: '0.5/2 = 0.25 M' },
          { question: '[H⁺] = 10⁻³ M. pH?', solution: 'pH = 3' }
        ],
        practice_problems: [
          { question: '1M solution, take 100mL, add water to 1L. New M?', answer: '0.1 M', hint: 'M₁V₁ = M₂V₂' },
          { question: 'pH = 2. [H⁺]?', answer: '10⁻² M', hint: '[H⁺] = 10^-pH' }
        ],
        key_formulas: ['M = n/V', 'M₁V₁ = M₂V₂', 'pH = -log[H⁺]']
      },
      {
        id: 'equilibrium',
        name: 'Chemical Equilibrium',
        name_fr: 'Équilibre chimique',
        prerequisites: ['solutions'],
        grade_level: 'Grade 12',
        description: 'Understand reversible reactions and equilibrium constants.',
        description_fr: 'Comprenez les réactions réversibles et les constantes d\'équilibre.',
        objectives: [
          'Understand reversible reactions',
          'Write equilibrium expressions',
          'Calculate Keq',
          'Apply Le Chatelier\'s principle'
        ],
        objectives_fr: [
          'Comprendre les réactions réversibles',
          'Écrire les expressions d\'équilibre',
          'Calculer Keq'
        ],
        content: `## Chemical Equilibrium

When forward and reverse reactions occur at equal rates.

### Equilibrium Constant (Keq)
For: aA + bB ⇌ cC + dD

Keq = [C]^c [D]^d / [A]^a [B]^b

- Keq > 1: Products favored
- Keq < 1: Reactants favored
- Keq = 1: Equal

### Le Chatelier's Principle
When a system at equilibrium is disturbed, it shifts to counteract the change.

**Changes that shift equilibrium:**
- **Add reactant**: Shifts right (more products)
- **Add product**: Shifts left (more reactants)
- **Increase temperature**: Endothermic favored
- **Decrease temperature**: Exothermic favored
- **Increase pressure**: Toward fewer gas molecules
- **Add catalyst**: No effect on equilibrium position

### Example
N₂ + 3H₂ ⇌ 2NH₃ + heat
If more N₂ added: shifts right (makes more NH₃)`,
        content_fr: `## Équilibre chimique

### Constante d\'équilibre
Keq = [produits]^coef / [réactifs]^coef

### Principe de Le Chatelier
Le système s\'oppose au changement`,
        examples: [
          { question: 'Keq = [NH₃]² / [N₂][H₂]³ for N₂ + 3H₂ ⇌ 2NH₃. Correct?', solution: 'Yes, correct form' },
          { question: 'Keq = 100. Favored?', solution: 'Products (K > 1)' }
        ],
        practice_problems: [
          { question: 'Keq = 0.001. Favored?', answer: 'Reactants', hint: 'K < 1' },
          { question: 'Add reactant. Shift?', answer: 'Toward products', hint: 'Le Chatelier' }
        ],
        key_formulas: ['Keq = [products]^coeff / [reactants]^coeff']
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    name_fr: 'Biologie',
    topics: [
      {
        id: 'biochem',
        name: 'Biochemistry',
        name_fr: 'Biochimie',
        prerequisites: [],
        grade_level: 'Grade 11',
        description: 'Study the chemical basis of life - carbohydrates, proteins, lipids, and nucleic acids.',
        description_fr: 'Étudiez la base chimique de la vie.',
        objectives: [
          'Identify the four major biomolecules',
          'Understand enzyme function',
          'Learn about ATP and energy',
          'Understand water properties'
        ],
        objectives_fr: [
          'Identifier les quatre biomolécules majeures',
          'Comprendre la fonction enzymatique',
          'Apprendre sur l\'ATP'
        ],
        content: `## Biochemistry

The study of chemical processes in living organisms.

### The Four Major Biomolecules

**1. Carbohydrates**
- Provide energy
- Simple sugars: glucose (C₆H₁₂O₆)
- Complex: starch, glycogen, cellulose

**2. Proteins**
- Made of amino acids
- Functions: structure, enzymes, transport
- Enzyme = biological catalyst

**3. Lipids**
- Energy storage, insulation
- Fats, oils, phospholipids
- Nonpolar, hydrophobic

**4. Nucleic Acids**
- DNA and RNA
- Store and transmit genetic information
- Made of nucleotides

### Enzymes
- Lower activation energy
- Lock and key model
- Affected by temperature, pH

### ATP
- Adenosine triphosphate
- Cell's energy currency
- Releases energy when phosphate bond breaks`,
        content_fr: `## Biochimie

### Quatre biomolécules
1. Glucides: énergie
2. Protéines: structure, enzymes
3. Lipides: stockage d\'énergie
4. Acides nucléiques: ADN, ARN

### Enzymes
Catalyseurs biologiques`,
        examples: [
          { question: 'Glucose formula?', solution: 'C₆H₁₂O₆' },
          { question: 'Building block of protein?', solution: 'Amino acids' }
        ],
        practice_problems: [
          { question: 'Energy currency of cell?', answer: 'ATP', hint: 'Adenosine triphosphate' },
          { question: 'DNA building block?', answer: 'Nucleotide', hint: 'Has sugar, base, phosphate' }
        ],
        key_formulas: ['Glucose: C₆H₁₂O₆', 'ATP: C₁₀H₁₆N₅O₁₃P₃']
      },
      {
        id: 'cells',
        name: 'Cells',
        name_fr: 'Cellules',
        prerequisites: [],
        grade_level: 'Grade 11',
        description: 'Study cell structure, function, and processes including photosynthesis and respiration.',
        description_fr: 'Étudiez la structure cellulaire, la fonction et les processus.',
        objectives: [
          'Compare prokaryotic and eukaryotic cells',
          'Understand cell organelles',
          'Learn photosynthesis',
          'Learn cellular respiration'
        ],
        objectives_fr: [
          'Comparer les cellules procaryotes et eucaryotes',
          'Comprendre les organites cellulaires',
          'Apprendre la photosynthèse'
        ],
        content: `## Cell Biology

### Cell Types
- **Prokaryotic**: No nucleus, simpler (bacteria)
- **Eukaryotic**: Has nucleus, membrane organelles (plants, animals)

### Cell Organelles
- **Nucleus**: Contains DNA, controls cell
- **Mitochondria**: Powerhouse, ATP production
- **Ribosomes**: Protein synthesis
- **ER**: Transport proteins
- **Golgi**: Packages and ships
- **Chloroplast** (plants): Photosynthesis

### Photosynthesis
6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂

- Occurs in chloroplasts
- Light reactions: capture energy
- Dark reactions (Calvin cycle): make glucose

### Cellular Respiration
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP

- Glycolysis: glucose → pyruvate (2 ATP)
- Krebs cycle: produces electron carriers
- ETC: produces ~34 ATP`,
        content_fr: `## Biologie cellulaire

### Types de cellules
- Procaryote: sans noyau
- Eucaryote: avec noyau

### Photosynthèse
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

### Respiration cellulaire
C₆H₁₂O₆ + 6O₂ → CO₂ + H₂O + ATP`,
        examples: [
          { question: 'Powerhouse of cell?', solution: 'Mitochondria' },
          { question: 'Site of photosynthesis?', solution: 'Chloroplast' }
        ],
        practice_problems: [
          { question: 'Contains DNA?', answer: 'Nucleus', hint: 'Also mitochondria and chloroplast' },
          { question: 'Makes proteins?', answer: 'Ribosomes', hint: 'Site of translation' }
        ],
        key_formulas: ['Photosynthesis: CO₂ + H₂O + light → glucose + O₂', 'Respiration: glucose + O₂ → CO₂ + H₂O + ATP']
      },
      {
        id: 'genetics',
        name: 'Genetics',
        name_fr: 'Génétique',
        prerequisites: ['cells'],
        grade_level: 'Grade 12',
        description: 'Study heredity, DNA, and genetic disorders.',
        description_fr: 'Étudiez l\'hérédité, l\'ADN et les troubles génétiques.',
        objectives: [
          'Understand Mendelian genetics',
          'Calculate Punnett squares',
          'Understand DNA replication',
          'Learn about genetic mutations'
        ],
        objectives_fr: [
          'Comprendre la génétique mendélienne',
          'Calculer les carrés de Punnett',
          'Comprendre la réplication ADN'
        ],
        content: `## Genetics

### Mendel's Laws
1. **Law of Dominance**: Dominant allele masks recessive
2. **Law of Segregation**: Alleles separate during gamete formation
3. **Law of Independent Assortment**: Genes on different chromosomes assort independently

### Punnett Square
Predict offspring genotypes/phenotypes.

Example: Heterozygous cross (Bb × Bb)
|   | B | b |
|---|---|---|
| B | BB | Bb |
| b | Bb | bb |
- Genotypes: 1 BB, 2 Bb, 1 bb
- Phenotypes: 3 dominant, 1 recessive

### DNA Structure
- Double helix
- Sugar-phosphate backbone
- Base pairs: A-T, G-C

### DNA Replication
- Semi-conservative
- Enzyme: DNA polymerase

### Types of Mutations
- **Point mutation**: Single base change
- **Frameshift**: Insertion/deletion shifts reading frame`,
        content_fr: `## Génétique

### Lois de Mendel
1. Dominance
2. Ségrégation
3. Assortiment indépendant

### Carré de Punnett
Prédit les génotypes de la progéniture

### Structure ADN
Double hélice, paires: A-T, G-C`,
        examples: [
          { question: 'Cross BB × bb. Offspring?', solution: 'All Bb (100% heterozygous)' },
          { question: 'Complementary base to A?', solution: 'T (Thymine)' }
        ],
        practice_problems: [
          { question: 'Cross BB × BB. Offspring?', answer: 'All BB', hint: 'Same genotype' },
          { question: 'Base pair with G?', answer: 'C (Cytosine)', hint: 'G pairs with C' }
        ],
        key_formulas: ['Punnett: gametes on axes, fill in cells', 'A-T, G-C base pairing']
      },
      {
        id: 'evolution',
        name: 'Evolution',
        name_fr: 'Évolution',
        prerequisites: [],
        grade_level: 'Grade 12',
        description: 'Understand how species change over time through natural selection.',
        description_fr: 'Comprenez comment les espèces changent au fil du temps.',
        objectives: [
          'Understand evidence for evolution',
          'Learn natural selection',
          'Understand speciation',
          'Explore human evolution'
        ],
        objectives_fr: [
          'Comprendre les preuves de l\'évolution',
          'Apprendre la sélection naturelle',
          'Comprendre la spéciation'
        ],
        content: `## Evolution

### Evidence for Evolution
1. **Fossil record**: Shows transitional forms
2. **Comparative anatomy**: Homologous structures
3. **Molecular biology**: Genetic similarities
4. **Biogeography**: Species distribution

### Natural Selection
Darwin's mechanism for evolution:
1. Variation exists in population
2. More offspring than can survive
3. Competition for resources
4. Those best adapted survive and reproduce
5. Traits increase in population

### Types of Selection
- **Directional**: One extreme favored
- **Stabilizing**: Intermediate favored
- **Disruptive**: Both extremes favored

### Speciation
New species form when populations become reproductively isolated.
- Geographic isolation
- Behavioral isolation
- Temporal isolation

### Evidence Timeline
- Earth ~4.5 billion years old
- Life ~3.5 billion years old
- Humans ~300,000 years old`,
        content_fr: `## Évolution

### Preuves
- Fossiles
- Anatomie comparée
- Biologie moléculaire

### Sélection naturelle
1. Variation
2. Survie différentielle
3. Reproduction
4. Adaptation augmentée`,
        examples: [
          { question: 'What selects in natural selection?', solution: 'Environment' },
          { question: 'Humans and apes share common ancestor. Evidence?', solution: 'Homologous structures, DNA' }
        ],
        practice_problems: [
          { question: 'Finches with different beak sizes. What creates variation?', answer: 'Mutation, genetic recombination', hint: 'Raw material for selection' },
          { question: 'Geographic isolation leads to?', answer: 'Speciation', hint: 'Reproductive isolation' }
        ],
        key_formulas: ['Evolution: change in allele frequencies over time']
      },
      {
        id: 'ecology',
        name: 'Ecology',
        name_fr: 'Écologie',
        prerequisites: [],
        grade_level: 'Grade 12',
        description: 'Study interactions between organisms and their environment.',
        description_fr: 'Étudiez les interactions entre organismes et leur environnement.',
        objectives: [
          'Understand food chains and webs',
          'Learn about trophic levels',
          'Understand population dynamics',
          'Explore ecosystem sustainability'
        ],
        objectives_fr: [
          'Comprendre les chaînes alimentaires',
          'Apprendre les niveaux trophiques',
          'Comprendre la dynamique des populations'
        ],
        content: `## Ecology

### Levels of Organization
1. **Organism**: Individual
2. **Population**: Same species in area
3. **Community**: All populations in area
4. **Ecosystem**: Community + environment
5. **Biosphere**: All ecosystems

### Food Chains & Webs
- **Producers**: Autotrophs (plants) - make food
- **Consumers**: Heterotrophs - eat others
- **Decomposers**: Break down dead matter

### Trophic Levels
1. Producers (plants)
2. Primary consumers (herbivores)
3. Secondary consumers (carnivores)
4. Tertiary consumers (apex predators)

### Energy Flow
- 10% rule: Only 10% energy transfers between levels
- 90% lost as heat

### Population Growth
- **Exponential**: Ideal conditions
- **Logistic**: Limited by carrying capacity (K)

### Human Impact
- Climate change
- Habitat destruction
- Pollution
- Invasive species`,
        content_fr: `## Écologie

### Niveaux d\'organisation
Organisme → Population → Communauté → Écosystème → Biosphère

### Chaîne alimentaire
Producteurs → Consommateurs primaires → Seconds → Tersaires

### 10% rule
10% de l\'énergie transférée entre niveaux`,
        examples: [
          { question: 'What is a producer?', solution: 'Organism that makes its own food (plant)' },
          { question: 'Trophic level of grasshopper?', solution: 'Primary consumer' }
        ],
        practice_problems: [
          { question: 'Eats plants. Type?', answer: 'Herbivore / Primary consumer', hint: 'Producer → Primary' },
          { question: 'Decomposers role?', answer: 'Break down dead matter, recycle nutrients', hint: 'Fungi, bacteria' }
        ],
        key_formulas: ['10% energy transfer rule', 'Population growth: dN/dt = rN(1-N/K)']
      }
    ]
  },
  {
    id: 'coding',
    name: 'Programming',
    name_fr: 'Programmation',
    topics: [
      {
        id: 'python-basics',
        name: 'Python Basics',
        name_fr: 'Bases Python',
        prerequisites: [],
        grade_level: 'Grade 9-10',
        description: 'Introduction to Python programming - variables, data types, and basic operations.',
        description_fr: 'Introduction à la programmation Python.',
        objectives: [
          'Write and run Python code',
          'Understand variables and data types',
          'Use input and output',
          'Apply basic operators'
        ],
        objectives_fr: [
          'Écrire et exécuter du code Python',
          'Comprendre les variables et types de données',
          'Utiliser les opérateurs de base'
        ],
        content: `## Python Basics

Python is a beginner-friendly programming language.

### Variables
Containers for storing data.
\`\`\`python
name = "John"
age = 15
height = 5.9
is_student = True
\`\`\`

### Data Types
- **str**: Text ("hello")
- **int**: Whole numbers (42)
- **float**: Decimals (3.14)
- **bool**: True/False

### Print & Input
\`\`\`python
# Output
print("Hello, World!")

# Input
name = input("What is your name? ")
\`\`\`

### Basic Operations
\`\`\`python
# Math
+ - * / ** (power) % (modulus)

// Integer division

# Comparison
== != < > <= >=

# Logical
and or not
\`\`\`

### Example Program
\`\`\`python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello, {name}! You are {age} years old.")
print(f"Next year, you'll be {age + 1}!")
\`\`\``,
        content_fr: `## Bases Python

### Variables
\`\`\`python
nom = "Jean"
age = 15
\`\`\`

### Types
- str: texte
- int: entier
- float: décimal
- bool: True/False

### Opérations
+ - * / ** % //`,
        examples: [
          { question: 'What type is 3.14?', solution: 'float' },
          { question: '10 % 3 = ?', solution: '1 (remainder)' }
        ],
        practice_problems: [
          { question: '5 + 3 * 2 = ?', answer: '11', hint: 'Multiplication first' },
          { question: '10 // 3 = ?', answer: '3', hint: 'Integer division' }
        ],
        key_formulas: ['print() outputs', 'input() gets user input', 'type() checks data type']
      },
      {
        id: 'python-functions',
        name: 'Functions',
        name_fr: 'Fonctions',
        prerequisites: ['python-basics'],
        grade_level: 'Grade 10',
        description: 'Create reusable blocks of code with functions.',
        description_fr: 'Créez des blocs de code réutilisables avec des fonctions.',
        objectives: [
          'Define and call functions',
          'Use parameters and return values',
          'Understand scope',
          'Apply functions to solve problems'
        ],
        objectives_fr: [
          'Définir et appeler des fonctions',
          'Utiliser les paramètres et valeurs de retour',
          'Comprendre la portée'
        ],
        content: `## Functions in Python

Functions are reusable blocks of code that perform a specific task.

### Defining Functions
\`\`\`python
def greet():
    print("Hello!")

# Call the function
greet()
\`\`\`

### Parameters
\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("John")  # Output: Hello, John!
\`\`\`

### Return Values
\`\`\`python
def add(a, b):
    return a + b

result = add(3, 5)  # result = 8
\`\`\`

### Default Parameters
\`\`\`python
def greet(name="World"):
    print(f"Hello, {name}!")

greet()         # Hello, World!
greet("John")   # Hello, John!
\`\`\`

### Example: Temperature Converter
\`\`\`python
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

# Usage
print(celsius_to_fahrenheit(0))    # 32
print(fahrenheit_to_celsius(212))   # 100
\`\`\``,
        content_fr: `## Fonctions Python

### Définition
\`\`\`python
def nom_fonction(paramètres):
    return résultat
\`\`\`

### Exemple
\`\`\`python
def addition(a, b):
    return a + b
\`\`\``,
        examples: [
          { question: 'def square(x): return x*x. square(5)?', solution: '25' },
          { question: 'Function that returns nothing returns?', solution: 'None' }
        ],
        practice_problems: [
          { question: 'Write function to find max of 2 numbers', answer: 'def max(a,b): return a if a>b else b', hint: 'Use conditional' },
          { question: 'def hello(name="Bob"): print(name). hello()?', answer: 'Bob', hint: 'Default parameter' }
        ],
        key_formulas: ['def function_name(parameters):', 'return value']
      },
      {
        id: 'python-oop',
        name: 'Object-Oriented Programming',
        name_fr: 'Programmation orientée objet',
        prerequisites: ['python-functions'],
        grade_level: 'Grade 11',
        description: 'Learn classes, objects, and OOP principles.',
        description_fr: 'Apprenez les classes, les objets et les principes POO.',
        objectives: [
          'Create classes and objects',
          'Understand attributes and methods',
          'Apply inheritance',
          'Use encapsulation'
        ],
        objectives_fr: [
          'Créer des classes et objets',
          'Comprendre les attributs et méthodes',
          'Appliquer l\'héritage'
        ],
        content: `## Object-Oriented Programming

OOP organizes code into objects that combine data and behavior.

### Classes and Objects
\`\`\`python
class Student:
    def __init__(self, name, grade):
        self.name = name      # attribute
        self.grade = grade    # attribute
    
    def introduce(self):     # method
        return f"I'm {self.name}"

# Create object
student = Student("John", 10)
print(student.introduce())
\`\`\`

### Inheritance
\`\`\`python
class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)  # call parent constructor
        self.grade = grade
    
    def study(self):
        return f"{self.name} is studying"

student = Student("John", 10)
\`\`\`

### Key Concepts
- **Encapsulation**: Bundling data and methods
- **Inheritance**: Reusing code from parent class
- **Polymorphism**: Same method, different behavior`,
        content_fr: `## POO

### Classe
\`\`\`python
class NomClasse:
    def __init__(self, paramètres):
        self.attribut = valeur
    
    def méthode(self):
        return something
\`\`\`

### Héritage
\`\`\`python
class Enfant(Parent):
    pass
\`\`\``,
        examples: [
          { question: 'class Dog: def bark(self): return "Woof". dog = Dog(). dog.bark()?', solution: '"Woof"' },
          { question: 'Inheritance allows?', solution: 'Code reuse' }
        ],
        practice_problems: [
          { question: 'Create Car class with brand attribute', answer: 'class Car:\n    def __init__(self, brand):\n        self.brand = brand', hint: 'Use __init__' },
          { question: 'Student inherits from Person. Call parent?', answer: 'super().__init__(name)', hint: 'Use super()' }
        ],
        key_formulas: ['class ClassName:', 'def __init__(self):', 'self.attribute', 'super().__init__()']
      },
      {
        id: 'js-basics',
        name: 'JavaScript Basics',
        name_fr: 'Bases JavaScript',
        prerequisites: [],
        grade_level: 'Grade 10-11',
        description: 'Introduction to JavaScript for web development.',
        description_fr: 'Introduction à JavaScript pour le développement web.',
        objectives: [
          'Write JavaScript code',
          'Understand variables and types',
          'Use DOM manipulation',
          'Handle events'
        ],
        objectives_fr: [
          'Écrire du code JavaScript',
          'Comprendre les variables et types',
          'Utiliser la manipulation DOM'
        ],
        content: `## JavaScript Basics

JavaScript adds interactivity to websites.

### Variables
\`\`\`javascript
let name = "John";      // Can be reassigned
const age = 15;          // Cannot be reassigned
var oldWay = "used";    // Old syntax
\`\`\`

### Data Types
- **string**: "hello"
- **number**: 42, 3.14
- **boolean**: true, false
- **array**: [1, 2, 3]
- **object**: {name: "John", age: 15}

### Console
\`\`\`javascript
console.log("Hello!");
\`\`\`

### DOM Manipulation
\`\`\`javascript
// Select element
const heading = document.getElementById("title");

// Change content
heading.textContent = "New Title";

// Change style
heading.style.color = "blue";
\`\`\`

### Event Handling
\`\`\`javascript
const button = document.getElementById("myBtn");

button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Or arrow function
button.addEventListener("click", () => {
    alert("Clicked!");
});
\`\`\``,
        content_fr: `## Bases JavaScript

### Variables
\`\`\`javascript
let x = 5;       // modifiable
const y = 10;    // constant
\`\`\`

### DOM
\`\`\`javascript
document.getElementById("id")
element.addEventListener("click", fn)
\`\`\``,
        examples: [
          { question: 'const vs let?', solution: 'const cannot be reassigned' },
          { question: 'document.getElementById returns?', solution: 'DOM element or null' }
        ],
        practice_problems: [
          { question: 'Change paragraph text', answer: 'document.getElementById("p").textContent = "new"', hint: 'Use textContent' },
          { question: 'Array of 3 numbers?', answer: '[1, 2, 3]', hint: 'Square brackets' }
        ],
        key_formulas: ['let/const for variables', 'document.getElementById()', 'addEventListener()']
      },
      {
        id: 'web-dev',
        name: 'Web Development',
        name_fr: 'Développement web',
        prerequisites: ['js-basics'],
        grade_level: 'Grade 11-12',
        description: 'Build websites with HTML, CSS, and JavaScript.',
        description_fr: 'Construisez des sites web avec HTML, CSS et JavaScript.',
        objectives: [
          'Structure web pages with HTML',
          'Style with CSS',
          'Add interactivity with JavaScript',
          'Understand responsive design'
        ],
        objectives_fr: [
          'Structurer les pages web avec HTML',
          'Styler avec CSS',
          'Ajouter l\'interactivité'
        ],
        content: `## Web Development

Building websites with HTML, CSS, and JavaScript.

### HTML Structure
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome</h1>
    </header>
    <main>
        <p class="intro">Hello world!</p>
    </main>
    <script src="script.js"></script>
</body>
</html>
\`\`\`

### CSS Styling
\`\`\`css
/* Selectors */
h1 {
    color: blue;
    font-size: 24px;
}

/* Class selector */
.intro {
    background: #f0f0f0;
}

/* Responsive */
@media (max-width: 768px) {
    h1 {
        font-size: 18px;
    }
}
\`\`\`

### Putting It Together
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        .card {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="card">
        <h2>Title</h2>
        <p>Content</p>
    </div>
</body>
</html>
\`\`\`

### Key Concepts
- Semantic HTML (header, nav, main, footer)
- CSS Flexbox and Grid
- Mobile-first design`,
        content_fr: `## Développement web

### HTML
\`\`\`html
<tag>contenu</tag>
\`\`\`

### CSS
\`\`\`css
sélecteur { propriété: valeur; }
\`\`\`

### Responsive
\`\`\`css
@media (max-width: 768px) { }
\`\`\``,
        examples: [
          { question: 'What does <header> do?', solution: 'Semantic element for page header' },
          { question: 'CSS for centering?', solution: 'display: flex; justify-content: center;' }
        ],
        practice_problems: [
          { question: 'Link CSS file?', answer: '<link rel="stylesheet" href="style.css">', hint: 'In <head>' },
          { question: 'Add JavaScript?', answer: '<script src="script.js"></script>', hint: 'Usually at end of <body>' }
        ],
        key_formulas: ['HTML: structure', 'CSS: styling', 'JS: interactivity']
      }
    ]
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy',
    name_fr: 'Littératie financière',
    topics: [
      {
        id: 'budgeting',
        name: 'Budgeting',
        name_fr: 'Budgétisation',
        prerequisites: [],
        grade_level: 'Grade 9-12',
        description: 'Learn to create and manage a personal budget.',
        description_fr: 'Apprenez à créer et gérer un budget personnel.',
        objectives: [
          'Understand income and expenses',
          'Create a personal budget',
          'Track spending',
          'Save money effectively'
        ],
        objectives_fr: [
          'Comprendre les revenus et dépenses',
          'Créer un budget personnel',
          'Suivre les dépenses'
        ],
        content: `## Budgeting

A budget is a plan for how you'll spend your money.

### Income Sources
- Part-time job wages
- Allowance
- Gifts
- Scholarships

### Types of Expenses
**Fixed**: Same each month (rent, phone)
**Variable**: Can change (food, entertainment)
**One-time**: Occasional purchases

### The 50/30/20 Rule
- **50%** Needs (rent, food, utilities)
- **30%** Wants (entertainment, hobbies)
- **20%** Savings and debt repayment

### Creating a Budget
1. Calculate total income
2. List all expenses
3. Subtract expenses from income
4. Adjust if negative
5. Track and review monthly

### Budget Worksheet
| Category | Monthly |
|---------|---------|
| Income | $800 |
| Rent | $0* |
| Food | $150 |
| Transportation | $50 |
| Entertainment | $75 |
| Savings | $150 |
| Total Expenses | $425 |
| Remaining | $375 |

*Assuming living with parents`,
        content_fr: `## Budgétisation

### Règle 50/30/20
- 50% Besoins
- 30% Envies
- 20% Épargne

### Étapes
1. Calculer le revenu
2. Lister les dépenses
3. Ajuster si nécessaire`,
        examples: [
          { question: 'Monthly income $1000. How much for savings (20%)?', solution: '$200' },
          { question: 'Fixed vs Variable expense?', solution: 'Fixed: same each time, Variable: can change' }
        ],
        practice_problems: [
          { question: '$500 income, $350 expenses. Save?', answer: '$150', hint: 'Income - expenses' },
          { question: '50/30/20: $2000 income, needs?', answer: '$1000', hint: '50% of 2000' }
        ],
        key_formulas: ['Savings = Income - Expenses', '50% Needs, 30% Wants, 20% Savings']
      },
      {
        id: 'taxes',
        name: 'Taxes & Deductions',
        name_fr: 'Taxes et déductions',
        prerequisites: [],
        grade_level: 'Grade 10-12',
        description: 'Understand Canadian taxes and how to minimize them.',
        description_fr: 'Comprenez les taxes canadiennes et comment les minimiser.',
        objectives: [
          'Understand income tax in Canada',
          'Calculate net income',
          'Understand deductions and credits',
          'File a basic tax return'
        ],
        objectives_fr: [
          'Comprendre l\'impôt sur le revenu au Canada',
          'Calculer le revenu net',
          'Comprendre les déductions'
        ],
        content: `## Taxes in Canada

### Types of Tax
- **Federal tax**: Goes to federal government
- **Provincial tax**: Goes to Ontario government
- **CPP/EI**: Canada Pension Plan, Employment Insurance

### Taxable Income
Gross income minus deductions = Taxable income

### Canadian Tax Brackets (Federal)
- 0 - $55,867: 15%
- $55,867 - $111,733: 20.5%
- $111,733 - $173,205: 26%
- $173,205 - $246,752: 29%
- Over $246,752: 33%

### Deductions Lower Taxable Income
- RRSP contributions
- Student loan interest
- Moving expenses

### Tax Credits Reduce Tax Owed
- Basic personal amount (~$15,000)
- Tuition credits
- Canada carbon levy credits

### Example Calculation
Income: $50,000
Federal tax: $50,000 × 15% = $7,500

### Key Forms
- T4: Employment income slip
- T2202A: Tuition receipt
- TD1: Tax form for employees`,
        content_fr: `## Taxes au Canada

### Types
- Fédéral
- Provincial (Ontario)
- RPC/AE

### Tranches fédérales
15% → 20.5% → 26% → 29% → 33%

### Formule
Impôt = Revenu × Taux`,
        examples: [
          { question: '$50,000 income. Federal tax at 15%?', solution: '$7,500' },
          { question: 'T4 form shows?', solution: 'Employment income' }
        ],
        practice_problems: [
          { question: '$30,000 income, 15% bracket. Tax?', answer: '$4,500', hint: '30,000 × 0.15' },
          { question: 'What reduces taxable income?', answer: 'Deductions', hint: 'RRSP, student loan interest' }
        ],
        key_formulas: ['Taxable = Gross - Deductions', 'Tax = Taxable × Rate']
      },
      {
        id: 'compound-interest',
        name: 'Compound Interest',
        name_fr: 'Intérêt composé',
        prerequisites: [],
        grade_level: 'Grade 10-11',
        description: 'Learn how money grows over time with compound interest.',
        description_fr: 'Apprenez comment l\'argent croît avec l\'intérêt composé.',
        objectives: [
          'Understand simple vs compound interest',
          'Calculate compound interest',
          'Apply the compound interest formula',
          'Make informed saving decisions'
        ],
        objectives_fr: [
          'Comprendre l\'intérêt simple vs composé',
          'Calculer l\'intérêt composé',
          'Appliquer la formule'
        ],
        content: `## Compound Interest

Interest calculated on initial principal AND accumulated interest.

### Simple vs Compound

**Simple Interest**: Only on original amount
A = P(1 + rt)
- P = Principal
- r = rate (decimal)
- t = time (years)

**Compound Interest**: On principal + interest
A = P(1 + r)^t
- A = Final amount
- P = Principal (starting amount)
- r = Annual interest rate (decimal)
- t = Time in years

### Example
$1000 at 5% for 3 years:

**Simple**: $1000 × 0.05 × 3 = $150 interest
Total: $1150

**Compound**: $1000 × (1.05)³ = $1157.63
Interest: $157.63

### The Power of Compounding
$1000 at 7% for 30 years:
= $1000 × (1.07)³⁰ = $7,612.26

That's 7.6x your original investment!

### Rule of 72
Time to double = 72 ÷ interest rate

At 7%: 72 ÷ 7 = ~10 years to double`,
        content_fr: `## Intérêt composé

### Formule
A = P(1 + r)^t

### Exemple
1000$ à 5% pendant 3 ans:
= 1000 × (1.05)³ = 1157.63$

### Règle de 72
Temps pour doubler = 72 ÷ taux`,
        examples: [
          { question: '$1000 at 10% for 1 year, compounded annually?', solution: '$1100' },
          { question: 'Rule of 72 at 8%?', solution: '72 ÷ 8 = 9 years to double' }
        ],
        practice_problems: [
          { question: '$500 at 4% for 2 years. Compound?', answer: '$540.80', hint: '500 × 1.04²' },
          { question: 'Double $1000 at 6%. How long?', answer: '12 years', hint: '72 ÷ 6' }
        ],
        key_formulas: ['A = P(1 + r)^t', 'Rule of 72: years to double = 72/r']
      },
      {
        id: 'investing',
        name: 'Investing Basics',
        name_fr: "Bases de l'investissement",
        prerequisites: ['compound-interest'],
        grade_level: 'Grade 11-12',
        description: 'Introduction to investing in stocks, bonds, and ETFs.',
        description_fr: 'Introduction aux investissements.',
        objectives: [
          'Understand different investment types',
          'Learn about stocks and bonds',
          'Understand risk and return',
          'Start investing wisely'
        ],
        objectives_fr: [
          'Comprendre les différents types d\'investissement',
          'Apprendre les actions et obligations'
        ],
        content: `## Investing Basics

### Why Invest?
Beat inflation, grow wealth, achieve goals.
Average stock market return: ~7-10% annually

### Investment Types

**Stocks (Shares)**
- Ownership in a company
- Price can go up or down
- Higher risk, higher potential return
- Dividends: periodic payments to shareholders

**Bonds**
- Loan to government or company
- Regular interest payments
- Lower risk, lower return
- More stable than stocks

**ETFs (Exchange-Traded Funds)**
- Bundle of stocks/bonds
- Diversified (lower risk)
- Trade like stocks
- Great for beginners

### Risk vs Return
- Low risk: GICs, bonds
- Medium: ETFs, index funds
- High: Individual stocks, crypto

### Starting Tips
1. Start early (time in market)
2. Diversify (don't put all eggs in one basket)
3. Use tax-advantaged accounts (TFSA, RRSP)
4. Dollar-cost averaging (invest regularly)
5. Think long-term

### Canadian Accounts
- **TFSA**: Tax-free growth, withdraw anytime
- **RRSP**: Tax-deferred, for retirement`,
        content_fr: `## Bases de l'investissement

### Types
- Actions: propriété d\'entreprise
- Obligations: prêt
- FNB: groupe d\'investissements

### Risque vs Rendement
Plus de risque = plus de potentiel de rendement

### Conseils
1. Commencer tôt
2. Diversifier
3. TFSA, REER au Canada`,
        examples: [
          { question: 'What does owning stock mean?', solution: 'You own part of the company' },
          { question: 'Why diversification?', solution: 'Lower overall risk' }
        ],
        practice_problems: [
          { question: 'Lower risk: stocks or bonds?', answer: 'Bonds', hint: 'More stable' },
          { question: 'Canadian tax-free account?', answer: 'TFSA', hint: 'Tax-Free Savings Account' }
        ],
        key_formulas: ['Return = (Current Value - Initial) / Initial × 100%']
      },
      {
        id: 'debt',
        name: 'Debt Management',
        name_fr: 'Gestion de la dette',
        prerequisites: [],
        grade_level: 'Grade 11-12',
        description: 'Understand good debt vs bad debt and how to manage debt.',
        description_fr: 'Comprenez la bonne vs mauvaise dette et comment la gérer.',
        objectives: [
          'Distinguish good debt from bad debt',
          'Understand interest rates',
          'Create a debt payoff plan',
          'Avoid common debt traps'
        ],
        objectives_fr: [
          'Distinguer la bonne dette de la mauvaise',
          'Comprendre les taux d\'intérêt',
          'Créer un plan de remboursement'
        ],
        content: `## Debt Management

### Good Debt vs Bad Debt

**Good Debt**
- Mortgage (builds equity)
- Student loans (investment in earning potential)
- Business loans (can generate income)

**Bad Debt**
- Credit cards (high interest)
- Payday loans (extremely high interest)
- Financing depreciating assets (new cars)

### Understanding Interest Rates
- Credit cards: 19-25% APR
- Student loans: 3-7%
- Mortgages: 4-7%
- Payday loans: 400%+ (AVOID!)

### Debt Payoff Strategies

**Avalanche Method**
- Pay minimums on all
- Extra payment to highest interest debt
- Saves most money

**Snowball Method**
- Pay minimums on all  
- Extra payment to smallest balance
- Psychological wins

### Credit Score
Factors:
- Payment history (35%)
- Credit utilization (30%)
- Length of credit (15%)
- New credit (10%)
- Types (10%)

### Tips
1. Pay more than minimum
2. Never miss payments
3. Keep utilization below 30%
4. Check credit report annually`,
        content_fr: `## Gestion de la dette

### Bonne vs Mauvaise dette
- Bonne: hypothèque, prêt étudiant
- Mauvaise: cartes de crédit, prêts sur salaire

### Stratégies de remboursement
- Avalanche: taux le plus élevé
- Snowball: plus petit solde

### Score de crédit
35% - Historique de paiement
30% - Utilisation`,
        examples: [
          { question: 'Credit card interest rate typically?', solution: '19-25%' },
          { question: 'Which saves more: avalanche or snowball?', solution: 'Avalanche (mathematically)' }
        ],
        practice_problems: [
          { question: 'Best way to build credit?', answer: 'Pay bills on time', hint: 'Most important factor' },
          { question: 'Keep credit utilization below?', answer: '30%', hint: 'Below one-third' }
        ],
        key_formulas: ['Minimum payment = Interest + 1% balance']
      },
      {
        id: 'financial-goals',
        name: 'Financial Goals',
        name_fr: 'Objectifs financiers',
        prerequisites: [],
        grade_level: 'Grade 9-12',
        description: 'Set and achieve financial goals for life.',
        description_fr: 'Définissez et atteignez des objectifs financiers.',
        objectives: [
          'Set SMART financial goals',
          'Create an action plan',
          'Track progress',
          'Adjust as needed'
        ],
        objectives_fr: [
          'Définir des objectifs SMART',
          'Créer un plan d\'action'
        ],
        content: `## Financial Goals

### SMART Goals
- **S**pecific: What exactly?
- **M**easurable: How will you track?
- **A**chievable: Is it realistic?
- **R**elevant: Does it matter to you?
- **T**ime-bound: When will you achieve?

### Types of Goals

**Short-term (0-1 year)**
- Build emergency fund ($1000)
- Save for new phone
- Pay off credit card

**Medium-term (1-5 years)**
- Post-secondary education fund
- Buy a car
- Travel

**Long-term (5+ years)**
- Buy a house
- Retirement
- Financial independence

### Goal Setting Process
1. Identify your why
2. Quantify the goal
3. Set timeline
4. Calculate monthly savings needed
5. Open appropriate accounts
6. Track and adjust

### Example: Emergency Fund
Goal: $3,000 in 12 months
Monthly: $250/month

### Sample Goals for Students
| Goal | Amount | Timeline | Monthly |
|------|--------|----------|---------|
| Phone | $800 | 8 months | $100 |
| Car | $5,000 | 3 years | $140 |
| Education | $10,000 | 5 years | $165 |

### Review Regularly
- Check monthly
- Adjust for life changes
- Celebrate milestones!`,
        content_fr: `## Objectifs financiers

### SMART
- Spécifique
- Mesurable
- Atteignable
- Rélevant
- Temporel

### Types
- Court terme: 0-1 an
- Moyen terme: 1-5 ans
- Long terme: 5+ ans`,
        examples: [
          { question: 'SMART example for saving?', solution: 'Save $100/month for 8 months to buy $800 phone' },
          { question: 'Emergency fund goal for students?', solution: '$1000-3000' }
        ],
        practice_problems: [
          { question: 'Goal: $2000 in 1 year. Monthly?', answer: '$167/month', hint: '2000 ÷ 12' },
          { question: 'Review goals how often?', answer: 'Monthly', hint: 'Track progress regularly' }
        ],
        key_formulas: ['Monthly savings = Goal ÷ Months', 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound']
      }
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
