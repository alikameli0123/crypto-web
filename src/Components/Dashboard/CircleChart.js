import { useEffect } from "react"
import { Chart, registerables } from 'chart.js';
import style from './CircleChart.module.css';

const CircleChart = () => {
    useEffect(() => {
        var ctx = document.getElementById('CircleChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Bitcoin', 'Ethereum', 'TRON'],
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
    }, []);


    return (
        <div className={style.CircleChart_Container}>
            <p>My Wallet</p>
            <div className={style.wallet_detail}>
                <canvas id='CircleChart' className="col-2"></canvas>
            </div>
        </div>
    )
}
export default CircleChart;
