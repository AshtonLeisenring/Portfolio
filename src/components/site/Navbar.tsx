import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold text-lg">My Portfolio</a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="soft" size="sm">
            <a href="#projects">View Work</a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href="#contact" aria-label="Contact Me">Contact</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
