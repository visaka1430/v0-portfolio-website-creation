"use client"

import { ArrowRight, Mail } from "lucide-react"

interface HeroProps {
  onExplore: () => void
  onContact: () => void
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
            AI & ML Student • Researcher • Innovator
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
          Building Intelligent Systems for <span className="text-primary">Social Good</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm an AI and Machine Learning student at VIT Chennai, passionate about creating meaningful solutions that
          positively impact society through intelligent technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onExplore}
            className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
          >
            Explore My Work
            <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onContact}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all hover:shadow-lg border border-primary/20"
          >
            Contact Me
            <Mail className="inline ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Profile Image Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-40 bg-muted rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
