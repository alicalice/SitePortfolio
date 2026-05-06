import { skills } from "@/data/skills";

export default function Skills(){


    return( 
        
        <section className="mt-10 max-w-6xl mx-auto px-6 py-16" id="skills">
            <h2 className="text-brand-strong text-3xl font-semibold mb-8">Skills</h2>
            
            <div className="flex
            flex-wrap gap-4
            ">
                    {skills.map((skill)=>(
                    <div key={skill} className="px-4 py-2 
                    bg-purple-500/10 
                    rounded-lg 
                    border 
                    border-purple-300 
                    hover:bg-purple-500/20 

                    ">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    
    )
}

{/*text-xs
                bg-purple-500/10
                text-purple-300 border
                border-purple-500/20
                px-2 py-1
                rounded-md*/}