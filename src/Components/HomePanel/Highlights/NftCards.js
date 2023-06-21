import React from "react";
import style from "./NftCards.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Link from "next/link";

const NftCards = ({ nfts }) => {
  const nftList = nfts.map((nft) => {
    return (
      <SwiperSlide
        className={`${style.slider_item} d-flex justify-content-center`}
        key={nft.id}
      >
        <Link
          className={`col-10 justify-content-center align-items-center text-center ${style.nft_card}`}
          href={`/nft/${nft.id}?asset_platform_id=${nft.asset_platform_id}&contract=${nft.contract_address}`}
        >
          <>
          <h3>{nft.name}</h3>
          <h4>{nft.symbol}</h4>
          </>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className={`col-12 col-md-6 my-3 p-3 ${style.nft_container}`}>
      <h5>{"Nft's"}</h5>
      <div>
        <Swiper
          slidesPerView={2}
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
            1800: {
              slidesPerView: 3,
            },
          }}
        >
          {nftList}
        </Swiper>
      </div>
    </div>
  );
};

export default NftCards;
