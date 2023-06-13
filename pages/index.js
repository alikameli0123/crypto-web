import Head from "next/head";
import Server from "./../src/Api/Server";
import NavbarIndex from "@/src/Components/HomePanel/Navbar";
import Coins from "@/src/Components/HomePanel/Coins";

const HomePage = ({ coins }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavbarIndex />
      <Coins coins={coins} />
    </>
  );
};

export default HomePage;


export async function getServerSideProps() {
  const coins = await Server.getCoins();
  return {
    props: {
      coins,
    },
  };
}