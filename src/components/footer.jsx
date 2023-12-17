import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { IoCall, IoMail } from "react-icons/io5";

import './footer.css';

const Accueil = () => {

    return (
        <div className="footer">

            <div className="contact">
                <h2>Information de contact</h2>
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
                <h2>Liste de plateforme</h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/olivier-daigneault/" target="_blank">Linkedn</a>
                        <img src="/icons8-linkedin.svg" alt="placeholder" />
                    </li>
                    <li>
                        <a href="https://www.artstation.com/olivierdaigneault8" target="_blank">ArtStation</a>
                        <img src="/icons8-artstation.svg" alt="placeholder" />
                    </li>
                    <li>
                        <a href="https://www.behance.net/olivierdaignea1" target="_blank">Behance</a>
                        <img src="/icons8-behance.svg" alt="placeholder" />
                    </li>
                    <li>
                        <a href="https://github.com/Kebrouh" target="_blank">GitHub</a>
                        <img src="/icons8-github.svg" alt="placeholder" />  
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Accueil;