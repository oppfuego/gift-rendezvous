import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListings from "./pages/ProductListings";
import Blog from "./pages/Blog";
import ProductDescription from "./pages/ProductDescription";
import CartDetails from "./pages/CartDetails";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/product-description" element={<ProductDescription />} />
      <Route path="/cart-details-1920" element={<CartDetails />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/terms-condition" element={<TermsConditions />} />
      <Route path="/cencellation-policy" element={<CancellationPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/privacy-policy" element={<RefundPolicy />} />

    </Routes>
  );
}
export default App;
