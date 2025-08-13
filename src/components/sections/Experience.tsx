const Experience = () => {
  const roles = [
    {
      company: "Limex — Trading Challenge",
      time: "2025–present",
      desc:
        "Python + live market data to test strategies, track performance, and manage real-time risk while networking with funds/allocators.",
    },
    {
      company: "IgniteXL Ventures — Extern",
      time: "2024",
      desc:
        "Sourced startups, built market views, and wrote 10 investment summaries with recommendations.",
    },
    {
      company: "CodePath — CYB101",
      time: "2025",
      desc:
        "Linux, scanning, exploitation labs, malware analysis, and blue-team tactics (SIEM/HIDS, MITRE ATT&CK).",
    },
    {
      company: "Goldman Sachs — Virtual Insight Series",
      time: "2025",
      desc: "Exposure to IB/AM/Markets via workshops and networking.",
    },
    {
      company: "Walmart — Sophomore Summit",
      time: "2025",
      desc:
        "Selected (Sam’s Club Product track); shadowed leaders on large-scale product development.",
    },
    {
      company: "Playful Paws — Owner/Operator",
      time: "2021–present",
      desc:
        "Ran a 25+ client service with scheduling, invoicing, and ops—customer trust and reliability at the core.",
    },
  ];

  return (
    <section id="experience" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">Hands-on roles across trading, research, and cybersecurity.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <article key={r.company} className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-medium">{r.company}</h3>
              <p className="text-xs text-muted-foreground mt-1">{r.time}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
