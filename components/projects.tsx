import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI Handwriting Analysis Software",
      year: "2024",
      description:
        "Python-based model that interprets handwriting patterns to infer personality traits. Focused on data preprocessing and model accuracy optimization.",
      technologies: ["Python", "Machine Learning", "Data Science"],
      role: "Active Team Contributor",
    },
    {
      title: "AI Assistant for Monitoring Child Trafficking",
      year: "2025",
      description:
        "AI-based detection and monitoring software aimed at identifying child trafficking risks and supporting intervention efforts.",
      technologies: ["Python", "Deep Learning", "NLP", "Ethics in AI"],
      role: "Active Team Contributor",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Projects</h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:bg-card/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-primary font-medium">{project.year}</p>
                  <h3 className="text-2xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-accent font-medium">Role: {project.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
