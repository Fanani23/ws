import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	MdTrendingUp,
	MdTrendingDown,
	MdOutlineShoppingCart,
} from "react-icons/md";

const InfoStatsTransaction = () => {
	const [transaction, setTransaction] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/transaction/")
			.then(({ data }) => {
				setTransaction(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [])

	const all = transaction.length;


	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-white font-nunito-sans text-sm">
					Total Transaction
				</h1>
				<div className="bg-white p-2 rounded-lg"><MdOutlineShoppingCart className="text-[#C14040]"/></div>
			</div>
			<h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
				{all}
			</h1>
			<div className="flex flex-row items-center">
				<MdTrendingUp className="text-[#48C134] mr-3" />
				Up From Yesterday
			</div>
		</>
	);
};

export default InfoStatsTransaction;
