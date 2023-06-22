/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { IconContext } from "react-icons";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BsMouse} from 'react-icons/bs'
import scrollReveal from "scrollreveal";
export function HeroSection() {
    
    useEffect(()=> {
        const st = scrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset:true,
          })
          
          st.reveal('.home__data') 
          st.reveal('.home__handle', {delay: 700}) 
          st.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'}) 
    }, [])

    return (
        <section className="home section" id="home">
           <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm </span>
                    <h1 className="home__name">Mor Meir</h1>
                    <h3 className="home__education">Fullstack Developer</h3>

                    <div className="home__buttons">
                        <a download="" href="assets/pdf/Mor-Meir-Fullstack-CV.pdf" className="button button--ghost">
                            Download CV
                        </a>
                        <a href="#about" className="button">About me</a>
                    </div>
                </div>

                <div className="home__handle">
                    <img src="img/Mor2.png" alt="" className="home__img"/>
                </div>

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/mormeir/" target="blank" className="home__social-link">
                        <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/MorAgayev" target="blank" className="home__social-link">
                        <AiFillGithub/>
                    </a>
                </div>

                <a href="#about" className="home__scroll grid">
                    <IconContext.Provider value={{ className: "home__scroll-icon"}}>
                        <BsMouse/>
                    </IconContext.Provider>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
           </div>
        </section>
            
    )
}