# AGENTS.md - STEMBridge Development Guide

This file provides guidelines for agentic coding agents working on the STEMBridge project.

---

## 1. Build, Lint, and Test Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Running a Single Test
```bash
# No test framework installed yet. To add tests:
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

To run a single test file with vitest:
```bash
npx vitest run src/components/__tests__/Button.test.tsx
# or watch mode:
npx vitest src/components/__tests__/Button.test.tsx
```

### Vercel Deployment
```bash
# Push to GitHub - Vercel auto-deploys
git add -A && git commit -m "message" && git push origin main
```

---

## 2. Code Style Guidelines

### Technology Stack
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **AI:** Ollama (local Llama 3)
- **Icons:** Lucide React

### TypeScript Conventions

**Interfaces vs Types:**
- Use `interface` for public API types and objects
- Use `type` for unions, primitives, and utility types
- Always export types that are used across modules

```typescript
// Good - interface for objects
export interface User {
  id: string
  email: string
  full_name: string
  xp: number
  level: number
}

// Good - type for unions
export type BadgeType = 
  | 'first_session'
  | 'streak_7'
  | 'perfect_quiz'
```

**Strict Mode:** All TypeScript strict flags are enabled. Never use `any`.

### Import Organization

Order imports as follows:
1. Next.js/React imports
2. External libraries (Supabase, Lucide, etc.)
3. Internal imports (@/lib, @/components, @/types)
4. Type imports (separate with `import type`)

```typescript
// 1. Next.js/React
import { useState, useEffect } from 'react'
import Link from 'next/link'

// 2. External libraries
import { createClient } from '@supabase/ssr'
import { Brain, Zap, Flame } from 'lucide-react'

// 3. Internal imports
import { cn } from '@/lib/utils'
import { curriculum } from '@/data/curriculum/ontario'

// 4. Type imports
import type { User, Session } from '@/types'
```

### File and Component Naming

- **Pages:** Use `page.tsx` in route directories (Next.js App Router convention)
- **Components:** PascalCase (e.g., `DashboardLayout.tsx`, `ChatInterface.tsx`)
- **Utilities:** camelCase (e.g., `db.ts`, `ollama.ts`, `utils.ts`)
- **Types:** `types/index.ts` for shared types

### Component Structure

Use the following pattern for client components:

```typescript
'use client'

import { useState, useEffect } from 'react'
import { Component } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentProps {
  title: string
  onAction?: () => void
  className?: string
}

export default function Component({ title, onAction, className }: ComponentProps) {
  const [state, setState] = useState(false)

  useEffect(() => {
    // side effects
  }, [])

  return (
    <div className={cn("base-styles", className)}>
      {title}
    </div>
  )
}
```

### Tailwind CSS Guidelines

- Use utility classes consistently
- Use `cn()` from `@/lib/utils` for conditional classes
- Stick to the design system colors (gray, blue, purple for this project)

```typescript
// Good
<div className={cn(
  "flex items-center gap-2 p-4 rounded-xl",
  isActive && "bg-blue-50 text-blue-700",
  className
)}>

// Avoid
<div style={{ display: 'flex', padding: '16px' }}>
```

### Error Handling

- Always use try/catch for async operations
- Return meaningful error messages to users
- Log errors appropriately (console.error for development)

```typescript
// Good
export async function fetchData(): Promise<Data> {
  try {
    const response = await fetch('/api/data')
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error // or return fallback
  }
}
```

### Database (Supabase)

- Use Row Level Security (RLS) policies
- Never expose service_role keys client-side
- Use environment variables for all secrets

```typescript
// Client-side (safe)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### API Routes

- Place in `/app/api/` directory
- Use Route Handlers (Next.js 14+)
- Return proper HTTP status codes

```typescript
// /app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello' })
}
```

### Git Commit Messages

Use clear, concise commit messages:
- `feat: add user authentication`
- `fix: resolve login input text color`
- `docs: update README`
- `refactor: simplify chat component`

---

## 3. Project Structure

```
/stembridge
├── app/                    # Next.js App Router
│   ├── (auth)/           # Auth pages (login, register)
│   ├── (dashboard)/      # Protected dashboard pages
│   └── api/              # API routes
├── components/            # React components
│   ├── ui/              # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   └── chat/            # Chat components
├── lib/                  # Utilities
│   ├── supabase.ts      # Supabase client
│   ├── ollama.ts       # Ollama AI client
│   └── utils.ts        # Helper functions
├── data/                 # Static data
│   └── curriculum/      # Ontario curriculum
├── hooks/               # React hooks
├── types/               # TypeScript types
└── supabase/            # Database schema
```

---

## 4. Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OLLAMA_BASE_URL=http://localhost:11434
```

---

## 5. Key Conventions

- All client components must have `'use client'` directive
- Use TypeScript strict mode - no `any` allowed
- Run `npm run build` before pushing to verify no TypeScript errors
- Use `lucide-react` for all icons
- Follow existing patterns in the codebase for consistency
