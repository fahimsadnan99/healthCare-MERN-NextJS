import React from "react";

const leftSide = () => {
  return (
    <div className="space-y-8 mt-28 mx-3.5">
      <p className="space-y-3 text-3xl font-semibold text-[#007E85]">You have lots of reasons 
      <br></br>to choose us</p>

      <p className="text-[#333] pr-24">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
        aliquam sit nullam.
      </p>

      <div className="space-x-10">
        <button className="bg-[#007E85] px-8 text-white rounded-full py-3 ">Get started</button>
        <button
        className="text-[#007E85] px-8 bg-white rounded-full py-3 "
        >Talk to sales</button>
      </div>
    </div>
  );
};

export default leftSide;
