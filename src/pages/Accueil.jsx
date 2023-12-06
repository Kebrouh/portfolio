import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {

return (
    <div>
        ligmaballz

        {/* Afficher la vue-enfant ici */}
        <div>
            <Outlet />
        </div>
    </div>
);
};

export default Menu;