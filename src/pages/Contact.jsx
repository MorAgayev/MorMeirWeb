import { IconContext } from "react-icons";
import {BiMailSend} from 'react-icons/bi'
import {AiOutlineArrowRight, AiOutlineWhatsApp} from 'react-icons/ai';

export function Contact() {
    return (
        <section className="contact section" id="contact">
            <span className="section__subtitle">Get in touch</span>
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <IconContext.Provider value={{ className: "contact__card-icon"}}>
                                <BiMailSend />
                            </IconContext.Provider>

                            <h3 className="contant__card-title">Email</h3>
                            <span className="contact__card-data">123agmor@gmail.com</span>

                            <a href="mailto:123agmor@gmail.com" target="_blank" className="contact__button" rel="noreferrer">
                                Write me 
                                <IconContext.Provider value={{ className: "contact__button-icon"}}>
                                    <AiOutlineArrowRight />
                                </IconContext.Provider>
                            </a>
                        </div>
                        <div className="contact__card">
                            <IconContext.Provider value={{ className: "contact__card-icon"}}>
                                <AiOutlineWhatsApp />
                            </IconContext.Provider>

                            <h3 className="contant__card-title">Whatsapp</h3>
                            <span className="contact__card-data">054-8027131</span>

                            <a href="https://api.whatsapp.com/send?phone=+9720548027131&text=Hello, more information!" target="_blank" className="contact__button" rel="noreferrer">
                                Write me 
                                <IconContext.Provider value={{ className: "contact__button-icon"}}>
                                    <AiOutlineArrowRight />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="contact__content">
                    <h3 className="contact__title">Write me</h3>

                    <form action="" className="contact__form">
                        <div className="contact__form-inputs">
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Name</label>
                                <input type="text" placeholder="Insert your name" className="contact__form-input" />
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Mail</label>
                                <input type="email" placeholder="Insert your email" className="contact__form-input" />
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Message</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message" className="contact__form-input contact__form-area"></textarea>
                            </div>
                        </div>
                        <button className="button">Send Message</button>
                    </form>
                </div> */}
            </div>
        </section>
    )
}