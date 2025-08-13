type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Interactive Dashboard",
    description:
      "A responsive analytics dashboard with real-time charts, filters, and accessible keyboard navigation.",
    tags: ["React", "Recharts", "Tailwind"],
  },
  {
    title: "Design System Kit",
    description:
      "Reusable component library with tokens, variants, and documentation built on Radix and Tailwind.",
    tags: ["shadcn", "Radix", "TypeScript"],
  },
  {
    title: "Marketing Site Revamp",
    description:
      "High-performance landing page with SEO, structured data, and a refined gradient aesthetic.",
    tags: ["Vite", "SEO", "Accessibility"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Selected work showcasing product thinking, craft, and attention to detail.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
