import {
	MdSearch,
	MdAdd,
	MdModeEditOutline,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
} from "react-icons/md";
import TabTitle from "../utils/GeneralFunction";

const ProductList = () => {
	TabTitle("List Product - Kato Haircut");

	return (
		<div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
			<div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
				<div className="flex justify-between">
					<div className="flex grow text-gray-600">
						<MdSearch className="absolute top-3 left-0 text-white" />
						<input
							className="border-b-2 border-gray-300 bg-transparent w-full md:w-1/2 lg:w-1/3 text-white h-10 pl-5 text-sm focus:outline-none"
							type="search"
							name="search"
							id="search"
							placeholder="Search"
						/>
						<button
							type="submit"
							className="ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
						>
							<MdSearch className="text-white" />
						</button>
					</div>
					<button
						type="submit"
						className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
					>
						<MdAdd className="text-white mr-2" />
						<span>Add Category</span>
					</button>
				</div>
				<table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll">
					<thead>
						<tr className="bg-[#F9F9FC] text-black text-left">
							<th className="py-2">ID Category</th>
							<th className="py-2">Category Name</th>
							<th className="py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">Categori 01</td>
							<td className="py-2">
								<button>
									<MdModeEditOutline className="text-red-500 hover:text-red-800" />
								</button>
								<button>
									<MdDeleteOutline className="text-red-500 hover:text-red-800" />
								</button>
							</td>
						</tr>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">Categori 01</td>
							<td className="py-2">
								<button>
									<MdModeEditOutline className="text-red-500 hover:text-red-800" />
								</button>
								<button>
									<MdDeleteOutline className="text-red-500 hover:text-red-800" />
								</button>
							</td>
						</tr>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">Categori 01</td>
							<td className="py-2">
								<button>
									<MdModeEditOutline className="text-red-500 hover:text-red-800" />
								</button>
								<button>
									<MdDeleteOutline className="text-red-500 hover:text-red-800" />
								</button>
							</td>
						</tr>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">Categori 01</td>
							<td className="py-2">
								<button>
									<MdModeEditOutline className="text-red-500 hover:text-red-800" />
								</button>
								<button>
									<MdDeleteOutline className="text-red-500 hover:text-red-800" />
								</button>
							</td>
						</tr>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">#M081234567892</td>
							<td className="py-2">Categori 01</td>
							<td className="py-2">
								<button>
									<MdModeEditOutline className="text-red-500 hover:text-red-800" />
								</button>
								<button>
									<MdDeleteOutline className="text-red-500 hover:text-red-800" />
								</button>
							</td>
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
						className="bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
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
		</div>
	);
};

export default ProductList;
