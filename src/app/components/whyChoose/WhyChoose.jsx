import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const whyChoose = () => {
  return (
    <div>
    <div className='grid space-y-14 grid-cols-1 lg:grid-cols-2  lg:mt-16'>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
    </div>
    </div>
  )
}

export default whyChoose