import DetailCostumers from "components/DetailCostumers";
import ListCostumers from "components/ListCostumers";

export default function Costumers() {
	return (
		<>
			<div class="flex flex-row">
				<button class="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					All
				</button>
				<button class="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					VIP
				</button>
				<button class="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Regular
				</button>
			</div>
			<div className="flex flex-row space-x-5 ml-2 max-h-screen overflow-hidden">
				<ListCostumers />
				<div className="flex justify-end">
					<DetailCostumers />
				</div>
			</div>
		</>
	);
}
