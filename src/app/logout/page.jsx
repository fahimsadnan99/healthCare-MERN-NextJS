"use client"
import React, { useEffect } from 'react'
import {removeToken} from "../../../helper/Token"
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
 useEffect(()=>{
   removeToken()
   router.push("/signin")
 },[])

  return (
    <div>Logout</div>
  )
}

export default page