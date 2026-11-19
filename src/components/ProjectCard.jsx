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
        <span className="card-type">{t.types[project.type] || project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.label}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
