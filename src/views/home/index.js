import BenefitsSection from "../../components/home/benefitsSection";
import CallToAction from "../../components/home/callToAction";
import ChooseUsSection from "../../components/home/chooseUSsection";
import FeaturesSection from "../../components/home/featuresSection";
import HomeBanner from "../../components/home/homebanner";
import LatestFeedSection from "../../components/home/latestFeed";
import LatestNews from "../../components/home/latestNewsSection";
import OurSpecialFeature from "../../components/home/ourSpecialFeature";
import SuitableSection from "../../components/home/suitableSection";
import TestimonialSection from "../../components/home/testimonialSection";
import TokenSection from "../../components/home/tokenSection";
import WhyChooseUs from "../../components/home/whyChooseUsSection";

export default function Home() {
    return (
        <>
            <HomeBanner />
            <SuitableSection />
            <LatestFeedSection />
            <BenefitsSection />
            <ChooseUsSection />
            {/* <FeaturesSection /> */}
            <TokenSection />
            <WhyChooseUs />
            {/* <OurSpecialFeature /> */}
            <LatestNews />
            <CallToAction />
        </>
    )
}