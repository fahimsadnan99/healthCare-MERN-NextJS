import React from 'react'

const Subcription = () => {
  return (
    <div className='my-16  space-y-10'>

        <p className='text-center text-[#555] text-2xl font-semibold'>Subscribe to our newsletter</p>

        <div className='text-center space-x-8 md:space-y-5 space-y-5 lg:space-y-0 '>
            <input type='text' placeholder='Enter Your Email'
            className='rounded-full w-72 lg:w-96 h-10 lg:h-12 p-3'
            ></input>
            <button className='bg-[#007E85] text-white px-10 py-2 md:py-3 rounded-full'>Suscribe</button>
        </div>
    </div>
  )
}

export default Subcription