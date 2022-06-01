import AgentImage from "../../assets/images/agent-image.png"
export default function SaleAgent({ title }) {
    return (
        <section className="sale-agent-sale">
            <div className="container">
                <h2 className="main-title-head">{title}</h2>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 main-border">
                        <div className="agent-info">
                            <div className="agent-image">
                                <img src={AgentImage} alt="agent-image" />
                            </div>
                            <div className="about-agent">
                                <p>Aaron Jenkins</p>
                                <h6>Listing details:</h6>
                                <p>Listed on: 3:39 aM</p>
                                <p>Property ID: #50</p>
                            </div>
                        </div>
                        <h4 className="main-info">Agent contact info :</h4>
                        <ul className="list-styles">
                            <li className="social-link">
                                <a>Visit Agent Website</a>
                            </li>
                            <li className="social-link">
                                <a>Agent Other Listings</a>
                            </li>
                            <li className="social-link">
                                <a>phone: 87456+2778</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <h4 className="main-info show-schedule">Schedule a showing</h4>
                        <form>
                            <div class="form-group row">
                                <div class="col-xl-1 col-lg-1 col-md-0"></div>
                                <label for="input" class="col-xl-3 col-lg-3 col-md-4 form-label profile-info">Name: <span className="text-danger">*</span></label>
                                <div class="col-sm-8">
                                    <input type="" class="form-control input-profile" id="input" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-xl-1 col-lg-1 col-md-0"></div>
                                <label for="input" class="col-xl-3 col-lg-3 col-md-4 col-form-label profile-info">Email: <span className="text-danger">*</span></label>
                                <div class="col-sm-8">
                                    <input type="" class="form-control input-profile" id="input" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-xl-1 col-lg-1 col-md-0"></div>
                                <label for="input" class="col-xl-3 col-lg-3 col-md-4 form-label profile-info">Phone Number: <span className="text-danger">*</span></label>
                                <div class="col-sm-8">
                                    <input type="" class="form-control input-profile" id="input" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-xl-1 col-lg-1 col-md-0"></div>
                                <label for="input" class="col-xl-3 col-lg-3 col-md-4 col-form-label profile-info">Message: <span className="text-danger">*</span></label>
                                <div class="col-sm-8">
                                    <input type="" class="form-control input-profile" id="input" placeholder="" />
                                </div>
                            </div>
                        </form>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}