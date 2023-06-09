import React, { useState } from "react";
import style from "./Coins.module.css";
import Image from "next/image";
import NavbarIndex from "./Navbar";
import Highlight from "./Highlights/Highlights";

const Coins = ({ coins, nfts }) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavbarIndex search={search} searchHandler={searchHandler} />
      <Highlight coins={coins} nfts={nfts} />
      <div class={`table-responsive my-5 px-4 ${style.table_responsive}`}>
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
            {searchedCoins.map((coin, index) => (
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
    </>
  );
};

export default Coins;
