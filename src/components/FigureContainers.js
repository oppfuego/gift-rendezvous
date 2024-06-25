import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FigureContainers.css";

const FigureContainers = ({
  className = "",
  figureFigureLinkSocialBan,
  ultimateGiftCards,
  propColor,
}) => {
  const ultimateGiftCardsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`figure-containers ${className}`}>
      <img
        className="figure-figure-link-socia"
        loading="lazy"
        alt=""
        src={figureFigureLinkSocialBan}
      />
      <div className="figure-titles">
        <div className="ultimate-gift-cards" style={ultimateGiftCardsStyle}>
          {ultimateGiftCards}
        </div>
      </div>
    </div>
  );
};

FigureContainers.propTypes = {
  className: PropTypes.string,
  figureFigureLinkSocialBan: PropTypes.string,
  ultimateGiftCards: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default FigureContainers;
