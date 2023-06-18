import Image from "next/image";
import style from "./CryptoCard.module.css";
import dynamic from 'next/dynamic';
import truncate from "../../helper.js";

const LineChart = dynamic(() => import("@/src/Components/Dashboard/CryptoCards/LineChart"), {
    ssr: true
});

const CryptoCard = ({ data }) => {
    return (
        <div className={`${style.container} col-9`}>
            <div className={style.card}>
                <span className={`d-flex`}>
                    <Image src={data.image.small} alt={data.name} width={46} height={46} />
                    <span className={style.coin_detail}>
                        <h4 className={style.coin_name}>{truncate(data.name, 10)}</h4>
                        <h6 className={style.coin_symbole}>{data.symbol}</h6>

                    </span>
                </span>
                <div>
                    <h4 className={style.market_cap_change_percentage_24h}> {data.market_data.market_cap_change_percentage_24h.toFixed(2)}%</h4>
                    <h4 className={`${style.coin_price} d-flex`}>
                        <p>$</p>
                        {data.market_data.current_price.usd.toLocaleString()}
                    </h4>
                </div>
            </div>
            <div>
                {/* <LineChart /> */}
            </div>
        </div>
    )
}

export default CryptoCard;