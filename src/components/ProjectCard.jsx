import { Link } from "react-router-dom";
import { useLang } from "../i18n";

const ProjectCard = ({ project, size = "md" }) => {
  const { t } = useLang();
  const typeLabel = t.types[project.type] || project.type;
  const showType = !project.label.toLowerCase().includes(typeLabel.toLowerCase());
  return (
    <Link to={`/projet/${project.slug}`} className={`card card-${size} reveal`}>
      <div className="card-media">
        <img src={project.cover} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>
          {showType ? `${typeLabel} · ${project.label}` : project.label}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
