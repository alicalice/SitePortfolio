type ProjectProps = {
    title:string
    description:string
    techs:string[]
}

export default function ProjectCard({
    title,
    description,
    techs
    }:ProjectProps) {

    return(

        <div className="
            group
            bg-[#151521]
            border border-purple-500/10
            rounded-xl
            p-6
            transition-all duration-300
            hover:border-purple-500/40
            hhover:shadow-[0_0_25px_rgba(124,58,237,0.25)]
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
        </div>
    )
}