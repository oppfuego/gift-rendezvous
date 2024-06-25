import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CardQuantity.css";
import {FiMinus} from "react-icons/fi";

const CardQuantity = ({ className = "", panormaPresentsGiftCard, divider }) => {
  return (
    <div className={`card-quantity ${className}`}>
      <div className="hourly-details" />
      <div className="wrapper-cards-parent">
        <div className="wrapper-cards">
          <img
            className="cards-icon"
            loading="lazy"
            alt=""
            src="/cards-1@2x.png"
          />
        </div>
        <div className="gift-card-rows">
          <div className="panorma-presents-gift">{panormaPresentsGiftCard}</div>
        </div>
        <div className="item-actions">
          <div className="divider">{divider}</div>
        </div>
        <div className="frame-parent24">
          <div className="quantity-buttons-parent">
            <div className="quantity-buttons">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="checkout-title">1</div>
              <FiMinus className="quantity-decrease"/>
          </div>
          <FormControl
            className="parent"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#8b9fe8",
              borderRadius: "8px",
              width: "51.21951219512195%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#1c1c1c",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Archivo",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="company-logo">$10.11</div>
      </div>
    </div>
  );
};

CardQuantity.propTypes = {
  className: PropTypes.string,
  panormaPresentsGiftCard: PropTypes.string,
  divider: PropTypes.string,
};

export default CardQuantity;
