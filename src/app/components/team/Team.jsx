import React from 'react'
import Card from './Card'

const teamMembers = [
    {
        name : "John Carter",
        desic : "CEO & CO-FOUNDER",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
    {
        name : "Sophie Moore",
        desic : "DENTAL SPECIALIST",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
    {
        name : "Matt Cannon",
        desic : "ORTHOPEDIC",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
    {
        name : "Andy Smith",
        desic : "BRAIN SURGEON",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
    {
        name : "Lily Woods",
        desic : "HEART SPECIALIST",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
    {
        name : "Patrick Meyer",
        desic : "EYE SPECIALIST",
        des : "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. "
    },
]

const Team = () => {
  return (
   

<div>
     <div className='text-center space-y-3 my-16'>
        <p className='text-[#007E85] text-3xl font-semibold'>Meet our team members</p>
        <p className='text-[#333]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br></br>elementum tempus hac tellus libero accumsan. </p>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-10'>
    {
        teamMembers.map((item,index)=>{
     return (
        <Card item={item} id={index + 1} key={index + 1}></Card>
     )
        })
    }
</div>
    </div>
  )
}

export default Team