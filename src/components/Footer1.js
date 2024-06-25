import PropTypes from "prop-types";
import "./Footer1.css";
import {Link} from "react-router-dom";

const Footer1 = ({ className = "" }) => {
  return (
      <footer className={`footer ${className}`}>
        <div className="footer-container">
          <div className="background5">
            <div className="footer-content">
              <div className="footer-columns">
                <div className="category-column">
                  <div className="categories2">Categories</div>
                  <div className="category-links">
                    <div className="item-link">Mobile phone credit</div>
                    <div className="item-link1">E-Commerce</div>
                    <div className="item-link2">Games</div>
                    <div className="item-link3">Entertainment</div>
                    <div className="item-link4">{`Fashion & Lifestyle`}</div>
                    <div className="item-link5">{`Foods & Restaurants`}</div>
                    <div className="item-link6">Electronics</div>
                    <div className="item-link7">{`Home & Garden`}</div>
                    <div className="item-link8">{`Health, Spa & Beauty`}</div>
                    <div className="item-link9">{`Travel & Experiences`}</div>
                    <div className="item-link10">Charity</div>
                    <div className="item-link11">Payment cards</div>
                    <div className="item-link12">Crypto</div>
                  </div>
                </div>
                <div className="footer-column-titles">
                  <div className="help">Help</div>
                  <div className="footer-links">
                    <div className="item-link13">Support</div>
                    <a
                        className="item-link14"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Supported Crypto
                    </a>
                    <a
                        className="item-link15"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      How it Works
                    </a>
                    <a
                        className="item-link16"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Newsletter
                    </a>
                  </div>
                </div>
                <div className="about-column">
                  <div className="about-us">About Us</div>
                  <div className="about-links">
                    <a
                        className="item-link17"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Our history
                    </a>
                    <a
                        className="item-link18"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Known from
                    </a>
                    <a
                        className="item-link19"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Press Resources
                    </a>
                    <div className="item-link20">Trustpilot Reviews</div>
                    <Link to="/blog" className="item-link21">Blog</Link>
                  </div>
                </div>
                <div className="footer-column-titles1">
                  <div className="legal">Legal</div>
                  <div className="item-link-terms-and-condit-parent">
                    <Link to="/terms-condition" className="item-link22">Terms and Conditions</Link>
                    <Link to="/privacy-policy" className="item-link23">Privacy Policy</Link>
                    <Link to="/cencellation-policy" className="item-link24">Imprint</Link>
                    <Link to="/cookie-policy" className="item-link25">KYC & AML</Link>
                  </div>
                </div>
              </div>
              <div className="logo1">
                <div className="container25">
                  <img
                      className="logo-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                  />
                  <div className="gift-rendezvous1">Gift Rendezvous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
