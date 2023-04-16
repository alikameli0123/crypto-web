import { useEffect } from "react"
import { Chart, registerables } from 'chart.js';
import style from './BarChart.module.css';

const BarChart = () => {
    useEffect(() => {
        var ctx = document.getElementById('BarChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--',],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [0,40, 88, 60, 44, 19, 61, 59, 79, 76, 54, 64, 97],
                        backgroundColor: "#388AEA",
                        borderWidth: 0,
                        radius: 16
                    },
                ],
            },
        })
    }, [])

    return (
        <div className={style.BarChart_Container}>
            <p>ارزش معاملات هفته گذشته</p>
            <canvas id='BarChart' className="col-2"></canvas>

        </div>
    )
}
export default BarChart;
