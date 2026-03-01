import Link from "next/link"
import { Brain, Sparkles, Target, Trophy, Zap, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">STEMBridge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#curriculum" className="text-gray-600 hover:text-blue-600 transition-colors">Curriculum</a>
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Login</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free AI-Powered STEM Tutoring
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Learn STEM with an
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Tutor</span>
            <br />that teaches you to think
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Canadian students use Socratic AI tutoring to master Math, Science, and Programming. 
            Never get stuck — always move forward.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Start Learning Free
            </Link>
            <Link href="/dashboard" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors">
              View Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-sm text-gray-500">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-500">Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">Free</div>
              <div className="text-sm text-gray-500">Forever</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Students Choose STEMBridge
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Socratic AI Tutor</h3>
                <p className="text-gray-600">
                  Our AI never gives you answers — it asks questions to guide you to the solution yourself. 
                  Learn by doing, not by copying.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ontario Curriculum</h3>
                <p className="text-gray-600">
                  Aligned with Grade 9-12 Math, Science, and Programming. 
                  From Algebra to Calculus, Physics to Biology.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamified Learning</h3>
                <p className="text-gray-600">
                  Earn XP, maintain streaks, unlock achievements. 
                  Make learning addictive, not a chore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What You Can Learn
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📐", title: "Mathematics", desc: "Algebra, Calculus, Trigonometry, Statistics" },
                { icon: "⚡", title: "Physics", desc: "Kinematics, Forces, Energy, Waves, Electricity" },
                { icon: "🧪", title: "Chemistry", desc: "Atomic Structure, Reactions, Stoichiometry" },
                { icon: "🧬", title: "Biology", desc: "Cells, Genetics, Evolution, Ecology" },
                { icon: "💻", title: "Programming", desc: "Python, JavaScript, Web Development" },
                { icon: "🌍", title: "Bilingual", desc: "Full English and French Support" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Master STEM?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of Canadian students learning with AI.
            </p>
            <Link href="/register" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors">
              <Zap className="w-5 h-5" />
              Start Learning Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">STEMBridge</span>
            </div>
            <div className="flex items-center gap-6">
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
