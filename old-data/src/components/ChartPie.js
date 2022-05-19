import {useEffect} from "react";
import Chart from "chart.js";

const ChartPie = () => {
  useEffect(() => {
		var config = {
			type: "pie",
			data: {
				labels: ["Red", "Blue", "Yellow"],
				datasets: [
					{
						label: "My First Dataset",
						data: [300, 50, 100],
						backgroundColor: [
							"rgb(255, 99, 132)",
							"rgb(54, 162, 235)",
							"rgb(255, 205, 86)",
						],
						hoverOffset: 4,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
				title: {
					display: false,
					text: "Sales Charts",
					fontColor: "white",
				},
				legend: {
					labels: {
						fontColor: "white",
					},
					align: "center",
					position: "bottom",
				},
				tooltips: {
					mode: "index",
					intersect: false,
				},
				hover: {
					mode: "nearest",
					intersect: true,
				},
			},
		};
		var ctx = document.getElementById("pie-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
  }, []);
  return (
		<>
			<div className="h-96">
				<canvas id="pie-chart"></canvas>
			</div>
		</>
  );
}

export default ChartPie