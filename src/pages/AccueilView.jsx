import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import projet from "../data/projet.json";

import './AccueilView.css';

const AccueilView = () => {
    const { pos } = useParams();
    // console.log(photo)

    return (
    <div className="page-accueilView">
        {/* overlay dark */}
        <Link to={`/accueil`} className="overlay"></Link>
        {/* <div className="overlay"></div> */}

        <article>

            {/* section img OR vid */}
            <div className="view-media">
                
                {projet[pos - 1].hasVid ? (
                    <>
                        <img
                            src={`/img/${projet[pos - 1].gif}`}
                            alt={projet[pos - 1].nom}
                        />
                    </>
                ) : (
                    <>
                        <img
                            src={`/${projet[pos - 1].img}`}
                            alt={projet[pos - 1].nom}
                        />
                    </>
                )}
            </div>

            <div className="wrap-info">
                {/* pop-up header */}
                <div className="view-titre">
                    <h2>{projet[pos - 1].nom}</h2>
                </div>

                {/* section info */}
                <div className="view-description"> 
                    <p>{projet[pos - 1].description}</p>
                </div>

                {/* section info */}
                <div className="view-longDescription"> 
                    <p>{projet[pos - 1].long_description}</p>
                </div>
            </div>

        </article>
    </div>
    );
};

export default AccueilView;
