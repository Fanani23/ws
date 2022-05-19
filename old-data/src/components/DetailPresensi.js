import Image from "@material-tailwind/react/Image";
import {MdOutlineMoreVert, MdOutlinePrint, MdSearch} from "react-icons/md";

const DetailPresensi = () => {
	return (
		<div className="flex flex-1 flex-col bg-white p-5 rounded-lg font-nunito-sans">
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
			<div className="flex flex-row mt-4 space-x-5">
				<div className="flex flex-col">
					<h1 className="text-gray-500 text-sm font-semibold">
						Total Presensi
					</h1>
					<p className="text-green-500 text-lg font-bold">8</p>
				</div>
				<div className="flex flex-col">
					<h1 className="text-gray-500 text-sm font-semibold">
						Total Absen
					</h1>
					<p className="text-red-500 text-lg font-bold">3</p>
				</div>
			</div>
			<div className="flex flex-row items-center mt-5">
				<input
					className="border-2 border-black bg-white h-10 px-1 rounded-lg text-sm focus:outline-none"
					type="date"
					name="dateFrom"
					id="dateFrom"
				/>
				<span className="mx-2">to</span>
				<input
					className="border-2 border-black bg-white h-10 px-1 rounded-lg text-sm focus:outline-none"
					type="date"
					name="dateTo"
					id="dateTo"
				/>
				<div className="ml-5 flex flex-row space-x-3">
					<button className="text-white px-3 py-2 bg-black rounded-lg">
						<MdSearch />
					</button>
					<button className="text-white px-4 py-2 bg-black rounded-lg flex items-center">
						<MdOutlinePrint className="mr-2" />
						Print Out
					</button>
				</div>
			</div>
			<table className="mt-5 font-nunito-sans text-xs w-full">
				<thead>
					<tr className="bg-[#F9F9FC] text-black text-left">
						<th className="py-2">Date & Time</th>
						<th className="py-2">Employee Name</th>
						<th className="py-2">Position</th>
					</tr>
				</thead>
				<tbody>
					<tr className="even:bg-[#F9F9FC]">
						<td className="py-2">21-Des-2022 08:00:15</td>
						<td className="py-2">Mika Fiorentina</td>
						<td className="py-2">Senior</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DetailPresensi;
