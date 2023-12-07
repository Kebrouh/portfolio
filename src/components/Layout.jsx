import Header from "./header";
import Footer from "./footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>

            <div>
                <Header />
            </div>

            {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
            <main>
                <Outlet />
            </main>

            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Layout;