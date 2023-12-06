import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>

            {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;