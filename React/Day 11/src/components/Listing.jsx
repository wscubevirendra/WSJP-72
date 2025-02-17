import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { MainContext } from '../Context';

export default function Listing() {
    const { addToCart } = useContext(MainContext)
    const [products, SetProducts] = useState([]);
    const [categories, Setcategories] = useState([])
    const [loading, Setloading] = useState(true);
    const [totalPage, SetTotalPage] = useState(0)
    const [currentPage, SetcurrentPage] = useState(0)
    const { category_slug } = useParams();
    const limit = 10;




    const getCategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (succes) => {

                Setcategories(succes.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(
        () => {
            let API;
            if (category_slug == null) {
                API = "https://dummyjson.com/products"
            } else {
                API = `https://dummyjson.com/products/category/${category_slug}`
            }

            Setloading(true)
            axios.get(API).then(
                (succes) => {
                    SetProducts(succes.data.products)
                    SetTotalPage(Math.ceil(succes.data.total / limit))
                }

            ).catch(
                (error) => {
                    console.log(error)
                }

            ).finally(
                () => {
                    Setloading(false)
                }
            )

        },
        [category_slug]
    )


    useEffect(
        () => {
            getCategory()
        },
        []
    )

    useEffect(
        () => {
            Setloading(true)
            axios.get(`https://dummyjson.com/products?skip=${currentPage * limit}`).then(
                (succes) => {
                    SetProducts(succes.data.products)
                }

            ).catch(
                (error) => {
                    console.log(error)
                }

            ).finally(
                () => {
                    Setloading(false)
                }
            )
        },
        [currentPage]
    )

    let pagination = [];
    for (let i = 0; i < totalPage; i++) {
        pagination.push(
            <li onClick={() => SetcurrentPage(i)} className="flex items-center justify-center pointer-events-auto px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {i + 1}
            </li>
        )
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl  py-4 lg:max-w-7xl px-2">
                <div className='grid grid-cols-5'>
                    <div>
                        <h2 className="text-2xl pl-3 mb-4 font-bold tracking-tight text-gray-900">Categories</h2>
                        <ul>
                            <Link to="/">
                                <li className=" cursor-pointer hover:bg-cyan-800 shadow mx-4  p-2 text-md hover:text-white mt-2">All</li></Link>
                            {
                                categories.map((cat, index) => {
                                    return (
                                        <Link key={index} to={`/${cat.slug}`}>
                                            <li className={`${category_slug == cat.slug ? "bg-blue-600" : ""}  cursor-pointer hover:bg-cyan-800 shadow mx-4  p-2 text-md hover:text-white mt-2`}>{cat.name}</li></Link>

                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="mt-6 col-span-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className=' col-span-4'>
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px text-sm">
                                    {
                                        pagination
                                    }


                                </ul>
                            </nav>

                        </div>

                        {
                            loading == true ?
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
                                    return (
                                        <div key={i} className="animate-pulse space-y-4">
                                            <div className="h-80 bg-gray-300 rounded-md"></div>
                                            <div className=' flex gap-10'>
                                                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                                                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                                            </div>
                                        </div>
                                    )
                                })

                                :
                                products.map((product) => (
                                    <div key={product.id} className="group relative">
                                        <img
                                            alt={product.imageAlt}
                                            src={product.thumbnail}
                                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                        />
                                        <div className="mt-4 ">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                            </div>

                                            <div className='my-4 flex justify-between'>
                                                <Link to={`/detail/${product.id}`}>
                                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>

                                                        View

                                                    </button>
                                                </Link>

                                                <button onClick={()=>addToCart(product.id)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }





                    </div>

                </div>



            </div>
        </div>
    )
}
