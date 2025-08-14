type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};
const projects: Project[] = [{
  title: "SSH Keys & Git Signing (CYB101)",
  description: "Public/private keys for auth; OpenSSL file encryption/decryption; Git commit signing verification.",
  tags: ["Linux", "SSH", "OpenSSL", "Git"],
  link: "https://github.com/AshtonLeisenring/week2-ssh-keys"
}, {
  title: "Password Crack-a-thon",
  description: "Used John the Ripper with custom wordlists/rules/masks. Documented ethics + defense takeaways.",
  tags: ["JtR", "Bash", "Regex"],
  link: "https://github.com/AshtonLeisenring/week3-password-cracking"
}, {
  title: "Metasploitable vsftpd Backdoor",
  description: "Nmap recon → msfconsole exploit → shell access; wrote mitigations (patching, service hardening).",
  tags: ["Nmap", "Metasploit"],
  link: "https://github.com/AshtonLeisenring/week5-penetration-testing"
}, {
  title: "DIY Malware (msfvenom)",
  description: "Generated harmless demo payloads, tried encoders, scanned with VirusTotal; emphasized safe lab only.",
  tags: ["msfvenom", "Python", "VirusTotal"],
  link: "https://github.com/AshtonLeisenring/week6-diy-malware"
}, {
  title: "Threat Analysis with Shodan",
  description: "Pulled InternetDB JSON for 5 IPs, identified CVEs, validated via NVD, and prioritized risk.",
  tags: ["curl/JQ", "Python", "NVD"],
  link: "https://github.com/AshtonLeisenring/week8-threat-analysis"
}, {
  title: "Python Trading Strategy — Limex Challenge",
  description: "SMA + RSI crossover with backtesting, fee modeling, risk management; outputs equity curves and performance stats.",
  tags: ["Python", "pandas", "NumPy", "Matplotlib"],
  link: "https://github.com/AshtonLeisenring/limex-trading-strategy"
}];
const Projects = () => {
  return <section id="projects" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Selected work showcasing product thinking, craft, and attention to detail.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => <article key={p.title} className="group rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => <li key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {t}
                  </li>)}
              </ul>
              
            </article>)}
        </div>
      </div>
    </section>;
};
export default Projects;