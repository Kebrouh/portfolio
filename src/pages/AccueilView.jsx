import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import projet from "../data/projet.json";

const AccueilView = () => {
    const { pos } = useParams();
    // console.log(photo)

    return (
    <div className="relative">
        {/* overlay dark */}
        <div className="overlay"></div>

        <article>

            POPUP PROJET

            {/* pop-up header */}
            <div>
                <h2>{projet[pos - 1].nom}</h2>
            </div>

            {/* section img OR vid */}
            <div>
                
                {projet[pos - 1].hasVid ? (
                    <>
                        <img
                            src={`/img/${projet[pos - 1].gif}`}
                            alt={projet[pos - 1].nom}
                        />
                        <p>voici un apercu gif</p>
                    </>
                ) : (
                    <>
                        <img
                            src={`/img/${projet[pos - 1].img}`}
                            alt={projet[pos - 1].nom}
                        />
                        <p>voici un apercu img</p>
                    </>
                )}
            </div>
            
            {/* section info */}
            <div>
                <p>{projet[pos - 1].description}</p>
            </div>

        </article>
    </div>
    );
};

export default AccueilView;
