import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`blog-child ${className}`}>
      <div className="frame-wrapper4">
        <div className="frame-wrapper5">
          <div className="frame-wrapper6">
            <div className="frame-wrapper7">
              <div className="container-parent">
                <img
                  className="container-icon2"
                  loading="lazy"
                  alt=""
                  src="/container2@2x.png"
                />
                <div className="navbar-links">
                  <div className="play-exclusives3">PLAY Exclusives</div>
                  <div className="games3">Games</div>
                  <div className="digital3">Digital</div>
                  <div className="toys3">Toys</div>
                  <div className="lifestyle3">Lifestyle</div>
                  <div className="movies3">Movies</div>
                  <div className="music3">Music</div>
                  <div className="books3">Books</div>
                  <div className="electronics3">Electronics</div>
                  <div className="blog5">Blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
