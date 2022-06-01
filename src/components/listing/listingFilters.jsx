import { useState } from "react";
import {
  bathTypeIcon,
  bedTypeIcon,
  homeTypeIcon,
  locationSelectIcon,
  lotTypeIcon,
  priceTypeIcon,
  propertyTypeIcon,
  roomsTypeIcon,
  squareTypeIcon,
  viewLessIcon,
  viewMoreIcon,
} from "../../utils/images";

export default function ListingFilters() {
  const [searchToggle, setSearchToggle] = useState(true);

  const handleSearchToggleClick = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <section className="listing-filters">
      <div className="container">
        <h2>Listing</h2>
        <div
          className={`listing-main ${
            searchToggle ? "hide-content" : "show-content"
          }`}
        >
          <div className="listing-input">
            <span>
              <img src={propertyTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Propertiy Type</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={locationSelectIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Location</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={priceTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Price $100 - $500</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={roomsTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Rooms</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={bedTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Beds</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={squareTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Squre Level </option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={bathTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Baths</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={homeTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Home Amenties</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
          <div className="listing-input">
            <span>
              <img src={lotTypeIcon} alt="" />
            </span>
            <select name="" id="">
              <option value="">Lot</option>
              <option value="">Saab</option>
              <option value="">Mercedes</option>
              <option value="">Audi</option>
            </select>
          </div>
        </div>
        <div className="view-more-content">
          <span onClick={handleSearchToggleClick}>
            View {searchToggle ? "More" : "Less"}
            <span>
              <img src={searchToggle ? viewMoreIcon : viewLessIcon} alt="" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
