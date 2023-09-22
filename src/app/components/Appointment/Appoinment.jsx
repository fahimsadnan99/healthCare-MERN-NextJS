import React from "react";
import "./style.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Appoinment = () => {
  return (
    <div className="AppinmentWrapper">
        <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
        

        <div className='grid  grid-cols-1 lg:grid-cols-2  '>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
    </div>
        </div>
     
    </div>
  );
};

export default Appoinment;
