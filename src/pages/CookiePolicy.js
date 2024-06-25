import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./CookiePolicy.css";
import GeneralProvisions from "../components/props-component/GeneralProvisions";

const CookiePolicy = () => {
    return (
        <div className="cookie-policy">
            <Header/>
            <div className="cookie-policy-wrapper">
                <h1 className="cookie-policy1">Cookie Policy</h1>
            </div>
            <main className="cookie-policy-content">
                <div className="lilylamb-kids-we2">
                    This Cookie Policy explains how [Your Company] ("we," "us," or "our")
                    uses cookies and similar technologies on our website ([Your Website
                    URL]). By using our website, you agree to the use of cookies as
                    outlined in this policy. Please read this policy carefully to
                    understand what cookies are, how we use them, and how you can manage
                    your cookie preferences.
                </div>
                <div className="what-are-cookies-parent">
                    <h1 className="what-are-cookies-container">
                        <ol className="what-are-cookies">
                            <li>What Are Cookies?</li>
                        </ol>
                    </h1>
                    <div className="cookie-policy-definitions-parent">
                        <div className="cookie-policy-definitions">
                            <h3 className="definition-of-cookies">
                                1.1 Definition of Cookies
                            </h3>
                            <div className="cookies-are-small">
                                Cookies are small text files that are placed on your device
                                (computer, smartphone, or other electronic device) when you
                                visit a website. Cookies are widely used by website owners to
                                make their websites work, or to work more efficiently, as well
                                as to provide reporting information.
                            </div>
                        </div>
                        <div className="cookie-policy-types">
                            <h3 className="types-of-cookies">1.2 Types of Cookies</h3>
                            <div className="there-are-several-container">
                                <p className="there-are-several">
                                    There are several types of cookies, including:
                                </p>
                                <p className="blank-line3">&nbsp;</p>
                                <ul className="first-party-cookies-these-are">
                                    <li className="first-party-cookies-these">
                                        First-Party Cookies: These are cookies set by the website
                                        you are visiting.
                                    </li>
                                    <li className="third-party-cookies-these">
                                        Third-Party Cookies: These are cookies set by a third party
                                        other than the website you are visiting.
                                    </li>
                                    <li className="session-cookies-these">
                                        Session Cookies: These cookies expire when you close your
                                        web browser.
                                    </li>
                                    <li>
                                        Persistent Cookies: These cookies remain on your device for
                                        a set period or until you delete them.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <GeneralProvisions
                    title={<p style={{fontSize: '38px'}}>2. How We Use Cookies</p>}
                    subtitles={[
                        "2.1 Essential Cookies"
                        ,
                        "2.2 Performance and Analytics Cookies"
                        ,
                        "2.3 Functionality Cookies",
                        "2.4 Advertising and Targeting Cookies"
                    ]}
                    texts={[
                        "Essential cookies are necessary for the proper functioning of our website. These cookies enable core functionalities such as security, network management, and accessibility. Without these cookies, the website may not function properly."

                        ,
                        "Performance and analytics cookies collect information about how users interact with our website. This information is used to improve the performance of our website and provide a better user experience. These cookies help us understand which pages are visited most often and any errors encountered by users."
                        ,
                        "Functionality cookies allow our website to remember choices you make and provide enhanced, more personal features. For example, these cookies can remember your language preferences or region. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites."
                        ,
                        "Advertising and targeting cookies are used to deliver relevant advertisements to users. These cookies track your browsing habits and activity on our website and other websites to provide you with advertising that is more relevant to your interests. They also help us measure the effectiveness of advertising campaigns."
                    ]}
                /><GeneralProvisions
                    title={<p style={{fontSize: '38px'}}>3. Cookies Used on Our Website</p>}
                    subtitles={[
                        "3.1 First-Party Cookies"
                        ,
                        "3.2 Third-Party Cookies"
                    ]}
                    texts={[
                        "Our website uses first-party cookies for essential functionalities, such as user authentication and session management. These cookies are crucial for the operation of our website and cannot be disabled."

                        ,
                        "We use third-party cookies provided by trusted partners for analytics, advertising, and other purposes. These third-party cookies are subject to the respective privacy policies of these external services."
                    ]}
                />

                <div className="managing-cookies-parent">
                    <h1 className="managing-cookies">
                        <p className="managing-cookies1">
                            4. Managing Cookies
                        </p>
                    </h1>
                    <div className="cookie-management-options">
                        <div className="cookie-management-option-list">
                            <h3 className="browser-settings">4.1Browser Settings</h3>
                            <div className="most-web-browsers">
                                Most web browsers allow you to control cookies through their
                                settings preferences. You can set your browser to accept or
                                reject cookies, delete cookies, or notify you when a cookie is
                                being set. Please refer to your browser's help section for
                                instructions on how to manage cookies.
                            </div>
                        </div>
                        <div className="cookie-management-option-list1">
                            <h3 className="opt-out-options">4.2 Opt-Out Options</h3>
                            <div className="you-can-opt-container">
                                <a
                                    className="your-online-choices"
                                    href="https://www.youronlinechoices.com/"
                                    target="_blank"
                                >
                                    Your Online Choices
                                </a>
                            </div>
                        </div>
                        <div className="cookie-management-option-list2">
                            <h3 className="consequences-of-disabling">
                                4.3 Consequences of Disabling Cookies
                            </h3>
                            <div className="if-you-choose">
                                If you choose to disable cookies, some features of our website
                                may not function properly or may become unavailable. Essential
                                cookies are necessary for the website's operation, and disabling
                                them may affect your ability to use certain parts of our
                                website.
                            </div>
                        </div>
                    </div>
                </div>
                <GeneralProvisions
                    title={<p style={{fontSize: '38px'}}>5. Changes to This Cookie Policy</p>}
                    subtitles={[
                        "5.1 Policy Updates"
                        ,
                        "5.2 Continued Use"
                    ]}
                    texts={[
                        "We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the date of the latest revision will be indicated at the top of the policy."

                        ,
                        "By continuing to use our website after any changes to this Cookie Policy, you accept the updated policy. We encourage you to review this policy periodically to stay informed about how we use cookies."
                    ]}
                />

                <div className="contact-information-container">
                    <h1 className="contact-information6">
                        <p className="contact-information7">
                            6. Contact Information
                        </p>
                    </h1>
                    <div className="if-you-have-container3">
                        <p className="if-you-have3">
                            If you have any questions or concerns about this Cookie Policy,
                            please contact us at:
                        </p>
                        <p className="brandname-customer-support3">
                            BrandName Customer Support
                        </p>
                        <p className="email-supportbrandnamecom3">{`Email: support@brandname.com `}</p>
                        <p className="phone-1-800-123-45673">{`Phone: +1-800-123-4567 `}</p>
                        <p className="address-123-main3">
                            Address: 123 Main Street, Suite 456, City, Country, ZIP Code
                        </p>
                    </div>
                </div>
            </main>
            <Footer1/>
        </div>
    );
};

export default CookiePolicy;
