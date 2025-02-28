import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";






export default function SideMenu() {
  const menu = [
    {
      name: "DashBoard",
      icon: <MdDashboardCustomize />,
      path: "dashBoard"
    },
    {
      name: "Category",
      icon: <BiCategoryAlt />,
      path: "category"


    },
    {
      name: "Product",
      icon: <FaProductHunt />,
      path: "product"

    },
    {
      name: "Colors",
      icon: <IoIosColorPalette />,
      path: "colors"
    },
    {
      name: "Logout",
      icon: <CiLogout />

    }
  ]
  return (
    <div className=' bg-[#151529] text-white h-[100%] '>
      <h1 className=' text-center text-2xl py-4'>ISHOP</h1>
      <ul className=' mt-10'>
        {
          menu.map((menuItem, i) => {
            return (
              <Link key={i} to={menuItem.path}>
                <li key={i} className=' flex mb-8 text-xl hover:text-[#fff] cursor-pointer  p-4 text-[#a3a6b7]  gap-5 justify-start items-center '>
                  {menuItem.icon}
                  {menuItem.name}

                </li>
              </Link>

            )
          })
        }

      </ul>

    </div>
  )
}
