import Image from "next/image";
import imagem from "../public/Frieren.jpg"
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>


    

    <div className="min-h-screen flex flex-col justify-between bg-linear-to-br from-[#0f0f14] via-[#151521] to-[#0f0f14] text-zinc-200 relative z-10">

      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>




    <main className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 max-w-6xl mx-auto mt-24">
      <div className="max-w-xl space-y-6">
          <h3 className="text-sm uppercase tracking-[0.25em] text-purple-400 font-mono">DESENVOLVEDORA FULL STACK</h3>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">Alice Santos</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            Construo produtos web do zero — 
            desde a API até a interface. 
            Foco em código limpo, 
            UX que faz sentido e entregas que não travam.</p>
      </div>
      <div>
        <Image
        className="rounded-full shadow-[0_0_40px_rgba(124,58,237,0.5)] ring-2 ring-purple-500/30"
        src={imagem}
        alt="foto perfil"
        width={250}
        height={250}
        />
      </div>

    </main>



    <section className="max-w-6xl mx-auto px-6 py-16">
      

      <h2 className="text-3xl font-bold mb-10 text-purple-400">

        <span className="text-purple-400">Projetos</span>

      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project,index)=>(
          <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          techs={project.techs}
          />
        ))}
      </div>

    </section>

    <section className="max-w-6xl mx-auto px-6 py-16">
      <Skills />
    </section>

    <section className="max-w-6xl mx-auto px-6 py-16">
      <Experience/>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-16">
          <Contact />
    </section>

    <section className="max-w-6xl mx-auto px-6 py-16">
          <Footer />
    </section>
  
    
{/*
    <div className="flex mt-9 gap-4 mb-30 ml-25">
      <a href="" className="
        px-6 py-3
      bg-purple-600
      text-white
        font-semibold
        rounded-lg
      hover:bg-purple-500
        transition
        hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
      ">
        Falar comigo:</a>
      <a href="" className="
        px-6 py-3
        border
      border-purple-700
      text-purple-400
        font-semibold
        rounded-lg
      hover:bg-purple-500 hover:text-white
        hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        transition
      "
      >Ver projetos:</a>
    </div>
*/}
    </div>
    </>
  );
}

