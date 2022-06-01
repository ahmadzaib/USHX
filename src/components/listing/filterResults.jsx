import { feedCardContent } from "../../utils/constant";
import ReactStars from "react-rating-stars-component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { detail } from "../../routers/routePath";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function FiltersResults() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className="filter-results">
      <div className="container">
        <h2>Apartments</h2>
        <h6 className="filter-description">
          11700 washington street, new york, USA
        </h6>
        <div class="row">
          {feedCardContent.map((val, key) => (
            <div class="col-md-6 mt-4">
              <div class="feed-card">
                <div class="feed-card-img">
                  <img src={val.feedCardImg} alt="" />
                  <span>{val.feedCardTag}</span>
                </div>
                <div class="feed-card-description">
                  <p>{val.feedCardStartPrice}</p>
                  <h4>
                    <Link to={detail}>{val.feedCardHeading}</Link>
                  </h4>
                  <h5>{val.feedCardSubHeading}</h5>
                  <div class="feed-rating mb-3">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#d7524d"
                    />
                  </div>
                  <div class="feed-card-info">
                    <div>
                      <span>
                        <img src={val.feedCardBedIcon} alt="BedIcon" />
                      </span>
                      <span>{val.feedCardBedInfo}</span>
                    </div>
                    <div>
                      <span>
                        <img src={val.feedCardSpaceIcon} alt="" />
                      </span>
                      <span>{val.feedCardSpaceInfo}</span>
                    </div>
                    <div>
                      <span>
                        <img src={val.feedCardBathIcon} alt="" />
                      </span>
                      <span>{val.feedCardBathInfo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div class="col-md-6">
                    <div class="feed-card">
                        <div class="feed-card-img">
                            <img src="./assets/images/feed-card-image.svg" alt="">
                            <span>
                                Rent
                            </span>
                        </div>
                        <div class="feed-card-description">
                            <p>
                                Starting From $1000
                            </p>
                            <h4>
                                Michal Jhone Home
                            </h4>
                            <div class="feed-rating">
                                <div class='rating-widget'>
                                    <div class='rating-stars'>
                                        <ul id='stars'>
                                            <li class='star' title='Poor' data-value='1'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Fair' data-value='2'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Good' data-value='3'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Great' data-value='4'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Excellent' data-value='5'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-card-info">
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bed-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-space-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2561 sq ft
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bath-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-4">
                    <div class="feed-card">
                        <div class="feed-card-img">
                            <img src="./assets/images/feed-card-image.svg" alt="">
                            <span>
                                Rent
                            </span>
                        </div>
                        <div class="feed-card-description">
                            <p>
                                Starting From $1000
                            </p>
                            <h4>
                                Michal Jhone Home
                            </h4>
                            <div class="feed-rating">
                                <div class='rating-widget'>
                                    <div class='rating-stars'>
                                        <ul id='stars'>
                                            <li class='star' title='Poor' data-value='1'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Fair' data-value='2'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Good' data-value='3'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Great' data-value='4'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Excellent' data-value='5'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-card-info">
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bed-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-space-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2561 sq ft
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bath-icon.svg" alt="" />
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-4">
                    <div class="feed-card">
                        <div class="feed-card-img">
                            <img src="./assets/images/feed-card-image.svg" alt="">
                            <span>
                                Rent
                            </span>
                        </div>
                        <div class="feed-card-description">
                            <p>
                                Starting From $1000
                            </p>
                            <h4>
                                Michal Jhone Home
                            </h4>
                            <div class="feed-rating">
                                <div class='rating-widget'>
                                    <div class='rating-stars'>
                                        <ul id='stars'>
                                            <li class='star' title='Poor' data-value='1'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Fair' data-value='2'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Good' data-value='3'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Great' data-value='4'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                            <li class='star' title='Excellent' data-value='5'>
                                                <i class='fa fa-star fa-fw'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-card-info">
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bed-icon.svg" alt="">
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-space-icon.svg" alt="">
                                    </span>
                                    <span>
                                        2561 sq ft
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src="./assets/images/feed-card-bath-icon.svg" alt="">
                                    </span>
                                    <span>
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
        <div className="result-pagination mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">
                  {" "}
                  <FaChevronLeft />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <FaChevronRight />{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
