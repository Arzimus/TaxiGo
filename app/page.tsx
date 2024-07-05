"use client"
import Booking from "@/components/Booking/Booking";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";



import React from 'react'

const HomePage = () => {
  return (
    <div className="">
      <div className='grid grid-cols-1 
     md:grid-cols-3'>
        <div className=""><Booking /></div>
        <div className='col-span-2
        '>
          Map
        </div>
      </div>
    </div>
  )
}

export default (HomePage)

