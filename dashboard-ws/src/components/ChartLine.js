import React, {useState} from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const Data = [
	{
		id: 1,
		label: "January",
		total: 3,
	},
	{
		id: 2,
		label: "Febrary",
		total: 1,
	},
	{
		id: 3,
		label: "March",
		total: 2,
	},
	{
		id: 4,
		label: "April",
		total: 2,
	},
	{
		id: 5,
		label: "May",
		total: 4,
	},
];

const ChartLine = () => {
	const [statsData, setStatsData] = useState({
		labels: Data.map(data => data.label),
		datasets: [
			{
				label: "Membership",
				data: Data.map(data => data.total),
				borderColor: "#147AD6",
			},
		],
	});

	const [optData, setOptData] = useState({
		options: [
			{
				responsive: true,
				maintainAspectRatio: false,
        bezierCurve: true,
				plugins: {
					legend: {
						position: "bottom",
					},
				},
			},
		],
	});
	return (
		<>
			<Line data={statsData} options={optData} />
		</>
	);
};

export default ChartLine;
