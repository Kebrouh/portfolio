import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import './header.css';

const Accueil = () => {

    return (
        <div className="header">
            
            <div className="header-bg">
                <img src="/footer_v2.png" alt="img-ng-footer" />
            </div>

            <div className="section-info">
                <h2>Olivier Daigneault</h2>
                <p>3D creator - Multimedia integrator</p>
            </div>


        </div>
    );
};

export default Accueil;