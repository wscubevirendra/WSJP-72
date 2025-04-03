import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Select from 'react-select'
import { MainContext } from '../../../Context';
import axios from 'axios';


export default function AddProduct() {
    const { category, color, getColors, getCategory, PRODUCT_URL, notify, API_BASE_URL } = useContext(MainContext)
    const [selcolors, Setselcolors] = useState([])
    const [longDescription, SetlongDescription] = useState('');


    const ProductName = useRef();
    const ProductSlug = useRef();
    const originalPrice = useRef();
    const discountPercentage = useRef();
    const finalPrice = useRef();


    function generateSlug() {
        let slug = ProductName.current.value.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, ""); // Remove leading & trailing hyphens
        ProductSlug.current.value = slug
    }

    function finalPriceCal() {
        const op = originalPrice.current.value;
        const dp = discountPercentage.current.value;
        const fp = Math.floor(op - (op * (dp / 100)));
        finalPrice.current.value = fp

    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", ProductName.current.value);
        formData.append("slug", ProductSlug.current.value);
        formData.append("originalPrice", originalPrice.current.value);
        formData.append("discountPercentage", discountPercentage.current.value);
        formData.append("finalPrice", finalPrice.current.value);
        formData.append("shortDescription", e.target.shortDescription.value);
        formData.append("longDescription", e.target.longDescription.value);
        formData.append("categoryId", e.target.categoryId.value);
        formData.append("colors", JSON.stringify(selcolors));
        formData.append("thumbnail", e.target.thumbnail.files[0]);

        axios.post(API_BASE_URL + PRODUCT_URL + "/create", formData).then(
            (response) => {
                notify(response.data.msg, response.data.status)
                if (response.data.status == 1) {
                    e.target.reset()
                }
            }

        ).catch(
            (error) => {
                console.log(error)

            }
        )

    }

    useEffect(
        () => {
            getCategory()
            getColors()
        },
        []
    )
    return (
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
                            <Link to='/admin/product' className='text-sm font-medium hover:text-gray-900'>Products</Link>
                        </li>
                        <li><HiChevronRight className='w-4 h-4 text-gray-600' /></li>
                        <li className='text-sm font-medium hover:text-gray-900'>
                            Add
                        </li>
                    </ol>
                </nav>

            </div>
            <section className="bg-gray-50 py-10">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add a New Product</h2>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div >
                                <label className="block text-gray-700 text-sm font-medium">Product Name</label>
                                <input onChange={generateSlug} ref={ProductName} type="text" placeholder="Enter product name" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium">Slug</label>
                                <input ref={ProductSlug} readOnly type="text" placeholder="Enter brand name" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className=" col-span-2 grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium">Original Price</label>
                                    <input onChange={finalPriceCal} ref={originalPrice} type="number" name="originalPrice" placeholder="Enter price" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium">Discont Price</label>
                                    <input onChange={finalPriceCal} ref={discountPercentage} type="number" placeholder="Enter price" name="discountPercentage" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium">Final Price</label>
                                    <input ref={finalPrice} readOnly type="number" placeholder="Enter price" name="finalPrice" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                </div>

                            </div>
                            <div className=" col-span-2 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium">Category</label>
                                    <Select name="categoryId" options={
                                        category.map((d, i) => {
                                            return { value: d._id, label: d.name }
                                        })

                                    } />

                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium">Colors</label>
                                    <Select
                                        onChange={(colors) => {
                                            const allcl = colors.map((o) => {
                                                return o.value
                                            })
                                            Setselcolors(allcl)
                                        }}
                                        isMulti closeMenuOnSelect={false} options={
                                            color.map((d, i) => {
                                                return { value: d._id, label: d.colorName }
                                            })

                                        } />
                                </div>

                            </div>


                            <div className="col-span-2">
                                <label className="block text-gray-700 text-sm font-medium">Short Description</label>
                                <textarea name="shortDescription" rows="2" placeholder="Enter description" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700 text-sm font-medium">Long Description</label>
                          
                                <textarea name="longDescription" rows="4" placeholder="Enter description" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700 text-sm font-medium">Thumbnail</label>
                                <input name="thumbnail" type="file" placeholder="Enter description" className="mt-1 block w-full p-3 border rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500" />

                            </div>
                        </div>
                        <button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-lg shadow-md focus:ring-4 focus:ring-blue-300">Add Product</button>
                    </form>
                </div>
            </section>
        </>
    );
}