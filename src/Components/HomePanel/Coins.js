import React from "react";
import style from "./Coins.module.css";
import Image from "next/image";

const Coins = ({ coins }) => {
  return (
    <div class="table-responsive my-5 px-4">
      <table class="table table-sm">
        <thead className={style.table_head}>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Price</th>
            <th>Total Volume</th>
            <th>24h</th>
            <th>7d</th>
            <th>30d</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr className={style.table_row} key={index}>
              <th>{index + 1}</th>
              <td className={`d-flex p-3 justify-content-evenly`}>
                <Image
                  src={coin.image.thumb}
                  alt={coin.name}
                  width={32}
                  height={32}
                />
                <p style={{ width: "80px" }}>{coin.name}</p>
                <span className={style.symbol}>
                  {coin.symbol.toUpperCase()}
                </span>
              </td>
              <td>${coin.market_data.current_price.usd.toLocaleString()}</td>
              <td>${coin.market_data.total_volume.usd.toLocaleString()}</td>

              <td>
                <span
                  className={
                    coin.market_data.price_change_percentage_24h > 0
                      ? style.up_color
                      : style.down_color
                  }
                >
                  {coin.market_data.price_change_percentage_24h}%
                </span>
              </td>
              <td>
                <span
                  className={
                    coin.market_data.price_change_percentage_7d > 0
                      ? style.up_color
                      : style.down_color
                  }
                >
                  {coin.market_data.price_change_percentage_7d}%
                </span>
              </td>
              <td>
                <span
                  className={
                    coin.market_data.price_change_percentage_30d > 0
                      ? style.up_color
                      : style.down_color
                  }
                >
                  {coin.market_data.price_change_percentage_30d}%
                </span>
              </td>

              <td>${coin.market_data.market_cap.usd.toLocaleString()}</td>
              <td style={{ width: "200px" }}>
                {coin.market_data.circulating_supply.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
