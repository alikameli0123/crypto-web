import style from './CryptoCards.module.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CryptoCard from './CryptoCard';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper"; 

const CryptoCards = ({ coinsList }) => {
    const crypto = coinsList.map(coin => {
        return (
            <SwiperSlide className={style.slider_item} key={coin.id}>
                <CryptoCard data={coin} />
            </SwiperSlide>
        );
    });
    return (
        <div className={`container-fluid col-12 ${style.swiper_container}`}>
            <Swiper
                slidesPerView={4} 
                centeredSlides={false} 
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                navigation={true}
                modules={[Navigation]}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className={style.swiper}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
            >
                {crypto}
            </Swiper>
        </div>
    )
}
export default CryptoCards;