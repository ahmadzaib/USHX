import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { testimonialContent } from "../../utils/constant";
import { Link } from "react-router-dom";
export default function TestimonialSection() {
  <div>
    <div className="slick-prev-arrow" onClick={() => this.slider.slickPrev()}>
      <FaArrowLeft />
    </div>
    <div className="arrow-btn next" onClick={() => this.slider.slickNext()}>
      <FaArrowRight />
    </div>
  </div>;
  const settings = {
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
  };
  return (
    <section className="testimonials">
      <div className="container">
        <div className="main-prnt-div">
          <div className="main-child-div">
            <h2 className="banner-head clr">Members Success Story</h2>
          </div>
          <Slider {...settings}>
            {testimonialContent.map((val, key) => (
              <div>
                <p className="client-review">
                  <span>
                    <img src={val.testimonialIcon} alt="" />
                  </span>
                  {val.testimonialDesc}
                </p>
                <div className="client-detail">
                  <div className="client-img">
                    <img src={val.testimonialClientImage} alt="Client Image" />
                  </div>
                  <div className="client-detail-child">
                    <h5>{val.testimonialClientName}</h5>
                    <Link to="/">{val.testimonialClientLink}</Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* <div className="mian-child-2 slider">
                    <div>
                        <p className="client-review">
                            <span>
                                <img src="./assets/images/Vector-quots.png" alt="">
                            </span>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                        </p>
                        <div className="client-detail">
                            <div className="client-img">
                                <img src="./assets/Images/Client-1.png" alt="Client Image">
                            </div>
                            <div className="client-detail-child">
                                <h5>
                                    Chuan Allen
                                </h5>
                                <a href="#">
                                    @chuanAllen
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="client-review">
                            <span>
                                <img src="./assets/images/Vector-quots.png" alt="">
                            </span>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                        </p>
                        <div className="client-detail">
                            <div className="client-img">
                                <img src="./assets/Images/Client-1.png" alt="Client Image">
                            </div>
                            <div className="client-detail-child">
                                <h5>
                                    Chuan Allen
                                </h5>
                                <a href="#">
                                    @chuanAllen
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="client-review">
                            <span>
                                <img src="./assets/images/Vector-quots.png" alt="">
                            </span>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                        </p>
                        <div className="client-detail">
                            <div className="client-img">
                                <img src="./assets/Images/Client-1.png" alt="Client Image">
                            </div>
                            <div className="client-detail-child">
                                <h5>
                                    Chuan Allen
                                </h5>
                                <a href="#">
                                    @chuanAllen
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
    </section>
  );
}
