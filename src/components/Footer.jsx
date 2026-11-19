import { useLang } from "../i18n";
import { site } from "../content/site";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
        <ul>
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
