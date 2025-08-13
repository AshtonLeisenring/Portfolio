import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const siteName = "Ashton Leisenring — Portfolio";
  const description = "Financial Technology & Big Data Analytics student — cybersecurity and data-driven problem solver.";
  const canonical = "/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashton Leisenring",
    url: typeof window !== "undefined" ? window.location.origin : "",
    jobTitle: "Financial Technology & Big Data Analytics student",
    sameAs: [
      "https://www.linkedin.com/in/ashtonleisenring",
      "https://github.com/AshtonLeisenring"
    ],
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
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
