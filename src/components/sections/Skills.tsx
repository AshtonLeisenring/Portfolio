import { Code, Shield, TrendingUp, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: Code,
      skills: ["Python", "SQL", "Linux CLI"],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Recon & scanning", "Basic exploitation labs", "SIEM/HIDS concepts", "MITRE ATT&CK"],
    },
    {
      title: "Analytics/Quant",
      icon: TrendingUp,
      skills: ["Data mining", "Statistics", "Financial analysis"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "OpenSSL", "John the Ripper", "Metasploit", "VirusTotal"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Client management", "Research synthesis", "Communication"],
    },
  ];

  return (
    <section id="skills" className="border-t bg-muted/30">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical and soft skills across cybersecurity, data analysis, and business.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <article key={category.title} className="group rounded-xl border bg-card p-6 text-card-foreground shadow-sm hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;