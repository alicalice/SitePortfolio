import { FaGithub } from "react-icons/fa"

FaGithub

type ProjectProps = {
    title:string
    description:string
    techs:string[]
    github:string
}

export default function ProjectCard({
    title,
    description,
    techs,
    github
    }:ProjectProps) {

    return(

        <div className="
            group
            flex flex-col h-full
            bg-[#151521]
            border border-purple-500/10
            rounded-xl
            p-6
            transition-all duration-300
            hover:border-purple-500/40
            hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]
            hover:scale-[1.02]">

            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">{title}</h3>

            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-2">{techs.map((tech,index)=>(
                <span key={index} className="text-xs
                bg-purple-500/10
                text-purple-300 border
                border-purple-500/20
                px-2 py-1
                rounded-md">
                    {tech}
                </span>

            ))}
            </div>

                <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-auto
                inline-block
                text-zinc-400
                hover:text-purple-400
                transition-all duration-300
                hover:scale-110
                hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">

                    <FaGithub size={20} />

                </a>

        </div>
    )
}