import { latestNewsContent } from "../../utils/constant";
export default function LatestNews() {
  return (
    <section className="latest-news-section">
      <div className="container">
        <h5 className="feature-title">News and Update</h5>
        <div className="row">
          {latestNewsContent.map((val, key) => (
            <div className="col-md-4">
              <div className="suitable-card">
                <div className="suitable-card-img news-card-top position-relative">
                  <div className="overlay-news-image"></div>
                  <img src={val.latestNewsImage} alt="Image" />
                  <a href="">
                    <img src={val.latestNewsIcon} alt="" />
                  </a>
                </div>
                <h3>{val.latestNewsHeading}</h3>
                <p>{val.latestNewsDesc}</p>
              </div>
            </div>
          ))}
          {/* <div className="col-md-4">
                    <div className="suitable-card">
                        <div className="suitable-card-img news-card-top position-relative">
                            <div className="overlay-news-image"></div>
                            <img src="./assets/images/card-imge-two.png" alt="Image">
                            <a href="">
                                <img src="./assets/images/news-play-icon.svg" alt="">
                            </a>
                        </div>
                        <h3>
                            An Ugly Myspace Profile Will Sure
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="suitable-card">
                        <div className="suitable-card-img news-card-top position-relative">
                            <div className="overlay-news-image"></div>
                            <img src="./assets/images/card-imge-three.png" alt="Image">
                            <a href="">
                                <img src="./assets/images/news-play-icon.svg" alt="">
                            </a>
                        </div>
                        <h3>
                            Capital Contributor
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div> */}
        </div>
        <div class="view-more-feed">
          <button>View More</button>
        </div>
      </div>
    </section>
  );
}
