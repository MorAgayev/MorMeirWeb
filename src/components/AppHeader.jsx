// import { downloadAsPdf } from "../services/util-service"
// import { ActionBtn } from "./common/ActionBtn"

// import { IconContext } from "react-icons";
import { AiOutlineHome, AiOutlineUser, AiFillBook } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
// import { BsBriefcase, BsMoon } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';


// eslint-disable-next-line react/prop-types
export function AppHeader() {

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Mor</a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <AiOutlineHome/>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <AiOutlineUser/>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <AiFillBook/>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                <BsBriefcase/>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <BiMessageSquareDetail/>
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* <div className="theme__icon" onClick={changeTheme}>
                    <IconContext.Provider value={{ className: "change-theme", id: 'theme-button' }}>
                        <BsMoon/>
                    </IconContext.Provider>
                </div> */}
            </nav>
        </header>
    )
}