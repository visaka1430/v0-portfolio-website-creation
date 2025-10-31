export default function About() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8">About Me</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Visaka Sriram, an AI and Machine Learning student at VIT Chennai. My journey in technology is fueled
                by a deep passion for creating meaningful solutions that positively impact society.
              </p>
              <p>
                I find joy in coding, problem-solving, and discovering how AI can make the world safer and more
                equitable. My work spans from research initiatives to practical applications that address real-world
                challenges.
              </p>
              <p className="italic text-primary font-medium">
                "I believe in using AI not just to advance technology, but to advance humanity."
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">B.Tech in Artificial Intelligence & Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Chennai</p>
                <p className="text-sm text-primary font-medium">Expected Graduation: 2029</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Focused on developing practical AI solutions with emphasis on ethical implementation and social
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
