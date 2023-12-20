import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import DropdownFilter from "./../components/DropdownFilter";

import './Accueil.css';

const Accueil = ({ projet = [] }) => {
    const [filter, setFilter] = useState('all');

    const handleChangeFilter = selectedFilter => {
        setFilter(selectedFilter);
    };

    const filteredProjects = filter === "all" ? projet : projet.filter(p => p.type === filter);

    const projectTypes = [...new Set(projet.map(p => p.type))]; // Extract unique project types

    return (
        <div className="page-accueil">

            {/* Afficher la vue-enfant ici */}
            <div>
                <Outlet />
            </div>

            <div className="section-projet">
                <div className="a-propos">
                    <div className="about">
                        <h2>About me :</h2>
                        <p>My career goal is to specialize in the modeling of 3D environments and objects, as well as 3D animation. I’m very versatile in the multimedia field, from Web development to video editing. I enjoy taking on new challenges to improve my knowledge. </p>
                    </div>
                    <div className="liste-skills">
                        <h2>Skills</h2>
                        <ul>
                            <h3>3D Modeling</h3>
                            <li>Object and character modeling</li>
                            <li>3D Animation</li>
                            <li>3D Texturing</li>
                        </ul>
                        <ul>
                            <h3>Games Development</h3>
                            <li>Video game programming</li>
                            <li>Creation of particle systems</li>
                            <li>Game design</li>
                        </ul>
                        <ul>
                            <h3>Web Development</h3>
                            <li>Graphic design</li>
                            <li>Programming <br/>(HTML, CSS, JavaScript)</li>
                            <li>Website hosting</li>
                        </ul>
                        <ul>
                            <h3>Design</h3>
                            <li>Intuitive user interface</li>
                            <li>Intuitive user interface</li>
                            <li>Creating attractive experiences</li>
                        </ul>
                    </div>
                </div>

                <div className="filter">
                    <DropdownFilter types={projectTypes} onChangeFilter={handleChangeFilter} />
                </div>

                <div className="grid-projet">
                    {filteredProjects.map(({ nom, description, long_description, img, gif, hasVid, logoLogi }, i) => {
                        const originalIndex = projet.findIndex(p => p.nom === nom); // Find original index
                        return (
                            <div className="vignette-projet" key={originalIndex}>
                                <Link to={`/accueil/${originalIndex + 1}`}>
                                    {hasVid ? (
                                        <>
                                            <img
                                                src={`/img/${gif}`}
                                                alt={nom}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <img
                                                src={`/${img}`}
                                                alt={nom}
                                            />
                                        </>
                                    )}

                                    <div className="logi-projet">
                                        <img
                                            src={`/${logoLogi}`}
                                            alt="logo_logiciel"
                                        />
                                    </div>

                                    <div className="info-projet">
                                        <h2>{nom}</h2>
                                        <p>{description}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Accueil;