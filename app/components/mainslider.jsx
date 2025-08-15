'use client';

import Link from "next/link";
import Image from "next/image";
import items from "@/data/items.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MainSlider() {
    return(
        <Swiper
            className='main__slider__wrap'
            modules={[Navigation, Pagination]}
            navigation={{}}
            pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1
            }}
            breakpoints={{
                0:{
                  slidesPerView: 1,
                },
                768:{
                  slidesPerView: 2,
                },
                1024:{
                  slidesPerView: 3,
                }
             }}>

            
            {items.map((item, index) => 
                <SwiperSlide>
                    <Link href={`/item/${item.id}`}>
                        <div className="main__slider__pic__wrap">
                            <img alt={item.name} key={index} className="main__slider__pic" src={item.pic} />
                            <div className="main__slider__info">
                                <div className="main__slider__title">{item.name}</div>
                                <div className="main__slider__price">{item.price}</div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            )}
        </Swiper>
    );
}