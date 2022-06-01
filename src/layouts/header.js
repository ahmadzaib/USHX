import { Link, NavLink } from "react-router-dom";
import {
  facebookIcon,
  linkdinIcon,
  Logo,
  LogoBlue,
  mailIcon,
  phoneIcon,
  twitterIcon,
} from "../utils/images";
import Navbar from "react-bootstrap/Navbar";
import { home, investors, listing, realtors, socialMedia, USHXToken } from "../routers/routePath";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Navbar
          className="justify-content-between"
          bg="transparent"
          expand="xl"
        >
          <Link className="navbar-brand" to="/">
            <img src={LogoBlue} alt="Logo" />
          </Link>
          <div className="login-btn-mobile">
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="join-btn">
              <button>Join</button>
            </div>
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-btn"><i className="fas fa-bars"></i></span>
                    </button> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="custom-nav-links" id="basic-navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={home} exact={true}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={socialMedia}>
                  Social Media
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={listing}>
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={USHXToken}>
                  USHX Token{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={realtors}>
                  Realtors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActive => "nav-link" + (isActive ? " active" : "")} to={investors}>
                  Investors{" "}
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
          <div className="login-btn-desktop">
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="join-btn">
              <button>Join</button>
            </div>
          </div>

          {/* <div className="collapse custom-nav-links navbar-collapse" id="navbarNav">

                    </div> */}
          {/* <div className="nav-social-links">
                        <div className="address-details">
                            <small>
                                <span>
                                    <img src={phoneIcon} alt="Icon" />
                                </span>
                                <span>
                                    (281) 377-0280
                                </span>
                            </small>
                            <small>
                                <span>
                                    <img src={mailIcon} alt="Icon" />
                                </span>
                                <span>
                                    admin@ushousingexchange.com
                                </span>
                            </small>
                        </div>
                        <div className="social-links-icon">
                            <a href="#">
                                <img src={facebookIcon} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={twitterIcon} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={linkdinIcon} alt="Icon" />
                            </a>
                        </div>

                    </div> */}
        </Navbar>
        {/* <nav className="navbar navbar-expand-xl navbar-light justify-content-between">

                </nav>
                <div className="toggle-btn">

                </div> */}
      </div>
    </header>
  );
}
