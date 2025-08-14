import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24">
        <div className="flex flex-col justify-center text-left">
          <p className="text-sm font-medium text-muted-foreground">Data-Driven. Security-Focused.</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Ashton Leisenring
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
            I’m a Financial Technology & Big Data Analytics student at Virginia Tech. I blend market sense, data analysis, and hands-on cybersecurity to build systems that protect, predict, and perform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="https://drive.google.com/file/d/1QHvsfjZgxYxY0KPLduvATBLiJnWFnWih/view?usp=sharing" target="_blank" rel="noopener" aria-label="Download resume">
                <Download className="mr-2" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/ashtonleisenring" target="_blank" rel="noopener" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/AshtonLeisenring" target="_blank" rel="noopener" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:ashton.leisenring@outlook.com" aria-label="Email">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
        <div className="group relative">
          <div className="absolute -inset-10 -z-10 rounded-[2rem] opacity-60 blur-3xl [background:var(--gradient-hero)]" aria-hidden />
          <img
            src="/lovable-uploads/6ed3f7b6-da22-4682-a59d-8cce46080148.png"
            alt="Professional headshot portrait"
            className="w-full rounded-full border shadow-elegant transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
