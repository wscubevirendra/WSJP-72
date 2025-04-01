import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Context'
import ProductCard from '../Components/ProductCard';
import { Link, useParams, useSearchParams } from "react-router-dom"
import MultiSlider from '../Components/MultiSlider';

export default function Store() {
    const { category, getCategory, getColors, color, PRODUCT_URL, getProduct, product, } = useContext(MainContext);
    const [limit, SetLimit] = useState(0);
    const [productColor, SetProductColor] = useState(null);
    const [searchParams, SetsearchParams] = useSearchParams();
    const { categorySlug } = useParams();
    

    useEffect(
        () => {
            getCategory();
            getColors();

            if (searchParams.get("limit")) {
                SetLimit(searchParams.get("limit"))
            }


            if (searchParams.get("productColor")) {
                SetProductColor(searchParams.get("productColor"))
            }

        },
        []
    )

    useEffect(
        () => {
            const query = {};
            query["limit"] = limit;

            if (productColor != null) {
                query["productColor"] = productColor;

            }
            SetsearchParams(query)
            getProduct(null, limit, categorySlug, productColor);
        },
        [limit, categorySlug, productColor]
    )

    return (
        <div className='w-full '>
            <div className="max-w-[1300px] mx-auto">
                <div className=" my-4 shadow-2xl px-4 bg-white py-2">
                    Home/shop/{categorySlug}
                </div>
                <div className='grid gap-3 grid-cols-8'>
                    <div className=' col-span-6'>
                        <img className='w-full h-[100%]' src="banner.png" alt="" />
                    </div>
                    <div className=' col-span-2'>
                        <img className='w-full h-[100%]' src="realme.png" alt="" />

                    </div>

                </div>
                <div className='grid gap-10 px-4 my-4 grid-cols-8'>
                    <div className='col-span-2 p-4 '>
                        <div className='bg-[#EEEFF6] mb-5 p-4'>
                            <h1 className=' font-bold text-xl uppercase'>categories</h1>
                            <Link to="/store"> <button className='px-4 py-1 my-4 bg-white rounded-xl'>All Category</button></Link>
                            <ul>
                                {
                                    category.map((cat, index) => {
                                        return (
                                            <Link to={`/store/${cat.slug}`}>  <li key={index} className='flex justify-between cursor-pointer capitalize my-2'>{cat.name} <span >({cat.productCount})</span></li></Link>
                                        )
                                    })
                                }


                            </ul>

                        </div>
                        <div className='bg-[#EEEFF6] mb-5 p-4'>
                            <h1 className=' font-bold text-xl uppercase'>colors</h1>
                            <Link to="/store">
                                <button className='px-4 py-1 my-4 bg-white rounded-xl'>All Color</button></Link>
                            <ul className=' flex gap-5 flex-wrap'>
                                {
                                    color.map((col, index) => {
                                        return (
                                            <li onClick={() => SetProductColor(col._id)} style={{ background: col.colorCode }} className='w-[30px] h-[30px] rounded-2xl  cursor-pointer  my-2'></li>
                                        )
                                    })
                                }


                            </ul>

                        </div>
                        <div className='bg-[#EEEFF6] py-8 mb-5 p-4'>
                            <h1 className=' font-bold text-xl uppercase'>Price</h1>

                            <input type="range" />

                        </div>
                    </div>
                    <div className=' gap-5 col-span-6 p-4'>
                        <MultiSlider />
                        <div className='w-full shadow-2xl  p-2 my-2'>
                            <span>Show item</span>
                            <select onChange={(e) => SetLimit(e.target.value)} className='ml-5 bg-[#EEEFF6] rounded-sm outline-none px-7 py-1' name="" id="">
                                <option value="0">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className=' grid gap-4 grid-cols-3'>
                            {
                                product.map(
                                    (prod, index) => {
                                        return <ProductCard product={prod} key={index} />
                                    }
                                )
                            }

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
