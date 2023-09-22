import React from "react";

const ResultInNumber = () => {
  return (
    <div className="mt-16 lg:mb-20">
      <p className="text-center text-[#007E85] font-semibold text-2xl md:text-3xl lg:text-4xl">Our results in numbers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 lg:mt-14 space-y-4 lg:space-y-0">
        <div className="text-center">
          <p className="text-[#007E85]  text-2xl  lg:text-3xl font-semibold">
            99<span className="text-[#007E85] opacity-50">%</span>
          </p>
          <p className="my-2 text-[#333333] font-semibold">Customer satisfaction</p>
        </div>

        <div className="text-center">
          <p className="text-[#007E85]  text-2xl  lg:text-3xl font-semibold">
            15<span className="text-[#007E85] opacity-50">K</span>
          </p>
          <p className="my-2 text-[#333333] font-semibold">Online Patients</p>
        </div>

        <div className="text-center">
          <p className="text-[#007E85]  text-2xl  lg:text-3xl font-semibold">
            12<span className="text-[#007E85] opacity-50">K</span>
          </p>
          <p className="my-2 text-[#333333] font-semibold">Patients Recovered</p>
        </div>

        <div className="text-center">
          <p className="text-[#007E85]  text-2xl  lg:text-3xl font-semibold">
            240<span className="text-[#007E85] opacity-50">K</span>
          </p>
          <p className="my-2 text-[#333333] font-semibold">Company growth</p>
        </div>
      </div>
    </div>
  );
};

export default ResultInNumber;
