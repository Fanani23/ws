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
		<>
			<button disabled={props.currentPage === 1} onClick={goPrev}>
				prev
			</button>
			{pageOptions &&
				pageOptions.map((page, idx) => (
					<button onClick={() => props.showTablePage(page)} key={idx}>
						{page}
					</button>
				))}
			<button
				disabled={props.currentPage === props.maxPage}
				onClick={goNext}
			>
				next
			</button>
		</>
	);
}
