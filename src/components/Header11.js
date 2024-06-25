import PropTypes from "prop-types";
import "./Header11.css";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header4 ${className}`}>
      <div className="section2">
        <div className="background9">
          <div className="frame-parent25">
            <div className="logo-frame">
              <div className="logo4">
                <div className="frame-parent26">
                  <div className="logo-icon-wrapper">
                    <img
                      className="logo-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="gift-rendezvous4">Gift Rendezvous</div>
                </div>
              </div>
            </div>
            <div className="background10">
              <div className="search-bar1">
                <div className="input4">
                  <div className="what-are-you2">What are you looking for?</div>
                </div>
              </div>
              <div className="rectangle2" />
              <div className="button5">
                <div className="symbol39"></div>
              </div>
            </div>
            <div className="user-actions1">
              <div className="user-buttons2">
                <div className="button6">
                  <div className="symbol40"></div>
                  <div className="language-dropdown2">
                    <div className="en2">EN</div>
                    <div className="symbol-frame">
                      <div className="symbol41"></div>
                    </div>
                  </div>
                </div>
                <div className="button-show-login-dialog2">
                  <a
                    className="symbol42"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                    target="_blank"
                  >
                    
                  </a>
                </div>
                <div className="button-show-products-in-cart2">
                  <a
                    className="symbol43"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                    target="_blank"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
