import CryptoCards from './../../src/Components/Dashboard/CryptoCards/CryptoCards';
import Server from './../../src/Api/Server';
import CircleChart from '@/src/Components/Dashboard/CircleChart';
import LineChart from '@/src/Components/Dashboard/CryptoCards/LineChart';

const PanelPage = ({ coinsList }) => {
  return (
    <>
      <CryptoCards coinsList={coinsList}/>
      <div className={`row`}>
        <div className={`col-4`}>favorite coin</div>
        <div className={`row col-8`}>
          <div className={`col-4`}>ارزش معاملات هفته گذشته</div> 
          <div className={`col-4`}>دارایی‌های کیف پول
          {/* <CircleChart /> */}
         
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