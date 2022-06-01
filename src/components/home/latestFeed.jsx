import React from "react";
import ReactStars from "react-rating-stars-component";
import { feedCardContent } from "../../utils/constant";
export default function LatestFeedSection() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section class="latest-feed-section">
      <div class="container">
        <h2>Latest Feed</h2>
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
                  <h4>{val.feedCardHeading}</h4>
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
        <div class="view-more-feed">
          <button>View More</button>
        </div>
      </div>
    </section>
  );
}
