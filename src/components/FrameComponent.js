import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", title = "Your Cart" }) => {
    return (
        <section className={`header-parent ${className}`}>
            <Header />
            <div className="hourly-rate-wrapper">
                <div className="hourly-rate">
                    <div className="cart-title-container">
                        <h1 className="your-cart">{title}</h1>
                    </div>
                    <div className="view-or-edit">
                        View or edit your cart before checkout
                    </div>
                </div>
            </div>
        </section>
    );
};

FrameComponent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};



export default FrameComponent;
