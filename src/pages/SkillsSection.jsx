import { IconContext } from "react-icons";
import {HiBadgeCheck} from 'react-icons/hi'

export function SkillsSection() {
    // const skills = ['javascript', 'typescript', 'html5', 'css3', 'sass', 'react', 'vue', 'redux', 'nx', 'turborepo', 'stencil', 'nodejs', 'python', 'django', 'mongoDB', 'mysql', 'aws', 'git', 'bitbucket', 'jira']
    const frontendSkills = ['javascript', 'typescript', 'html5', 'css3', 'sass', 'react', 'vue', 'vueX', 'redux', 'nx', 'turborepo', 'stencil']
    const backendSkills = ['nodejs', 'express', 'python', 'django', 'socket.io' , 'mongoDB', 'mysql', 'aws']
    
    return (
        <section className="skills section" id="skills">
          <span className="section__subtitle">My abilities</span>
          <h2 className="section__title">My Skills</h2>

          <div className="skills__container container grid">
            <div className="skills__content">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        { frontendSkills && frontendSkills.map(skill=> {
                            return <div key={skill} className="skills__data">
                            <IconContext.Provider value={{ className: "skill__icon"}}>
                                <HiBadgeCheck/>
                            </IconContext.Provider>

                            <div>
                                <h3 className="skills__name">{skill.charAt(0).toUpperCase() + skill.slice(1)}</h3>
                                <span className="skills__level"></span>
                            </div>
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="skills__content">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        { backendSkills && backendSkills.map(skill=> {
                            return <div key={skill} className="skills__data">
                            <IconContext.Provider value={{ className: "skill__icon"}}>
                                <HiBadgeCheck/>
                            </IconContext.Provider>

                            <div>
                                <h3 className="skills__name">{skill.charAt(0).toUpperCase() + skill.slice(1)}</h3>
                                <span className="skills__level"></span>
                            </div>
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}