import { useEffect, useState } from "react"
import { getProjects } from "../services/projects-service"
import { WorkCard } from "../components/WorkCard";

export function FeaturedProjects() {
    const [projects, setProjects] = useState(null)

    useEffect(()=> {
        setProjects(getProjects())
    }, [])

    return (
        <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Featured Projects</h2>
        
            <div className="work__container container grid">
                {projects && projects.map(project => {
                    return <WorkCard project={project} key={project.id}/>
                })}
            </div>
        </section>
    )
}