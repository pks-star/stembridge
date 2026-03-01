import Link from "next/link"
import { ArrowRight, Sparkles, Globe, GraduationCap, Trophy, Lightbulb, Calculator, Code, Atom, Leaf } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Socratic AI Tutor",
    description: "Our AI guides you through questions instead of giving answers. You'll actually understand, not just memorize.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Ontario Curriculum",
    description: "Grade 9-12 aligned: Math, Physics, Chemistry, Biology, and Programming. Plus Financial Literacy.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Earn While You Learn",
    description: "XP, streaks, badges, leaderboards. Transform studying into a satisfying game.",
    color: "bg-orange-100 text-orange-600"
  }
]

const subjects = [
  { icon: <Calculator className="w-8 h-8" />, name: "Mathematics", desc: "Algebra to Calculus", color: "from-emerald-500 to-teal-600" },
  { icon: <Atom className="w-8 h-8" />, name: "Physics", desc: "Mechanics & Energy", color: "from-violet-500 to-purple-600" },
  { icon: <Sparkles className="w-8 h-8" />, name: "Chemistry", desc: "Reactions & Elements", color: "from-rose-500 to-pink-600" },
  { icon: <Leaf className="w-8 h-8" />, name: "Biology", desc: "Cells to Ecosystems", color: "from-green-500 to-emerald-600" },
  { icon: <Code className="w-8 h-8" />, name: "Programming", desc: "Python & JavaScript", color: "from-slate-500 to-zinc-600" },
  { icon: <Globe className="w-8 h-8" />, name: "Bilingual", desc: "English & French", color: "from-blue-500 to-indigo-600" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header */}
      <header className="border-b border-stone-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              STEMBridge
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-stone-600 hover:text-teal-700 transition-colors text-sm font-medium">Features</a>
            <a href="#subjects" className="text-stone-600 hover:text-teal-700 transition-colors text-sm font-medium">Subjects</a>
            <Link href="/login" className="text-stone-600 hover:text-teal-700 transition-colors text-sm font-medium">Login</Link>
            <Link href="/register" className="bg-stone-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-800 transition-all hover:scale-105">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-teal-100/50 to-emerald-100/50 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-100">
                  <Sparkles className="w-4 h-4" />
                  Free AI Tutoring for Canadians
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Learn STEM by{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                    thinking,
                  </span>
                  <br />not memorizing
                </h1>
                
                <p className="text-xl text-stone-600 mb-8 max-w-lg leading-relaxed">
                  Our AI tutor asks questions to guide you to answers. 
                  Master Math, Science, and Programming with real understanding.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/register" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-teal-700 transition-all hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5">
                    Start Learning Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/dashboard" className="inline-flex items-center gap-2 border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-teal-300 hover:bg-teal-50 transition-all">
                    View Demo
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mt-12 pt-8 border-t border-stone-200">
                  <div>
                    <div className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>10K+</div>
                    <div className="text-sm text-stone-500">Canadian Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>50+</div>
                    <div className="text-sm text-stone-500">Topics</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>100%</div>
                    <div className="text-sm text-stone-500">Free Forever</div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square">
                  {/* Floating Cards */}
                  <div className="absolute top-10 right-10 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Calculator className="w-4 h-4 text-teal-600" />
                      </div>
                      <div className="text-sm font-semibold text-stone-900">Quadratic Equations</div>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute bottom-20 left-0 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="text-sm font-semibold text-stone-900">AI Tutor</div>
                    </div>
                    <div className="text-xs text-stone-500">"What if we try factoring?"</div>
                  </div>

                  <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-gradient-to-br from-teal-600 to-emerald-600 p-6 rounded-2xl shadow-2xl text-white animate-float" style={{ animationDelay: '1s' }}>
                    <Trophy className="w-8 h-8 mb-2" />
                    <div className="font-bold">Level Up!</div>
                    <div className="text-sm text-teal-100">+250 XP earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Why it works
              </h2>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                Traditional tutoring gives you fish. We teach you how to fish.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section id="subjects" className="py-24 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                What you'll learn
              </h2>
              <p className="text-stone-600 text-lg">
                Complete Ontario curriculum. Plus skills for life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {subjects.map((subject, i) => (
                <div 
                  key={i}
                  className="group bg-white p-6 rounded-2xl border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {subject.name}
                      </h3>
                      <p className="text-sm text-stone-500">{subject.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to actually understand?
            </h2>
            <p className="text-stone-300 text-lg mb-10">
              Join 10,000+ Canadian students learning with AI that teaches thinking.
            </p>
            <Link href="/register" className="inline-flex items-center gap-3 bg-teal-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-teal-400 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1">
              <Lightbulb className="w-6 h-6" />
              Start Learning Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>STEMBridge</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Globe className="w-4 h-4" />
              <span>Made for Canadian Students</span>
            </div>
            <div className="text-sm">
              © 2026 STEMBridge. Free forever.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
