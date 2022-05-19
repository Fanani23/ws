import DetailTransaction from "components/DetailTransaction";
import ListTransaction from "components/ListTransaction";

const Transaction = () => {
	return (
		<>
			<div class="flex flex-row">
				<button class="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Service
				</button>
				<button class="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Product
				</button>
			</div>
			<div className="flex flex-row space-x-5 ml-2 max-h-screen overflow-hidden">
				<ListTransaction />
				<div className="flex justify-end">
					<DetailTransaction />
				</div>
			</div>
		</>
	);
}

export default Transaction