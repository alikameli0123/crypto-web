import React, { useEffect, useState } from "react";
import Server from "@/src/Api/Server";
import { useQuery } from "@/src/Components/helper";
import Image from "next/image";
import style from "../../styles/Nft.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import a from "next/link";

const NftDetailPage = () => {
  const [nft, setNft] = useState([]);

  const router = useRouter();
  const query = useQuery(router);

  useEffect(() => {
    if (!query) {
      return;
    }
    Server.getNftDetails(query.asset_platform_id, query.contract)
      .then((response) => setNft(response))
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  console.log(nft);
  console.log(nft.links);

  return (
    <React.Fragment>
      <Head>
        <title>NFT {nft.name}</title>
      </Head>
      <div className={`container-fluid  ${style.nftDetail}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-12 col-md-3 py-3 ${style.sidebar}`}>
            <Image
              src={nft.image?.small}
              alt={nft.name}
              width={64}
              height={64}
              className="rounded"
            />
            <h3 className="my-1">{nft.name}</h3>
            <h5 className={`badge my-2 ${style.native_currency}`}>
              {nft.native_currency}
            </h5>
            <div></div>
            <hr />
            <div className={`p-1`}>
              Links
              <br />
              {nft.links && (
                <>
                  <a
                    href={nft.links.discord}
                    className={`badge mx-2 ${style.link}`}
                  >
                    discord
                  </a>

                  <a
                    href={nft.links.homepage}
                    className={`badge mx-2 ${style.link}`}
                  >
                    home page
                  </a>

                  <a
                    href={nft.links.twitter}
                    className={`badge mx-2 ${style.link}`}
                  >
                    twitter
                  </a>
                </>
              )}
            </div>
            <hr />
          </div>
          <div className={`col-12 col-md-9 p-3`}>
            <div className={`col-12 d-flex`}>
              <div className={`col-4 ${style.nft_card}`}>
                <p>Floor Price</p>
                {nft.floor_price?.usd.toLocaleString()}
              </div>
              <div className={`col-4 ${style.nft_card}`}>
                <p>Floor Price 24h</p>
                {nft.floor_price_in_usd_24h_percentage_change}
              </div>
            </div>
            <p className={`my-4 ${style.description}`}>{nft.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NftDetailPage;
