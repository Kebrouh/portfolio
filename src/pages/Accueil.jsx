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