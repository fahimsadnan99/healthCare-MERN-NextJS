import React from 'react'
import Image from 'next/image'

const HeaderLeft = () => {
  return (
    <div className='mt-[80px] lg:mt-[120px]'>

     <p className='text-[#333333] heroLeftHeadline'>Providing Quality
     <span className='text-[#007E85]'> Healthcare </span>
       For A <span className='text-[#6EAB36]'>Brighter</span>  And  <span className='text-[#6EAB36]'>Healthy</span> Future</p>


<div>
  <p className='text-black/70 my-5 mx-1.5 text-justify'>
  At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
  </p>

  <div className='flex items-center space-x-1 lg:space-x-16 mx-1.5 mt-8'>
    <button className='text-[20px] px-10 py-1 bg-[#007E85] text-white rounded-md'>Appointments</button>

    <button className='flex  items-center w-[150px] justify-around font-semibold text-[#333333]'>
      <Image width={40} height={40} src={"/watch.svg"} alt='watchtn'></Image>
      Watch Video
    </button>
  </div>
</div>
    </div>
  )
}

export default HeaderLeft