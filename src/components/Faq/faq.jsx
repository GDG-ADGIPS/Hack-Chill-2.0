import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Accordion from "../accordion";
import "./faq.css";

const FAQ = () => {
  return (
    <div id="faq" className="w-full">
      <div className="w-full flex justify-center items-center py-8">
        <img src="/pics/faq.svg" alt="FAQ" className="w-[15%] h-auto" />
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="When and where will Hack & Chill 2.0 take place?"
              des="Hack & Chill 2.0 is scheduled for 20-22nd March 2025 and will take place at ADGIPS Delhi."
              className="accordion-item"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is the duration of Hack & Chill 2.0?"
              des="Hack & Chill 2.0 is a 48-hour hackathon, packed with coding, workshops, and exciting activities."
              className="accordion-item"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="Will there be refreshments zones?"
              des="Yes! Hack & Chill 2.0 ensures participants have a balanced experience with designated refreshment areas to relax and socialize."
              className="accordion-item"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is a hackathon"
              des="A hackathon is blah blah"
              className="accordion-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
