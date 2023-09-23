import Image from "next/image";
import React from "react";

// name : "Regina Miles",
// des : "Designer"

const Customer = () => {
  return (
    <div>
      <div className="text-center space-y-3 my-16">
        <p className="text-[#007E85] text-3xl font-semibold">what our customers say</p>
        <p className="text-[#333]">
          Problems trying to resolve the conflict between the two major realms of
          <br></br> Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-y-7 lg:gap-8  ">
        {Array(3)
          .fill(0)
          .map((item, ind) => {
            return (
              <div className="px-5 py-5 mt-5     bg-white rounded-lg space-y-4 mx-5 md:mx-5
              
              ">
                <Image src={"/star.svg"} alt="start" width={100} height={20}></Image>
                <p className="text-[#555] ">
                  Slate helps you see how many more days you need to work to reach your financial
                  goal.
                </p>
                <div className="flex items-center space-x-3">
                  <Image src={`/r${ind + 1}.svg`} alt="review" width={50} height={30}></Image>
                  <div>
                    <p className="font-semibold text-sm text-[#333]">Regina Miles</p>
                    <p className="text-sm text-[#444]">Designer</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Customer;
