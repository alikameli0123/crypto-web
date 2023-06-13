import Head from "next/head";
import Server from "./../src/Api/Server";
import Coins from "@/src/Components/HomePanel/Coins";
import Footer from "@/src/Components/HomePanel/Footer";

const HomePage = ({ coins }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Coins coins={coins} />
      <Footer />
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