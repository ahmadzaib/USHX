import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
import ApartmentCard from "./appartmentCard";

export default function Apartment({ title }) {
  function SampleNextArrow(props) {
    const { collectionSliderArrow, style, onClick } = props;
    return (
      <div
        className="collectionSliderArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { collectionSliderArrowPrev, style, onClick } = props;
    return (
      <div
        className="collectionSliderArrowPrev"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  }
  var ApartmentSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: 'linear',
    variableWidth: true,
    arrow: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className="apartment-section ">
      <div className="container">
        <h2 className="main-title-head">{title}</h2>
        <p>11700 washington street, new york, USA</p>
      </div>
      <div className="apartment-slider">
        <Slider {...ApartmentSlider}>
          <div className="">
            <ApartmentCard />
          </div>
          <div className="">
            <ApartmentCard />
          </div>
          <div className="">
            <ApartmentCard />
          </div>
          <div>
            <ApartmentCard />
          </div>
          <div className="">
            <ApartmentCard />
          </div>
          <div className="">
            <ApartmentCard />
          </div>
        </Slider>
      </div>
    </section>
  );
}
