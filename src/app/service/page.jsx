import React from "react";
import FindDoctor from "../components/Header/FindDoctor";
import ServiceProvide from "../components/ServiceProvide/ServiceProvide";
import Customer from "../components/Customer/Customer";
import Subcription from "../components/Subcription/Subcription";
import Faq from "../components/FAQ/Faq";
import Appoinment from "../components/Appointment/Appoinment";
import Accrodion from "../components/Accrodion/Accrodion";

const page = () => {
  return (
    <div>
      <Appoinment></Appoinment>
      <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
        <FindDoctor></FindDoctor>
        <ServiceProvide></ServiceProvide>
        <Customer></Customer>
        <Faq></Faq>
        <Accrodion></Accrodion>
        <Subcription></Subcription>
      </div>
    </div>
  );
};

export default page;
