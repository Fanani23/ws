import React, {useState} from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const Data = [
	{
		id: 1,
		label: "January",
		total: 330,
	},
	{
		id: 2,
		label: "February",
		total: 100,
	},
	{
		id: 3,
		label: "March",
		total: 100,
	},
	{
		id: 4,
		label: "April",
		total: 100,
	},
	{
		id: 5,
		label: "May",
		total: 100,
	},
	{
		id: 6,
		label: "June",
		total: 100,
	},
	{
		id: 7,
		label: "July",
		total: 100,
	},
	{
		id: 8,
		label: "August",
		total: 100,
	},
	{
		id: 9,
		label: "September",
		total: 100,
	},
	{
		id: 10,
		label: "October",
		total: 100,
	},
	{
		id: 11,
		label: "November",
		total: 100,
	},
	{
		id: 12,
		label: "December",
		total: 100,
	},
];

const ChartBar = () => {
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
		<div className="w-full">
			<Bar data={statsData} options={optData} />
		</div>
	);
};

export default ChartBar;
