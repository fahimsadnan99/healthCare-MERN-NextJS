import React from "react";

const FindDoctor = () => {
  return (
    <div className="  bg-white rounded-md py-7 lg:py-8 px-2 lg:px-10 md:my-7 lg:my-16 mx-5">
      <p className="text-black font-semibold text-2xl mb-5">Find a Doctor</p>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 lg:space-y-0 items-center justify-center ">
        <div className="mt-4 lg:mt-0 ">
          <input placeholder="Enter Name" type="text" name="name" className="px-5 py-3 outline-none ring-1 ring-slate-300 rounded-sm w-72 md:w-60 lg:w-72"/>
        </div>

        <div>
          <select className="px-5 py-3.5 outline-none ring-1 ring-slate-300 rounded-sm w-72 md:w-60 lg:w-72">
            <option className="text-black/30">Select Speciality</option>
            <option name="medicine">Medicine</option>
            <option name="gynecologist">Gynecologist</option>
            <option name="dentist">Dentist</option>
            <option name="heart">Heart</option>
            <option name="eye">Eye</option>
            <option name="neoro">Neoro</option>
          </select>
        </div>

        <div>
          <button className="bg-[#007E85] text-white px-16 py-3 rounded-sm ">Search</button>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
