/* eslint-disable react/prop-types */
import { useState } from "react"
import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MainModal } from "../components/MainModal";

export function WorkCard({project}) {
    const [isActiveModal, setIsActiveModal] = useState(false)

    const handleCloseModal = (e) => {
        setIsActiveModal(false)
        e.stopPropagation()
    }
    return (
        <div key={project.id} className="work__card" onClick={()=> setIsActiveModal(true)}>
                    <img src={project.images[0]} alt="" className="work__img" />

                    <h3 className="work__title">{project.name}</h3>

                    <a href={project.githubLink} onClick={(e)=> e.stopPropagation()} target="blank" className="work__button">
                        Github
                    <IconContext.Provider value={{ className: "work__icon"}}>
                        <AiOutlineArrowRight/>
                    </IconContext.Provider>
                    </a>
                    {isActiveModal && <MainModal close={handleCloseModal}>
                        <div className="work__details">
                            <img src={project.images[0]} />
                            <div className="work__details-content">
                                <h3 className="work__details-title">{project.name}</h3>
                                <p className="work__details-description">{project.description}</p>
                            </div>
                            <div className="work__details-tools-container">
                                <div className="horizontal__line"></div>
                                <div className="work__details-tools-content">
                                    <h3>Tools</h3>
                                    <span>{project.tools.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    </MainModal>}
                </div>
    )
}