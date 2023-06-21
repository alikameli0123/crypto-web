import React from "react";
import style from "./Highlight.module.css";
import { useState } from "react";
import NftCards from "./NftCards";

const Highlight = ({ coins, nfts }) => {
  const [showHighlight, setShowHighlight] = useState(true);

  const switchHandler = (e) => {
    setShowHighlight(e.target.checked);
  };

  return (
    <div className={`container-fluid px-5 my-4`}>
      <div className="d-flex justify-content-between">
        <h1 className={style.highlight_text}>
          <b>{"Today's Cryptocurrency Price"}</b>
        </h1>
        <div>
          Highlights{" "}
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={showHighlight}
              onChange={(e) => {
                switchHandler(e);
              }}
            />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
        </div>
      </div>
      {showHighlight && <NftCards nfts={nfts} />}
    </div>
  );
};

export default Highlight;
