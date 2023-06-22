/* eslint-disable react/no-unescaped-entities */
import { IconContext } from "react-icons";
import {FiAward} from 'react-icons/fi'
import {BsBriefcase} from 'react-icons/bs'
import {GiTrophyCup} from 'react-icons/gi'

export function AboutSection() {
    return (
        <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img src="img/Mor3.jpeg" alt="" className="about__img" />

                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <IconContext.Provider value={{ className: "about__icon"}}>
                                <FiAward/>
                            </IconContext.Provider>
                            <h3 className="about__title">Experience</h3>
                            <span className="about__subtitle">2 Years</span>
                        </div>
                        <div className="about__box">
                            <IconContext.Provider value={{ className: "about__icon"}}>
                                <BsBriefcase/>
                            </IconContext.Provider>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">+10 Projects</span>
                        </div>
                        <div className="about__box">
                            <IconContext.Provider value={{ className: "about__icon"}}>
                                <GiTrophyCup/>
                            </IconContext.Provider>
                            <h3 className="about__title">Excellence</h3>
                            <span className="about__subtitle">Development Bootcamp</span>
                        </div>
                    </div>

                    <p className="about__description">
                        <span>
                            Hello, my name is Mor, and I am a Fullstack developer with experience in developing complex systems using a wide range of tools and technologies. With a deep passion for my profession, I am constantly seeking opportunities to enhance my knowledge and acquire new tools that will enable me to excel in my work. Collaboration is key to me, and I thoroughly enjoy working alongside team members from various positions within the organization. My commitment lies in delivering exceptional results, ensuring tasks are completed to the highest standard, and meeting deadlines consistently.
                        </span>
                        <span>
                            I hold a bachelor's degree in communication with a specialization in UX/UI from Reichman University. Additionally, I am a graduate of a Coding Academy Bootcamp, where I received honors upon completion.
                        </span>
                        <span>
                            Outside of work, I am an avid cooking and baking enthusiast. During my free time, I delight in experimenting with new recipes, crafting handmade pastas, baking cakes, croissants, and much more.
                        </span>
                    </p>

                    <a href="#contact" className="button">Contact Me</a>
                </div>
            </div>
        </section>
    )
}