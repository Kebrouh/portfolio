import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { IoCall, IoMail } from "react-icons/io5";

import './footer.css';

const Accueil = () => {

    return (
        <div className="footer">

            <div className="footer-bg">
                <img src="/assets/footer_v2.png" alt="img-ng-footer" />
            </div>

            <div className="contact">
                <ul>
                    <li>
                        <IoCall />
                        <p>514 569-9968</p>
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
                        <a href="https://www.linkedin.com/in/olivier-daigneault/" target="_blank">
                            <p>Linkedn</p>
                            <img src="/assets/icons8-linkedin.svg" alt="placeholder" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.artstation.com/olivierdaigneault8" target="_blank">
                            <p>ArtStation</p>
                            <img src="/assets/icons8-artstation.svg" alt="placeholder" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/olivierdaignea1" target="_blank">
                            <p>Behance</p>
                            <img src="/assets/icons8-behance.svg" alt="placeholder" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kebrouh" target="_blank">
                            <p>GitHub</p>
                            <img src="/assets/icons8-github.svg" alt="placeholder" />  
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Accueil;