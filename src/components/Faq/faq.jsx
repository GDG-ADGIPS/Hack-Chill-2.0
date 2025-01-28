import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const faqs = [
    {
      question: "When and where will Hack & Chill 2.0 take place?",
      answer:
        "Hack & Chill 2.0 is scheduled for 20-22nd March 2025 and will take place at ADGIPS Delhi.",
    },
    {
      question: "What is the duration of Hack & Chill 2.0?",
      answer:
        "Hack & Chill 2.0 is a 48-hour hackathon, packed with coding, workshops, and exciting activities.",
    },
    {
      question: "Will there be refreshments zones?",
      answer:
        "Yes! Hack & Chill 2.0 ensures participants have a balanced experience with designated refreshment areas to relax and socialize.",
    },
    {
      question: "Are there any prizes?",
      answer:
        "Yes, participants stand a chance to win exciting prizes, including goodies, cash rewards, and other recognitions. Details about prize categories will be announced closer to the event.",
    },
    {
      question: "What activities can participants look forward to?",
      answer: `Participants can expect:
        A hands-on coding hackathon.
        Workshops, including the AI Explorers Workshop.
        Competitions like the Designathon and Gaming Zone Contest.
        Opportunities to network with peers and industry experts.
        `,
    },
    {
      question: "How many people can be in a team?",
      answer:
        "Each team can have up to 4 members. You can register as an individual or form a team as the team registration form is released, so stay tuned for further updates",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="faq" className="faq-container">
      <div className="faq-header">
        <img src="/pics/faq.svg" alt="FAQ" className="faq-image heading" />
      </div>

      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
