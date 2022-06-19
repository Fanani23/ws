import TabTitle from "../utils/GeneralFunction";
import {ProductSample} from "../data/ProductSample";
import {CashierSample} from "../data/CashierSample";
import {
	MdSearch,
	MdAdd,
	MdReplay,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
	MdClose,
} from "react-icons/md";
import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";

const Cashier = () => {
	TabTitle("Cashier - Kato Haircut");
	const [item, setItem] = useState(ProductSample);
	const [activeItem, setActiveItem] = useState("All");
	const productCategoryItem = [
		...new Set(ProductSample.map(val => val.category)),
	];
	const filterItem = curcat => {
		const newItem = ProductSample.filter(newVal => {
			setActiveItem(curcat);
			return newVal.category === curcat;
		});
		setItem(newItem);
	};
	const [openDetailService, setOpenDetailService] = useState(false);

	const closeDetailServiceModal = () => {
		setOpenDetailService(false);
	};

	const openDetailServiceModal = () => {
		setOpenDetailService(true);
	};

	const [openAddCustomer, setOpenAddCustomer] = useState(false);

	const closeAddCustomerModal = () => {
		setOpenAddCustomer(false);
	};

	const openAddCustomerModal = () => {
		setOpenAddCustomer(true);
	};

	return (
		<div className="flex flex-col h-full font-nunito-sans">
			{/* Detail Service Modal */}
			<Transition appear show={openDetailService} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeDetailServiceModal}
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
										className="flex justify-between text-lg font-medium leading-6 text-gray-900 p-8 pb-1"
									>
										<h3>Title</h3>
										<div className="flex">
											<h1 className="line-through text-gray-400 mr-3">
												disc
											</h1>
											<h1>Price</h1>
										</div>
										<div
											onClick={closeDetailServiceModal}
											className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
											role="button"
										>
											<MdClose className="relative" />
										</div>
									</Dialog.Title>
									<div className="mt-2 border-t-2">
										<div className="text-sm p-6 text-gray-500">
											<div className="flex flex-row items-center">
												<label
													htmlFor="nama-stylist"
													className="font-semibold w-28"
												>
													Nama Stylist
												</label>
												<input
													type="text"
													name="nama-stylist"
													id="nama-stylist"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center">
												<span className="font-semibold w-28">
													Discount Type
												</span>
												<input
													type="radio"
													name="discount"
													value="persen"
													id="persen"
												/>
												<label
													htmlFor="persen"
													className="mx-1 font-semibold px-3 py-2"
												>
													Persentage (%)
												</label>
												<input
													type="radio"
													name="discount"
													value="nominal"
													id="nominal"
												/>
												<label
													htmlFor="nominal"
													className="mx-1 font-semibold px-3 py-2"
												>
													Nominal (Rp)
												</label>
											</div>
											<div className="flex flex-row items-center">
												<label
													htmlFor="discount-amount"
													className="font-semibold w-28"
												>
													Amount
												</label>
												<input
													type="number"
													name="discount-amount"
													id="discount-amount"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
										</div>
									</div>

									<div className="mt-4 px-6 pb-6 flex justify-center">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
											onClick={closeDetailServiceModal}
										>
											Save
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											onClick={closeDetailServiceModal}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
			{/* Add Customer Modal */}
			<Transition appear show={openAddCustomer} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeAddCustomerModal}
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
										className="flex justify-between text-lg font-medium leading-6 text-gray-900 p-8 pb-1"
									>
										<h3>Add Data Customer</h3>
										<div
											onClick={closeAddCustomerModal}
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
													htmlFor="no-hp"
													className="font-semibold w-28"
												>
													Nomer Handphone
												</label>
												<input
													type="text"
													name="no-hp"
													id="no-hp"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center mb-2">
												<label
													htmlFor="nama-member"
													className="font-semibold w-28"
												>
													Nama Member
												</label>
												<input
													type="text"
													name="nama-member"
													id="nama-member"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center mb-2">
												<label
													htmlFor="birthday"
													className="font-semibold w-28"
												>
													Birthday Date
												</label>
												<input
													type="date"
													name="birthday"
													id="birthday"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center">
												<span className="font-semibold w-28">
													Membership
												</span>
												<input
													type="radio"
													name="discount"
													value="persen"
													id="persen"
												/>
												<label
													htmlFor="persen"
													className="mx-1 font-semibold px-3 py-2"
												>
													VIP
												</label>
												<input
													type="radio"
													name="discount"
													value="nominal"
													id="nominal"
												/>
												<label
													htmlFor="nominal"
													className="mx-1 font-semibold px-3 py-2"
												>
													Reguler
												</label>
											</div>
										</div>
									</div>

									<div className="mt-4 px-6 pb-6 flex justify-center">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
											onClick={closeAddCustomerModal}
										>
											Save
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											onClick={closeAddCustomerModal}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<div className="relative flex flex-none text-gray-600">
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
					className="ml-2 mb-2 px-3 py-2 bg-white rounded-lg"
				>
					<MdSearch className="text-black" />
				</button>
			</div>
			<div className="flex flex-col relative md:flex-row grow overflow-auto scrollbar-shown">
				<div className="flex flex-col basis-full md:relative md:overflow-x-auto md:basis-1/2 lg:basis-4/6">
					<div className="flex w-full min-h-[3rem] bg-black sticky overflow-x-auto scrollbar-hide top-0 left-0 right-0 z-[3]">
						<div className="flex mr-2">
							<button
								className={`${
									activeItem === "All"
										? "bg-white text-black"
										: "bg-black text-white"
								} px-3 py-2 my-1 rounded-lg`}
								onClick={() => {
									setActiveItem("All");
									setItem(ProductSample);
								}}
							>
								All
							</button>
							{productCategoryItem.map((val, id) => {
								return (
									<button
										className={`${
											activeItem === val
												? "bg-white text-black"
												: "bg-black text-white"
										} px-3 py-2 my-1 rounded-lg`}
										key={id}
										onClick={() => filterItem(val)}
									>
										{val}
									</button>
								);
							})}
						</div>
					</div>
					<div className="relative flex overflow-y-auto pt-1">
						<div className="flex flex-wrap overflow-y-auto scrollbar-shown">
							{item.map(val => {
								return (
									<div className="basis-full md:basis-1/2 lg:basis-1/5 xl:basis-1/6 pb-2 pr-0 md:pr-2">
										<div
											className="bg-white w-full h-full flex flex:row md:flex-col rounded-lg md:text-center items-center text-black p-5"
											role="button"
											onClick={openDetailServiceModal}
										>
											<img
												src="https://via.placeholder.com/150"
												alt="place holder"
												class="rounded-full w-fit"
											/>
											<div className="ml-5 md:ml-0">
												<h1 className="font-regular">
													{val.name}
												</h1>
												<h1 className="font-bold text-xl">
													Rp{val.price}
												</h1>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="flex flex-col basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
					<div className="bg-white flex flex-col rounded-tl-lg rounded-tr-lg md:rounded-tr-none h-full">
						<div className="flex flex-row justify-between p-2">
							<button
								className="bg-black text-white px-3 py-2 rounded-lg flex items-center"
								onClick={openAddCustomerModal}
							>
								<MdAdd className="mr-3" /> Add Customer
							</button>
							<button className="bg-black text-white px-3 py-2 rounded-lg">
								<MdReplay />
							</button>
						</div>
						<div className="p-2 overflow-y-scroll scrollbar-shown">
							{CashierSample.map((data, index, {length}) => {
								return length - 1 === index ? (
									""
								) : (
									<>
										<div className="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
											<span className="font-semibold mb-auto p-2 text-black">
												{index + 1}
											</span>
											<div className="flex flex-col p-2">
												<h1 className="font-semibold text-black">
													{data.label}
												</h1>
												<h5 className="font-medium text-gray-500">
													By {data.customer}
												</h5>
											</div>
											<div className="flex items-center ml-auto">
												<h1 className="font-semibold mr-2 text-black">
													Rp {data.total}
												</h1>
												<div className="flex flex-col h-full">
													<button className="bg-red-400 text-white px-3 py-1 flex-1">
														<MdDeleteOutline />
													</button>
													<button className="bg-yellow-500 text-white px-3 py-1 flex-1">
														<MdOutlineModeEditOutline />
													</button>
												</div>
											</div>
										</div>
									</>
								);
							})}
						</div>
						<div className="flex flex-col mt-auto">
							<div className="flex justify-end p-2">
								<button className="bg-black text-white px-3 py-2 rounded-lg mr-2">
									Discount
								</button>
								<button className="bg-black text-white px-3 py-2 rounded-lg">
									Coupon Code
								</button>
							</div>
							<div className="bg-gray-200 p-2">
								<div className="flex space-x-3">
									<div className="flex flex-col flex-1 text-black">
										{CashierSample.map(
											(data, index, {length}) => {
												return length - 1 === index ? (
													<>
														<div className="flex justify-between">
															<p>Sub Total</p>
															<p>
																Rp{" "}
																{
																	data.priceTotal
																}
															</p>
														</div>
														<div className="flex justify-between">
															<p>Discount</p>
															<p>
																{
																	data.discountTotal
																}
																%
															</p>
														</div>
														<div className="flex justify-between">
															<p></p>
															<p>
																Rp{" "}
																{data.priceTotal *
																	data.discountTotal}
															</p>
														</div>
														<div className="flex justify-between">
															<p>Total Payment</p>
															<p>
																Rp{" "}
																{
																	data.priceFinal
																}
															</p>
														</div>
													</>
												) : (
													""
												);
											}
										)}
									</div>
									<div className="flex items-center">
										<button className="flex items-center justify-center p-0 m-0 bg-slate-400 text-white rounded-full h-6 w-6">
											x
										</button>
									</div>
								</div>
								<div className="flex">
									<Link to="1" className="flex-1">
										<button className="py-2 w-full rounded-lg ml-1 bg-green-400">
											Process
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cashier;
