import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header5 ${className}`}>
      <div className="section3">
        <div className="background12">
          <nav className="frame-nav">
            <div className="logo-wrapper2">
              <div className="logo6">
                <div className="frame-parent27">
                  <div className="vector-container">
                    <img
                      className="vector-icon3"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="gift-rendezvous6">Gift Rendezvous</div>
                </div>
              </div>
            </div>
            <div className="background13">
              <div className="input-wrapper">
                <div className="input5">
                  <div className="what-are-you3">What are you looking for?</div>
                </div>
              </div>
              <div className="rectangle3" />
              <div className="button7">
                <div className="symbol44"></div>
              </div>
            </div>
            <div className="cart-login-buttons-wrapper">
              <div className="cart-login-buttons">
                <div className="button8">
                  <div className="symbol45"></div>
                  <div className="language-dropdown3">
                    <div className="en3">EN</div>
                    <div className="symbol-wrapper1">
                      <div className="symbol46"></div>
                    </div>
                  </div>
                </div>
                <div className="button-show-login-dialog3">
                  <a
                    className="symbol47"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                    target="_blank"
                  >
                    
                  </a>
                </div>
                <div className="button-show-products-in-cart3">
                  <a
                    className="symbol48"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                    target="_blank"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
