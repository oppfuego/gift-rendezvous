import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="your-dashboard">Your Dashboard</div>
          <TextField
            className="header6"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#8b9fe8",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#1c1c1c" },
            }}
          />
          <div className="downloads">
            <div className="download-items">
              <div className="download-item">
                <div className="wrapper-cards">
                  <img
                    className="cards-icon"
                    loading="lazy"
                    alt=""
                    src="/cards@2x.png"
                  />
                </div>
                <div className="panorma-presents-gift-card-wrapper">
                  <div className="panorma-presents-gift">
                    {" "}
                    Panorma Presents Gift Card
                  </div>
                </div>
                <div className="download-credits">
                  <div className="download-credit-details">$100.00</div>
                  <div className="credits">12 Credits</div>
                </div>
              </div>
              <div className="up-time">
                <div className="up-time1">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="download-renewal">
                <div className="renewal-icons">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className="renewal-details">
                  <div className="renewal-date">
                    <div className="renewal-date1">
                      <div className="next-renewal">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancellation">
                    <div className="cancel">Cancel</div>
                    <div className="frame-parent4">
                      <div className="icons-block-wrapper">
                        <img
                          className="icons-block1"
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="downloads-child" />
          </div>
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details3">
            <TextField
              className="header7"
              placeholder="User Details"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#8b9fe8",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#1c1c1c" },
              }}
            />
            <div className="user-information">
              <div className="user-fields">
                <div className="checkout-field-details">
                  <div className="name">Name</div>
                  <div className="darnell-roob">Darnell Roob</div>
                </div>
                <div className="account-details">
                  <div className="email-address-parent">
                    <div className="email-address">Email Address</div>
                    <div className="darnellroobhotmailcom">
                      Darnell.Roob@hotmail.com
                    </div>
                  </div>
                  <div className="plan-parent">
                    <div className="plan">Plan</div>
                    <div className="basic">Basic</div>
                  </div>
                  <div className="expiry-date-parent">
                    <div className="expiry-date">Expiry Date</div>
                    <div className="april-20241">24 April, 2024</div>
                  </div>
                  <div className="account-details-labels">
                    <div className="auto-renewal">Auto Renewal</div>
                    <div className="on">On</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
