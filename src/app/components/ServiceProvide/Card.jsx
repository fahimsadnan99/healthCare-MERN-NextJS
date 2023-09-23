import Image from 'next/image';
import React from 'react'

const Card = ({item,id}) => {
    
  return (
    <div className='px-5 py-5 mt-5  bg-white rounded-lg space-y-4 mx-5 md:mx-5'>

        <Image className='mx-auto' width={300} height={200} src={`/service${id}.svg`} alt={`${item?.title}`}></Image>

        <div className='w-[300px] mx-auto space-y-4'>
           <p className='text-[#007E85] font-semibold text-lg'>{item?.title}</p>
           <p className='text-[#333] text-sm pr-3'>{item?.des}</p>
           <p className='text-[#007E85] flex '>Learn more <Image width={10} height={10} src={"/arrow.svg"} alt='arrow' className='ml-2'></Image></p>
        </div>
    </div>
  )
}

export default Card