import PropTypes from "prop-types";
import "./Header.css";
import {IoSearch} from "react-icons/io5";
import {FaEarthAsia} from "react-icons/fa6";
import {IoIosArrowDown} from "react-icons/io";
import {FaUser} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";


const Header = ({className = ""}) => {
    return (
        <div className={`header ${className}`}>
            <div className="section">
                <div className="background3">
                    <div className="logo-search">
                        <Link to="/" className="logo-wrapper">

                            <div className="logo">
                                <div className="logo-container">
                                    <div className="vector-wrapper">
                                        <img
                                            className="vector-icon"
                                            loading="lazy"
                                            alt=""
                                            src="/vector.svg"
                                        />
                                    </div>
                                    <div className="gift-rendezvous">Gift Rendezvous</div>
                                </div>
                            </div>
                        </Link>
                        <div className="background4">
                            <div className="search-bar">
                                <div className="input2">
                                    <div className="what-are-you">What are you looking for?</div>
                                </div>
                            </div>
                            <div className="rectangle"/>
                            <div className="button">
                                <div className="symbol29"><IoSearch/></div>
                            </div>
                        </div>
                        <div className="user-buttons-wrapper">
                            <div className="user-buttons">
                                <div className="button1">
                                    <div className="symbol30"><FaEarthAsia/></div>
                                    <div className="language-dropdown">
                                        <div className="en">EN</div>
                                        <div className="symbol-wrapper">
                                            <div className="symbol31"><IoIosArrowDown/></div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/account" className="button-show-login-dialog">
                                    <a
                                        className="symbol32"
                                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2349"
                                        target="_blank"
                                    >
                                        <FaUser/>
                                    </a>
                                </Link>
                                <Link to="/cart-details-1920" className="button-show-products-in-cart">

                                    <a
                                        className="symbol33"
                                        href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-2858"
                                        target="_blank"
                                    >
                                        <FaShoppingCart/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
