import {
  OurSpecialFeatureBuildingImage,
  OurSpecialFeatureRoomImage,
} from "../../utils/images";

export default function OurSpecialFeature() {
  return (
    <section class="special-features">
      <div class="container">
        <h5 class="feature-title">Our Special features </h5>
        <div class="row">
          <div class="col-lg-6 col-md-12 p-lg-0 market-main">
            <div class="main-features">
              <h6 class="main-title">Modern</h6>
              <p class="about-feature">
                House sale chose to work together with the Lebanese designer
                Nada Debs. We are thrilled to present this collaboration and the
                LJUV collection, and we hope that you can see, feel, use the
                connection between a designer from the Middle East democratic
                design. Nada Debs is a Levantine designer living and working in
                Beirut. Her work spans scale and discipline: from product to
                furniture design to one-off commission across craft, art,
                fashion, and interiors.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 p-lg-0">
            <img
              class="feature-images"
              src={OurSpecialFeatureBuildingImage}
              alt="Icon"
            />
          </div>
        </div>
        <div class="row feature-flex">
          <div class="col-lg-6 col-md-12 p-lg-0 order-mobile">
            <img
              class="feature-images"
              src={OurSpecialFeatureRoomImage}
              alt="Icon"
            />
          </div>
          <div class="col-lg-6 col-md-12 p-lg-0 market-main">
            <div class="main-features good-sale">
              <h6 class="main-title">Good Sale</h6>
              <p class="about-feature">
                House sale chose to work together with the Lebanese designer
                Nada Debs. We are thrilled to present this collaboration and the
                LJUV collection, and we hope that you can see, feel, use the
                connection between a designer from the Middle East democratic
                design. Nada Debs is a Levantine designer living and working in
                Beirut. Her work spans scale and discipline: from product to
                furniture design to one-off commission across craft, art,
                fashion, and interiors.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div class="row feature-flex">
          <div class="col-lg-6 col-md-12 p-lg-0 market-main">
            <div class="main-features">
              <h6 class="main-title">Comfort</h6>
              <p class="about-feature">
                House sale chose to work together with the Lebanese designer
                Nada Debs. We are thrilled to present this collaboration and the
                LJUV collection, and we hope that you can see, feel, use the
                connection between a designer from the Middle East democratic
                design. Nada Debs is a Levantine designer living and working in
                Beirut. Her work spans scale and discipline: from product to
                furniture design to one-off commission across craft, art,
                fashion, and interiors.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 p-lg-0">
            <img
              class="feature-images"
              src={OurSpecialFeatureBuildingImage}
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
