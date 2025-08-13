const Skills = () => {
  const groups = [
    {
      title: "Programming & Data",
      items: ["Python", "SQL", "Linux CLI"],
    },
    {
      title: "Cybersecurity",
      items: [
        "Recon & scanning",
        "basic exploitation labs",
        "SIEM/HIDS concepts",
        "MITRE ATT&CK",
      ],
    },
    {
      title: "Analytics/Quant",
      items: ["Data mining", "statistics", "financial analysis"],
    },
    {
      title: "Tools",
      items: ["Git", "OpenSSL", "John the Ripper", "Metasploit", "VirusTotal"],
    },
    {
      title: "Soft skills",
      items: ["Client management", "research synthesis", "communication"],
    },
  ];

  return (
    <section id="skills" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">Core competencies used across projects and experience.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <article key={g.title} className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-medium">{g.title}</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
