import "./CategoryCard.scss";
import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="categoryCard">
        <img src={item.img} />
        <span className="title">{item.title}</span>
        <span className="desc">{item.desc}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
