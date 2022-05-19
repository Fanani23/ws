import React, {useState} from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const Data = [
	{
		id: 1,
		label: "VIP",
		total: 330,
	},
	{
		id: 2,
		label: "Regular",
		total: 100,
	},
];

const ChartPie = () => {
	const [statsData, setStatsData] = useState({
		labels: Data.map(data => data.label),
		datasets: [
			{
				label: "Membership",
				data: Data.map(data => data.total),
				backgroundColor: ["#147AD6", "#7388A95A"],
				borderColor: "#00000000"
			},
		],
	});

	const [optData, setOptData] = useState({
		options: [
			{
				responsive: true,
				plugins: {
					legend: {
						position: "bottom",
					},
				},
			},
		],
	});
	return (
		<div className="w-96">
			<Pie data={statsData} options={optData} />
		</div>
	);
};

export default ChartPie;
