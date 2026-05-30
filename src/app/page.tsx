import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import AISpotlight from "@/components/AISpotlight";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AISpotlight />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
