import {Button} from "@mui/material";
import ProductRows from "./ProductRows";
import PropTypes from "prop-types";
import "./NavigationLinks.css";
import {Link} from "react-router-dom";

const NavigationLinks = ({className = ""}) => {
    return (
        <section className={`navigation-links ${className}`}>
            <div className="navigation-links-inner">
                <div className="container-wrapper">
                    <div className="container24">
                        <header className="navigation">
                            <div className="play-exclusives2">PLAY Exclusives</div>
                            <div className="games2">Games</div>
                            <div className="digital2">Digital</div>
                            <div className="toys2">Toys</div>
                            <div className="lifestyle2">Lifestyle</div>
                            <div className="movies2">Movies</div>
                            <div className="music2">Music</div>
                            <div className="books2">Books</div>
                            <div className="electronics2">Electronics</div>
                            <div className="blog4">Blog</div>
                        </header>
                        <img
                            className="container-icon1"
                            loading="lazy"
                            alt=""
                            src="/container@2x.png"
                        />
                    </div>
                </div>
            </div>
            <div className="link-columns">
                <div className="link-rows">
                    <div className="link-items">
                        <img className="link-icon" alt=""/>
                        <div className="product-columns">
                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg@2x.png"
                                amazonGiftCard="Amazon Gift Card"
                                uS25="US$25"
                            />
                            </Link>

                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-1@2x.png"
                                amazonGiftCard="Apple iTunes Gift Card"
                                uS25="US$50"
                            />
                            </Link>

                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-2@2x.png"
                                amazonGiftCard="Google Play Gift Card"
                                uS25="US$10"
                            />
                            </Link>

                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-3@2x.png"
                                amazonGiftCard="Starbucks Gift Card"
                                uS25="US$15"
                            />
                            </Link>

                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-4@2x.png"
                                amazonGiftCard="Walmart Gift Card"
                                uS25="US$100"
                            />
                            </Link>

                            <Link to="/product-description" className="product-link-container">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-5@2x.png"
                                amazonGiftCard="Target Gift Card"
                                uS25="US$20"
                            />
                            </Link>
                        </div>
                    </div>
                    <div className="image-link-columns">
                        <img className="image-icon2" alt="" src="/image.svg"/>
                    </div>
                </div>
            </div>
            <div className="link-columns1">
                <div className="frame-parent11">
                    <div className="link-parent">
                        <img className="link-icon1" alt=""/>
                        <div className="frame-parent12">
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-6@2x.png"
                                amazonGiftCard="Netflix Gift Card"
                                uS25="US$30"
                            />
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-7@2x.png"
                                amazonGiftCard="Spotify Gift Card"
                                uS25="US$60"
                            />
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-8@2x.png"
                                amazonGiftCard="PlayStation Store Gift Card"
                                uS25="US$75"
                            />
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-9@2x.png"
                                amazonGiftCard="Xbox Gift Card"
                                uS25="US$40"
                            />
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-10@2x.png"
                                amazonGiftCard="Best Buy Gift Card"
                                uS25="US$35"
                            />
                            <ProductRows
                                itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-11@2x.png"
                                amazonGiftCard="Home Depot Gift Card"
                                uS25="US$200"
                            />
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img className="image-icon3" alt="" src="/image.svg"/>
                    </div>
                </div>
            </div>
            <div className="link-columns2">
                <div className="frame-parent13">
                    <div className="link-wrapper">
                        <Button
                            className="link3"
                            disableElevation
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#3a4f66",
                                fontSize: "16",
                                background: "#fff",
                                borderRadius: "5px",
                                "&:hover": {background: "#fff"},
                                width: 150,
                                height: 42.6,
                            }}
                        >
                            See all
                        </Button>
                    </div>
                    <div className="frame-parent14">
                        <div className="link-group">
                            <img className="link-icon2" alt=""/>
                            <div className="featured-product-columns">
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-12@2x.png"
                                    amazonGiftCard="Amazon Gift Card"
                                    uS25="US$25"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-13@2x.png"
                                    amazonGiftCard="Apple iTunes Gift Card"
                                    uS25="US$50"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-14@2x.png"
                                    amazonGiftCard="Google Play Gift Card"
                                    uS25="US$10"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-15@2x.png"
                                    amazonGiftCard="Starbucks Gift Card"
                                    uS25="US$15"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-16@2x.png"
                                    amazonGiftCard="Walmart Gift Card"
                                    uS25="US$100"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-17@2x.png"
                                    amazonGiftCard="Target Gift Card"
                                    uS25="US$20"
                                />
                            </div>
                        </div>
                        <div className="image-columns">
                            <img className="image-icon4" alt="" src="/image.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="link-columns3">
                <div className="frame-parent15">
                    <div className="link-container">
                        <Button
                            className="link4"
                            disableElevation
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#3a4f66",
                                fontSize: "16",
                                background: "#fff",
                                borderRadius: "5px",
                                "&:hover": {background: "#fff"},
                                width: 150,
                                height: 42.6,
                            }}
                        >
                            See all
                        </Button>
                    </div>
                    <div className="frame-parent16">
                        <div className="link-parent1">
                            <img className="link-icon3" alt=""/>
                            <div className="frame-parent17">
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-18@2x.png"
                                    amazonGiftCard="Netflix Gift Card"
                                    uS25="US$30"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-19@2x.png"
                                    amazonGiftCard="Spotify Gift Card"
                                    uS25="US$60"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-20@2x.png"
                                    amazonGiftCard="PlayStation Store Gift Card"
                                    uS25="US$75"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-21@2x.png"
                                    amazonGiftCard="Xbox Gift Card"
                                    uS25="US$40"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-22@2x.png"
                                    amazonGiftCard="Best Buy Gift Card"
                                    uS25="US$35"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-23@2x.png"
                                    amazonGiftCard="Home Depot Gift Card"
                                    uS25="US$200"
                                />
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-icon5" alt="" src="/image.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="link-columns4">
                <div className="frame-parent18">
                    <div className="link-frame">
                        <Button
                            className="link5"
                            disableElevation
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#3a4f66",
                                fontSize: "16",
                                background: "#fff",
                                borderRadius: "5px",
                                "&:hover": {background: "#fff"},
                                width: 150,
                                height: 42.6,
                            }}
                        >
                            See all
                        </Button>
                    </div>
                    <div className="frame-parent19">
                        <div className="link-parent2">
                            <img className="link-icon4" alt=""/>
                            <div className="frame-parent20">
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-24@2x.png"
                                    amazonGiftCard="Amazon Gift Card"
                                    uS25="US$25"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-25@2x.png"
                                    amazonGiftCard="Apple iTunes Gift Card"
                                    uS25="US$50"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-26@2x.png"
                                    amazonGiftCard="Google Play Gift Card"
                                    uS25="US$10"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-27@2x.png"
                                    amazonGiftCard="Starbucks Gift Card"
                                    uS25="US$15"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-28@2x.png"
                                    amazonGiftCard="Walmart Gift Card"
                                    uS25="US$100"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-29@2x.png"
                                    amazonGiftCard="Target Gift Card"
                                    uS25="US$20"
                                />
                            </div>
                        </div>
                        <div className="image-frame">
                            <img className="image-icon6" alt="" src="/image.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="link-columns5">
                <div className="frame-parent21">
                    <div className="link-wrapper1">
                        <Button
                            className="link6"
                            disableElevation
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#3a4f66",
                                fontSize: "16",
                                background: "#fff",
                                borderRadius: "5px",
                                "&:hover": {background: "#fff"},
                                width: 150,
                                height: 42.6,
                            }}
                        >
                            See all
                        </Button>
                    </div>
                    <div className="frame-parent22">
                        <div className="link-parent3">
                            <img className="link-icon5" alt=""/>
                            <div className="frame-parent23">
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-30@2x.png"
                                    amazonGiftCard="Netflix Gift Card"
                                    uS25="US$30"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-31@2x.png"
                                    amazonGiftCard="Spotify Gift Card"
                                    uS25="US$60"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-32@2x.png"
                                    amazonGiftCard="PlayStation Store Gift Card"
                                    uS25="US$75"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-33@2x.png"
                                    amazonGiftCard="Xbox Gift Card"
                                    uS25="US$40"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-34@2x.png"
                                    amazonGiftCard="Best Buy Gift Card"
                                    uS25="US$35"
                                />
                                <ProductRows
                                    itunes10000YenGiftCardItu="/itunes10000yengiftcarditunesjapanaccount29752521jpg-35@2x.png"
                                    amazonGiftCard="Home Depot Gift Card"
                                    uS25="US$200"
                                />
                            </div>
                        </div>
                        <div className="image-wrapper1">
                            <img
                                className="image-icon7"
                                loading="lazy"
                                alt=""
                                src="/image.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-more">
                <Button
                    className="link7"
                    disableElevation
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        color: "#3a4f66",
                        fontSize: "16",
                        background: "#fff",
                        borderRadius: "5px",
                        "&:hover": {background: "#fff"},
                        width: 150,
                        height: 42.6,
                    }}
                >
                    <Link to="/product-listings" className="see-all-button">
                        See all
                    </Link>
                </Button>
            </div>
        </section>
    );
};

NavigationLinks.propTypes = {
    className: PropTypes.string,
};

export default NavigationLinks;
