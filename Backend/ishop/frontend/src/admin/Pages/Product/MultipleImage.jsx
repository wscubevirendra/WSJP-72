import React, { useContext, useRef } from 'react'
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { MainContext } from '../../../Context';

export default function MultipleImage() {
    const { notify, API_BASE_URL, PRODUCT_URL } = useContext(MainContext);
    const { productId } = useParams()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let image of e.target.productImages.files) {
            formData.append("image", image)
        }
        axios.post(API_BASE_URL + PRODUCT_URL + `/${productId}`, formData).then(
            (response) => {
                notify(response.data.msg, response.data.status)
                console.log(response.data)
                if (response.data.status == 1) {


                }

            }
        ).catch(
            (error) => {
                notify("Internal server error", 0)

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
                                to="/admin/product"
                                className="flex items-center hover:text-gray-900 text-sm hover:font-bold"
                            >
                                Product
                            </Link>
                        </li>
                        {/* Divider */}
                        <li>
                            <HiChevronRight className="w-4 h-4 " />
                        </li>
                        {/* Current Page */}
                        <li className="text-sm  ">
                            Multiple images
                        </li>
                    </ol>
                </nav>


            </div>

            <div className="max-w-lg mx-auto mt-4 bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Images</h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Upload Image</label>
                        <input
                            type="file"
                            multiple
                            name='productImages'
                            className="w-full px-4 py-2 border rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add images
                    </button>
                </form>
            </div>

        </>
    )
}



