// import {NavLink} from "react-router-dom";

const CardTable = props => {
	return (
		<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<h1 className="text-white font-nunito-sans text-sm font-semibold">
						{props.title}
					</h1>
					<h1 className="text-white font-nunito-sans text-xs">
						{props.alt}
					</h1>
				</div>
				<button className="px-3 py-2 bg-white text-black text-xs font-nunito-sans font-semibold rounded-lg outline-none hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500">
					See Details
				</button>
				{/* <NavLink to="/" className="focus:outline-none">
				</NavLink> */}
			</div>
			<table className="mt-5 font-nunito-sans text-xs overflow-x-scroll lg:w-full">
				<thead>
					<tr className="bg-white text-black">
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
				<tbody className="text-white">
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
					<tr className="even:bg-[#FFFFFF33]">
						<td className="py-2">21-Des-2022</td>
						<td className="py-2">Order ID</td>
						<td className="py-2">Employee</td>
						<td className="py-2">Service Product</td>
						<td className="py-2">Qty</td>
						<td className="py-2">Sub Total</td>
						<td className="py-2">0%</td>
						<td className="py-2">Status</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CardTable;
