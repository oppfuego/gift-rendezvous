import { Button } from "@mui/material";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Footer1 from "../components/Footer1";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <Header/>
      <main className="product-description-inner">
        <section className="frame-section">
          <div className="frame-wrapper3">
            <div className="frame-parent9">
              <div className="categories-container-parent">
                <div className="categories-container">
                  <b className="play-exclusives1">PLAY Exclusives</b>
                  <b className="games1">Games</b>
                  <b className="digital1">Digital</b>
                  <b className="toys1">Toys</b>
                  <b className="lifestyle1">Lifestyle</b>
                  <b className="movies1">Movies</b>
                  <b className="music1">Music</b>
                  <b className="books1">Books</b>
                  <b className="electronics1">Electronics</b>
                </div>
                <div className="frame-parent10">
                  <div className="link-toys-parent">
                    <div className="link-toys-container">
                      <a
                        className="others"
                        href="https://www.figma.com/design/sZZlft5U0vdtIoG6PByuxZ?node-id=1-15871"
                        target="_blank"
                      >
                        {" "}
                        » Others
                      </a>
                    </div>
                    <div className="border1">
                      <div className="heading-21">
                        <div className="categories1">Categories</div>
                      </div>
                      <div className="subcategories-container-wrapper">
                        <div className="subcategories-container">
                          <div className="link-recently">Recently Added</div>
                          <div className="link-bestsellers">Bestsellers</div>
                          <div className="link-figures">Figures</div>
                          <div className="link-plush">Plush Dolls</div>
                          <div className="link-character">Character Goods</div>
                          <div className="link-project">Project Kavvaii</div>
                          <div className="link-vtuber">VTuber Merchandise</div>
                          <div className="link-18">(18+) Hentai</div>
                          <div className="link-others">Others</div>
                          <div className="link-clearance">Clearance Sale</div>
                          <div className="link-plush1">Plush Bundle</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="png-parent">
                    <img
                      className="png-icon"
                      loading="lazy"
                      alt=""
                      src="/7926731png@2x.png"
                    />
                    <div className="product-images">
                      <img
                        className="png-icon1"
                        loading="lazy"
                        alt=""
                        src="/7926732png@2x.png"
                      />
                      <img
                        className="png-icon2"
                        loading="lazy"
                        alt=""
                        src="/7926733png@2x.png"
                      />
                    </div>
                  </div>
                  <div className="heading-1-worried-psyduck-w-parent">
                    <h1 className="heading-1">Amazon Gift Card</h1>
                    <div className="link-pokemon-center-parent">
                      <div className="link-pokemon">
                        The Amazon Gift Card is perfect for any occasion.
                        Redeemable towards millions of items store-wide at
                        Amazon.com, it’s the ideal gift for those who love
                        shopping online.
                      </div>
                      <div className="background-group">
                        <div className="background2">
                          <div className="stock">stock</div>
                        </div>
                        <div className="in-our-warehouse">In our warehouse</div>
                      </div>
                      <div className="usd-25">USD $25</div>
                    </div>
                    <div className="purchase-options">
                      <div className="purchase-buttons">
                        <Button
                          className="link"
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#8b9fe8",
                            borderRadius: "5px",
                            "&:hover": { background: "#8b9fe8" },
                            height: 40,
                          }}
                        >
                          Add to Cart
                        </Button>
                        <Button
                            className="link-paypal"
                            disableElevation
                            variant="contained"
                            sx={{
                              background: "#fbd66b",
                              borderRadius: "4px",
                              "&:hover": { background: "#fbd66b" },
                              height: 40,
                            }}
                        >
                          <img src="paypal.svg" alt="PayPal"/>
                        </Button>
                      </div>
                      <div className="link1">
                        <div className="btc-0001048362783-us192">
                          btc 0.001048362783 (US$1.92)
                        </div>
                      </div>
                      <Button
                        className="link2"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "16",
                          background: "#8b9fe8",
                          borderRadius: "5px",
                          "&:hover": { background: "#8b9fe8" },
                          height: 40,
                        }}
                      >
                        Pay by Bitcoin / Lightning
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-parent">
                <b className="blog3">Blog</b>
                <div className="blog-content">
                  <div className="blog-content-inner">
                    <div className="ga066010022png-parent">
                      <img
                        className="ga066010022png-icon"
                        loading="lazy"
                        alt=""
                        src="/ga066010022png@2x.png"
                      />
                      <b className="b">12</b>
                    </div>
                  </div>
                  <img
                    className="image-icon"
                    loading="lazy"
                    alt=""
                    src="/image-1.svg"
                  />
                  <img
                    className="form-icon"
                    loading="lazy"
                    alt=""
                    src="/form.svg"
                  />
                  <img
                    className="image-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-2.svg"
                  />
                  <div className="wrapper">
                    <div className="div">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetails />
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default ProductDescription;
