const About = () => {
  return <section id="about" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">I’m a Virginia Tech Financial Technology & Big Data Analytics student (Dean’s List) with experience in venture research, data analysis, and cybersecurity. I’ve delivered market research for a VC firm, completed CodePath’s CYB101, and am building a verified trading record in a Python-based challenge. I enjoy turning messy data into clear, secure, and actionable decisions.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Core Skills</h3>
            <p className="mt-2 text-sm text-muted-foreground">Data analysis, cybersecurity, quantitative problem solving, scripting and automation, version control, and technical documentation</p>
          </article>
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Toolbox</h3>
            <p className="mt-2 text-sm text-muted-foreground">Python, pandas, NumPy, Matplotlib, Git, GitHub, Bash, OpenSSL, Metasploit, Nmap, msfvenom, Shodan</p>
          </article>
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">Data-driven decision making, cybersecurity practices, quantitative analysis, automation, and maintainable code</p>
          </article>
        </div>
      </div>
    </section>;
};
export default About;