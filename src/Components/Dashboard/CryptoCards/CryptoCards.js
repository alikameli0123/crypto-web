import style from './CryptoCards.module.css';
import React, { useState } from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CryptoCard from './CryptoCard';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper"; 
import LineChart from './LineChart';

const CryptoCards = ({ coinsList }) => {
    const crypto = coinsList.slice(0, 10).map(coin => {
        return (
            <SwiperSlide className={style.slider_item} key={coin.id}>
                <CryptoCard data={coin} />
            </SwiperSlide>
        );
    });
    return (
        <div className={`container ${style.swiper_container}`}>
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
            >
                {crypto}
                {/* <LineChart/> */}
            </Swiper>
        </div>
    )
}
export default CryptoCards;