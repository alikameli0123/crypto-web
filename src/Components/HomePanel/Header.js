import React from "react";
import Image from "next/image";

const Header = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => (
        <div key={coin.id}>
          {coin.id}
          <Image width={50} height={50} src={coin.image.small} />
        </div>
      ))}
    </>
  );
};

export default Header;
