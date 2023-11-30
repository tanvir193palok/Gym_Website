import React from "react";

//import data
import { pricing } from "../data";

//import components
import PlanList from "./PlanList";

const Pricing = () => {
  //Destructuring pricing data
  const { icon, title, plans } = pricing;

  return (
    <section className="section">
      {/*Title section */}
      <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
        <img src={icon} alt='' />
        <h2 className="h2">{title} <span className="text-primary-200">.</span></h2>
      </div>

      {/*Plan list section */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
