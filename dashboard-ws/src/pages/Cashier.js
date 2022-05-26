import TabTitle from "../utils/GeneralFunction";
import {ProductSample} from "../data/ProductSample";
import {CashierSample} from "../data/CashierSample";
import {
	MdSearch,
	MdAdd,
	MdReplay,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
} from "react-icons/md";
import {useState} from "react";
import {Link} from "react-router-dom";

const Cashier = () => {
	TabTitle("Cashier - Kato Haircut");
	const [item, setItem] = useState(ProductSample);
	const productCategoryItem = [
		...new Set(ProductSample.map(val => val.category)),
	];
	const filterItem = curcat => {
		const newItem = ProductSample.filter(newVal => {
			return newVal.category === curcat;
		});
		setItem(newItem);
	};
	const [buttonActive, setButtonActive] = useState(false);
	const toggleButton = () => {
		setButtonActive(!buttonActive);
	};

	return (
		<div className="flex flex-col h-full font-nunito-sans">
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
			<div className="w-full flex flex-col md:flex-row grow overflow-hidden">
				<div className="flex flex-col basis-full md:basis-1/2 lg:basis-4/6">
					<div className="flex">
						<div className="w-full flex flex-row overflow-x-auto scrollbar-hide">
							<button
								className="bg-black text-white px-3 py-2 rounded-lg"
								onClick={() => setItem(ProductSample)}
							>
								All
							</button>
							{productCategoryItem.map((val, id) => {
								return (
									<button
										className="bg-black text-white px-3 py-2 rounded-lg"
										key={id}
										onClick={() => filterItem(val)}
									>
										{val}
									</button>
								);
							})}
						</div>
					</div>
					<div className="flex flex-wrap overflow-y-auto scrollbar-shown">
						{item.map(val => {
							return (
								<div className="flex basis-full md:basis-1/2 lg:basis-1/5 xl:basis-1/6 p-1">
									<div
										className="bg-white w-full h-full flex flex-col rounded-lg text-center items-center text-black p-5"
										role="button"
									>
										<img
											src="https://via.placeholder.com/150"
											alt="place holder"
											class="rounded-full"
										/>
										<h1 className="font-regular">
											{val.name}
										</h1>
										<h1 className="font-bold text-xl">
											Rp{val.price}
										</h1>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
					<div className="bg-white flex flex-col rounded-tl-lg h-full">
						<div className="flex flex-row justify-between p-2">
							<button className="bg-black text-white px-3 py-2 rounded-lg flex items-center">
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
															<p>Rp {data.priceTotal}</p>
														</div>
														<div className="flex justify-between">
															<p>Discount</p>
															<p>{data.discountTotal}%</p>
														</div>
														<div className="flex justify-between">
															<p></p>
															<p>Rp {data.priceTotal * data.discountTotal}</p>
														</div>
														<div className="flex justify-between">
															<p>Total Payment</p>
															<p>Rp {data.priceFinal}</p>
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
									<button className="flex-1 py-2 rounded-lg mr-1 bg-yellow-500">
										Cart
									</button>
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
