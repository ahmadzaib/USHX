import {
  communityDarkIcon,
  communityLightIcon,
  exploreDarkIcon,
  exploreLightIcon,
  feedDarkIcon,
  feedLightIcon,
  logoutDarkIcon,
  logoutLightIcon,
  messagesDarkIcon,
  messagesLightIcon,
  notificationDarkIcon,
  notificationLightIcon,
  profileDarkIcon,
  profileLightIcon,
  settingDarkIcon,
  settingLightIcon,
} from "../utils/images";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function LeftSidebar() {
  return (
    <ul className="sidebar-list">
      <li className="active">
        <Link to="/">
          <span>
            <img className="light-icon" src={feedLightIcon} alt="" />
            <img className="dark-icon" src={feedDarkIcon} alt="" />
          </span>
          <span>Feed</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={communityLightIcon} alt="" />
            <img className="dark-icon" src={communityDarkIcon} alt="" />
          </span>
          <span>My Community</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={messagesLightIcon} alt="" />
            <img className="dark-icon" src={messagesDarkIcon} alt="" />
          </span>
          <span>Messages</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={notificationLightIcon} alt="" />
            <img className="dark-icon" src={notificationDarkIcon} alt="" />
          </span>
          <span>Notification</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={exploreLightIcon} alt="" />
            <img className="dark-icon" src={exploreDarkIcon} alt="" />
          </span>
          <span>Explore</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={profileLightIcon} alt="" />
            <img className="dark-icon" src={profileDarkIcon} alt="" />
          </span>
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={settingLightIcon} alt="" />
            <img className="dark-icon" src={settingDarkIcon} alt="" />
          </span>
          <span>Setting</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <img className="light-icon" src={logoutLightIcon} alt="" />
            <img className="dark-icon" src={logoutDarkIcon} alt="" />
          </span>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
}
