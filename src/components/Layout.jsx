import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";

const Layout = () => (
  <>
    <div className="bg" aria-hidden="true" />
    <Nav />
    <main>
      <Outlet />
    </main>
    <Footer />
    <Reveal />
    <ScrollRestoration />
  </>
);

export default Layout;
