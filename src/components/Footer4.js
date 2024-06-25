import PropTypes from "prop-types";
import "./Footer4.css";

const Footer4 = ({ className = "" }) => {
  return (
    <footer className={`footer4 ${className}`}>
      <div className="footer-container2">
        <div className="background15">
          <div className="footer-content4">
            <div className="frame-parent29">
              <div className="categories-parent">
                <div className="categories6">Categories</div>
                <div className="category-links3">
                  <div className="item-link104">Mobile phone credit</div>
                  <div className="item-link105">E-Commerce</div>
                  <div className="item-link106">Games</div>
                  <div className="item-link107">Entertainment</div>
                  <div className="item-link108">{`Fashion & Lifestyle`}</div>
                  <div className="item-link109">{`Foods & Restaurants`}</div>
                  <div className="item-link110">Electronics</div>
                  <div className="item-link111">{`Home & Garden`}</div>
                  <div className="item-link112">{`Health, Spa & Beauty`}</div>
                  <div className="item-link113">{`Travel & Experiences`}</div>
                  <div className="item-link114">Charity</div>
                  <div className="item-link115">Payment cards</div>
                  <div className="item-link116">Crypto</div>
                </div>
              </div>
              <div className="help-legal">
                <div className="help4">Help</div>
                <div className="support-links">
                  <div className="item-link117">Support</div>
                  <a
                    className="item-link118"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                    target="_blank"
                  >
                    Supported Crypto
                  </a>
                  <a
                    className="item-link119"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                    target="_blank"
                  >
                    How it Works
                  </a>
                  <a
                    className="item-link120"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                    target="_blank"
                  >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className="about-us-parent">
                <div className="about-us4">About Us</div>
                <div className="about-us-links1">
                  <a
                    className="item-link121"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                    target="_blank"
                  >
                    Our history
                  </a>
                  <a
                    className="item-link122"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                    target="_blank"
                  >
                    Known from
                  </a>
                  <a
                    className="item-link123"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                    target="_blank"
                  >
                    Press Resources
                  </a>
                  <div className="item-link124">Trustpilot Reviews</div>
                  <div className="item-link125">Blog</div>
                </div>
              </div>
              <div className="help-legal1">
                <div className="legal4">Legal</div>
                <div className="item-link-terms-and-condit-parent2">
                  <div className="item-link126">Terms and Conditions</div>
                  <div className="item-link127">Privacy Policy</div>
                  <a
                    className="item-link128"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
                    target="_blank"
                  >
                    Imprint
                  </a>
                  <div className="item-link129">{`KYC & AML`}</div>
                </div>
              </div>
            </div>
            <div className="logo8">
              <div className="logo-container4">
                <img
                  className="vector-icon4"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="gift-rendezvous8">Gift Rendezvous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer4.propTypes = {
  className: PropTypes.string,
};

export default Footer4;
