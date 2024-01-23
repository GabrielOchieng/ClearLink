import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./faq.css";

const faqs = [
  {
    question: "How many participants can join a ClearLink video conference?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "1",
  },
  {
    question: "Can I use ClearLink on multiple devices?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "2",
  },
  {
    question:
      " Is ClearLink compatible with other video conferencing platforms?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "3",
  },
  {
    question: "How does ClearLink ensure the security of my video conferences?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "4",
  },
  {
    question: "Do I need to download any software to use ClearLink?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "5",
  },
  {
    question: "What kind of customer support does ClearLink provide",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    id: "6",
  },
];

const Faq = () => {
  const [shownIndex, setShownIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // const handleShow = () => {

  // };

  const displayedFaqs = faqs.map((faq, index) => {
    const isShown = index === shownIndex;

    return (
      <div key={faq.id} className="mainfaqdiv">
        <div onClick={() => setShownIndex(index)} className="faqquestdiv">
          <h3>{faq.question}</h3>{" "}
          {!isShown && <CiCirclePlus className="faqicon" />}
        </div>
        {!isShown && <hr />}
        {isShown && (
          <div className="faqanswdiv">
            {faq.answer}
            <CiCircleMinus
              onClick={() => setShownIndex(!shownIndex)}
              className="minusicon faqicon"
            />
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="faqs">
      <section className="faqsleft">
        <a href="#">Support</a>
        <h2>FAQs</h2>
        <p>
          Everything you need to know about the product <br /> and billing.
          Can’t find the answer you’re looking <br /> for? Please{" "}
          <span>
            <a href="#">chat to our friendly team.</a>
          </span>
        </p>
      </section>
      <section className="faqsright">
        <div className="faqitem">
          <div>{displayedFaqs}</div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
