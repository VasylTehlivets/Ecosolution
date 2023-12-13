import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
      <div id="FAQ">
          <h2>Frequently Asked Questions</h2>
          <FAQItem question="How do wind turbines and solar panels work together in a renewable energy system?"
              answer="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output." />
      <FAQItem question="Питання 2" answer="Відповідь 2" />
      {/* Додайте інші питання та відповіді */}
    </div>
  );
};

export default FAQSection;

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