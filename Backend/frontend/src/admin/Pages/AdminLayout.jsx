import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Components/Header'
import SideMenu from '../Components/SideMenu'

export default function AdminLayout() {
  return (
    <div className=' max-w-[1300px] h-[100vh] grid grid-cols-5'>
      <div className='h-[100%]'>
        <SideMenu />
      </div>
      <div className=' col-span-4'>
        <Header />
        <Outlet/>
      </div>
    </div >
  )
}
