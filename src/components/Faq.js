import React from "react";

//import data
import { faq } from "../data";

//import components
import Accordion from "../components/Accordion";

const Faq = () => {
  //Destructuring faq data
  const { icon, title, accordions } = faq;
  return (
    <section className="section pt-[480px] lg:pt-[280px]">
      <div>
        {/* Title Section */}
        <div>
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Faq;
