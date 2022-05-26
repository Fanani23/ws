import React, {useState} from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const Data = [
	{
		id: 1,
		label: "VIP",
		total: 1,
	},
	{
		id: 2,
		label: "Regular",
		total: 1,
	},
];

const ChartPieMember = () => {
	const [statsData, setStatsData] = useState({
		labels: Data.map(data => data.label),
		datasets: [
			{
				label: "Membership",
				data: Data.map(data => data.total),
				backgroundColor: ["#147AD6", "#7388A95A"],
				borderColor: "#00000000",
			},
		],
	});

	const [optData, setOptData] = useState({
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "bottom",
			},
		},
	});
	return (
		<Pie data={statsData} width={100} height={100} options={optData} />
	);
};

export default ChartPieMember;
