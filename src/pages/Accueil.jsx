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
            PAGE ACCUEIL

            {/* Afficher la vue-enfant ici */}
            <div>
                <Outlet />
            </div>

            <div className="filter">
                <DropdownFilter types={projectTypes} onChangeFilter={handleChangeFilter} />
            </div>

            GRILLE PROJET
            <div className="grid-projet">
                {filteredProjects.map(({ nom, description, img, gif, hasVid }, i) => (
                    <div className="vignette-projet" key={i}>
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
