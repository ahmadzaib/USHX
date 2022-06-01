import {
  addedPostImage,
  commentIcon,
  LikeIcon,
  locationIcon,
  mapImage,
  photoIcon,
  postImageOne,
  postImageThree,
  postImageTwo,
  propertiesIcon,
  shareIcon,
  submitCommentIcon,
  User,
  userLikeImage,
} from "../../utils/images";
import LeftSidebar from "../../layouts/leftSider";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import NotificationPanel from "../../layouts/notificationpanel";

export default function SocialMedia() {
  return (
    <div className="wrapper">
      <div className="side-bar">
        <LeftSidebar />
      </div>
      <div className="content">
        <div className="feed-main">
          <div className="create-post">
            <div className="post-profile">
              <img src={User} alt="" />
            </div>
            <div className="create-post-form">
              <div className="create-post-content">
                <span>
                  <FaSearch />
                </span>
                <input type="text" placeholder="Whats happening" />
              </div>
              <div className="create-post-features">
                <Link to="/">
                  <span>
                    <img src={propertiesIcon} alt="icon" />
                  </span>
                  <span>Properties</span>
                </Link>
                <Link to="/">
                  <span>
                    <img src={photoIcon} alt="icon" />
                  </span>
                  <span>Photos</span>
                </Link>
                <Link to="/">
                  <span>
                    <img src={locationIcon} alt="icon" />
                  </span>
                  <span>Locations</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="added-post">
            <div className="added-post-user-info">
              <div className="user-info">
                <div className="user-info-profile">
                  <img src={User} alt="" />
                </div>
                <div className="user-info-detail">
                  <h2>nkchaudhary01</h2>
                  <h5>USA</h5>
                </div>
              </div>
              <div className="added-post-options">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title=""
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#">Remove post</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="added-post-image">
              <img src={addedPostImage} alt="" />
            </div>
            <div className="like-comment-info">
              <div className="total-likes">
                <Link to="/">
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span className="total-counts">+9</span>
                </Link>
              </div>
              <div className="total-comments">
                <Link>3 comments</Link>
                <Link>17 shares</Link>
              </div>
            </div>
            <div className="do-like-comment">
              <Link to="/">
                <span>
                  <img src={LikeIcon} alt="" />
                </span>
                <span>Like</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={commentIcon} alt="" />
                </span>
                <span>Comment</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={shareIcon} alt="" />
                </span>
                <span>Share</span>
              </Link>
            </div>
            <div className="add-comment">
              <div className="comment-input">
                <input type="text" placeholder="Write a comment" />
              </div>
              <div className="submit-comment">
                <button type="submit">
                  <img src={submitCommentIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="added-post">
            <div className="added-post-user-info">
              <div className="user-info">
                <div className="user-info-profile">
                  <img src={User} alt="" />
                </div>
                <div className="user-info-detail">
                  <h2>nkchaudhary01</h2>
                  <h5>USA</h5>
                </div>
              </div>

              <div className="added-post-options">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title=""
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#">Remove post</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="added-post-description">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </h3>
            </div>
            <div className="added-post-image-more-grid row">
              <div className="col-md-6">
                <div className="pb-4">
                  <img src={postImageOne} alt="" />
                </div>
                <div>
                  <img src={postImageTwo} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <img src={postImageThree} alt="" />
              </div>
            </div>
            <div className="like-comment-info">
              <div className="total-likes">
                <Link to="/">
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span className="total-counts">+9</span>
                </Link>
              </div>
              <div className="total-comments">
                <Link>3 comments</Link>
                <Link>17 shares</Link>
              </div>
            </div>
            <div className="do-like-comment">
              <Link to="/">
                <span>
                  <img src={LikeIcon} alt="" />
                </span>
                <span>Like</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={commentIcon} alt="" />
                </span>
                <span>Comment</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={shareIcon} alt="" />
                </span>
                <span>Share</span>
              </Link>
            </div>
            <div className="add-comment">
              <div className="comment-input">
                <input type="text" placeholder="Write a comment" />
              </div>
              <div className="submit-comment">
                <button type="submit">
                  <img src={submitCommentIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="added-post">
            <div className="added-post-user-info">
              <div className="user-info">
                <div className="user-info-profile">
                  <img src={User} alt="" />
                </div>
                <div className="user-info-detail">
                  <h2>nkchaudhary01</h2>
                  <h5>USA</h5>
                </div>
              </div>
              <div className="added-post-options">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title=""
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#">Remove post</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="post-property-link mb-3">
              <Link to="/">https://www.google.com/maps/place/Brooklyn</Link>
            </div>
            <div className="added-post-image">
              <img src={mapImage} alt="" />
            </div>
            <div className="like-comment-info">
              <div className="total-likes">
                <Link to="/">
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span className="total-counts">+9</span>
                </Link>
              </div>
              <div className="total-comments">
                <Link>3 comments</Link>
                <Link>17 shares</Link>
              </div>
            </div>
            <div className="do-like-comment">
              <Link to="/">
                <span>
                  <img src={LikeIcon} alt="" />
                </span>
                <span>Like</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={commentIcon} alt="" />
                </span>
                <span>Comment</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={shareIcon} alt="" />
                </span>
                <span>Share</span>
              </Link>
            </div>
            <div className="add-comment">
              <div className="comment-input">
                <input type="text" placeholder="Write a comment" />
              </div>
              <div className="submit-comment">
                <button type="submit">
                  <img src={submitCommentIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="added-post">
            <div className="added-post-user-info">
              <div className="user-info">
                <div className="user-info-profile">
                  <img src={User} alt="" />
                </div>
                <div className="user-info-detail">
                  <h2>nkchaudhary01</h2>
                  <h5>USA</h5>
                </div>
              </div>
              <div className="added-post-options">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title=""
                  menuVariant="light"
                >
                  <NavDropdown.Item href="#">Remove post</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="added-post-description">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </h3>
            </div>
            <div className="post-property-link mb-3">
              <Link to="/">https://www.google.com/maps/place/Brooklyn</Link>
            </div>
            <div className="like-comment-info">
              <div className="total-likes">
                <Link to="/">
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span>
                    <img src={userLikeImage} alt="" />
                  </span>
                  <span className="total-counts">+9</span>
                </Link>
              </div>
              <div className="total-comments">
                <Link>3 comments</Link>
                <Link>17 shares</Link>
              </div>
            </div>
            <div className="do-like-comment">
              <Link to="/">
                <span>
                  <img src={LikeIcon} alt="" />
                </span>
                <span>Like</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={commentIcon} alt="" />
                </span>
                <span>Comment</span>
              </Link>
              <Link to="/">
                <span>
                  <img src={shareIcon} alt="" />
                </span>
                <span>Share</span>
              </Link>
            </div>
            <div className="add-comment">
              <div className="comment-input">
                <input type="text" placeholder="Write a comment" />
              </div>
              <div className="submit-comment">
                <button type="submit">
                  <img src={submitCommentIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-main">
          <NotificationPanel />
        </div>
      </div>
    </div>
  );
}
