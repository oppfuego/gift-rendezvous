import Header from "./Header";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <Header />
      <div className="main-inner">
        <div className="frame-parent3">
          <div className="welcome-darnell-wrapper">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <div className="your-personal-dashboard">Your Personal Dashboard</div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
