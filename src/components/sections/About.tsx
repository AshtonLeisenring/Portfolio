const About = () => {
  return (
    <section id="about" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            I’m a front-end engineer focused on building fast, accessible, and beautifully crafted web apps. I love working with React, TypeScript, and modern tooling to deliver polished user experiences.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Core Skills</h3>
            <p className="mt-2 text-sm text-muted-foreground">React, TypeScript, Tailwind, shadcn, Accessibility, Performance</p>
          </article>
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Toolbox</h3>
            <p className="mt-2 text-sm text-muted-foreground">Vite, React Query, Radix, Zod, React Hook Form</p>
          </article>
          <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-elegant">
            <h3 className="font-medium">Focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">Design systems, clean UX, micro-interactions, and maintainable code</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
