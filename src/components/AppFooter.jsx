import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export function AppFooter() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mor</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#recommendations" className="footer__link">Recommendations</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a href="https://www.linkedin.com/in/mormeir/" target="blank" className="footer__social-link">
                        <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/MorAgayev" target="blank" className="footer__social-link">
                        <AiFillGithub/>
                    </a>
                </ul>

                <span className="footer__copy">
                    &#169; Mor Meir 
                </span>
            </div>
        </footer>
    )
}