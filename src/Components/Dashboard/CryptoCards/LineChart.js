import { useEffect } from "react"
import { Chart, registerables } from 'chart.js';

const LineChart = () => {
	useEffect(() => {
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [1, 2, 3, 4, 5, 6, 7],
				datasets: [{
					data: [66, 144, 146, 116, 107, 131, 43],
					label: "Applied",
					// borderColor: "rgb(109, 253, 181)",
					backgroundColor: "rgb(109, 253, 181,0.5)",
					// borderWidth: 2
				}
				]
			},
		})
	}, [])


	return (
		<>
			<canvas id='myChart'></canvas>
		</>
	)
}


export default LineChart;