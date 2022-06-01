import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
import {
  HouseView,
  WhiteHouse,
  HouseFront,
  GreenHouse,
} from "../../utils/images";

export default function Gallery({ title }) {
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
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    arrow: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="gallery-section">
      <h2 className="main-title-head">{title}</h2>
      <Slider {...settings}>
        <div className="gallery-slider">
          <img
            class="gallery-slider-image"
            src={HouseFront}
            alt="Detail-house-Image"
          />
        </div>
        <div className="gallery-slider">
          <img
            class="gallery-slider-image"
            src={WhiteHouse}
            alt="Detail-house-Image"
          />
        </div>
        <div className="gallery-slider">
          <img
            class="gallery-slider-image"
            src={HouseFront}
            alt="Detail-house-Image"
          />
        </div>
        <div>
          <img
            class="gallery-slider-image"
            src={GreenHouse}
            alt="Detail-house-Image"
          />
        </div>
        <div className="gallery-slider">
          <img
            class="gallery-slider-image"
            src={WhiteHouse}
            alt="Detail-house-Image"
          />
        </div>
        <div className="gallery-slider">
          <img
            class="gallery-slider-image"
            src={GreenHouse}
            alt="Detail-house-Image"
          />
        </div>
      </Slider>
    </section>
  );
}
