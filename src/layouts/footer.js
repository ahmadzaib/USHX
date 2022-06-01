import { Link } from "react-router-dom";
import {
  appstoreImage,
  footerFbIcon,
  footerInstagramIcon,
  footerLinkedinIcon,
  footerTwitterIcon,
  googlePlayStoreImage,
  LogoBlue,
} from "../utils/images";

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row mb-3">
            <div class="col-md-3">
              <div class="footer-content">
                <img src={LogoBlue} alt="icon" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  commodo dapibus fermentum.
                </p>
                <div className="footer-contact">
                  <h2>
                    <span className="contact-to">Phone No :</span>
                    <span>042 (4567) 85423</span>
                  </h2>
                  <h2>
                    <span className="contact-to">Email :</span>
                    <span>ushx@gmail.com</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="footer-link">
                <h2>Site Menu</h2>
                <Link to="/">Social Media</Link>
                <Link to="/">Properties</Link>
                <Link to="/">USHX Token </Link>
                <Link to="/">Realtors</Link>
                <Link to="/">Investors </Link>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer-link">
                <h2>State Links</h2>
                <div className="state-links">
                  <div>
                    <Link to="/">Alabama</Link>
                    <Link to="/">Alaska</Link>
                    <Link to="/">Arizona </Link>
                    <Link to="/">Arkansas</Link>
                    <Link to="/">California </Link>
                  </div>
                  <div>
                    <Link to="/">Colorado</Link>
                    <Link to="/">Florida</Link>
                    <Link to="/">Hawaii </Link>
                    <Link to="/">Kentucky</Link>
                    <Link to="/">Michigan </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="footer-link">
                <h2>Site Menu</h2>
                <div className="footer-tags">
                  <div>
                    <Link to="/">#realestate</Link>
                  </div>
                  <div>
                    <Link to="/">#home </Link>
                  </div>
                  <div>
                    <Link to="/">#property </Link>
                  </div>
                  <div>
                    <Link to="/">#investment</Link>
                  </div>
                  <div>
                    <Link to="/">#forsale</Link>
                  </div>
                  <div>
                    <Link to="/">#realtorlife</Link>
                  </div>
                  <div>
                    <Link to="/">#realestate</Link>
                  </div>
                  <div>
                    <Link to="/">#home </Link>
                  </div>
                  <div>
                    <Link to="/">#property </Link>
                  </div>
                  <div>
                    <Link to="/">#investment</Link>
                  </div>
                  <div>
                    <Link to="/">#forsale</Link>
                  </div>
                  <div>
                    <Link to="/">#realtorlife </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div class="footer-icon">
              <Link target="_blank" rel="noopener noreferrer" to={{ pathname: "https://www.facebook.com/USHousingExchange/" }}>
                <img src={footerFbIcon} alt="icon" />
              </Link>
              <Link to="/">
                <img src={footerLinkedinIcon} alt="icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" to={{ pathname: "https://twitter.com/USHX2020" }} >
                <img src={footerTwitterIcon} alt="icon" />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" to={{ pathname: "https://www.instagram.com/ushousingexchange/" }}>
                <img src={footerInstagramIcon} alt="icon" />
              </Link>
            </div>
            <div class="play-store-icon">
              <h5>Download Application Now:</h5>
              <Link to="/">
                <img src={googlePlayStoreImage} alt="icon" />
              </Link>
              <Link to="/">
                <img src={appstoreImage} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
