import "./ProjectCard.scss";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <Link to="/gigs?cat=design" className="link">
      <div className="projectCard">
        <img src={item.img} />
        <div className="profile">
          <img src={item.pp} className="pp" />
          <div className="info">
            <span className="cat">{item.cat}</span>
            <span className="username">{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
