import React from "react";
import "./faq.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import Accordion from "../accordion";

const faq = () => {
  return (
    <div id="faq" className="bg-bgc">
      <div className="spandiv relative bg-bgc rounded-xl border-black border-2">
        <span className="text-clr2">FREQUENTLY</span>
        <span className="text-black">ASKED</span>
        <span className="text-clr1">QUESTIONS</span>
      </div>
      <div className="list flex flex-wrap min-w-full p-3  justify-around">
        <Accordion
          heading="What is a hackathon"
          des=" A hackathon is blah blah"
        />
        <Accordion
          heading="What is a hackathon"
          des=" A hackathon is blah blah"
        />
        <Accordion
          heading="What is a hackathon"
          des=" A hackathon is blah blah"
        />
        <Accordion
          heading="What is a hackathon"
          des=" A hackathon is blah blah"
        />
      </div>
    </div>
  );
};

export default faq;
