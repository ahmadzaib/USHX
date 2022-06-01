import {
  kitchenImage,
  houseTwoImage,
  houseView,
  parkView,
  diningView,
} from "../../utils/images";

export default function DetailBanner() {
  return (
    <>
      <section class="hero-banner-detail">
        <div class="container pt-4 pt-sm-5">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <img
                class="detail-images"
                src={kitchenImage}
                alt="Detail-house-Image"
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="row">
                <div class="col-sm-6 main-banner-img">
                  <img
                    class="detail-images"
                    src={houseTwoImage}
                    alt="Detail-house-Image"
                  />
                </div>
                <div class="col-sm-6 main-banner-img">
                  <img
                    class="detail-images"
                    src={houseView}
                    alt="Detail-house-Image"
                  />
                </div>
                <div class="col-sm-6 house-detail-images">
                  <img
                    class="detail-images"
                    src={parkView}
                    alt="Detail-house-Image"
                  />
                </div>
                <div class="col-sm-6 house-detail-images">
                  <img
                    class="detail-images"
                    src={diningView}
                    alt="Detail-house-Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
