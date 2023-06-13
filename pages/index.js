import Head from "next/head";
import Header from "./../src/Components/HomePanel/Header";
import Server from "./../src/Api/Server";
import NavbarIndex from "@/src/Components/HomePanel/Navbar";

const HomePage = ({ coins }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavbarIndex />
      <Header coins={coins} />
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
