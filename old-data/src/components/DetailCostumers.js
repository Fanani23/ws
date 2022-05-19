import Image from "@material-tailwind/react/Image";
import {MdOutlineMoreVert} from "react-icons/md";

const DetailCostumers = () => {
	return (
		<>
			<div className="flex flex-1 flex-col p-5 bg-white rounded-lg font-nunito-sans">
				<div className="flex justify-between">
					<div className="flex flex-row">
						<Image
							src="https://via.placeholder.com/50"
							className="mr-3"
							rounded
						/>
						<div className="flex flex-col">
							<h1 className="text-lg font-semibold">
								Mika Florentina
							</h1>
							<p className="text-sm font-semibold text-gray-500">
								#SR081223478578
							</p>
						</div>
					</div>
					<button className="p-4 rounded-lg hover:bg-gray-300">
						<MdOutlineMoreVert />
					</button>
				</div>
				<div className="w-96">
					<h1 className="font-bold">Order ID #988325023570235</h1>
				</div>
				<div className="flex flex-row items-center mt-5">
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
					<button
						type="submit"
						className="ml-2 px-3 py-2 bg-black rounded-lg flex items-center"
					>
						<span className="text-white">Detail Report</span>
					</button>
				</div>
				<table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll">
					<thead>
						<tr className="bg-[#F9F9FC] text-black text-left">
							<th className="py-2">Order ID</th>
							<th className="py-2">Date</th>
							<th className="py-2">Service/Product</th>
							<th className="py-2">Stylist</th>
							<th className="py-2">Subtotal</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
						<tr className="even:bg-[#F9F9FC]">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">03_Feb-1990</td>
							<td className="py-2">Hair Cut Woman</td>
							<td className="py-2">Aini Sukandar</td>
							<td className="py-2">450000</td>
						</tr>
					</tbody>
				</table>
				<nav
					class="flex flex-row space-x-3 mx-auto"
					aria-label="Pagination"
				>
					<a
						href="/presensi"
						aria-current="page"
						className="z-10 bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
					>
						{" "}
						1{" "}
					</a>
					<a
						href="/presensi"
						className="bg-white border-black text-black hover:bg-gray-900 hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
					>
						{" "}
						2{" "}
					</a>
					<a
						href="/presensi"
						className="bg-white border-black text-black hover:bg-gray-900 hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
					>
						{" "}
						3{" "}
					</a>
					<a
						href="/presensi"
						className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
					>
						<span class="sr-only">Previous</span>
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="/presensi"
						className="relative inline-flex items-center px-2 py-2 rounded-lg border border-black bg-black text-sm font-medium text-white hover:bg-gray-900 hover:text-gray-300"
					>
						<span class="sr-only">Next</span>
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</nav>
			</div>
		</>
	);
};

export default DetailCostumers;
