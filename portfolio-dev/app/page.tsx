import Image from "next/image";
import imagem from "../public/Frieren.jpg"
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>

    <div className="min-h-screen flex flex-col justify-between bg-linear-to-br from-[#0f0f14] via-[#1a1a2e] to-[#0f0f14] text-zinc-200">


    <main className="flex items-center justify-around mt-30">
      <div className="max-w-xl space-y-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-purple-400 font-mono">DESENVOLVEDORA FULL STACK</h3>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight">Alice Santos</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            Construo produtos web do zero — 
            desde a API até a interface. 
            Foco em código limpo, 
            UX que faz sentido e entregas que não travam.</p>
      </div>
      <div>
        <Image
        className="rounded-full shadow-[0_0_40px_rgba(168,85,247,0.3)]"
        src={imagem}
        alt="foto perfil"
        width={250}
        height={250}
        />
      </div>

    </main>



    <section className="max-w-6x1 mx-auto px-6 py-16">
      

      <h2 className="text-3x1 font-bold mb-10">Projetos:</h2>

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


{/*
    <div className="flex mt-9 gap-4 mb-30 ml-25">
      <a href="" className="
        px-6 py-3
      bg-purple-700
      text-white
        font-semibold
        rounded-lg
      hover:bg-purple-600
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

