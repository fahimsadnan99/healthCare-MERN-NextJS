import React from 'react'
import Header from './components/Header/Hero'
import FindDoctor from './components/Header/FindDoctor'
import ResultInNumber from './components/Header/ResultInNumber'
import WhyChoose from "./components/whyChoose/WhyChoose"
import ServiceProvide from './components/ServiceProvide/ServiceProvide'
import Team from "./components/team/Team"
import Testimonial from './components/Testimonial/Testimonial'
import LogoStrip from './components/LogoStrip/LogoStrip'
import Subcription from './components/Subcription/Subcription'

const page = () => {
  return (
    <div className='sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4'>
      <Header></Header>
      <FindDoctor></FindDoctor>
      <ResultInNumber></ResultInNumber>
      <WhyChoose></WhyChoose>
      <ServiceProvide></ServiceProvide>
      <Team></Team>
      <Testimonial></Testimonial>
      <LogoStrip></LogoStrip>
      <Subcription></Subcription>
     
    </div>
  )
}

export default page