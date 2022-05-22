import TabTitle from "../utils/GeneralFunction";
import {ProductSample} from "../data/ProductSample";
import {
	MdSearch,
	MdAdd,
	MdReplay,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
} from "react-icons/md";
import {useState} from "react";

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
				<div className="flex flex-col basis-full lg:basis-4/6">
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
				<div className="flex flex-col basis-full xl:ml-2 lg:basis-2/6">
					<div class="bg-white flex flex-col rounded-tl-lg h-full">
						<div class="flex flex-row justify-between p-2">
							<button class="bg-black text-white px-3 py-2 rounded-lg flex items-center">
								<MdAdd className="mr-3" /> Add Customer
							</button>
							<button class="bg-black text-white px-3 py-2 rounded-lg">
								<MdReplay />
							</button>
						</div>
						<div class="p-2 overflow-y-scroll scrollbar-shown">
							<div class="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
								<span class="font-semibold mb-auto p-2 text-black">1</span>
								<div class="flex flex-col p-2">
									<h1 class="font-semibold text-black">
										Hair cut woman
									</h1>
									<h5 class="font-medium text-gray-500">
										By Arini Sukandar
									</h5>
								</div>
								<div class="flex items-center ml-auto">
									<h1 class="font-semibold mr-2 text-black">$41.00</h1>
									<div class="flex flex-col h-full">
										<button class="bg-red-400 text-white px-3 py-1 flex-1">
											<MdDeleteOutline />
										</button>
										<button class="bg-yellow-500 text-white px-3 py-1 flex-1">
											<MdOutlineModeEditOutline />
										</button>
									</div>
								</div>
							</div>
							<div class="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
								<span class="font-semibold mb-auto p-2 text-black">1</span>
								<div class="flex flex-col p-2">
									<h1 class="font-semibold text-black">
										Hair cut woman
									</h1>
									<h5 class="font-medium text-gray-500">
										By Arini Sukandar
									</h5>
								</div>
								<div class="flex items-center ml-auto">
									<h1 class="font-semibold mr-2 text-black">$41.00</h1>
									<div class="flex flex-col h-full">
										<button class="bg-red-400 text-white px-3 py-1 flex-1">
											<MdDeleteOutline />
										</button>
										<button class="bg-yellow-500 text-white px-3 py-1 flex-1">
											<MdOutlineModeEditOutline />
										</button>
									</div>
								</div>
							</div>
							<div class="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
								<span class="font-semibold mb-auto p-2 text-black">1</span>
								<div class="flex flex-col p-2">
									<h1 class="font-semibold text-black">
										Hair cut woman
									</h1>
									<h5 class="font-medium text-gray-500">
										By Arini Sukandar
									</h5>
								</div>
								<div class="flex items-center ml-auto">
									<h1 class="font-semibold mr-2 text-black">$41.00</h1>
									<div class="flex flex-col h-full">
										<button class="bg-red-400 text-white px-3 py-1 flex-1">
											<MdDeleteOutline />
										</button>
										<button class="bg-yellow-500 text-white px-3 py-1 flex-1">
											<MdOutlineModeEditOutline />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col mt-auto">
							<div class="flex justify-end p-2">
								<button class="bg-black text-white px-3 py-2 rounded-lg mr-2">
									Discount
								</button>
								<button class="bg-black text-white px-3 py-2 rounded-lg">
									Coupon Code
								</button>
							</div>
							<div class="bg-gray-200 p-2">
								<div class="flex space-x-3">
									<div class="flex flex-col flex-1 text-black">
										<div class="flex justify-between">
											<p>Sub Total</p>
											<p>$150.00</p>
										</div>
										<div class="flex justify-between">
											<p>Discount</p>
											<p>$0.00</p>
										</div>
										<div class="flex justify-between">
											<p></p>
											<p>0</p>
										</div>
										<div class="flex justify-between">
											<p>Total Payment</p>
											<p>$150.00</p>
										</div>
									</div>
									<div class="flex items-center">
										<button class="flex items-center justify-center p-0 m-0 bg-slate-400 text-white rounded-full h-6 w-6">
											x
										</button>
									</div>
								</div>
								<div class="flex">
									<button class="flex-1 py-2 rounded-lg mr-1 bg-yellow-500">
										Cart
									</button>
									<button
										class="flex-1 py-2 rounded-lg ml-1  bg-green-400"
									>
										Process
									</button>
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
