export default function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="row call-to-action-main">
          <div className="col-md-6">
            <div className="call-to-action-content">
              <h2>Get Great News from Us</h2>
              <p>We value privacy and would never spam you!</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="call-subscribe">
              <input type="email" placeholder="E.g. ziggy@space.com" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
