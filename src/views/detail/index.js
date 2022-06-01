import SimpleMap from "../../components/detail/addressSection";
import Apartment from "../../components/detail/apartmentSection";
import ApartmentCard from "../../components/detail/appartmentCard";
import DetailBanner from "../../components/detail/detailbanner";
import Discription from "../../components/detail/discriptionSection";
import Gallery from "../../components/detail/gallerySection";
import GrandFamily from "../../components/detail/grandfamilySection";
import PropertyMain from "../../components/detail/propertySection";
import SpecialFeature from "../../components/detail/specialFeatureSection";
import SaleAgent from "../../components/detail/saleagentSection";

export default function Detail() {
  return (
    <>
      <DetailBanner />
      <GrandFamily title={"Grand Family House"} />
      <Discription title={"Discription"} />
      <PropertyMain title={"Property Overview"} />
      <SpecialFeature title={"Special Features"} />
      <SpecialFeature title={"Amenities"} />
      <SpecialFeature title={"Bedrooms"} />
      <Gallery title={"Gallery"} />
      <Apartment title={"Apartments"} />
      {/* <ApartmentCard /> */}
      <SimpleMap title={"Address"} />
      <SaleAgent title={"For Sale By Agent"} />
    </>
  );
}
