import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import "../../../style/Hero.css"

const Header = () => {
  return (
    <div className='lg:grid lg:grid-cols-2'>
        
        <HeroLeft></HeroLeft>
        <HeroRight></HeroRight>
        
    </div>
  )
}

export default Header