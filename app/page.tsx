import { UserButton } from "@clerk/nextjs";
import Image from "next/image";



import React from 'react'

const HomePage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      TaxiGo
    </div>
  )
}

export default (HomePage)

