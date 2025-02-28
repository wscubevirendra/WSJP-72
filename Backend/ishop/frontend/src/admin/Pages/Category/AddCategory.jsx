import React, { useContext, useRef } from 'react'
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { MainContext } from '../../../Context';

export default function AddCategory() {
  const { notify, API_BASE_URL, CATEGORY_URL } = useContext(MainContext)
  const categoryName = useRef();
  const categorySlug = useRef();


  function generateSlug() {
    let slug = categoryName.current.value.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, ""); // Remove leading & trailing hyphens
    categorySlug.current.value = slug
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: categoryName.current.value,
      slug: categorySlug.current.value
    }

    axios.post(API_BASE_URL + CATEGORY_URL + "/create", data).then(
      (response) => {
        notify(response.data.msg, response.data.status)
        if (response.data.status == 1) {
          categoryName.current.value = ""
          categorySlug.current.value = ""
        }

      }
    ).catch(
      (error) => {
        notify("Internal Server Error", false)

      }
    )


  }


  return (
    <>
      <div className='bg-amber-200 flex justify-between py-2 px-10 '>
        <nav className="flex  items-center shadow-2xl text-black font-bold">
          <ol className="inline-flex items-center space-x-2">
            {/* Home Link */}
            <li>
              <Link
                to="/admin"
                className="flex items-center text-sm font-medium "
              >
                <FaHome className="w-4 h-4 me-1 " /> DashBoard
              </Link>
            </li>
            {/* Divider */}
            <li>
              <HiChevronRight className="w-4 h-4 " />
            </li>
            {/* Projects Link */}
            <li>
              <Link
                to="/admin/category"
                className="flex items-center hover:text-gray-900 text-sm hover:font-bold"
              >
                category
              </Link>
            </li>
            {/* Divider */}
            <li>
              <HiChevronRight className="w-4 h-4 " />
            </li>
            {/* Current Page */}
            <li className="text-sm  ">
              Add
            </li>
          </ol>
        </nav>
        <Link to="/admin/category/add">
          <button className='text-white cursur-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Category Add +</button></Link>

      </div>

      <div className="max-w-lg mx-auto mt-4 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Category</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          {/* Category Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Category Name</label>
            <input
              type="text"
              onChange={generateSlug}
              ref={categoryName}
              placeholder="Enter category name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Slug</label>
            <input
              type="text"
              ref={categorySlug}
              readOnly
              placeholder="Enter category slug"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Upload Image</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Category
          </button>
        </form>
      </div>

    </>
  )
}



