import { useEffect } from "react"
import { Chart, registerables } from 'chart.js';
import style from './CircleChart.module.css';

const CircleChart = () => {
    useEffect(() => {
        var ctx = document.getElementById('CircleChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['بیت‌کوین', 'اتریوم', 'ترون'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [45, 30, 25],
                        backgroundColor: [
                            '#F7931A',
                            '#7EB6F7',
                            '#2E2E2E',
                        ],
                        borderColor: [
                            '#F7931A',
                            '#7EB6F7',
                            '#2E2E2E',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        })
    }, [])

    const myWallet = [
        { name: 'بیتکوین', color: '#F7931A', amount: '45 درصد' },
        { name: 'اتریوم', color: '#7EB6F7', amount: '30 درصد' },
        { name: 'ترون', color: '#2E2E2E', amount: '25 درصد' },
    ]


    return (
        <div className={style.CircleChart_Container}>
            <p>دارایی‌های کیف پول</p>
            <div className={style.wallet_detail}>
                <canvas id='CircleChart' className="col-2"></canvas>
                <ul>
                    {
                        myWallet.map((wallet, index) => (
                            <li key={index} >
                                <p className={style.amountWallet}> {wallet.amount} </p>
                                <p className={style.cryptoWallet}>{wallet.name}</p>
                                <div style={{ width: '9px', height: '9px', backgroundColor: wallet.color, borderRadius: '50%' }}></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default CircleChart;
