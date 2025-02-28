import { useContext, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MainContext } from "../../../Context"
import axios from 'axios';


export default function ViewCategory() {
  const { notify, API_BASE_URL, category, getCategory, CATEGORY_URL } = useContext(MainContext);

  const statusHandler = (id) => {
    axios.patch(API_BASE_URL + CATEGORY_URL + "/status/" + id).then(
      (response) => {
        notify(response.data.msg, response.data.status)
        if (response.data.status == 1) {
          getCategory()
        }

      }
    ).catch(
      (error) => {
        notify("Internal Server Error", false)

      }
    )
  }

  useEffect(
    () => {
      getCategory()
    },
    []
  )



  return (
    <div className='w-full'>
      <div className='bg-amber-200  flex justify-between py-2 px-10 '>
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

          </ol>
        </nav>
        <Link to="/admin/category/add">
          <button className='text-white cursur-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Category Add +</button></Link>

      </div>
      <div className="p-10 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Category List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Category Name</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Slug</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{category.name}</td>
                <td className="p-3">
                  <img src={category.image} alt={category.name} className="w-12 h-12 rounded-md object-cover" />
                </td>
                <td className="p-3">{category.slug}</td>
                <td className="p-3">
                  <button onClick={() => statusHandler(category._id)} className={`px-3 py-1 rounded-full text-white ${category.status ? "bg-green-500" : "bg-red-500"}`}>
                    {category.status ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="p-3 space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md">✏️</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}
