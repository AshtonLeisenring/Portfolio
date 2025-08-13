import { Button } from "@/components/ui/button";

const Contact = () => {
  const email = "ashton.leisenring@outlook.com";
  return (
    <section id="contact" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Have an opportunity or idea? I’d love to hear from you.
          </p>
        </header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="lg">
              <a href={`mailto:${email}`} aria-label="Send email">Email Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/ashtonleisenring" target="_blank" rel="noopener">LinkedIn</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+18143238370" aria-label="Call Ashton">Call</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Phone: (814)-323-8370 · Location: Aldie, VA</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
