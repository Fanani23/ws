import React, {useState} from "react";
import {Line} from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

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
		total: 9,
	},
	{
		id: 6,
		label: "June",
		total: 4,
	},
	{
		id: 7,
		label: "July",
		total: 4,
	},
	{
		id: 8,
		label: "August",
		total: 4,
	},
	{
		id: 9,
		label: "September",
		total: 4,
	},
	{
		id: 10,
		label: "October",
		total: 4,
	},
	{
		id: 11,
		label: "November",
		total: 4,
	},
	{
		id: 12,
		label: "December",
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
		responsive: true,
		maintainAspectRatio: false,
		tension: 0.4,
		plugins: {
			legend: {
				display: false,
				position: "bottom",
			},
		},
	});
	return (
		<Line data={statsData} width={100} height={100} options={optData} />
	);
};

export default ChartLine;
