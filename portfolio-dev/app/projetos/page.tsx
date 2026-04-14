import ProjectCard from "../components/ProjectCard";

export default function Projetos(e:any){
    return(
        <ProjectCard
        title="Projeto de Portfolio"
        description="Site pessoal"
        techs={["Nest.js","React"]}
        />
    )
}
