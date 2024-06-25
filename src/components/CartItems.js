import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CardQuantity from "./CardQuantity";
import PropTypes from "prop-types";
import "./CartItems.css";
import { FiMinus } from "react-icons/fi";
import {Link} from "react-router-dom";


const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="panorma-card-title">
        <div className="company-links">
          <div className="card-quantity1">
            <div className="header2">
              <div className="header-child" />
              <div className="cart-item-columns">
                <div className="product">Product</div>
              </div>
              <div className="cart-item-columns1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="plus-button">
              <img
                className="cards-icon1"
                loading="lazy"
                alt=""
                src="/cards@2x.png"
              />
              <div className="gift-card-name-wrapper">
                <div className="panorma-presents-gift1">
                  {" "}
                  Panorma Presents Gift Card
                </div>
              </div>
              <div className="item-price">
                <div className="policy-navigation">$120.00</div>
              </div>
              <div className="checkout-button">
                <div className="socials-title">
                  <div className="icon-plus-wrapper">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="facebook-link">1</div>
                  <FiMinus className="frame-input"/>
                </div>
                <FormControl
                  className="app-download"
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
                        src="/frame-1000002972.svg"
                        style={{ marginRight: "16px" }}
                      />
                    )}
                  >
                    <MenuItem>Hourly</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="copyright">$10.11</div>
            </div>
          </div>
          <CardQuantity
            panormaPresentsGiftCard=" Panorma Presents Gift Card"
            divider="$200.00"
          />
          <CardQuantity
            panormaPresentsGiftCard="Panorma Presents Gift Card"
            divider="$120.00"
          />
          <div className="country-selection-parent">
            <div className="country-selection" />
            <Button
              className="button4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#8b9fe8",
                borderRadius: "4px",
                "&:hover": { background: "#8b9fe8" },
                width: 200,
              }}
            >
              <Link to="/checkout" className="checkout-link">Checkout</Link>
            </Button>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header3">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="checkout-totals">
            <div className="total-values">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="grand-total-label">$360.00</div>
            </div>
          </div>
          <div className="shipping-details">
            <div className="shipping-wrapper">
              <div className="other-tax-labels">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="shipping-labels">
                <div className="div1">$0.00</div>
                <div className="div2">$0.00</div>
              </div>
            </div>
          </div>
          <div className="summary-divider">
            <div className="company-info" />
          </div>
          <div className="checkout-totals1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div3">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
