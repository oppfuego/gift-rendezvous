import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="background-wrapper">
        <div className="background11">
          <div className="footer-content2">
            <div className="categories-column-parent">
              <div className="categories-column">
                <div className="categories4">Categories</div>
                <div className="categories-links">
                  <div className="item-link52">Mobile phone credit</div>
                  <div className="item-link53">E-Commerce</div>
                  <div className="item-link54">Games</div>
                  <div className="item-link55">Entertainment</div>
                  <div className="item-link56">{`Fashion & Lifestyle`}</div>
                  <div className="item-link57">{`Foods & Restaurants`}</div>
                  <div className="item-link58">Electronics</div>
                  <div className="item-link59">{`Home & Garden`}</div>
                  <div className="item-link60">{`Health, Spa & Beauty`}</div>
                  <div className="item-link61">{`Travel & Experiences`}</div>
                  <div className="item-link62">Charity</div>
                  <div className="item-link63">Payment cards</div>
                  <div className="item-link64">Crypto</div>
                </div>
              </div>
              <div className="footer-links-column">
                <div className="help2">Help</div>
                <div className="footer-links1">
                  <div className="item-link65">Support</div>
                  <a
                    className="item-link66"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-3382"
                    target="_blank"
                  >
                    Supported Crypto
                  </a>
                  <a
                    className="item-link67"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21383"
                    target="_blank"
                  >
                    How it Works
                  </a>
                  <a
                    className="item-link68"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-21688"
                    target="_blank"
                  >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className="about-us-column">
                <div className="about-us2">About Us</div>
                <div className="about-us-links">
                  <a
                    className="item-link69"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22013"
                    target="_blank"
                  >
                    Our history
                  </a>
                  <a
                    className="item-link70"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-22649"
                    target="_blank"
                  >
                    Known from
                  </a>
                  <a
                    className="item-link71"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-23506"
                    target="_blank"
                  >
                    Press Resources
                  </a>
                  <div className="item-link72">Trustpilot Reviews</div>
                  <div className="item-link73">Blog</div>
                </div>
              </div>
              <div className="footer-links-column1">
                <div className="legal2">Legal</div>
                <div className="item-link-terms-and-condit-container">
                  <div className="item-link74">Terms and Conditions</div>
                  <div className="item-link75">Privacy Policy</div>
                  <a
                    className="item-link76"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-24479"
                    target="_blank"
                  >
                    Imprint
                  </a>
                  <div className="item-link77">{`KYC & AML`}</div>
                </div>
              </div>
            </div>
            <div className="logo5">
              <div className="footer-logo-icon-parent">
                <img
                  className="footer-logo-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="gift-rendezvous5">Gift Rendezvous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
