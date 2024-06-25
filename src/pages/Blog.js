import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FigureContainers from "../components/FigureContainers";
import FrameComponent1 from "../components/FrameComponent1";
import Footer1 from "../components/Footer1";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog1">
      <Header />
      <FrameComponent2 />
      <div className="symbol"></div>
      <main className="blog-inner">
        <section className="frame-parent">
          <div className="frame-group">
            <div className="background-parent">
              <div className="background">
                <h3 className="symbol1"></h3>
                <h3 className="symbol2"></h3>
                <div className="frame-container">
                  <div className="follow-wrapper">
                    <div className="follow">Follow:</div>
                  </div>
                  <div className="social-media-icons">
                    <h3 className="symbol3"></h3>
                    <h3 className="symbol4"></h3>
                    <h3 className="symbol5"></h3>
                    <h3 className="symbol6"></h3>
                    <h3 className="symbol7"></h3>
                  </div>
                </div>
              </div>
              <div className="blog-title">
                <div className="playasia-blog">
                  <span>{`Playasia `}</span>
                  <span className="blog2">Blog</span>
                </div>
              </div>
            </div>
            <Button
              className="background1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "16",
                background: "#8b9fe8",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#8b9fe8" },
                width: 260,
                height: 60,
              }}
            >
              More
            </Button>
          </div>
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="frame-wrapper1">
                  <div className="frame-parent2">
                    <div className="search-inputs-wrapper">
                      <div className="search-inputs">
                        <TextField
                          className="input"
                          placeholder="Search …"
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#ddd" },
                            "& .MuiInputBase-root": {
                              height: "38px",
                              backgroundColor: "#fff",
                              borderRadius: "0px 0px 0px 0px",
                            },
                            "& .MuiInputBase-input": { color: "#757575" },
                          }}
                        />
                        <button className="input1">
                          <div className="search">Search</div>
                        </button>
                      </div>
                    </div>
                    <div className="blog-cards">
                      <div className="card-containers">
                        <div className="card-cash-blog">Card Cash Blog</div>
                        <img
                          className="link-weekly-special-fb-ig-05"
                          loading="lazy"
                          alt=""
                          src="/link--weeklyspecial-fbig-052124300x300jpg@2x.png"
                        />
                      </div>
                      <div className="card-containers1">
                        <div className="gift-card-trends">Gift Card Trends</div>
                        <img
                          className="link-low-deadline-alert-fb-i"
                          loading="lazy"
                          alt=""
                          src="/link--lowdeadlinealert-fbig27300x300jpg@2x.png"
                        />
                      </div>
                      <div className="recent-posts">
                        <div className="heading-3">Recent Posts</div>
                        <div className="posts-container">
                          <div className="frame-parent3">
                            <div className="symbol-parent">
                              <div className="symbol8"></div>
                              <div className="perfect-presents-blog">
                                Perfect Presents Blog
                              </div>
                            </div>
                            <div className="expansion-story-trailer">
                              Expansion Story Trailer | Watch It Here
                            </div>
                          </div>
                          <div className="frame-parent4">
                            <div className="symbol-group">
                              <div className="symbol9"></div>
                              <div className="card-connect">Card Connect</div>
                            </div>
                            <div className="multi-language-support-coming-container">
                              <span className="multi-language-support-coming-container1">
                                <p className="multi-language-support-coming">
                                  Multi-language Support Coming on
                                </p>
                                <p className="september-19">September 19</p>
                              </span>
                            </div>
                          </div>
                          <div className="frame-parent5">
                            <div className="symbol-container">
                              <div className="symbol10"></div>
                              <div className="gift-card-genius">
                                Gift Card Genius
                              </div>
                            </div>
                            <div className="giana-sisters">{`76, Giana Sisters, & More!`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent6">
                  <div className="frame-parent7">
                    <div className="frame-wrapper2">
                      <div className="link-news-blog-elden-ring-1-parent">
                        <img
                          className="link-news-blog-elden-ring-1-"
                          rows={17}
                          cols={36}
                          alt=""
                          src="/link--newsblogeldenring1720x340jpg@2x.png"
                        />
                        <div className="games-time">
                          <div className="link-games">Articles</div>
                          <div className="time-2024-05-22">2024-05-22</div>
                        </div>
                        <h1 className="gift-card-guru">Gift Card Guru</h1>
                        <div className="at-gift-card">
                          At Gift Card Guru, we dive deep into the world of gift
                          cards, providing expert advice on choosing the best
                          cards for every occasion. From birthdays to
                          anniversaries, our guides and reviews help you make
                          informed decisions, ensuring your gifts are always a
                          hit.
                        </div>
                      </div>
                    </div>
                    <div className="figure-containers-parent">
                      <FigureContainers
                        figureFigureLinkSocialBan="/figure--figure--link--socialbannermonsterhunterjpg@2x.png"
                        ultimateGiftCards="Ultimate Gift Cards"
                      />
                      <FigureContainers
                        figureFigureLinkSocialBan="/figure--figure--link--mfc-toys-zeldajpg@2x.png"
                        ultimateGiftCards="Gift Card Genius"
                        propColor="#1c1c1c"
                      />
                    </div>
                  </div>
                  <div className="frame-parent8">
                    <div className="heading-3-archives-wrapper">
                      <div className="heading-31">Archives</div>
                    </div>
                    <div className="archives-container">
                      <div className="archives-container1">
                        <div className="archives-links">
                          <div className="link-news-plain-2-720x340jp-parent">
                            <img
                              className="link-news-plain-2-720x340jp"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg@2x.png"
                            />
                            <div className="link-games-parent">
                              <div className="link-games1">Games</div>
                              <div className="time-2024-05-21">2024-05-21</div>
                            </div>
                            <h3 className="gift-card-guru1">Gift Card Guru</h3>
                            <div className="at-gift-card1">
                              At Gift Card Guru, we dive deep into the world of
                              gift cards, providing expert advice on choosing
                              the best cards for every occasion. From birthdays
                              to anniversaries, our guides and reviews help you
                              make informed decisions, ensuring your gifts are
                              always a hit.
                            </div>
                          </div>
                          <div className="link-news-plain-2-720x340jp-group">
                            <img
                              className="link-news-plain-2-720x340jp1"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-1@2x.png"
                            />
                            <div className="link-games-group">
                              <div className="link-games2">Games</div>
                              <div className="time-2024-05-211">2024-05-21</div>
                            </div>
                            <h3 className="card-chronicles">Card Chronicles</h3>
                            <div className="welcome-to-card">
                              Welcome to Card Chronicles, where we unravel the
                              latest trends and news in the gift card industry.
                              Our blog covers everything from innovative gift
                              card designs to the latest promotions and
                              discounts, helping you stay ahead of the curve.
                            </div>
                          </div>
                        </div>
                        <div className="archives-links1">
                          <div className="link-news-plain-2-720x340jp-container">
                            <img
                              className="link-news-plain-2-720x340jp2"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-2@2x.png"
                            />
                            <div className="link-games-container">
                              <div className="link-games3">Games</div>
                              <div className="time-2024-05-212">2024-05-21</div>
                            </div>
                            <h3 className="the-gift-card">
                              The Gift Card Insider
                            </h3>
                            <div className="the-gift-card1">
                              The Gift Card Insider is your go-to source for
                              insider tips and tricks on maximizing the value of
                              your gift cards. Learn how to find the best deals,
                              avoid common pitfalls, and make the most out of
                              every card you purchase or receive.
                            </div>
                          </div>
                          <div className="link-news-plain-2-720x340jp-parent1">
                            <img
                              className="link-news-plain-2-720x340jp3"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-3@2x.png"
                            />
                            <div className="link-games-parent1">
                              <div className="link-games4">Games</div>
                              <div className="time-2024-05-213">2024-05-21</div>
                            </div>
                            <h3 className="gift-card-savvy">Gift Card Savvy</h3>
                            <div className="gift-card-savvy1">
                              Gift Card Savvy is dedicated to helping you
                              navigate the vast world of gift cards with ease.
                              Our blog features comprehensive reviews, practical
                              tips, and creative ideas to make your gift-giving
                              experience seamless and enjoyable.
                            </div>
                          </div>
                        </div>
                        <div className="archives-links2">
                          <FrameComponent1 linkNewsPlain2720x340jpg="/link--newsplain2720x340jpg@2x.png" />
                          <div className="link-news-plain-2-720x340jp-parent2">
                            <img
                              className="link-news-plain-2-720x340jp4"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-5@2x.png"
                            />
                            <div className="link-games-parent2">
                              <div className="link-games5">Games</div>
                              <div className="time-2024-05-214">2024-05-21</div>
                            </div>
                            <h3 className="gift-card-junction">
                              Gift Card Junction
                            </h3>
                            <div className="gift-card-junction1">
                              Gift Card Junction is your one-stop destination
                              for everything gift card-related. From exploring
                              the best retail and restaurant gift cards to
                              understanding the nuances of reloadable cards, we
                              cover it all to keep you well-informed.
                            </div>
                          </div>
                        </div>
                        <div className="archives-links3">
                          <div className="link-news-plain-2-720x340jp-parent3">
                            <img
                              className="link-news-plain-2-720x340jp5"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-6@2x.png"
                            />
                            <div className="link-games-parent3">
                              <div className="link-games6">Games</div>
                              <div className="time-2024-05-215">2024-05-21</div>
                            </div>
                            <h3 className="card-chronicles1">
                              Card Chronicles
                            </h3>
                            <div className="welcome-to-card1">
                              Welcome to Card Chronicles, where we unravel the
                              latest trends and news in the gift card industry.
                              Our blog covers everything from innovative gift
                              card designs to the latest promotions and
                              discounts, helping you stay ahead of the curve.
                            </div>
                          </div>
                          <div className="link-news-plain-2-720x340jp-parent4">
                            <img
                              className="link-news-plain-2-720x340jp6"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-7@2x.png"
                            />
                            <div className="link-games-parent4">
                              <div className="link-games7">Games</div>
                              <div className="time-2024-05-216">2024-05-21</div>
                            </div>
                            <h3 className="card-chronicles2">
                              Card Chronicles
                            </h3>
                            <div className="welcome-to-card2">
                              Welcome to Card Chronicles, where we unravel the
                              latest trends and news in the gift card industry.
                              Our blog covers everything from innovative gift
                              card designs to the latest promotions and
                              discounts, helping you stay ahead of the curve.
                            </div>
                          </div>
                        </div>
                        <div className="archives-links4">
                          <div className="link-news-plain-2-720x340jp-parent5">
                            <img
                              className="link-news-plain-2-720x340jp7"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-8@2x.png"
                            />
                            <div className="link-games-parent5">
                              <div className="link-games8">Games</div>
                              <div className="time-2024-05-217">2024-05-21</div>
                            </div>
                            <h3 className="the-gift-card2">
                              The Gift Card Insider
                            </h3>
                            <div className="the-gift-card3">
                              The Gift Card Insider is your go-to source for
                              insider tips and tricks on maximizing the value of
                              your gift cards. Learn how to find the best deals,
                              avoid common pitfalls, and make the most out of
                              every card you purchase or receive.
                            </div>
                          </div>
                          <div className="link-news-plain-2-720x340jp-parent6">
                            <img
                              className="link-news-plain-2-720x340jp8"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-9@2x.png"
                            />
                            <div className="link-games-parent6">
                              <div className="link-games9">Games</div>
                              <div className="time-2024-05-218">2024-05-21</div>
                            </div>
                            <h3 className="gift-card-savvy2">
                              Gift Card Savvy
                            </h3>
                            <div className="gift-card-savvy3">
                              Gift Card Savvy is dedicated to helping you
                              navigate the vast world of gift cards with ease.
                              Our blog features comprehensive reviews, practical
                              tips, and creative ideas to make your gift-giving
                              experience seamless and enjoyable.
                            </div>
                          </div>
                        </div>
                        <div className="archives-links5">
                          <FrameComponent1 linkNewsPlain2720x340jpg="/link--newsplain2720x340jpg@2x.png" />
                          <div className="link-news-plain-2-720x340jp-parent7">
                            <img
                              className="link-news-plain-2-720x340jp9"
                              loading="lazy"
                              alt=""
                              src="/link--newsplain2720x340jpg-11@2x.png"
                            />
                            <div className="link-games-parent7">
                              <div className="link-games10">Games</div>
                              <div className="time-2024-05-219">2024-05-21</div>
                            </div>
                            <h3 className="gift-card-junction2">
                              Gift Card Junction
                            </h3>
                            <div className="gift-card-junction3">
                              Gift Card Junction is your one-stop destination
                              for everything gift card-related. From exploring
                              the best retail and restaurant gift cards to
                              understanding the nuances of reloadable cards, we
                              cover it all to keep you well-informed.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="month-list-container">
                        <div className="list">
                          <div className="item">
                            <div className="month-item-containers">
                              <div className="symbol11"></div>
                              <div className="may-2024">May 2024</div>
                            </div>
                          </div>
                          <div className="item1">
                            <div className="symbol-parent1">
                              <div className="symbol12"></div>
                              <div className="april-2024">April 2024</div>
                            </div>
                          </div>
                          <div className="item2">
                            <div className="symbol-parent2">
                              <div className="symbol13"></div>
                              <div className="march-2024">March 2024</div>
                            </div>
                          </div>
                          <div className="item3">
                            <div className="symbol-parent3">
                              <div className="symbol14"></div>
                              <div className="february-2024">February 2024</div>
                            </div>
                          </div>
                          <div className="item4">
                            <div className="symbol-parent4">
                              <div className="symbol15"></div>
                              <div className="january-2024">January 2024</div>
                            </div>
                          </div>
                          <div className="item5">
                            <div className="symbol-parent5">
                              <div className="symbol16"></div>
                              <div className="december-2023">December 2023</div>
                            </div>
                          </div>
                          <div className="item6">
                            <div className="symbol-parent6">
                              <div className="symbol17"></div>
                              <div className="november-2023">November 2023</div>
                            </div>
                          </div>
                          <div className="item7">
                            <div className="symbol-parent7">
                              <div className="symbol18"></div>
                              <div className="october-2023">October 2023</div>
                            </div>
                          </div>
                          <div className="item8">
                            <div className="symbol-parent8">
                              <div className="symbol19"></div>
                              <div className="september-2023">
                                September 2023
                              </div>
                            </div>
                          </div>
                          <div className="item9">
                            <div className="symbol-parent9">
                              <div className="symbol20"></div>
                              <div className="august-2023">August 2023</div>
                            </div>
                          </div>
                          <div className="item10">
                            <div className="symbol-parent10">
                              <div className="symbol21"></div>
                              <div className="july-2023">July 2023</div>
                            </div>
                          </div>
                          <div className="item11">
                            <div className="symbol-parent11">
                              <div className="symbol22"></div>
                              <div className="june-2023">June 2023</div>
                            </div>
                          </div>
                          <div className="item12">
                            <div className="symbol-parent12">
                              <div className="symbol23"></div>
                              <div className="may-2023">May 2023</div>
                            </div>
                          </div>
                          <div className="item13">
                            <div className="symbol-parent13">
                              <div className="symbol24"></div>
                              <div className="april-2023">April 2023</div>
                            </div>
                          </div>
                          <div className="item14">
                            <div className="symbol-parent14">
                              <div className="symbol25"></div>
                              <div className="march-2023">March 2023</div>
                            </div>
                          </div>
                          <div className="item15">
                            <div className="symbol-parent15">
                              <div className="symbol26"></div>
                              <div className="february-2023">February 2023</div>
                            </div>
                          </div>
                          <div className="item16">
                            <div className="symbol-parent16">
                              <div className="symbol27"></div>
                              <div className="january-2023">January 2023</div>
                            </div>
                          </div>
                          <div className="item17">
                            <div className="symbol-parent17">
                              <div className="symbol28"></div>
                              <div className="december-2022">December 2022</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-container">
                <div className="nav-list">Next Page »</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Blog;
