"use client"
import React, { useContext } from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
// import DistanceTime from './DistanceTime';


function Booking() {
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext)
  const router = useRouter()
  return (
    <div className='p-5 '>
      <h2 className='text-[30px] font-semibold mb-2'>Booking</h2>
      <div className='border-[2px] p-5 
        rounded-lg ' style={{ height: 560.88 }} >
        <AutocompleteAddress />

        <Cars />
        <Cards />
        <button className={`w-full
        p-3 rounded-md
        mt-10 ${carAmount == undefined ? 'bg-gray-200' : ' bg-yellow-500'} `}

          onClick={() => { router.push('/payment') }}
          disabled={carAmount == undefined ? true : false}
        >Book</button>

      </div>
    </div>
  )
}

export default Booking