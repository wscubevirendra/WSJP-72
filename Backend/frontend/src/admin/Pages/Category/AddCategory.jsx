import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddCategory() {
  const [image, setImage] = useState(null);

  return (
    <>
      <div className=' shadow-xl flex justify-between px-4 my-1 pt-2 py-1'>
      

        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                Home 
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <Link to="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</Link>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Create Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Enter name" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Slug</label>
              <input type="text" placeholder="Enter slug" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input type="file" className="w-full mt-1 px-4 py-2 border rounded-lg" onChange={(e) => setImage(e.target.files[0])} />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="mt-2 w-full h-40 object-cover rounded-lg border"
                />
              )}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>
      </div>

    </>

  );
}