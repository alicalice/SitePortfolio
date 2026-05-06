import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

export default function Home() {
  return (


    <div className="min-h-screen relative z-10">


    <main className="flex flex-col">

      <Hero />

      <Projects />

      <Skills />
      <section className="max-w-6xl mx-auto px-6 py-16" id="experience">
        <Experience/>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16" id="contact">
        <Contact />
      </section>
    


    </main>

    
    
    <Footer />
  
    </div>

  );
}