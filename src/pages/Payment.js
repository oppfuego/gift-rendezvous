import ContactForm from "../components/ContactForm";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-1920">
      <div className="payment-1920-inner">
        <div className="logo-parent">
          <div className="logo">
            <div className="logo-container">
              <div className="gift-icon-wrapper">
                <img
                  className="gift-icon"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="gift-rendezvous">Gift Rendezvous</div>
            </div>
          </div>
          <div className="frame-group">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/frame-1000006877@2x.png"
            />
            <div className="frame-container">
              <div className="powered-by-wrapper">
                <div className="powered-by">{`Powered by `}</div>
              </div>
              <div className="payment-icons-parent">
                <img
                  className="payment-icons"
                  loading="lazy"
                  alt=""
                  src="/payment-icons@2x.png"
                />
                <div className="vector-wrapper">
                  <img
                    className="frame-item"
                    loading="lazy"
                    alt=""
                    src="/vector-341.svg"
                  />
                </div>
                <div className="legal-wrapper">
                  <div className="legal">Legal</div>
                </div>
                <div className="refunds-wrapper">
                  <div className="refunds">Refunds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-inner" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Payment;
