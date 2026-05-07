import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

export default function Home() {
  return (


    <div className="min-h-screen relative z-10">


    <main className="">

      <Hero />

      <Projects />

      <Skills />
      
      <Experience/>

      <Contact />

    </main>
    
    <Footer />
  
    </div>

  );
}