import Header from "./header";
import Footer from "./footer";
import Waves from './Waves';    //test

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (

        <div className="layout" >

            <Waves
                // lineColor="rgba(38, 39, 44, 1)"
                lineColor="rgba(53, 54, 59, 1)"
                backgroundColor="#2A2B30"
                waveSpeedX={0.05}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={20}
                yGap={36}
            />

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