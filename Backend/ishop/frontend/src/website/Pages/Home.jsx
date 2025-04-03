import React, { useContext, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import SliderSection from '../Components/SliderSection'
import { MainContext } from '../../Context'
import MultiSlider from '../Components/MultiSlider'

export default function Home() {
    const { getProduct, product } = useContext(MainContext)
    useEffect(
        () => {
            getProduct(null, 6)
        },
        []
    )
    return (
        <div className='p-7'>
            <SliderSection />
            <MultiSlider />
            <div className=' grid my-4 gap-4 grid-cols-3'>
                {
                    product.map(
                        (prod, index) => {
                            return <ProductCard product={prod} key={index} />
                        }
                    )
                }

            </div>
        </div>

    )
}
