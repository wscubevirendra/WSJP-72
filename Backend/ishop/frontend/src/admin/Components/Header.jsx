import React from 'react'
import { CiSettings } from "react-icons/ci";


export default function Header() {
  return (
    <div className=' bg-white  shadow'>
      <div className='p-2 px-4 grid grid-cols-2'>
        <div>
          <div className=' flex mb-1'>
            <h1 className=' text-2xl font-bold'>Welcome Alex</h1>
            <img width="30px" src="https://admin.pixelstrap.net/riho/assets/images/hand.gif" alt="" />
          </div>
          <p>Here’s what’s happening with your store today.</p>

        </div>
        <div className=' flex justify-end px-4 items-center gap-10'>
          <div className=' flex gap-2'>
            <img className=' w-[40px] h-[40px] border shadow rounded-full' src="https://codeigniter.spruko.com/tailwind/ynex/ynex/assets/images/faces/9.jpg" alt="" />
            <div>
              <h4 className='text-[#536485] mb-[-7px] font-bold'>Virendra</h4>
              <span>Admin</span>
            </div>
          </div>
          <CiSettings className=' text-2xl animate-spin' />

        </div>

      </div>
    </div>

  )
}
