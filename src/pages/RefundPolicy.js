import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import RefundProcess from "../components/RefundProcess";
import Footer1 from "../components/Footer1";
import "./RefundPolicy.css";
import GeneralProvisions from "../components/props-component/GeneralProvisions";
import RefundProps from "../components/props-component/RefundProps";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <Header />
      <div className="page-title">
        <h1 className="refund-policy1">Refund Policy</h1>
      </div>
      <main className="policy-content">
        <div className="lilylamb-kids-we">
          This Refund Policy outlines the terms and conditions regarding refunds
          for gift cards purchased from [Your Gift Card Website]. By purchasing
          a gift card from our website, you agree to the terms of this refund
          policy. Please read it carefully.
        </div>

        <GeneralProvisions
            title={<p style={{fontSize: '38px'}}>1. General Refund Policy Items</p>}
            subtitles={[
              "1.1 General Refund Policy"
              ,
              "1.2 Exceptions"
            ]}
            texts={[
              "Gift cards purchased from [Your Gift Card Website] are non-refundable and cannot be exchanged for cash, except where required by law. Once a gift card is purchased, the sale is final, and the value cannot be refunded."

              ,
              "In certain exceptional circumstances, and at the sole discretion of [Your Company], a refund may be issued. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to issue a refund is made on a case-by-case basis and is final."

            ]}
        />
        <GeneralProvisions
            title={<p style={{fontSize: '38px'}}>2. Eligibility for Refunds</p>}

            subtitles={[
              "2.1 Unauthorized Transactions"
              ,
              "2.2 Technical Errors"
            ]}
            texts={[
              "If you believe that a purchase of a gift card was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for a refund if reported promptly. You may be required to provide documentation or evidence supporting your claim."

              ,
              "If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a refund. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."

            ]}
        /><GeneralProvisions
          title={<p style={{fontSize: '38px'}}>3. Refund Request Process</p>}

            subtitles={[
              "3.1  Review and Processing"
              ,
              "3.2 Approved Refunds"
            ]}
            texts={[
              "To request a refund, contact our customer support team at [Email] or [Phone Number]. Provide the following information:"+
              "A detailed explanation of the reason for the refund request"

              ,
              "If your refund request is approved, the refund will be processed using the original payment method used for the purchase. The time it takes for the refund to be credited to your account may vary depending on your bank or payment provider."

            ]}
        /><GeneralProvisions
            title=
                "4. Special Cases"
            subtitles={[
              "4.1 Incorrect Amounts Loaded"
              ,
              "4.2 Lost or Stolen Gift Cards"
            ]}
            texts={[
              "If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a refund of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."


              ,
              "Lost or stolen gift cards are generally not eligible for a refund. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a refund."

            ]}
        />
        <GeneralProvisions
            title={<p style={{fontSize: '38px'}}>5. Non-Refundable Items</p>}

            subtitles={[
              "5.1 Promotional and Bonus Cards"
              ,
              "5.2 Partially Used Gift Cards"
            ]}
            texts={[
              "Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for a refund. These cards have no cash value and cannot be exchanged for cash or other gift cards."


              ,
              "Gift cards that have been partially used are not eligible for a refund of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."

            ]}
        /><GeneralProvisions
            title=
                "6. Merchant Refunds"
            subtitles={[
              "6.1Product Returns"
              ,
              "6.2 Disputes with Merchants"
            ]}
            texts={[
              "If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."


              ,
              "Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions. "

            ]}
        />

        <div className="contact-information-group">
          <h1 className="contact-information2">
            <p className="contact-information3">
              7.1 Contact Information
            </p>
          </h1>
          <div className="contact-details">
            <div className="if-you-have-container1">
              <p className="if-you-have1">
                If you have any questions or concerns about this Refund Policy,
                please contact us at:
              </p>
              <p className="blank-line1">&nbsp;</p>
              <p className="brandname-customer-support1">
                BrandName Customer Support
              </p>
              <p className="email-supportbrandnamecom1">
                Email: support@brandname.com
              </p>
              <p className="phone-1-800-123-45671">Phone: +1-800-123-4567</p>
              <p className="address-123-main1">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer1 />
    </div>
  );
};

export default RefundPolicy;
