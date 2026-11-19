import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLang, useProjects } from "../i18n";
import { site } from "../content/site";
import ProjectCard from "../components/ProjectCard";

const Hero = () => {
  const { t } = useLang();
  return (
    <section className="hero wrap">
      <div className="hero-text">
        <h1>Olivier Daigneault</h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <p className="hero-status">{t.hero.eyebrow}</p>
        <div className="cta">
          <a href="#work" className="btn btn-primary">
            {t.hero.ctaWork}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.ctaCv}
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src="/moi.webp" alt="Olivier Daigneault" width="480" height="480" />
      </div>
    </section>
  );
};

const Featured = ({ projects }) => {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  if (!featured.length) return null;
  return (
    <section className="section wrap" id="featured">
      <header className="section-head">
        <h2>{t.featured.title}</h2>
        <p>{t.featured.sub}</p>
      </header>
      <div className="featured-grid">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} size={i === 0 ? "lg" : "md"} />
        ))}
      </div>
    </section>
  );
};

const Work = ({ projects }) => {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const types = useMemo(() => [...new Set(projects.map((p) => p.type))], [projects]);
  const shown = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="section wrap" id="work">
      <header className="section-head">
        <h2>{t.work.title}</h2>
        <p>{t.work.count(shown.length)}</p>
      </header>
      <div className="filters" role="tablist" aria-label={t.work.title}>
        {["all", ...types].map((ty) => (
          <button
            key={ty}
            type="button"
            role="tab"
            aria-selected={filter === ty}
            className={filter === ty ? "on" : ""}
            onClick={() => setFilter(ty)}
          >
            {ty === "all" ? t.work.all : t.types[ty] || ty}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const { t, lang } = useLang();
  return (
    <section className="section wrap" id="about">
      <header className="section-head">
        <h2>{t.about.title}</h2>
      </header>
      <div className="about">
        <div className="about-text">
          {site.about[lang].map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="skills">
          {site.skills[lang].map((g) => (
            <div className="skill" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const { t, lang } = useLang();
  return (
    <section className="section wrap" id="experience">
      <header className="section-head">
        <h2>{t.experience.title}</h2>
      </header>
      <ol className="timeline">
        {site.experience.map((e) => (
          <li key={e.org + e.role.en}>
            <div className="tl-meta">
              <span className="tl-org">{e.org}</span>
              {e.period && <span>{e.period[lang]}</span>}
            </div>
            <div className="tl-body">
              <h3>{e.role[lang]}</h3>
              <p>{e.text[lang]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

const Contact = () => {
  const { t } = useLang();
  return (
    <section className="section wrap" id="contact">
      <div className="contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>
        <a className="contact-mail link" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="cta">
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            {t.contact.email}
          </a>
          <a className="btn btn-ghost" href="/Olivier_Daigneault_cv_EN_2025.pdf" target="_blank" rel="noopener noreferrer">
            {t.contact.cv} · {t.contact.cvEn}
          </a>
          <a className="btn btn-ghost" href="/Olivier_Daigneault_cv_FR_2025.pdf" target="_blank" rel="noopener noreferrer">
            {t.contact.cv} · {t.contact.cvFr}
          </a>
        </div>
        
      </div>
    </section>
  );
};

const Home = () => {
  const projects = useProjects();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <Hero />
      <Featured projects={projects} />
      <Work projects={projects} />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
