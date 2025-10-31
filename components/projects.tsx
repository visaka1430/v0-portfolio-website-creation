"use client"

import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI Handwriting Analysis Software",
      year: "2024",
      description:
        "Python-based model that interprets handwriting patterns to infer personality traits and emotional states.",
      role: "Active team contributor; focused on data preprocessing and model accuracy.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "Data Science"],
      impact: "Achieved 85% accuracy in personality trait classification",
    },
    {
      title: "AI Assistant for Child Trafficking Monitoring",
      year: "2025",
      description:
        "Developed AI-based detection and monitoring software aimed at identifying child trafficking risks and vulnerabilities.",
      role: "Active team contributor; participated in algorithm design and integration.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "Data Analysis"],
      impact: "Designed detection model to identify high-risk patterns with 92% precision",
    },
  ]

  return (
    <section className="py-20 px-6 bg-accent/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer"
            >
              <div className="mb-4">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {project.year}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="bg-muted rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-foreground mb-1">My Role</p>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tidx) => (
                    <span key={tidx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-semibold">📊 {project.impact}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
