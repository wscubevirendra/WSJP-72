import React from 'react'
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/slice/userSlice';
import { emptyCart } from '../../redux/slice/cartSlice';


export default function Header() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data)
  const dispatcher = useDispatch()

  return (
    <header style={{
      "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }} className='w-full mb-4 '>
      <div className='max-w-[1300px] mx-auto'>
        <div className='flex justify-between pt-2 px-[16px]'>
          <div >
            <button className='bg-[#EBEEF6] mr-4 px-3 py-1 rounded-md outline-none'> Hotline 24/7</button>
            <span className='text-black'>(025) 3886 25 16</span>
          </div>
          <div className=' flex gap-6 text-md'>
            <button>Sell on Swoo</button>
            <button>Order Tracki</button>
            <button>USD</button>
            <button>Eng</button>
          </div>
        </div>
        <div className='mt-3 grid py-2 grid-cols-4'>
          <img src="logo.png" alt="" />
          <nav className=' flex gap-6 font-bold items-center col-span-2 '>
            <Link to="/">HOME</Link>
            <Link to="/store">STORE</Link>
            <Link t="#">ABOUT</Link>
            <Link tp="#">CONTACT</Link>
          </nav>
          <div className='flex justify-end px-4 gap-6 items-center '>
            <div className='font-bold text-xl'>
              {
                user == null ? (
                  <Link to="/login?ref=header">Login</Link>
                ) : (
                  <div className='cursor-pointer' onClick={() => {
                    dispatcher(emptyCart()); // First action
                    dispatcher(logOut());    // Second action
                  }}>
                    LogOut
                  </div>
                )
              }
            </div>

            <Link to="/cart">
              <div className=' relative'>
                <FaCartArrowDown className=' text-2xl' />
                <span className=' absolute w-4 h-4 flex rounded-full justify-center items-center bg-teal-400 -right-3 text-white -top-2'>{cart?.data?.length}</span>
              </div></Link>
            <h3 className=' font-bold'>₹{cart?.total}</h3>


          </div>

        </div>
        <SearchBar />
      </div>

    </header>
  )
}
