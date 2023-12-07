import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import './Accueil.css';

const Accueil = ({ projet = [] }) => {

    return (
        <div className="page-accueil">
            PAGE ACCUEIL

            {/* Afficher la vue-enfant ici */}
            <div>
                <Outlet />
            </div>

            GRILLE PROJET
            <div className="grid-projet">
                {projet.map(({ nom, description, img, gif, hasVid }, i) => (
                    <div className="vignette-projet" key={projet}>
                        <Link to={`/accueil/${i + 1}`}> 
                            {hasVid ? (
                                <>
                                    <img
                                        src={`/img/${gif}`}
                                        alt={nom}
                                    />
                                    <p>voici un apercu gif</p>
                                </>
                            ) : (
                                <>
                                    <img
                                        src={`/img/${img}`}
                                        alt={nom}
                                    />
                                    <p>voici un apercu img</p>
                                </>
                            )}
                            <div>
                                <h2>{nom}</h2>
                                <p>{description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accueil;