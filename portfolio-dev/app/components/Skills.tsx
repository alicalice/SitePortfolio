import { skills } from "@/data/skills";

export default function Skills(){


    return( 
        
        <section className="mt-10 max-w-6xl mx-auto px-6 py-16" id="skills">
            <h2 className="text-brand-soft text-3xl font-semibold mb-8">Skills</h2>
            
            <div className="flex flex-wrap gap-4">
                    {skills.map((skill)=>(
                    <div key={skill} className="skill-tag px-4 py-2">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    
    )
}