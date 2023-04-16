import CryptoCards from './../../src/Components/Dashboard/CryptoCards/CryptoCards';
import Server from './../../src/Api/Server';
import CircleChart from '@/src/Components/Dashboard/CircleChart';
import LineChart from '@/src/Components/Dashboard/CryptoCards/LineChart';
import BarChart from './../../src/Components/Dashboard/BarChart';
import Indicators from '@/src/Components/Dashboard/Indicators';

const PanelPage = ({ coinsList }) => {
  return (
    <>
      <CryptoCards coinsList={coinsList}/>
      <div className={`row`}>
        <div className={`col-3`} style={{background:"gray"}}>favorite coin</div>
        <div className={`row col-9`}>
          <div className={`col-6`}><BarChart/></div> 
          <div className={`col-6`}><CircleChart /></div> 
          <div className={`col-12`}><Indicators /></div> 
        </div>
      </div>
    </>
  )
}

export default PanelPage;

export async function getStaticProps() {
  const coinsList = await Server.getCoinsList();
  return {
    props: { coinsList }
  };
}