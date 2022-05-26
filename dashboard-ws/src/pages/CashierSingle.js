import {useNavigate} from "react-router-dom";
import {CashierSample} from "../data/CashierSample";
import {MdChevronLeft, MdDeleteOutline} from "react-icons/md";

const CashierSingle = () => {
	const navigate = useNavigate();

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
			<div className="w-full flex flex-col mt-3 md:flex-row grow overflow-hidden">
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
						<div className="p-5 flex flex-col grow">
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
				<div className="basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
					<div className="bg-white rounded-lg h-full">
						<h1>Hello</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CashierSingle;
