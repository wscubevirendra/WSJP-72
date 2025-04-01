import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function SliderSection() {
    const { category, getCategory } = useContext(MainContext);

    useEffect(() => {
        getCategory();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,  // Adjusted for better visibility
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  // Adjusted for smoother transitions
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // For mobile screens
                },
            },
        ],
    };

    const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

    return (
        <div className='w-full overflow-hidden grid my-10 gap-5 px-2 grid-cols-8'>
            {/* Category Sidebar */}
            <div className='bg-[#EEEFF6] col-span-2 mb-5 p-4'>
                <h1 className='font-bold text-xl uppercase'>Categories</h1>
                <Link to="/store">
                    <button className='px-4 py-1 my-4 bg-white rounded-xl'>All Categories</button>
                </Link>
                <ul>
                    {category.map((cat, index) => (
                        <Link key={index} to={`/store/${cat.slug}`}>
                            <li className='flex justify-between cursor-pointer capitalize my-2'>
                                {cat.name} <span>({cat.productCount})</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Slider Section */}
            <div className='col-span-6 bg-red-400 overflow-hidden rounded-xl'>
                <Slider {...settings}>
                    {images.map((img, i) => (
                        <div key={i} className="flex justify-center">
                            <img className="w-full h-[400px] object-cover rounded-xl" src={img} alt={`slide-${i}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
