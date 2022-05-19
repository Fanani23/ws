import {useEffect} from "react";
import Chart from "chart.js";

export default function ChartLine() {
	useEffect(() => {
		var config = {
			type: "line",
			data: {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
				],
				datasets: [
					{
						label: new Date().getFullYear(),
						backgroundColor: "#03a9f4",
						borderColor: "#03a9f4",
						data: [65, 78, 66, 44, 56, 67, 75],
						fill: false,
					},
					{
						label: new Date().getFullYear() - 1,
						fill: false,
						backgroundColor: "#ff9800",
						borderColor: "#ff9800",
						data: [40, 68, 86, 74, 56, 60, 87],
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
		var ctx = document.getElementById("line-chart").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}, []);

	return (
		<div className="relative h-96 w-96">
			<canvas id="line-chart"></canvas>
		</div>
	);
}
