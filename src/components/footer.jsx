import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { IoDocumentText, IoMail } from "react-icons/io5";

import DownloadCV from "./../components/DownloadCV";

import './footer.css';

const Accueil = () => {

    return (
        <div className="footer">

            <div className="footer-bg">
                <img src="/footer_v2.png" alt="img-ng-footer" />
            </div>

            <div className="contact">
                <ul>
                    <li>
                        <IoDocumentText />
                        <DownloadCV />
                    </li>
                    <li>
                        <IoMail />
                        <p>oli1999@hotmail.ca</p>
                    </li>
                </ul>
            </div>

            <div className="plateforme">
                <ul>
                    <li>
                        <Link to="https://www.linkedin.com/in/olivier-daigneault/" target="_blank">
                            <p>Linkedn</p>
                            <img src="/icons8-linkedin.svg" alt="placeholder" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.artstation.com/olivierdaigneault8" target="_blank">
                            <p>ArtStation</p>
                            <img src="/icons8-artstation.svg" alt="placeholder" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.behance.net/olivierdaignea1" target="_blank">
                            <p>Behance</p>
                            <img src="/icons8-behance.svg" alt="placeholder" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Kebrouh" target="_blank">
                            <p>GitHub</p>
                            <img src="/icons8-github.svg" alt="placeholder" />  
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Accueil;