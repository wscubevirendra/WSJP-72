import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../../Context';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

export default function ViewColor() {
  const { getColors, color } = useContext(MainContext);

  useEffect(() => {
    getColors();
  }, []);

  return (
    Array.isArray(color)
    &&
    <>
      <div className='bg-amber-200 flex justify-between py-3 px-10 shadow-md'>
        <nav className='flex items-center text-black font-bold'>
          <ol className='inline-flex items-center space-x-2'>
            <li>
              <Link to='/admin' className='flex items-center text-sm font-medium hover:text-gray-700'>
                <FaHome className='w-4 h-4 mr-1' /> Dashboard
              </Link>
            </li>
            <li><HiChevronRight className='w-4 h-4 text-gray-600' /></li>
            <li>
              <Link to='/admin/colors' className='text-sm font-medium hover:text-gray-900'>Colors</Link>
            </li>
          </ol>
        </nav>
        <Link to='/admin/colors/add'>
          <button className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2'>
            + Add Color
          </button>
        </Link>
      </div>

      <div className='flex justify-center items-center mt-6'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl'>
          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
              <thead>
                <tr className='bg-gray-100 border-b'>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Color Name</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Color Code</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Preview</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Status</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {color.map((colorData, index) => (
                  <tr key={index} className='border-b hover:bg-gray-50 transition'>
                    <td className='px-6 py-4 text-sm text-gray-700'>{colorData.colorName}</td>
                    <td className='px-6 py-4 text-sm text-gray-700'>{colorData.colorCode}</td>
                    <td className='px-6 py-4'>
                      <div className='w-8 h-8 rounded-full border' style={{ background: colorData.colorCode }}></div>
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <span className='px-3 py-1 text-xs font-semibold rounded-full bg-green-200 text-green-800'>
                        Active
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm flex space-x-3'>
                      <button className='px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md'>Edit</button>
                      <button className='px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
