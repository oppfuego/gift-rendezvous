import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", linkNewsPlain2720x340jpg }) => {
  return (
    <div className={`link-news-plain-2-720x340jp-parent8 ${className}`}>
      <img
        className="link-news-plain-2-720x340jp10"
        rows={8}
        cols={18}
        alt=""
        src={linkNewsPlain2720x340jpg}
      />
      <div className="link-games-parent8">
        <div className="link-games11">Games</div>
        <div className="time-2024-05-2110">2024-05-21</div>
      </div>
      <h3 className="ecard-enthusiast">eCard Enthusiast</h3>
      <div className="at-ecard-enthusiast">
        At eCard Enthusiast, we celebrate the convenience and versatility of
        digital gift cards. Discover the best eCards for every occasion, learn
        about secure online purchases, and explore the benefits of going digital
        with your gift-giving.
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  linkNewsPlain2720x340jpg: PropTypes.string,
};

export default FrameComponent1;
