import CryptoCards from './../../src/Components/Dashboard/CryptoCards/CryptoCards';
import Server from './../../src/Api/Server';
import CircleChart from '@/src/Components/Dashboard/CircleChart';
import LineChart from '@/src/Components/Dashboard/CryptoCards/LineChart';

const PanelPage = ({ coinsList }) => {
  return (
    <>
      <CryptoCards coinsList={coinsList}/>
      <div className={`row`}>
        <div className={`col-3`} style={{background:"gray"}}>favorite coin</div>
        <div className={`row col-9`}>
          <div className={`col-6`} style={{background:"gray"}} >ارزش معاملات هفته گذشته</div> 
          <div className={`col-6`}>
          <CircleChart />
         
          </div> 
          <div className={`col-8`}>chart andicator</div> 
        </div>
      </div>
    </>
  )
}

export default PanelPage;

export async function getServerSideProps() {
  const coinsList = await Server.getCoinsList();
  return {
    props: { coinsList }
  };
}