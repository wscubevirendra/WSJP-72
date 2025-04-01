import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import ProductCard from './ProductCard';
import { MainContext } from '../../Context';
import axios from 'axios';

export default function MultiSlider() {
    const { getProduct, API_BASE_URL, PRODUCT_URL } = useContext(MainContext);
    const [product, Setproduct] = useState([]);


    useEffect(
        () => {
            axios.get(API_BASE_URL + PRODUCT_URL).then(
                (response) => {
                    if (response.data.status == 1) {
                        Setproduct(response.data.products)
                    }

                }
            ).catch(
                (error) => {
                    Setproduct([])

                }
            )
        },
        []
    )
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container my-10">
            <Slider {...settings}>
                {
                    product.map(
                        (prod, index) => {
                            return <ProductCard product={prod} key={index} />
                        }
                    )
                }

            </Slider>
        </div>
    );
}






