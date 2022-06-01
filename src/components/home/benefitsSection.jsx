import {
  benefitsImageFour,
  benefitsImageOne,
  benefitsImageThree,
  benefitsImageTwo,
  benefitsListIcon,
  benefitsMembersIcon,
} from "../../utils/images";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="benefits-content">
              <h2>
                <span>Founders Group for</span> USHX
              </h2>
              <p>Benefits:</p>
              <ul className="benefits-list">
                <li>
                  <span>
                    <img src={benefitsListIcon} alt="Icon" />
                  </span>
                  <span>Access to the exercise app.</span>
                </li>
                <li>
                  <span>
                    <img src={benefitsListIcon} alt="Icon" />
                  </span>
                  <span>
                    $100 worth of USHX monthly out of your work outs Reserved
                    space even when you temprorarly falls out of good standing
                  </span>
                </li>
                <li>
                  <span>
                    <img src={benefitsListIcon} alt="Icon" />
                  </span>
                  <span>
                    Life Style 2.0 perks (included) get list Founders group
                    members can cash out through the exchange minimum $1000
                  </span>
                </li>
              </ul>
              <h4>Members Statistics:</h4>
              <div className="total-members">
                <span>
                  <img src={benefitsMembersIcon} alt="" />
                </span>
                <span>1,000</span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="benefits-images">
              <div>
                <img src={benefitsImageOne} alt="Image" />
              </div>
              <div className="benefits-images-second-child">
                <img src={benefitsImageTwo} alt="Image" />
              </div>
              <div className="benefits-images-third-child">
                <img src={benefitsImageThree} alt="Image" />
              </div>
              <div>
                <img src={benefitsImageFour} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
