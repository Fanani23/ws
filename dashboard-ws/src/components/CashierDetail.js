import {
	MdAdd,
	MdReplay,
	MdDeleteOutline,
	MdOutlineModeEditOutline,
} from "react-icons/md";

const CashierDetail = () => {
	return (
		<>
			<div class="w-96 bg-white flex flex-col rounded-tl-lg min-h-screen font-nunito-sans">
				<div class="flex flex-row justify-between p-2">
					<button class="bg-black text-white px-3 py-2 rounded-lg flex items-center">
						<MdAdd className="mr-3" /> Add Customer
					</button>
					<button class="bg-black text-white px-3 py-2 rounded-lg">
						<MdReplay />
					</button>
				</div>
				<div class="p-2 overflow-y-scroll scrollbar">
					<div class="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
						<span class="font-semibold mb-auto p-2">1</span>
						<div class="flex flex-col p-2">
							<h1 class="font-semibold">Hair cut woman</h1>
							<h5 class="font-medium text-gray-500">
								By Arini Sukandar
							</h5>
						</div>
						<div class="flex items-center ml-auto">
							<h1 class="font-semibold mr-2">$41.00</h1>
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
							<div class="flex flex-col flex-1">
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
								to
								class="flex-1 py-2 rounded-lg ml-1  bg-green-400"
							>
								Process
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CashierDetail;
