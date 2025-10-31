export default function Skills() {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "SQL"],
    },
    {
      category: "Technical",
      items: ["Data Science", "Machine Learning", "Prompt Engineering", "NLP"],
    },
    {
      category: "Creative",
      items: ["UI/UX Design", "Problem Solving", "Research"],
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-lg font-semibold text-primary">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-foreground">{skill}</p>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${75 + Math.random() * 25}%` }}
                      ></div>
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
