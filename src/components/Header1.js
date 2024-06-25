import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="section1">
        <div className="background6">
          <nav className="logo-container1">
            <div className="logo-wrapper1">
              <div className="logo2">
                <div className="title-container">
                  <div className="title-wrapper">
                    <img
                      className="vector-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="gift-rendezvous2">Gift Rendezvous</div>
                </div>
              </div>
            </div>
            <div className="background7">
              <div className="search-input-wrapper">
                <div className="input3">
                  <div className="what-are-you1">What are you looking for?</div>
                </div>
              </div>
              <div className="rectangle1" />
              <div className="button2">
                <div className="symbol34"></div>
              </div>
            </div>
            <div className="user-actions">
              <div className="user-buttons1">
                <div className="button3">
                  <div className="symbol35"></div>
                  <div className="language-dropdown1">
                    <div className="en1">EN</div>
                    <div className="dropdown-icon-wrapper">
                      <div className="symbol36"></div>
                    </div>
                  </div>
                </div>
                <div className="button-show-login-dialog1">
                  <a
                    className="symbol37"
                    href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                    target="_blank"
                  >
                    
                  </a>
                </div>
                <div className="button-show-products-in-cart1">
                  <a
                    className="symbol38"
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

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
