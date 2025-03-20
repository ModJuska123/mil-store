// snipetas rce + tab
import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard/ProductCard';
import backpack from '../assets/backpack.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'

const ProductSlider = () => {
     return (
        <div className="container py-4 px-4 justify-content-center bg-light"
        >
            <h1 className="text-start fs-5 fw-bold" style={{ fontFamily: 'sans-serif', padding: '20px 8%'
            }} >
               TOP TACTICAL GEAR, MILITARY SURPLUS & OUTDOOR EQUIPMENT ONLINE AT ASMC
           </h1>

            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="MySwiper"
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480:{
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768:{
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280:{
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                
                >
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: backpack, price: '100 EUR', title: 'Backpack'}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: pic2, price: '50 EUR', title: 'Gloves'}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: pic3, price: '35 EUR', title: 'Matters'}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: pic4, price: '20 EUR', title: 'Knee protection'}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: pic5, price: '80 EUR', title: 'Bag'}}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard data={{imgSrc: pic6, price: '10 EUR', title: 'Belt'}}/>
                    </SwiperSlide>
                    
            </Swiper>
        </div>
     );
  };

export default ProductSlider;
