import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
      <footer className={`footer1 ${className}`}>
        <div className="footer-wrapper">
          <div className="background8">
            <div className="footer-content1">
              <div className="categories-container-group">
                <div className="categories-container1">
                  <div className="categories3">Categories</div>
                  <div className="category-links1">
                    <div className="item-link26">Mobile phone credit</div>
                    <div className="item-link27">E-Commerce</div>
                    <div className="item-link28">Games</div>
                    <div className="item-link29">Entertainment</div>
                    <div className="item-link30">{`Fashion & Lifestyle`}</div>
                    <div className="item-link31">{`Foods & Restaurants`}</div>
                    <div className="item-link32">Electronics</div>
                    <div className="item-link33">{`Home & Garden`}</div>
                    <div className="item-link34">{`Health, Spa & Beauty`}</div>
                    <div className="item-link35">{`Travel & Experiences`}</div>
                    <div className="item-link36">Charity</div>
                    <div className="item-link37">Payment cards</div>
                    <div className="item-link38">Crypto</div>
                  </div>
                </div>
                <div className="footer-columns1">
                  <div className="help1">Help</div>
                  <div className="legal-links">
                    <div className="item-link39">Support</div>
                    <a
                        className="item-link40"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                        target="_blank"
                    >
                      Supported Crypto
                    </a>
                    <a
                        className="item-link41"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                        target="_blank"
                    >
                      How it Works
                    </a>
                    <a
                        className="item-link42"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                        target="_blank"
                    >
                      Newsletter
                    </a>
                  </div>
                </div>
                <div className="about-container">
                  <div className="about-us1">About Us</div>
                  <div className="about-links1">
                    <a
                        className="item-link43"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                        target="_blank"
                    >
                      Our history
                    </a>
                    <a
                        className="item-link44"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                        target="_blank"
                    >
                      Known from
                    </a>
                    <a
                        className="item-link45"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                        target="_blank"
                    >
                      Press Resources
                    </a>
                    <div className="item-link46">Trustpilot Reviews</div>
                    <div className="item-link47">Blog</div>
                  </div>
                </div>
                <div className="footer-columns2">
                  <div className="legal1">Legal</div>
                  <div className="item-link-terms-and-condit-group">
                    <div className="item-link48">Terms and Conditions</div>
                    <div className="item-link49">Privacy Policy</div>
                    <a
                        className="item-link50"
                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
                        target="_blank"
                    >
                      Imprint
                    </a>
                    <div className="item-link51">{`KYC & AML`}</div>
                  </div>
                </div>
              </div>
              <div className="logo3">
                <div className="logo-container2">
                  <img
                      className="vector-icon2"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                  />
                  <div className="gift-rendezvous3">Gift Rendezvous</div>
                </div>
              </div>
            </div>
            <hr/>

          </div>
        </div>
        <div className="footer-bottom-container">
          <p>GalaxiCraft LLC</p>
          <p>License number: 2325931</p>
          <p>Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates</p>
        </div>
      </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
