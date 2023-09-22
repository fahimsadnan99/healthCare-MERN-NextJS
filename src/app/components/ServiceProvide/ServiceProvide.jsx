import React from 'react'
import Card from './Card'

const serviceProviderDetails = [
    {
        title : "Dental treatments",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },
    {
        title : "Bones treatments",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },
    {
        title : "Diagnosis",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },
    {
        title : "Cardiology",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },
    {
        title : "Surgery",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },
    {
        title : "Eye care",
        des : "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
    },

]

const ServiceProvide = () => {
  return (
    <div>
     <div className='text-center space-y-3 my-16'>
        <p className='text-[#007E85] text-3xl font-semibold'>Services we provide </p>
        <p className='text-[#333]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br></br>elementum tempus hac tellus libero accumsan. </p>
     </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-y-7 lg:gap-8'>
    {
        serviceProviderDetails.map((item,index)=>{
     return (
        <Card item={item} id={index + 1} key={index + 1}></Card>
     )
        })
    }
</div>
    </div>
  )
}

export default ServiceProvide