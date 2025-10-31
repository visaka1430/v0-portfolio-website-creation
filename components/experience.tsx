export default function Experience() {
  const experiences = [
    {
      title: "Research Intern",
      company: "IBM",
      year: "2024",
      description:
        "Contributed to AI-driven research initiatives and data modeling projects, focusing on improving model accuracy and efficiency.",
      type: "internship",
    },
    {
      title: "Research Papers",
      company: "Academic & Industry Collaborations",
      year: "2023–2025",
      description:
        "Authored and co-authored papers exploring ethical AI, intelligent systems, and their societal implications.",
      type: "research",
    },
    {
      title: "AI Projects",
      company: "Collaborative Development",
      year: "2025",
      description:
        "Collaborated on software solutions addressing global social issues through artificial intelligence and machine learning.",
      type: "project",
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">Experience & Milestones</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 pb-6 border-l-2 border-primary">
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />

              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">{exp.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
