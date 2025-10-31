"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "visaka1014@gmail.com",
      href: "mailto:visaka1014@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "visaka-sriram",
      href: "https://linkedin.com/in/visaka-sriram-ab0916373",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in discussing AI, research opportunities, and how technology can create positive
          impact. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg hover:border-primary hover:bg-card/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                <p className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </a>
            )
          })}
        </div>

        <form className="space-y-4 max-w-2xl mx-auto">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
