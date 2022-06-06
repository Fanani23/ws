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
import CostumersDataSample from "../data/CostumersDataSample.json";
import TabTitle from "../utils/GeneralFunction";
import Table from "../components/Table";

const ProductList = () => {
	TabTitle("List Product - Kato Haircut");
	const [openAddDataProduct, setOpenAddDataProduct] = useState(false);

	const closeAddDataProductModal = () => {
		setOpenAddDataProduct(false);
	};

	const openAddDataProductModal = () => {
		setOpenAddDataProduct(true);
	};

	const COLUMNS = [
		{
			Header: "ID",
			accessor: "id",
			disableFilters: true,
		},
		{
			Header: "Category",
			accessor: "category",
		},
		{
			Header: "Product Name",
			accessor: "product",
		},
		{
			Header: "Price",
			accessor: "price",
		},
		{
			Header: "Fee (Nominal)",
			accessor: "fee_nominal",
		},
		{
			Header: "Fee (Percent)",
			accessor: "fee_percent",
		},
	];

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
				<Table ColumnLists={COLUMNS} DataSample={CostumersDataSample}/>
			</div>
		</div>
	);
};

export default ProductList;
