import {useEffect, useState} from "react";

export default function Pagination(props) {
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(null);
	const [pageOptions, setPageOptions] = useState(null);

	function getPageOptions() {
		let options = [];

		if (start + 4 <= props.maxPage) {
			setEnd(start + 4);
		} else {
			setEnd(props.maxPage);
		}

		for (let i = start; i <= end; i++) {
			options.push(i);
		}

		setPageOptions(options);
	}

	useEffect(() => getPageOptions(), [start, end, props.maxPage]);

	const goPrev = () => {
		if (props.currentPage === start) {
			setStart(start - 1);
			getPageOptions();
		}
		props.showTablePage(props.currentPage - 1);
	};

	const goNext = () => {
		if (props.currentPage === end) {
			setStart(start + 1);
			getPageOptions();
		}
		props.showTablePage(props.currentPage + 1);
	};

	return (
		<nav className="flex flex-row space-x-3 mx-auto">
			{/* <button
				disabled={props.currentPage === 1}
				onClick={goPrev}
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
			</button> */}
			{pageOptions &&
				pageOptions.map((page, idx) => (
					<button
						onClick={() => props.showTablePage(page)}
						key={idx}
						className="bg-white border-black text-black hover:bg-gray-900 hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg"
					>
						{page}
					</button>
				))}
			{/* <button
				disabled={props.currentPage === props.maxPage}
				onClick={goNext}
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
			</button> */}
		</nav>
	);
}
