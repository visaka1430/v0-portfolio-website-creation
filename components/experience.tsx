export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Research Intern",
      company: "IBM",
      description:
        "Contributed to AI-driven research initiatives and data modeling. Focused on developing and optimizing machine learning models for enterprise applications.",
    },
    {
      year: "2023-2025",
      title: "Research & Publications",
      company: "Academic",
      description:
        "Authored and co-authored papers exploring ethical AI, intelligent systems, and machine learning applications in social impact domains.",
    },
    {
      year: "2025",
      title: "AI Projects",
      company: "VIT Chennai",
      description:
        "Collaborated on software solutions addressing global social issues through AI. Active contributor in algorithm design and system integration.",
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                {idx !== experiences.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-transparent mt-4"></div>
                )}
              </div>

              <div className="pb-8 flex-1">
                <p className="text-sm text-primary font-medium">{exp.year}</p>
                <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                <p className="text-sm text-accent font-medium">{exp.company}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
