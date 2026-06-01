import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import AISpotlight from "@/components/AISpotlight";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030305] selection:bg-indigo-500 selection:text-white overflow-x-hidden">
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
