import { useState } from "react"
import { Icons, icons } from "../data/icons"


function Skills() {

    const [skill] = useState<Icons[]>(icons)
    return (
        <div>
            <section className="mt-14">
            <h3 className="font-bold text-3xl text-center">Skills</h3>

            <section className="flex flex-wrap lg:w-[50vw] mx-auto justify-center gap-5 mt-8">

                {skill.map(skill => (
                    <section key={skill.id}>
                        <img className="w-14" src={`/skills/${skill.icon}.svg`} alt="tecnologia" loading="lazy"  />
                    </section>

                ))}
            </section>
          </section>

        </div>
    )
}

export default Skills