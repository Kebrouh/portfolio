import { Link } from "react-router-dom";

const MenuView = () => {

    return (
    <div className="relative">
        {/* overlay dark */}
        <div className="overlay"></div>

        <article>

        {/* pop-up header */}
        <div>
            <h2>projet X</h2>
        </div>

        {/* section img & cpt */}
        <div>
            
            {/* img */}
            <img src="./../../public/img/no-img.png" alt="placeholder" />
        </div>
        
        {/* section info */}
        <div>
            <p>description</p>
        </div>

        </article>
    </div>
    );
};

export default MenuView;
