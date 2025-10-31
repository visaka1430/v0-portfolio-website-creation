export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">About</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Visaka Sriram, an AI and Machine Learning student at VIT Chennai. My journey in technology is
              fueled by a deep passion for creating meaningful solutions that positively impact society. I find joy in
              coding, problem-solving, and discovering how AI can make the world safer and more equitable.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in using AI not just to advance technology, but to advance humanity. My interests span ethical
              AI, intelligent systems, and developing technologies that address real-world social challenges.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6 py-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
            <div className="space-y-2">
              <p className="font-medium text-foreground">B.Tech in Artificial Intelligence and Machine Learning</p>
              <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Chennai</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: 2029</p>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-6 py-4">
            <h3 className="text-lg italic text-muted-foreground">
              &quot;Technology should serve humanity, not the other way around.&quot;
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
