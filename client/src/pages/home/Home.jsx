import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards, projects } from "../../data.js";

import "./Home.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards &&
          cards?.map((card) => <CategoryCard key={card.id} item={card} />)}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.{" "}
            </p>
          </div>

          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects &&
          projects?.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
      </Slide>
    </div>
  );
}

export default Home;
