import {
  tokenImage,
  tokenMassageViewImage,
  tokenScanBarImage,
} from "../../utils/images";

export default function TokenSection() {
  return (
    <section class="help-find">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 chose-main-info">
            <div class="help-find-feature">
              <h5 class="feature-title pt-0">
                <span>US Housing</span>Exchange Token
              </h5>
              <p class="about-feature">
                We will have a bank of our own exchange platform and the pool of
                people paying the $100 worth of crypto will be used to buy back
                tokens and the monthly difference will be put into marketing,
                site development, staff, and operations, new enhancements
              </p>
              <button class="token-bth">view more</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="scan-bar">
                  <img
                    class="scanbar-image"
                    src={tokenScanBarImage}
                    alt="Icon"
                  />
                  <img
                    class="notification-option"
                    src={tokenMassageViewImage}
                    alt="Icon"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="main-scan-bar">
                  <div class="serving-hours">
                    <div class="serving-connters">
                      <div class="display-main">
                        <img src={tokenImage} alt="Icon" />
                        <p>USNX Token is Ethereume base</p>
                      </div>
                    </div>
                  </div>
                  <div class="buy-token">
                    <h6>Buy Token from the exchange</h6>
                    <p>
                      <i class="fas fa-star"></i> 4.9 (5.8k review)
                    </p>
                    <button>Buy Token</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
