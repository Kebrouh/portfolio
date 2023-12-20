import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { IoArrowBackOutline, IoEye } from "react-icons/io5";

import projet from "../data/projet.json";

import './AccueilView.css';

const AccueilView = () => {
    const { pos } = useParams();
    
    const project = projet[pos - 1];

    console.log(project.galerie_img[0])
    console.log(project.img)

    return (
    <div className="page-accueilView">
        {/* overlay dark */}
        <Link to={`/accueil`} className="overlay"></Link>
        {/* <div className="overlay"></div> */}

        <article>
            <div className="anchor">

                <Link to={`/accueil`} className="retour">
                    <IoArrowBackOutline/>
                </Link>
                
                <div className="logi-projet">
                    <img
                        src={`/${project.logoLogi}`}
                        alt="logo_logiciel"
                    />
                </div>

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
                        <Carousel>
                            {project.galerie_img.map((image, index) => (
                                <div key={index}>
                                    <img src={`/${project.galerie_img[index]}`} alt={` /${project.galerie_img[index]}`} />
                                </div>
                            ))}
                        </Carousel>
                        // <>
                        //     <img
                        //         src={`/${projet[pos - 1].img}`}
                        //         alt={projet[pos - 1].nom}
                        //     />
                        // </>
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

                    <div className="view-link">
                        {projet[pos - 1].hasLink ? (
                            <>
                                <Link to={projet[pos - 1].link} target="_blank">
                                    <IoEye/>
                                    <p>Check it out !</p>
                                </Link>
                            </>
                        ) : (
                            <>
                                
                            </>
                        )}
                    </div>
                </div>
            </div>


        </article>
    </div>
    );
};

export default AccueilView;
