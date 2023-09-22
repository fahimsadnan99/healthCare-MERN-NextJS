"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "../../style/Header.css"
import Image from 'next/image'
import {RiMenu5Fill,RiCloseCircleLine} from "react-icons/ri"



const Header = ({children}) => {
const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <div className='sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4'>
    <div className='wrapper '>
    <div>
      <Image  className="w-56  lg:w-64" width={200} height={250} src={"/logo.svg"}></Image>
    </div>

    <div className={`list ${isOpen ? "list" : "listVisible"} ` }>
      <Link className={'headerLink'}  href={"/"}>Home</Link>
      <Link  className={'headerLink'} href={"/service"}>Service</Link>
      <Link  className={'headerLink'} href={"/deshboard"}>Deshboard</Link>
      <Link  className={'headerLink'} href={"/signup"}>Contact</Link>
      <Link  className={'headerLink'} href={"/signin"}>SignUp</Link>
      <Link  className={'headerLink'} href={"/logout"}>Login</Link>
      <Link  className={'headerLink'} href={"/logout"}>Logout</Link>
    </div>

<div className='icon'>
  {
    !isOpen ? (<RiMenu5Fill onClick={()=> setIsOpen(!isOpen)}></RiMenu5Fill>) : (<RiCloseCircleLine onClick={()=> setIsOpen(!isOpen)}></RiCloseCircleLine>)
  }
   
</div>
    </div>
    {children}
    </div>
    </>
  )
}

export default Header