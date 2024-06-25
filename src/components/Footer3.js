import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <footer className={`footer3 ${className}`}>
      <div className="footer-container1">
        <div className="background14">
          <div className="footer-content3">
            <div className="footer-categories-parent">
              <div className="footer-categories">
                <div className="categories5">Categories</div>
                <div className="category-links2">
                  <div className="item-link78">Mobile phone credit</div>
                  <div className="item-link79">E-Commerce</div>
                  <div className="item-link80">Games</div>
                  <div className="item-link81">Entertainment</div>
                  <div className="item-link82">{`Fashion & Lifestyle`}</div>
                  <div className="item-link83">{`Foods & Restaurants`}</div>
                  <div className="item-link84">Electronics</div>
                  <div className="item-link85">{`Home & Garden`}</div>
                  <div className="item-link86">{`Health, Spa & Beauty`}</div>
                  <div className="item-link87">{`Travel & Experiences`}</div>
                  <div className="item-link88">Charity</div>
                  <div className="item-link89">Payment cards</div>
                  <div className="item-link90">Crypto</div>
                </div>
              </div>
              <div className="footer-help-legal">
                <div className="help3">Help</div>
                <div className="footer-help-legal-links">
                  <div className="item-link91">Support</div>
                  <a
                    className="item-link92"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                    target="_blank"
                  >
                    Supported Crypto
                  </a>
                  <a
                    className="item-link93"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                    target="_blank"
                  >
                    How it Works
                  </a>
                  <a
                    className="item-link94"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                    target="_blank"
                  >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className="footer-about">
                <div className="about-us3">About Us</div>
                <div className="about-links2">
                  <a
                    className="item-link95"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                    target="_blank"
                  >
                    Our history
                  </a>
                  <a
                    className="item-link96"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                    target="_blank"
                  >
                    Known from
                  </a>
                  <a
                    className="item-link97"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                    target="_blank"
                  >
                    Press Resources
                  </a>
                  <div className="item-link98">Trustpilot Reviews</div>
                  <div className="item-link99">Blog</div>
                </div>
              </div>
              <div className="footer-help-legal1">
                <div className="legal3">Legal</div>
                <div className="item-link-terms-and-condit-parent1">
                  <div className="item-link100">Terms and Conditions</div>
                  <div className="item-link101">Privacy Policy</div>
                  <a
                    className="item-link102"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
                    target="_blank"
                  >
                    Imprint
                  </a>
                  <div className="item-link103">{`KYC & AML`}</div>
                </div>
              </div>
            </div>
            <div className="logo7">
              <div className="logo-container3">
                <img
                  className="logo-image-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="gift-rendezvous7">Gift Rendezvous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
