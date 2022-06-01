import CallToAction from "../../components/home/callToAction";
import FiltersResults from "../../components/listing/filterResults";
import ListingFilters from "../../components/listing/listingFilters";

export default function Listing() {
    return (
        <>
            <ListingFilters />
            <FiltersResults />
            <CallToAction />
        </>
    )
}