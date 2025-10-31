"use client"

import { ArrowRight } from "lucide-react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 -z-10"></div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm tracking-widest text-primary uppercase">AI & ML Student</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Visaka Sriram</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building intelligent systems for the betterment of society.
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Passionate about creating meaningful AI solutions that positively impact the world. Currently exploring
            ethical AI and machine learning research at VIT Chennai.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Decorative shape - AI inspired */}
        <div className="hidden md:flex items-center justify-center h-96 relative">
          <div className="absolute w-64 h-64 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
          <div className="relative w-48 h-48 border-2 border-primary/30 rounded-3xl flex items-center justify-center">
            <div className="w-32 h-32 border border-primary/20 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 border border-primary/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
