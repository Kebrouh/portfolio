import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Accueil = ({ projet = [] }) => {

    return (
        <div>
            PAGE ACCUEIL

            {/* Afficher la vue-enfant ici */}
            <div>
                <Outlet />
            </div>

            GRILLE PROJET
            {projet.map(({ nom, description, img }, i) => (
                <div key={projet}>
                    <Link to={`/accueil/${i + 1}`}> 
                        <img
                            src={`./../../public/img/${img}`}
                            alt={nom}
                        />
                        <div>
                            <h2>{nom}</h2>
                            <p>{description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Accueil;