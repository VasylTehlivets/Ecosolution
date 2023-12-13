import React, { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAnswer} style={{ cursor: "pointer" }}>
        {isOpen ? "-" : "+"} {question}
      </div>
      {isOpen && <div>{answer}</div>}
    </div>
  );
  // return (
  //   <div id="FAQ">
  //     <h1>Frequently Asked Questions</h1>
  //     <p>
  //       How do wind turbines and solar panels work together in a renewable
  //       energy system?
  //     </p>
  //     <button>Learn more</button>
  //   </div>
  // );
};

export default FAQItem;
