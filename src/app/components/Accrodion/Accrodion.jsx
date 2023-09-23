import React from "react";
import AccrodionCard from "./AccrodionCard";
import "./style.css";

const Accrodion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:gap-y-7 lg:gap-8
    space-y-4 md:space-y-0  space-x-2 lg:space-x-0
    ">
      {Array(6)
        .fill(0)
        .map((item, ind) => {
          return <div><AccrodionCard key={ind} id={ind}></AccrodionCard></div>
          
          
        })}
    </div>
  );
};

export default Accrodion;
