import style from "./FavoriteCoin.module.css";
import { useState, useEffect } from 'react';
import Image from "next/image";

const FavoriteCoin = ({ favoriteCoin }) => {
    const [findCoin, setFindCoin] = useState([]);

    const findCoinHandler = () => {
        let circulating_supplyArr = [];
        favoriteCoin.forEach(f => {
            circulating_supplyArr.push(f.circulating_supply)
        })
        circulating_supplyArr.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });

        let favoriteCoinArr = [];

        circulating_supplyArr.forEach(number => {
            favoriteCoin.filter(f => f.circulating_supply == number).forEach(f => {
                favoriteCoinArr.push(f)
            })
        })
        setFindCoin(favoriteCoinArr);
    }

    useEffect(() => {
        findCoinHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.container}>
            <div className={`d-flex justify-content-between`}>
                <select className={style.select_duration}>
                    <option>هفته</option>
                </select>
                <p className={style.title}>محبوب‌ترین کوین‌ها</p>
            </div>
            <div className={`d-flex justify-content-between ${style.coin_header_detail}`}>
                <p className={style.title}>24 ساعت گذشته</p>
                <p className={style.title}>نام</p>
            </div>
            <div className={style.coin_list}>
                {
                    findCoin &&
                    findCoin.map(coin => (
                        <>
                            <div key={coin.id} className={`d-flex ${style.coin}`}>
                                <p className={style.percentage_24h}> {coin.price_change_percentage_24h.toFixed(2)}% </p>
                                <div className={`${style.coin_info} d-flex`}>
                                    <p className={style.symbol}> {coin.symbol.toUpperCase()} </p>
                                    <p className={style.name}>{coin.name}</p>
                                    <Image src={coin.image} width={24} height={24} alt={coin.name} className={style.image} />
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default FavoriteCoin;