import {MdFilterList, MdSearch, MdOutlinePrint} from "react-icons/md";
import {Link} from "react-router-dom";

const ReportTransaction = () => {
	return (
		<>
			<div className="flex">
				<Link to="/report-transaction">
					<button className="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
						Transaction
					</button>
				</Link>
				<Link to="/report-commission">
					<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
						Commission
					</button>
				</Link>
			</div>
			<div className="flex">
				<button className="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					All
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Service
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Product
				</button>
			</div>
			<div className="bg-white mx-3 p-5 rounded-lg flex flex-col flex-1 font-nunito-sans max-h-screen">
				<div className="flex flex-row items-center">
					<div className="relative flex flex-1 mr-5 text-gray-600">
						<MdSearch className="absolute top-3 left-0" />
						<input
							className="border-b-2 border-gray-300 bg-white h-10 pl-5 w-full text-sm focus:outline-none"
							type="search"
							name="search"
							id="search"
							placeholder="Search name..."
						/>
						<button
							type=""
							className="ml-2 px-3 py-3 bg-black rounded-lg"
						>
							<MdFilterList className="text-white" />
						</button>
					</div>
					<div>
						<input
							className="border-2 border-black bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
							type="date"
							name="dateFrom"
							id="dateFrom"
						/>
						<span className="mx-2">to</span>
						<input
							className="border-2 border-black bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
							type="date"
							name="dateTo"
							id="dateTo"
						/>
					</div>
					<button
						type="submit"
						className="ml-2 px-3 py-3 bg-black rounded-lg"
					>
						<MdSearch className="text-white" />
					</button>
					<button
						type="submit"
						className="ml-2 px-3 py-2 bg-black rounded-lg flex items-center"
					>
						<MdOutlinePrint className="text-white mr-3" />{" "}
						<span className="text-white">Print Out</span>
					</button>
				</div>
				<div className="flex flex-row items-center space-x-5 mt-3">
					<div className="flex flex-col">
						<h5>Total Revenue</h5>
						<h1 className="font-bold text-xl text-green-400">
							Rp90.000.000
						</h1>
					</div>
					<div className="flex flex-col">
						<h5>Total Commission</h5>
						<h1 className="font-bold text-xl text-green-400">
							Rp23.500.000
						</h1>
					</div>
				</div>
				<table className="mt-5 font-nunito-sans text-xs w-full">
					<thead>
						<tr className="bg-[#F9F9FC] text-black text-left">
							<th className="py-2">Date</th>
							<th className="py-2">Employee ID</th>
							<th className="py-2">Employee</th>
							<th className="py-2">Service/Product</th>
							<th className="py-2">Qty</th>
							<th className="py-2">Sub Total</th>
							<th className="py-2">Commission</th>
							<th className="py-2">Total Commission</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">21-Des-2022</td>
							<td className="py-2">AAAA01</td>
							<td className="py-2">Employee</td>
							<td className="py-2">Service/Product</td>
							<td className="py-2">000</td>
							<td className="py-2">1000</td>
							<td className="py-2">50%</td>
							<td className="py-2">100%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ReportTransaction;
