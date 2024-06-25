import PropTypes from "prop-types";
import "./ProductRows.css";

const ProductRows = ({
  className = "",
  itunes10000YenGiftCardItu,
  amazonGiftCard,
  uS25,
}) => {
  return (
    <div className={`product-rows ${className}`}>
      <img
        className="itunes-10000-yen-gift-card-itu-icon25"
        loading="lazy"
        alt=""
        src={itunes10000YenGiftCardItu}
      />
      <div className="product-name-columns">
        <div className="amazon-gift-card2">{amazonGiftCard}</div>
        <div className="us252">{uS25}</div>
      </div>
    </div>
  );
};

ProductRows.propTypes = {
  className: PropTypes.string,
  itunes10000YenGiftCardItu: PropTypes.string,
  amazonGiftCard: PropTypes.string,
  uS25: PropTypes.string,
};

export default ProductRows;
