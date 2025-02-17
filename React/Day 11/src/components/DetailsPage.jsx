import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
    const [product, SetProduct] = useState({})
    const { product_id } = useParams();
    const getProduct = () => {
        axios.get(`https://dummyjson.com/products/${product_id}`).then(
            (succes) => {
                SetProduct(succes.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }


    useEffect(
        () => {
            getProduct()
        },
        []
    )
    return (
        <section className="py-8 bg-white md:py-16 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div>
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img
                                className="w-full"
                                src={product.thumbnail}
                                alt="Apple iMac"
                            />
                        </div>
                        <div className="flex gap-5 mt-10 max-w-sm lg:max-w-lg mx-auto">
                            {
                                product?.images?.map((img, i) => {
                                    return (
                                        <img
                                            className="w-[100px] h-[100px]"
                                            src={img}
                                            alt="Apple iMac"
                                        />
                                    )
                                })
                            }


                        </div>
                    </div>


                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            {product.title}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                {product.price}
                            </p>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1 text-yellow-300">
                                    {[...Array(5)].map((_, i) => (
                                        <AiFillStar key={i} className="w-4 h-4" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium leading-none text-gray-500">
                                    (5.0)
                                </p>
                                <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
                                    345 Reviews
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <a
                                href="#"
                                title="Add to favorites"
                                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                role="button"
                            >
                                <AiOutlineHeart className="w-5 h-5 mr-2" /> Add to favorites
                            </a>
                            <a
                                href="#"
                                title="Add to cart"
                                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                                role="button"
                            >
                                <AiOutlineShoppingCart className="w-5 h-5 mr-2" /> Add to cart
                            </a>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200" />
                        <p className="mb-6 text-gray-500">
                            {product.description}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
