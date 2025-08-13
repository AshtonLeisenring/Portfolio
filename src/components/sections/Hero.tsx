import hero from "@/assets/hero-portfolio.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24">
        <div className="flex flex-col justify-center text-left">
          <p className="text-sm font-medium text-muted-foreground">Hi, I’m</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your Name — Portfolio
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
            Frontend developer crafting delightful, accessible web experiences
            with React, TypeScript, and beautiful design systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">See Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="group relative">
          <div className="absolute -inset-10 -z-10 rounded-[2rem] opacity-60 blur-3xl [background:var(--gradient-hero)]" aria-hidden />
          <img
            src={hero}
            alt="Abstract hero illustration for portfolio in purple and indigo gradients"
            className="w-full rounded-2xl border shadow-elegant transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
