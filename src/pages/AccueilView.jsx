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

            {/* section img & cpt */}
            <div>
                
                {/* img */}
                <img src={`./../../public/img/${projet[pos - 1].img}`} alt="placeholder" />
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
