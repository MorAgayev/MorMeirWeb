import { IconContext } from "react-icons";
import {AiOutlineCloseCircle} from 'react-icons/ai'

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
export function MainModal({children = <div>Loading</div>, close}) {
    return (
        <section className="main__modal">
            <div className="main__modal-content">
                <span className='main__modal-close' onClick={close}>
                    <IconContext.Provider value={{ className: "main__modal-close-icon"}}>
                        <AiOutlineCloseCircle/>
                    </IconContext.Provider>
                </span>
                {children}
            </div>
        </section>
    )
}