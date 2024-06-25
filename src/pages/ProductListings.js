import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import "./ProductListings.css";

const ProductListings = () => {
  return (
    <div className="product-listings">
      <Header />
      <main className="content">
        <section className="navigation-container-parent">
          <div className="navigation-container">
            <div className="navigation-wrapper">
              <div className="navigation-list-wrapper-wrapper">
                <div className="navigation-list-wrapper">
                  <header className="navigation-list">
                    <div className="play-exclusives">PLAY Exclusives</div>
                    <div className="games">Games</div>
                    <div className="digital">Digital</div>
                    <div className="toys">Toys</div>
                    <div className="lifestyle">Lifestyle</div>
                    <div className="movies">Movies</div>
                    <div className="music">Music</div>
                    <div className="books">Books</div>
                    <div className="electronics">Electronics</div>
                    <div className="blog">Blog</div>
                  </header>
                  <img
                    className="container-icon"
                    loading="lazy"
                    alt=""
                    src="/container1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-parent">
            <div className="border">
              <div className="heading-2">
                <div className="categories">Categories</div>
              </div>
              <div className="category-links-container">
                <div className="category-links-wrapper">
                  <div className="link-preorder">Preorder Exclusives</div>
                  <div className="link-nintendo">Nintendo Switch</div>
                  <div className="link-standard">Standard Editions</div>
                  <div className="link-limited">Limited Editions</div>
                  <div className="link-ps4">{`PS4 & PS5`}</div>
                  <div className="link-other">Other Platforms</div>
                  <div className="link-exclusive">Exclusive Merch</div>
                  <div className="link-all">All Exclusives</div>
                </div>
              </div>
              <div className="featured-category">
                <div className="featured-links-wrapper">
                  <div className="link-paex">PAEX Bundle deal</div>
                  <div className="link-paex1">PAEX Sale</div>
                </div>
              </div>
            </div>
            <div className="gift-card-list-parent">
              <div className="gift-card-list">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg1@2x.png"
                />
                <div className="gift-card-title">
                  <div className="amazon-gift-card">Amazon Gift Card</div>
                  <div className="us25">US$25</div>
                </div>
              </div>
              <div className="gift-card-list1">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon1"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-110@2x.png"
                />
                <div className="apple-itunes-gift-card-parent">
                  <div className="apple-itunes-gift">
                    Apple iTunes Gift Card
                  </div>
                  <div className="us50">US$50</div>
                </div>
              </div>
              <div className="gift-card-list2">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon2"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-210@2x.png"
                />
                <div className="google-play-gift-card-parent">
                  <div className="google-play-gift">Google Play Gift Card</div>
                  <div className="us10">US$10</div>
                </div>
              </div>
              <div className="gift-card-list3">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon3"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-36@2x.png"
                />
                <div className="starbucks-gift-card-parent">
                  <div className="starbucks-gift-card">Starbucks Gift Card</div>
                  <div className="us15">US$15</div>
                </div>
              </div>
              <div className="gift-card-list4">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon4"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-41@2x.png"
                />
                <div className="walmart-gift-card-parent">
                  <div className="walmart-gift-card">Walmart Gift Card</div>
                  <div className="us100">US$100</div>
                </div>
              </div>
              <div className="gift-card-list5">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon5"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-51@2x.png"
                />
                <div className="netflix-gift-card-parent">
                  <div className="netflix-gift-card">Netflix Gift Card</div>
                  <div className="us30">US$30</div>
                </div>
              </div>
              <div className="gift-card-list6">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon6"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-61@2x.png"
                />
                <div className="spotify-gift-card-parent">
                  <div className="spotify-gift-card">Spotify Gift Card</div>
                  <div className="us60">US$60</div>
                </div>
              </div>
              <div className="gift-card-list7">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon7"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-71@2x.png"
                />
                <div className="playstation-store-gift-card-parent">
                  <div className="playstation-store-gift">
                    PlayStation Store Gift Card
                  </div>
                  <div className="us75">US$75</div>
                </div>
              </div>
              <div className="gift-card-list8">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon8"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-81@2x.png"
                />
                <div className="xbox-gift-card-parent">
                  <div className="xbox-gift-card">Xbox Gift Card</div>
                  <div className="us40">US$40</div>
                </div>
              </div>
              <div className="gift-card-list9">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon9"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-91@2x.png"
                />
                <div className="best-buy-gift-card-parent">
                  <div className="best-buy-gift">Best Buy Gift Card</div>
                  <div className="us35">US$35</div>
                </div>
              </div>
              <div className="gift-card-list10">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon10"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg1@2x.png"
                />
                <div className="amazon-gift-card-parent">
                  <div className="amazon-gift-card1">Amazon Gift Card</div>
                  <div className="us251">US$25</div>
                </div>
              </div>
              <div className="gift-card-list11">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon11"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-110@2x.png"
                />
                <div className="apple-itunes-gift-card-group">
                  <div className="apple-itunes-gift1">
                    Apple iTunes Gift Card
                  </div>
                  <div className="us501">US$50</div>
                </div>
              </div>
              <div className="gift-card-list12">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon12"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-210@2x.png"
                />
                <div className="google-play-gift-card-group">
                  <div className="google-play-gift1">Google Play Gift Card</div>
                  <div className="us101">US$10</div>
                </div>
              </div>
              <div className="gift-card-list13">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon13"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-36@2x.png"
                />
                <div className="starbucks-gift-card-group">
                  <div className="starbucks-gift-card1">
                    Starbucks Gift Card
                  </div>
                  <div className="us151">US$15</div>
                </div>
              </div>
              <div className="gift-card-list14">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon14"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-41@2x.png"
                />
                <div className="walmart-gift-card-group">
                  <div className="walmart-gift-card1">Walmart Gift Card</div>
                  <div className="us1001">US$100</div>
                </div>
              </div>
              <div className="gift-card-list15">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon15"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-51@2x.png"
                />
                <div className="netflix-gift-card-group">
                  <div className="netflix-gift-card1">Netflix Gift Card</div>
                  <div className="us301">US$30</div>
                </div>
              </div>
              <div className="gift-card-list16">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon16"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-61@2x.png"
                />
                <div className="spotify-gift-card-group">
                  <div className="spotify-gift-card1">Spotify Gift Card</div>
                  <div className="us601">US$60</div>
                </div>
              </div>
              <div className="gift-card-list17">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon17"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-71@2x.png"
                />
                <div className="playstation-store-gift-card-group">
                  <div className="playstation-store-gift1">
                    PlayStation Store Gift Card
                  </div>
                  <div className="us751">US$75</div>
                </div>
              </div>
              <div className="gift-card-list18">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon18"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-81@2x.png"
                />
                <div className="xbox-gift-card-group">
                  <div className="xbox-gift-card1">Xbox Gift Card</div>
                  <div className="us401">US$40</div>
                </div>
              </div>
              <div className="gift-card-list19">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon19"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-91@2x.png"
                />
                <div className="best-buy-gift-card-group">
                  <div className="best-buy-gift1">Best Buy Gift Card</div>
                  <div className="us351">US$35</div>
                </div>
              </div>
              <div className="gift-card-list20">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon20"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-51@2x.png"
                />
                <div className="netflix-gift-card-container">
                  <div className="netflix-gift-card2">Netflix Gift Card</div>
                  <div className="us302">US$30</div>
                </div>
              </div>
              <div className="gift-card-list21">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon21"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-61@2x.png"
                />
                <div className="spotify-gift-card-container">
                  <div className="spotify-gift-card2">Spotify Gift Card</div>
                  <div className="us602">US$60</div>
                </div>
              </div>
              <div className="gift-card-list22">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon22"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-71@2x.png"
                />
                <div className="playstation-store-gift-card-container">
                  <div className="playstation-store-gift2">
                    PlayStation Store Gift Card
                  </div>
                  <div className="us752">US$75</div>
                </div>
              </div>
              <div className="gift-card-list23">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon23"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-81@2x.png"
                />
                <div className="xbox-gift-card-container">
                  <div className="xbox-gift-card2">Xbox Gift Card</div>
                  <div className="us402">US$40</div>
                </div>
              </div>
              <div className="gift-card-list24">
                <img
                  className="itunes-10000-yen-gift-card-itu-icon24"
                  loading="lazy"
                  alt=""
                  src="/itunes10000yengiftcarditunesjapanaccount29752521jpg-91@2x.png"
                />
                <div className="best-buy-gift-card-container">
                  <div className="best-buy-gift2">Best Buy Gift Card</div>
                  <div className="us352">US$35</div>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </div>
  );
};

export default ProductListings;
