import { Button } from "@/components/ui/button";

const Contact = () => {
  const email = "you@example.com";
  return (
    <section id="contact" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Have an opportunity or idea? I’d love to hear from you.
          </p>
        </header>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild variant="hero" size="lg">
            <a href={`mailto:${email}`} aria-label="Send email">Email Me</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#home">Back to top</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
