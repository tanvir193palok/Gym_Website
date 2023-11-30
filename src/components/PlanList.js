import React, { useState } from "react";

//import icons
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  //index state
  const [index, setIndex] = useState(0);
  return (
    <div
      className="flex flex-col lg:flex-row items-center
     justify-center max-w-[1280px] mx-auto gap-y-4"
    >
      {plans.map((plan, currentIndex) => {
        //Destructure Plan
        const { name, price, list, delay } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm
              px-4 lg:min-h-[550px]"
            key={currentIndex}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              }`}
            >
              {/*name and price wrapper */}
              <div>
                {/*name */}
                <div>{name}</div>
                {/*price */}
                <div>
                  <div>
                    <span>{price}</span>
                    <span>$</span>
                  </div>
                  <span>/month</span>
                </div>
              </div>

              {/*List & btn wrapper */}
              <div>
                {/*List */}
                <ul className="flex flex-col gap-y-4 mb-8">
                  {list.map((item, idx) => {
                    return (
                      <li className="flex items-center gap-x-[10px]" key={idx}>
                        <BsCheckCircleFill className="text-lg " />
                        <div>{item.name}</div>
                      </li>
                    );
                  })}
                </ul>

                {/* btn */}
                <button></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
