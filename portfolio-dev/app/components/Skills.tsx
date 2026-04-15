export default function Skills(){


    const skills = [
        "Next.js",
        "Nest.js",
        "JavaScript",
        "HTML",
        "TypeScript",
        "Mysql",
        "React",
        "Tailwind",
        "Prisma",
        "",

    ]

    return( 
        
        <section className="mt-10">
            <h2 className="text-3xl font-semibold mb-8">Skills</h2>
            
            <div className="flex flex-wrap gap-4">
                {skills.map((skill)=>(
                    <div key={skill} className="px-15 py-2 bg-zinc-50 rounded-lg border 
                    border-white/10 hover:bg-mauve-100 transition">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    
    )
}