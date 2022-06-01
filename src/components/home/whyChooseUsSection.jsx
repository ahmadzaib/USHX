import { Link } from "react-router-dom";
import VideoModal from "../../modal/videoModal";
import React from "react";
import { useState } from "react";
import {
  appstoreImage,
  googlePlayStoreImage,
  videoIcon,
  whyChooseUsBuildingImage,
} from "../../utils/images";

export default function WhyChooseUs() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className="why-chose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6 chose-main-info">
            <div>
              <h5 className="feature-title">
                <span>Get Paid To </span> Exercise with USHX
              </h5>
              <p className="about-feature">
                Just download the app, and start earning for the every calory
                your burn.
              </p>
              <p className="about-feature">
                You also get access to tons of the exclusive offers and deals.
                You can use earning to get discounts or bank your cash to your
                Paypal account.
              </p>
              <p className="about-feature">
                This is an exclusive offer to our member’s club to gain health
                and wealth as the same time.
              </p>
              <h6>Download Application Now:</h6>
              <div className="app-download">
                <Link href="">
                  <img
                    className="logo-download-app"
                    src={googlePlayStoreImage}
                    alt="Icon"
                  />
                </Link>
                <Link href="">
                  <img
                    className="logo-download-app"
                    src={appstoreImage}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="our-choices">
              <img className="" src={whyChooseUsBuildingImage} alt="Icon" />
              <button
                type="button"
                onClick={() => setModalShow(true)}
                class="video-btn video-icon"
              >
                <img className="" src={videoIcon} alt="Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}
