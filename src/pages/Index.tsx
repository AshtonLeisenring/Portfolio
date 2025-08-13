import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const siteName = "Your Name — Portfolio";
  const description = "Portfolio showcasing React, TypeScript, and design system work.";
  const canonical = "/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: typeof window !== "undefined" ? window.location.origin : "",
    jobTitle: "Frontend Developer",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
