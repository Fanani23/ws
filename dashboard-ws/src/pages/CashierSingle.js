import {useNavigate} from "react-router-dom";
import {CashierSample} from "../data/CashierSample";
import {MdChevronLeft, MdDeleteOutline} from "react-icons/md";
import { useState } from "react";

const CashierSingle = () => {
	const navigate = useNavigate();
	const [inputNumber, setInputNumber] = useState()
	// const state = {
	// 	total: null,
	// 	next: null,
	// 	operation: null,
	// };

	// const handleClick = buttonName => {
	// 	this.setState(calculate(this.state, buttonName));
	// };

	return (
		<div className="flex flex-col h-full font-noto-sans">
			<div className="relative flex flex-none">
				<button
					className="flex items-center bg-white text-black px-3 py-2 rounded-lg font-semibold"
					onClick={() => navigate(-1)}
				>
					<MdChevronLeft />
					Back
				</button>
			</div>
			<div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
				<div className="basis-full md:basis-1/2 lg:basis-4/6">
					<div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
						<div className="p-5 flex justify-between items-center bg-gray-200">
							<div className="flex flex-col">
								<h1 className="text-gray-500 text-sm">
									Order ID
								</h1>
								<h2 className="text-black font-bold text-lg">
									#ABC
								</h2>
							</div>
							<div className="flex flex-row items-center">
								<img
									src="https://via.placeholder.com/35/ffffff/000000/?text=profile"
									alt="profile"
									className="rounded-full mr-0 sm:mr-5"
								/>
								<div className="flex flex-col mr-0 sm:mr-5">
									<h1 className="text-black font-bold">
										Arini Sukandar
									</h1>
									<h2 className="text-gray-500 text-sm">
										#123
									</h2>
								</div>
								<button className="p-3 bg-red-500 rounded-lg text-white">
									<MdDeleteOutline />
								</button>
							</div>
						</div>
						<div className="p-5 flex flex-col grow overflow-y-auto">
							<h1 className="text-black text-sm font-semibold">
								Date: 24/07/2022
							</h1>
							<div className="overflow-y-auto scrollbar-shown max-h-72">
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
								<div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
									<div className="flex">
										<h1>1</h1>
										<h2>Hair Cut Woman</h2>
									</div>
									<h1>41</h1>
								</div>
							</div>
							<div className="mt-auto">
								<div className="flex justify-between text-black px-3">
									<h1>Sub Total</h1>
									<h2>44</h2>
								</div>
								<div className="flex justify-between text-black px-3">
									<h1>Discount</h1>
									<h2>44</h2>
								</div>
								<div className="flex justify-between text-black px-3">
									<h1>Grand Total</h1>
									<h2>44</h2>
								</div>
								<div className="flex flex-col rounded-lg bg-gray-100 px-3 py-2 text-black font-bold">
									<div className="flex justify-between">
										<h1>Credit</h1>
										<h1>123</h1>
									</div>
									<div className="flex justify-between">
										<h1>Balance</h1>
										<h1>123</h1>
									</div>
								</div>
								<button className="w-full bg-[#48C134] rounded-lg py-2">
									Confirm Payment
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="basis-full mt-2 md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6">
					<div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
						<div className="p-8 flex justify-center items-center border-b-2 border-gray-200">
							<h1 className="text-black font-bold text-lg">
								Payment
							</h1>
						</div>
						<div className="p-5 flex flex-col grow overflow-y-auto scrollbar-shown">
							<div className="w-full">
								<h1 className="text-sm text-black font-semibold">
									Payment Method
								</h1>
								<select
									class="bg-transparent border-2 border-gray w-full text-gray-500 text-sm rounded-lg px-3 py-2"
									aria-label="Default select example"
								>
									<option
										selected
										value="1"
										className="text-black"
									>
										Transaction
									</option>
									<option value="2" className="text-black">
										Revenue
									</option>
									<option value="3" className="text-black">
										Membership
									</option>
								</select>
							</div>
							<div className="flex flex-col mt-5">
								<div className="relative">
									<input
										type="number"
										name="payment"
										id="payment"
										className="bg-transparent text-right border-2 border-gray w-full text-black text-lg font-bold rounded-lg px-3 py-2"
									/>
									<span className="absolute top-0 left-0 text-black pl-3 py-3 select-none font-semibold">
										Rp
									</span>
								</div>
								<div className="flex flex-col mt-2">
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">1</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">2</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">3</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">4</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">5</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">6</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">7</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">8</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">9</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">00</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">0</button>
										</div>
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">C</button>
										</div>
									</div>
									<div className="flex flex-row last:mb-0 mb-2">
										<div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">.</button>
										</div>
										<div className="basis-2/3 first:ml-0 last:mr-0 ml-1 mr-1">
											<button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">Cancel</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CashierSingle;
