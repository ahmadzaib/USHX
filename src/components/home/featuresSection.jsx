import { featuresContent } from "../../utils/constant";

export default function FeaturesSection() {
  return (
    <section class="UShx-Features">
      <div class="container">
        <div class="row">
          <div class="col-md-6 chose-main-info">
            <div class="features-display">
              <h5 class="feature-title pt-0">USHX Features</h5>
              <p class="about-feature">
                We will have a bank of our own exchange platform and the pool of
                people paying the $100 worth of crypto will be used to buy back
                tokens and the monthly difference will be put into marketing,
                site development, staff and operations, new enhancements.
              </p>
              <p class="about-feature">
                Odds will be tracked on what percentage of people will want to
                liquidate their tokens every $1000 so we can get aggressive with
                liquating the tokens.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row features-border">
              {featuresContent.map((val, key) => (
                <div class="col-md-6">
                  <div class="feature-titles">
                    <div class="round-icon">
                      <img src={val.featuresIcon} alt="Icon" />
                    </div>
                    <h5>{val.featuresHeading}</h5>
                    <p>{val.featuresDesc}</p>
                  </div>
                </div>
              ))}
              {/* // <div class="col-md-6">
                        //     <div class="feature-titles">
                        //         <div class="round-icon">
                        //             <img src="./assets/images/man-icon.svg" alt="Icon">
                        //         </div>
                        //         <h5>USHX Marketplace</h5>
                        //         <p>See fixed prices before you book. </p>
                        //     </div>
                        // </div>
                        // <div class="col-md-6">
                        //     <div class="feature-titles">
                        //         <div class="round-icon">
                        //             <img src="./assets/images/man-icon.svg" alt="Icon">
                        //         </div>
                        //         <h5>USHX Social Media Platform</h5>
                        //         <p>See fixed prices before you book. </p>
                        //     </div>
                        // </div>
                        // <div class="col-md-6">
                        //     <div class="feature-titles">
                        //         <div class="round-icon">
                        //             <img src="./assets/images/electric-icon.svg" alt="Icon">
                        //         </div>
                        //         <h5>USHX Token</h5>
                        //         <p>See fixed prices before you book. </p>
                        //     </div>
                        // </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
