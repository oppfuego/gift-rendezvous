import Header1 from "../components/Header1";
import SignIn1 from "../components/SignIn1";
import Footer1 from "../components/Footer1";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-1920">
      <Header1 />
      <section className="signup-content-parent">
        <div className="signup-content">
          <SignIn1 />
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer1 />
    </div>
  );
};

export default SignUp;
