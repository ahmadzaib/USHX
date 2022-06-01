import React from "react";
import ReactStars from "react-rating-stars-component";
import { apartmentCardContent } from "../../utils/constant";

export default function ApartmentCard() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            {apartmentCardContent.map((val, key) => (

                <div class="apartment-card">
                    <div class="feed-card-img">
                        <img src={val.feedCardImg} alt="" />
                        <span>{val.feedCardTag}</span>
                    </div>
                    <div class="feed-card-description">
                        <p className="price-info">{val.feedCardStartPrice}</p>
                        <h4 className="name-clint">{val.feedCardHeading}</h4>
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

            ))}
        </>
    )
}