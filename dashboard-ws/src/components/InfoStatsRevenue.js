import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	MdTrendingUp,
	MdTrendingDown,
	MdOutlinePaid,
} from "react-icons/md";

const InfoStatsRevenue = () => {
	const [revenue, setRevenue] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/transaction/")
			.then(({ data }) => {
				setRevenue(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [])

	const sumall = revenue.map(item => item.totalprofit).reduce((prev, curr) => prev + curr, 0);

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-white font-nunito-sans text-sm">
					Total Revenue
				</h1>
				<div className="bg-white p-2 rounded-lg"><MdOutlinePaid className="text-[#48C134]" /></div>
			</div>
			<h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
				Rp{sumall}
			</h1>
			<div className="flex flex-row items-center">
				<MdTrendingUp className="text-[#48C134] mr-3" />
				Up From Yesterday
			</div>
		</>
	);
};

export default InfoStatsRevenue;
