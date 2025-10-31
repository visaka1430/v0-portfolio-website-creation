export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "SQL", "Java"],
    },
    {
      category: "Technical",
      skills: ["Data Science", "Machine Learning", "Deep Learning", "Prompt Engineering", "NLP"],
    },
    {
      category: "Creative",
      skills: ["UI/UX Design", "Data Visualization", "Problem Solving"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-accent/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">{cat.category}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill, sidx) => (
                  <div key={sidx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                      <span className="text-xs text-muted-foreground">Expert</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: `${75 + Math.random() * 25}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
