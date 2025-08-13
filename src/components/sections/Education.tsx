const Education = () => {
  return (
    <section id="education" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">Formal education focused on finance, analytics, and secure systems.</p>
        </header>
        <article className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-medium">Virginia Tech — Pamplin College of Business</h3>
          <p className="mt-2 text-sm text-muted-foreground">B.S. Financial Technology & Big Data Analytics, Dean’s List · Expected May 2027</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
