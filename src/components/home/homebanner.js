import { homeBannerImage } from "../../utils/images";

export default function HomeBanner() {
    return (
        <section className="hero-banner">
            <div className="container pt-5 pb-5 pb-md-0 mt-5 ">
                <div className="row px-2 px-sm-4 ">
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-banner-content">
                            <h2>
                                Marketplace for buyers, sellers, investors, and contractors
                            </h2>
                            <p>
                                Largest Social media platform that creates Real Estate deals in realtime!
                            </p>
                            <div className="help-btn">
                                <button>
                                    Get Help
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-banner-image">
                            <img src={homeBannerImage} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}