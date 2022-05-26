import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	MdTrendingUp,
	MdTrendingDown,
	MdOutlineShield,
} from "react-icons/md";

const InfoStatsMember = () => {
	const [member, setMember] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/member/")
			.then(({ data }) => {
				setMember(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [])

	const all = member.length;

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-white font-nunito-sans text-sm">
					Total Member
				</h1>
				<div className="bg-white p-2 rounded-lg"><MdOutlineShield className="text-[#D6AB14]" /></div>
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

export default InfoStatsMember;
