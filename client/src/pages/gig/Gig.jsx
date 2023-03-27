import Slider from "infinite-react-carousel";
import "./Gig.scss";
import { gigs } from "../../data.js";

function Gig() {
  const item = gigs[1];

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            {" "}
            FIVERR &gt; GRAPHICS & DESIGN &gt;
          </span>
          <h1>{item.desc}</h1>
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, hic
            quae ipsa modi recusandae corrupti sequi architecto possimus fugit
            facere blanditiis atque sit, nobis aliquid id voluptas odit
            cupiditate omnis!
          </p>

          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src={item.pp} alt="" />
              <div className="info">
                <span>{item.username}</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 Hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                I am a computer engineer and graphic designer. I do all kind of
                tasks related to IT and digital design creation. Currently
                specializing in art created through digital intelligence and
                computer.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>

            <div className="item">
              <div className="user">
                <img src={item.pp} alt="" />

                <div className="info">
                  <span>Samet Aslan</span>

                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>Turkey</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                quibusdam sed cupiditate nostrum id totam ipsam non optio
                placeat! Consequatur rem sequi sed ab facilis, id esse maxime.
                Nostrum, aspernatur.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>

                <img src="/img/dislike.png" alt="" />

                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={item.pp} alt="" />

                <div className="info">
                  <span>Samet Aslan</span>

                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>Turkey</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                quibusdam sed cupiditate nostrum id totam ipsam non optio
                placeat! Consequatur rem sequi sed ab facilis, id esse maxime.
                Nostrum, aspernatur.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <img src="/img/dislike.png" alt="" />

                <span>Yes</span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="title">
            <h3>1 AI Generated Image</h3>
            <h2>$ {59.99}</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            desctrition that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>Unlimited Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
