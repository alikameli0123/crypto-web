import Image from 'next/image';

const sma = require('technicalindicators').sma;

const Indicators = () => {

    // var prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15];
    // var period = 10;

    return (
        // sma({period : period, values : prices})
        <div className='indicator'>
        <Image src='/assets/dashboard/indicator.jpg' alt='indicator' className='indicator-image' width={800} height={200} />
        </div>
    )
}

export default Indicators;