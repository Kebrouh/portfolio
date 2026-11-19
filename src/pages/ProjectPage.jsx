import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLang, useProjects } from "../i18n";
import Gallery from "../components/Gallery";

const ProjectPage = () => {
  const { slug } = useParams();
  const { t } = useLang();
  const projects = useProjects();

  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  useEffect(() => {
    if (project) document.title = `${project.name} · Olivier Daigneault`;
    return () => {
      document.title = "Olivier Daigneault — Level designer · 3D · Web";
    };
  }, [project]);

  // Ancien format /projet/3
  if (!project && /^\d+$/.test(slug)) {
    const legacy = projects[Number(slug) - 1];
    if (legacy) return <Navigate to={`/projet/${legacy.slug}`} replace />;
  }

  if (!project) {
    return (
      <section className="section wrap">
        <p>{t.project.notFound}</p>
        <Link to="/" className="btn btn-ghost">
          {t.project.back}
        </Link>
      </section>
    );
  }

  const typeLabel = t.types[project.type] || project.type;
  const showType = !project.label.toLowerCase().includes(typeLabel.toLowerCase());
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="project wrap">
      <Link to="/#work" className="back">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
        {t.project.back}
      </Link>

      <div className="project-layout">
        <Gallery images={project.images} name={project.name} />

        <div className="project-info">
          <h1>{project.name}</h1>
          <p className="project-meta">
            {showType ? `${typeLabel} · ${project.label}` : project.label}
          </p>

          {project.long.split("\n\n").map((para) => (
            <p key={para.slice(0, 30)}>{para}</p>
          ))}

          {project.tools.length > 0 && (
            <p className="project-tools">
              {t.project.tools}: {project.tools.join(" · ")}
            </p>
          )}

          {project.link && (
            <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
              {t.project.visit}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <nav className="pager" aria-label="Projects">
        <Link to={`/projet/${prev.slug}`}>
          <span>← {t.project.prev}</span>
          <strong>{prev.name}</strong>
        </Link>
        <Link to={`/projet/${next.slug}`} className="pager-next">
          <span>{t.project.next} →</span>
          <strong>{next.name}</strong>
        </Link>
      </nav>
    </article>
  );
};

export default ProjectPage;
