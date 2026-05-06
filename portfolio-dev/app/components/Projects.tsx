import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";

export default function Projects(){
    

    return (
        
        <section className="max-w-6xl mx-auto px-6 py-16" id="projects">
            <h2 className="text-3xl font-bold mb-10">
                <span className="text-brand-strong">Projetos</span>
            </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techs={project.techs}
                github={project.github}
                />
            ))}
        </div>

        </section>
    )
}