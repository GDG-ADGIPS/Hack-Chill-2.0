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

      <div className="w-full  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is a hackathon"
              des="A hackathon is blah blah"
              className="p-50px bg-red-400 shadow-lg"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is a hackathon"
              des="A hackathon is blah blah"
              className="w-full bg-red-400 shadow-lg"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is a hackathon"
              des="A hackathon is blah blah"
              className="w-full bg-red-400 shadow-lg"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <Accordion
              heading="What is a hackathon"
              des="A hackathon is blah blah"
              className="w-full bg-red-400 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
