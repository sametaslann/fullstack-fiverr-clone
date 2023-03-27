import "./Slide.scss";
import Slider from "infinite-react-carousel";

function Slide({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="slide">
      <div className="header">
        <h1>Popular professional services</h1>
      </div>
      <div className="container">
        <div className="cards">
          {
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
              {children}
            </Slider>
          }
        </div>
      </div>
    </div>
  );
}

export default Slide;
