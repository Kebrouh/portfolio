import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

const Nav = () => {
  const { t, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    ["work", "/#work"],
    ["about", "/#about"],
    ["experience", "/#experience"],
    ["contact", "/#contact"],
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Olivier Daigneault">
          <span className="brand-mark">OD</span>
          <span className="brand-name">Olivier Daigneault</span>
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main">
          {links.map(([key, to]) => (
            <Link key={key} to={to} onClick={close}>
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="lang-btn" onClick={toggle} aria-label={t.langLabel}>
            {t.lang}
          </button>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
