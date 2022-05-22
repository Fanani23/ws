import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const Data = [
	{
		id: 1,
		label: "Hair Cut Woman",
		total: 50,
	},
	{
		id: 2,
		label: "Hair Cut Men",
		total: 33,
	},
	{
		id: 3,
		label: "Corrective Color",
		total: 51,
	},
	{
		id: 4,
		label: "Partial Foil",
		total: 22,
	},
	{
		id: 5,
		label: "Nail Gel",
		total: 15,
	}
];

const ChartDoughnut = () => {
	const [statsData, setStatsData] = useState({
		labels: Data.map(data => data.label),
		datasets: [
			{
				label: "Membership",
				data: Data.map(data => data.total),
				backgroundColor: ["#7388A95A"],
				borderColor: "#333340",
			},
		],
	});

	const [optData, setOptData] = useState({
		responsive: true,
		maintainAspectRatio: false,
	});

	return (
		<Doughnut data={statsData} width={100} height={100} options={optData} />
	);
};

export default ChartDoughnut;
