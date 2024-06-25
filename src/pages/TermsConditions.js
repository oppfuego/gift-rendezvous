import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./TermsConditions.css";
import GeneralProvisions from "../components/props-component/GeneralProvisions";

const TermsConditions = () => {
    return (
        <div className="terms-conditions">
            <Header/>
            <div className="terms-and-conditions-wrapper">
                <h1 className="terms-and-conditions">Terms and Conditions</h1>
            </div>
            <main className="terms-content">
                <div className="lilylamb-kids-we-container">
                    <p className="welcome-to-your">
                        Welcome to [Your Gift Card Website]. These terms and conditions
                        outline the rules and regulations for the use of our website and the
                        purchase and use of our gift cards.
                    </p>
                    <p className="by-accessing-this">
                        By accessing this website and purchasing our gift cards, you accept
                        these terms and conditions in full. Do not continue to use [Your
                        Gift Card Website] if you do not accept all of the terms and
                        conditions stated on this page.
                    </p>
                </div>


                <div className="general-provisions-parent">
                    <h1 className="general-provisions">
                        <p>1. Definitions</p>

                    </h1>
                    <div className="frame-group">
                        <div className="acceptance-of-terms-parent">
                            <h3 className="acceptance-of-terms">1.1 Gift Card</h3>
                            <div className="by-accessing-and">
                                A gift card is a prepaid stored-value money card issued by [Your
                                Company] that can be used to purchase goods or services from
                                participating merchants. It represents a monetary value
                                equivalent to the amount loaded onto it and can be redeemed only
                                at the specified merchants.
                            </div>
                        </div>
                        <div className="modifications-to-terms-parent">
                            <h3 className="modifications-to-terms">
                                1.2 Website
                            </h3>
                            <div className="your-company-reserves">
                                The website owned and operated by [Your Company], located at
                                [website URL], serves as the platform for purchasing and
                                managing gift cards. The website includes all web pages,
                                subdomains, and subparts of the site, and provides information,
                                services, and functionalities related to our gift cards.
                            </div>
                        </div>
                        <div className="governing-law-parent">
                            <h3 className="governing-law">1.3 User</h3>
                            <div className="these-terms-and">
                                Any individual or entity who accesses the website or purchases
                                or uses a gift card is considered a user. This includes both
                                registered and non-registered users, whether they purchase the
                                gift card for themselves or receive it as a gift.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-provisions-parent">
                    <h1 className="general-provisions">
                        <p>2. General Provisions</p>

                    </h1>
                    <div className="frame-group">
                        <div className="acceptance-of-terms-parent">
                            <h3 className="acceptance-of-terms">2.1 Acceptance of Terms</h3>
                            <div className="by-accessing-and">
                                By accessing and using our website and purchasing our gift
                                cards, you agree to be bound by these terms and conditions, as
                                well as any other applicable laws and regulations. This
                                agreement constitutes a legally binding contract between you and
                                [Your Company].
                            </div>
                        </div>
                        <div className="modifications-to-terms-parent">
                            <h3 className="modifications-to-terms">
                                2.2 Modifications to Terms
                            </h3>
                            <div className="your-company-reserves">
                                [Your Company] reserves the right to amend these terms and
                                conditions at any time without prior notice. Any changes will be
                                posted on this page and will take effect immediately upon
                                posting. It is your responsibility to review these terms and
                                conditions periodically. Continued use of the website or gift
                                cards after any such changes shall constitute your consent to
                                such changes.
                            </div>
                        </div>
                        <div className="governing-law-parent">
                            <h3 className="governing-law">2.3 Governing Law</h3>
                            <div className="these-terms-and">
                                These terms and conditions are governed by and construed in
                                accordance with the laws of [Your Jurisdiction]. Any disputes
                                arising out of or relating to these terms and conditions or the
                                use of the website or gift cards will be subject to the
                                exclusive jurisdiction of the courts of [Your Jurisdiction].
                            </div>
                        </div>
                    </div>
                </div>
                <div className="general-provisions-parent">
                    <h1 className="general-provisions">
                        <p>3. Use of Gift Cards</p>

                    </h1>
                    <div className="frame-group">
                        <div className="acceptance-of-terms-parent">
                            <h3 className="acceptance-of-terms">3.1 Redemption</h3>
                            <div className="by-accessing-and">
                                Gift cards can be redeemed at participating merchants listed on our website.
                                The list of participating merchants may change from time to time without notice.
                                Users should check the website for the most current list of participating merchants
                                before attempting to use their gift cards.
                            </div>
                        </div>
                        <div className="modifications-to-terms-parent">
                            <h3 className="modifications-to-terms">
                                3.2 Non-Transferable
                            </h3>
                            <div className="your-company-reserves">
                                Gift cards are non-transferable and can only be used by
                                the person to whom they were issued or the person who legitimately received them
                                as a gift. They cannot be resold, transferred for value, or exchanged for cash,
                                except where required by law.
                            </div>
                        </div>
                        <div className="governing-law-parent">
                            <h3 className="governing-law">3.3 No Cash Redemption</h3>
                            <div className="these-terms-and">
                                Gift cards are not redeemable for cash and cannot
                                be returned for a cash refund, except where required by law. Any attempt to
                                redeem a gift card for cash is strictly prohibited and may result in
                                the deactivation of the gift card.
                            </div>
                        </div>
                        <div className="governing-law-parent">
                            <h3 className="governing-law">3.4 Expiration</h3>
                            <div className="these-terms-and">
                                Gift cards do not expire. However, [Your Company]
                                reserves the right to change this policy in the future with reasonable notice
                                to users. Any changes to the expiration policy will be clearly communicated on our
                                website and through other appropriate channels.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="purchase-of-gift-cards-parent">
                    <h1 className="purchase-of-gift-container">
                        <p>4. Purchase of Gift Cards</p>
                    </h1>
                    <div className="purchase-content">
                        <div className="purchasing-channels-parent">
                            <h3 className="purchasing-channels">4.1 Purchasing Channels</h3>
                            <div className="gift-cards-can">
                                Gift cards can be purchased on our website and at authorized
                                retailers. When purchasing online, users must follow the
                                instructions provided on the website and provide accurate and
                                complete information.
                            </div>
                        </div>
                        <div className="load-amounts-parent">
                            <h3 className="load-amounts">4.2 Load Amounts</h3>
                            <div className="the-minimum-and">
                                The minimum and maximum amounts that can be loaded onto a gift
                                card are determined by [Your Company] and are subject to change.
                                The current load limits are specified on our website. Users must
                                ensure that they do not exceed the maximum load limit when
                                purchasing or reloading a gift card.
                            </div>
                        </div>
                        <div className="payment-methods-parent">
                            <h3 className="payment-methods">4.3 Payment Methods</h3>
                            <div className="accepted-payment-methods">
                                Accepted payment methods for purchasing gift cards include
                                credit cards, debit cards, and other payment options as
                                specified on our website. All transactions are subject to
                                authorization and fraud checks. [Your Company] reserves the
                                right to decline any purchase at its discretion.
                            </div>
                        </div>
                        <div className="confirmation-parent">
                            <h3 className="confirmation">4.4 Confirmation</h3>
                            <div className="upon-successful-completion">
                                Upon successful completion of a gift card purchase, users will
                                receive a confirmation email with the details of the purchase.
                                This email serves as proof of purchase and should be retained
                                for future reference. In case of any discrepancies, users should
                                contact customer support immediately.
                            </div>
                        </div>
                        <div className="usage-restrictions-parent">
                            <h3 className="usage-restrictions">4.5 Usage Restrictions</h3>
                            <div className="gift-cards-cannot">
                                Gift cards cannot be used for illegal activities, including but
                                not limited to the purchase of illegal goods or services. Any
                                such use will result in the immediate deactivation of the gift
                                card and may be reported to the appropriate authorities.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-provisions-parent">
                    <h1 className="general-provisions">
                        <p>5. Lost or Stolen Gift Cards</p>
                    </h1>
                    <div className="frame-group">
                        <div className="acceptance-of-terms-parent">
                            <h3 className="acceptance-of-terms">5.1 Responsibility</h3>
                            <div className="by-accessing-and">
                                Users should keep their gift cards in a safe place
                                and not share the card number or security code with anyone.
                                If a gift card is lost or stolen, users should report it immediately
                                to customer support, although replacement or refund cannot be guaranteed.
                            </div>
                        </div>
                        <div className="modifications-to-terms-parent">
                            <h3 className="modifications-to-terms">
                                5.2 Safeguarding
                            </h3>
                            <div className="your-company-reserves">
                                Gift cards are non-transferable and can only be used by
                                the person to whom they were issued or the person who legitimately received them
                                as a gift. They cannot be resold, transferred for value, or exchanged for cash,
                                except where required by law.
                            </div>
                        </div>
                    </div>
                </div>

                <GeneralProvisions
                    title="6. Refunds and Returns"
                    subtitles={["6.1 No Cash Refunds", "6.2 Merchant Returns"]}
                    texts={["Gift cards cannot be returned or exchanged for cash, except as required by law. Once purchased, all sales of gift cards are final. Users should ensure that they understand this policy before making a purchase.",
                        "If a product purchased with a gift card is returned, the return will be processed according to the return policy of the merchant where the purchase was made. Users should contact the merchant directly for any issues related to returns and exchanges."
                    ]}

                />
                <GeneralProvisions
                    title="7. User Responsibilities"
                    subtitles={["7.1 Compliance", "7.2 Prohibited Uses"]}
                    texts={["Users must use the gift cards and website in compliance with all applicable laws and regulations. Any use of the gift cards or website that violates these terms and conditions or any applicable law is strictly prohibited."
                        ,
                        "Users must not use the website or gift cards for any unlawful or prohibited purpose. Prohibited uses include, but are not limited to, fraud, money laundering, and the purchase of illegal goods or services. Any such use will result in the immediate deactivation of the gift card and may be reported to the appropriate authorities."
                    ]}
                />
                <GeneralProvisions
                    title="8. Privacy"
                    subtitles={["8.1 Data Collection"
                        ,"8.2 Consent"
                    ]}
                    texts={["[Your Company] is committed to protecting your privacy. Our [Privacy Policy] outlines how we collect, use, and protect your personal information. By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]."

                        , "By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]. If you do not agree with our Privacy Policy, you should not use our website or purchase our gift cards."
                    ]}
                />
                <GeneralProvisions
                    title="9. Limitation of Liability"
                    subtitles={["9.1 Indirect Damages"
                        ,"9.2 Maximum Liability"
                    ]}
                    texts={["[Your Company] is not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the gift cards or website. This includes, but is not limited to, damages for loss of profits, business interruption, or loss of data."


                        ,"[Your Company]'s liability for any claim related to the purchase or use of a gift card is limited to the amount of the gift card. In no event shall [Your Company]'s total liability to you for all damages, losses, and causes of action exceed the amount paid by you for the gift card."

                    ]}
                />
                <GeneralProvisions
                    title="10. Amendments"
                    subtitles={["10.1 Right to Amend"
                        ,
                        "10.2 User Responsibility"
                    ]}
                    texts={[
                        "[Your Company] reserves the right to amend these terms and conditions at any time. Any changes will be posted on this page and will take effect immediately upon posting. Users should review these terms and conditions periodically to ensure that they are aware of any changes."

                        ,
                        "It is the user's responsibility to review these terms and conditions periodically. Continued use of the website or gift cards after any such changes shall constitute your consent to such changes. If you do not agree with the amended terms and conditions, you should not use the website or purchase gift cards."

                    ]}
                />
                <GeneralProvisions
                    title="11. Governing Law"
                    subtitles={["11.1 Jurisdiction"
                    ]}
                    texts={[
"These terms and conditions are governed by and construed in\n" +
"                                accordance with the laws of [Your Jurisdiction]. Any disputes\n" +
"                                arising out of or relating to these terms and conditions or the\n" +
"                                use of the website or gift cards will be subject to the\n" +
"                                exclusive jurisdiction of the courts of [Your Jurisdiction]."

                    ]}
                />

                <div className="contact-information-parent">
                    <h1 className="contact-information">
                        <p className="contact-information1">
                            12. Contact Information
                        </p>
                    </h1>
                    <div className="contact-info">
                        <div className="if-you-have-container">
                            <p className="if-you-have">
                                If you have any questions about these Terms or our services,
                                please contact us at:
                            </p>
                            <p className="brandname-customer-support">{`BrandName, Customer Support `}</p>
                            <p className="email-supportbrandnamecom">{`Email: support@brandname.com `}</p>
                            <p className="phone-1-800-123-4567">{`Phone: +1-800-123-4567 `}</p>
                            <p className="address-123-main">
                                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
                            </p>
                            <p className="blank-line">&nbsp;</p>
                            <p className="by-using-brandnames">
                                By using BrandName's services, you acknowledge that you have
                                read, understood, and agree to be bound by these Terms and
                                Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer1/>
        </div>
    );
};

export default TermsConditions;
