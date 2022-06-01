import { suitableCardContent } from "../../utils/constant";
export default function SuitableSection() {
  return (
    <section className="suitable-home-section">
      <h2>
        <span>Bringing everyone together where</span> EVERYONE WINS
      </h2>
      <div className="container">
        <div className="row">
          {suitableCardContent.map((val, key) => (
            <div className="col-lg-3 col-md-4">
              <div className="suitable-card">
                <div className="suitable-card-img">
                  <img src={val.suitableCardImg} alt="Image" />
                </div>
                <h3>{val.suitableCardHeading}</h3>
                <p>{val.suitableCardDesc}</p>
                <button>Get Access</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
