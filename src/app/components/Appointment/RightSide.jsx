import React from "react";

const RightSide = () => {
  return (
    <div className="mt-20">
      <div className="bg-white p-2 py-10 w-[70%] mx-auto rounded-md space-y-5">
        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Name*</p>
          <input
            type="text"
            name="name"
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      "
            placeholder="Enter Your Name"
          />
        </div>

        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Phone*</p>
          <input
            type="number"
            name="phone"
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      "
            placeholder="Enter Your Name"
          />
        </div>

        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Doctor's Name & Departement *</p>

          <select
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      "
          >
            <option value="0">Select Department</option>
            <option value="heart">Heart Department</option>
          </select>
        </div>

        <div className="w-[80%] mx-auto">
         <button className="text-white bg-[#007E85] py-2 w-full rounded-md">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
