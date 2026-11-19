import { Link } from "react-router-dom";
import { useLang } from "../i18n";

const ProjectCard = ({ project, size = "md" }) => {
  const { t } = useLang();
  return (
    <Link to={`/projet/${project.slug}`} className={`card card-${size} reveal`}>
      <div className="card-media">
        <img src={project.cover} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>
          {t.types[project.type] || project.type} · {project.label}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
