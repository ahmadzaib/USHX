import { Link } from "react-router-dom";
import { eventImageOne, User, userLikeImage } from "../utils/images";
import { NavDropdown } from "react-bootstrap";

export default function NotificationPanel() {
  return (
    <div className="notification-sub">
      <div className="notification-card">
        <div className="notify-head">
          <h2>Recent Event News</h2>
          <Link to="/">See All</Link>
        </div>
        <div className="event-notify">
          <div className="notify-user">
            <img src={User} alt="" />
          </div>
          <div className="notify-user-detail">
            <h2>Angela Jhonny</h2>
            <h4>Founder and CEO</h4>
          </div>
        </div>
        <div className="event-detail-main">
          <div className="event-detail-sub">
            <div className="event-image">
              <img src={eventImageOne} alt="" />
            </div>
            <div className="event-desc">
              <h2>Auction</h2>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
            </div>
          </div>
          <div className="event-person-count">
            <div className="total-persons">3 Persons</div>
            <div className="persons-profile">
              <span>
                <img src={userLikeImage} alt="" />
              </span>
              <span>
                <img src={userLikeImage} alt="" />
              </span>
              <span>
                <img src={userLikeImage} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="event-detail-main">
          <div className="event-detail-sub">
            <div className="event-image">
              <img src={eventImageOne} alt="" />
            </div>
            <div className="event-desc">
              <h2>Auction</h2>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
            </div>
          </div>
          <div className="event-person-count">
            <div className="total-persons">3 Persons</div>
            <div className="persons-profile">
              <span>
                <img src={userLikeImage} alt="" />
              </span>
              <span>
                <img src={userLikeImage} alt="" />
              </span>
              <span>
                <img src={userLikeImage} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-card">
        <div className="notify-head">
          <h2>Notifications</h2>
          <Link to="/">See All</Link>
        </div>
        <div className="event-notify">
          <div className="user-action-detail">
            <div className="notify-user">
              <img src={User} alt="" />
            </div>
            <div className="notify-user-action">
              <h2>Evans Commented on your photo</h2>
              <h4>4 minutes ago</h4>
            </div>
          </div>
          <div className="user-status">
            <span>.</span>
          </div>
        </div>
        <div className="event-notify">
          <div className="user-action-detail">
            <div className="notify-user">
              <img src={User} alt="" />
            </div>
            <div className="notify-user-action">
              <h2>Evans Commented on your photo</h2>
              <h4>4 minutes ago</h4>
            </div>
          </div>
          <div className="user-status">
            <span>.</span>
          </div>
        </div>
        <div className="user-request-info">
          <div className="requested-user-image">
            <img src={User} alt="" />
          </div>
          <div className="requested-user-detail">
            <h2>Hamodo Lisa Followed you</h2>
            <div className="request-btns">
              <button className="ignore-btn">Ignore</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
        <div className="user-request-info">
          <div className="requested-user-image">
            <img src={User} alt="" />
          </div>
          <div className="requested-user-detail">
            <h2>Hamodo Lisa Followed you</h2>
            <div className="request-btns">
              <button className="ignore-btn">Ignore</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-card">
        <div className="notify-head">
          <h2>You Might Like</h2>
          <Link to="/">See All</Link>
        </div>
        <div className="user-request-info mt-3">
          <div className="requested-user-image">
            <img src={User} alt="" />
          </div>
          <div className="requested-user-detail">
            <h4>Rodhovan Skillana</h4>
            <h5 className="mb-3">Founder and CEO</h5>
            <div className="request-btns">
              <button className="ignore-btn">Ignore</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className="people-card">
        <div className="notify-head">
          <h2>People</h2>
          <div className="ppl-dropdwon">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="light"
            >
              <NavDropdown.Item href="#">Remove</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className="people-suggestions">
          <div className="people-info-main">
            <div className="people-image">
              <img src={User} alt="" />
            </div>
            <div className="people-info">
              <h4>Angela Jhonny</h4>
              <h5>Seller</h5>
            </div>
          </div>
          <div className="user-status">
            <span>.</span>
          </div>
        </div>
        <div className="people-suggestions">
          <div className="people-info-main">
            <div className="people-image">
              <img src={User} alt="" />
            </div>
            <div className="people-info">
              <h4>Angela Jhonny</h4>
              <h5>Seller</h5>
            </div>
          </div>
          <div className="user-status">
            <small>24 min</small>
          </div>
        </div>
      </div>
    </div>
  );
}
