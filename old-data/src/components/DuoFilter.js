const DuoFilter = (props) => {
	return (
		<>
			<div className="flex">
				<button className="bg-white text-black rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Woman
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Men
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Product
				</button>
			</div>
			<div className="flex">
				<button className="bg-white rounded-lg active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					All
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Color
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Styling
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Waxing
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Extensions
				</button>
				<button className="bg-black text-white rounded-lg hover:bg-white hover:text-black active:outline-none ml-3 my-2 px-3 py-2 font-noto-sans font-semibold">
					Design
				</button>
			</div>
		</>
	);
};

export default DuoFilter;
