const FilterReport = () => {
  return (
		<>
			<div className="flex">
				<button className="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Commission
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Transaction
				</button>
			</div>
			<div className="flex">
				<button className="bg-white rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					All
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Service
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Product
				</button>
			</div>
		</>
  );
}

export default FilterReport