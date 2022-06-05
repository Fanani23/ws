import {
	MdSearch,
	MdAdd,
	MdModeEditOutline,
	MdDeleteOutline,
	MdClose,
} from "react-icons/md";
import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";
import TabTitle from "../utils/GeneralFunction";

const ProductList = () => {
	TabTitle("List Product - Kato Haircut");
	const [openAddDataProduct, setOpenAddDataProduct] = useState(false);

	const closeAddDataProductModal = () => {
		setOpenAddDataProduct(false);
	};

	const openAddDataProductModal = () => {
		setOpenAddDataProduct(true);
	};

	return (
		<div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
			<Transition appear show={openAddDataProduct} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeAddDataProductModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="div"
										className="text-lg text-center font-medium leading-6 text-gray-900 p-8 pb-1"
									>
										<h3>Add Data Product</h3>
										<div
											onClick={closeAddDataProductModal}
											className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
											role="button"
										>
											<MdClose className="relative" />
										</div>
									</Dialog.Title>
									<div className="mt-2 border-t-2">
										<div className="text-sm p-6 text-gray-500">
											<div className="flex flex-row items-center mb-2">
												<label
													htmlFor="id-product"
													className="font-semibold w-28"
												>
													ID Product
												</label>
												<input
													type="text"
													name="id-product"
													id="id-product"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center mb-2">
												<label
													htmlFor="category-product"
													className="font-semibold w-28"
												>
													Category Product
												</label>
												<select
													class="bg-transparent border-2 w-full border-gray-200 rounded-lg px-3 py-2"
													name="category-product"
													id="category-product"
													aria-label="Default select example"
												>
													<option
														selected
														value="1"
														className="text-black"
													>
														Transaction
													</option>
													<option
														value="2"
														className="text-black"
													>
														Revenue
													</option>
													<option
														value="3"
														className="text-black"
													>
														Membership
													</option>
												</select>
											</div>
											<div className="flex flex-row items-center">
												<label
													htmlFor="product-name"
													className="font-semibold w-28"
												>
													Product Name
												</label>
												<input
													type="number"
													name="product-name"
													id="product-name"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row w-full">
												<div className="basis-1/3">
													<label
														htmlFor="product-price"
														className="font-semibold"
													>
														Price{" "}
														<span className="text-gray-400">
															(Rp)
														</span>
													</label>
													<input
														type="number"
														name="product-price"
														id="product-price"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
												<div className="basis-1/3">
													<label
														htmlFor="fee-coms-persen"
														className="font-semibold"
													>
														Fee Commission{" "}
														<span className="text-gray-400">
															(%)
														</span>
													</label>
													<input
														type="number"
														name="fee-coms-persen"
														id="fee-coms-persen"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
												<div className="basis-1/3">
													<label
														htmlFor="fee-coms-rp"
														className="font-semibold"
													>
														Fee Commission{" "}
														<span className="text-gray-400">
															(Rp)
														</span>
													</label>
													<input
														type="number"
														name="fee-coms-rp"
														id="fee-coms-rp"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="mt-4 px-6 pb-6 flex justify-center">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm w-full font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
											onClick={closeAddDataProductModal}
										>
											Save
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
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
						onClick={openAddDataProductModal}
					>
						<MdAdd className="text-white mr-2" />
						<span>Add Service</span>
					</button>
				</div>
				<table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll">
					<thead>
						<tr className="bg-[#F9F9FC] text-black text-left">
							<th className="py-2">ID Product</th>
							<th className="py-2">Category Name</th>
							<th className="py-2">Product Name</th>
							<th className="py-2">Image</th>
							<th className="py-2">Price</th>
							<th className="py-2">Fee (Nominal)</th>
							<th className="py-2">Fee (%)</th>
							<th className="py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#F9F9FC] text-black">
							<td className="py-2">IDPRDCT001</td>
							<td className="py-2">Categori 001</td>
							<td className="py-2">Service 001</td>
							<td className="py-2">Image</td>
							<td className="py-2">10.000</td>
							<td className="py-2">2.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT002</td>
							<td className="py-2">Categori 002</td>
							<td className="py-2">Service 002</td>
							<td className="py-2">Image</td>
							<td className="py-2">20.000</td>
							<td className="py-2">4.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT003</td>
							<td className="py-2">Categori 003</td>
							<td className="py-2">Service 003</td>
							<td className="py-2">Image</td>
							<td className="py-2">10.000</td>
							<td className="py-2">2.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT004</td>
							<td className="py-2">Categori 004</td>
							<td className="py-2">Service 004</td>
							<td className="py-2">Image</td>
							<td className="py-2">40.000</td>
							<td className="py-2">8.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT005</td>
							<td className="py-2">Categori 005</td>
							<td className="py-2">Service 005</td>
							<td className="py-2">Image</td>
							<td className="py-2">10.000</td>
							<td className="py-2">2.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT006</td>
							<td className="py-2">Categori 006</td>
							<td className="py-2">Service 006</td>
							<td className="py-2">Image</td>
							<td className="py-2">20.000</td>
							<td className="py-2">4.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT007</td>
							<td className="py-2">Categori 007</td>
							<td className="py-2">Service 007</td>
							<td className="py-2">Image</td>
							<td className="py-2">60.000</td>
							<td className="py-2">12.000</td>
							<td className="py-2">20%</td>
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
							<td className="py-2">IDPRDCT008</td>
							<td className="py-2">Categori 008</td>
							<td className="py-2">Service 008</td>
							<td className="py-2">Image</td>
							<td className="py-2">10.000</td>
							<td className="py-2">1.000</td>
							<td className="py-2">10%</td>
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
							<td className="py-2">IDPRDCT009</td>
							<td className="py-2">Categori 009</td>
							<td className="py-2">Service 009</td>
							<td className="py-2">Image</td>
							<td className="py-2">20.000</td>
							<td className="py-2">2.000</td>
							<td className="py-2">10%</td>
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
							<td className="py-2">IDPRDCT010</td>
							<td className="py-2">Categori 010</td>
							<td className="py-2">Service 010</td>
							<td className="py-2">Image</td>
							<td className="py-2">10.000</td>
							<td className="py-2">500</td>
							<td className="py-2">5%</td>
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
