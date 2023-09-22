import Image from 'next/image'
import React from 'react'

const HeroRight = () => {
  return (
    <div className='mt-16 ml-10 mx-1.5'>

        <Image width={450} height={450} src={"/heroRight.svg"} alt='doctorImg'></Image>
    </div>
  )
}

export default HeroRight