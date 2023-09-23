import React from "react";

const leftSide = () => {
  return (
    <div className="space-y-8 mt-28 md:mt-32 lg:mt-36 mx-3.5">
      <p className="space-y-3 text-3xl md:text-4xl  lg:text-6xl font-extrabold text-[#FFF]">Meet the Best Hospital</p>

      <p className="text-[#FFF] pr-24">
        We know how large objects will act, <br></br>
        but things on a small scale.
      </p>

      <div className="space-x-10">
        <button className="bg-[#007E85] px-3 md:px-6  lg:px-8 text-white rounded-full py-2  md:py-3  ">Get Quote Now</button>
        <button className="text-[#007E85] px-3 md:px-6  lg:px-8 bg-white rounded-full py-2  md:py-3 ">Learn More</button>
      </div>
    </div>
  );
};

export default leftSide;
