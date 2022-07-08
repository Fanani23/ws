import {useEffect, useState} from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

function genButton(page, idx, p, handleClick)
{
	let className;

	if (p.currentPage === page) {
		className = "border-black text-black";
	} else {
		className = "border-gray-300 text-gray-300 hover:bg-gray-900 hover:border-gray-900";
	}
	className += " bg-white hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg";

	return <button
		disabled={page === p.currentPage}
		key={idx}
		onClick={() => handleClick(page)}
		className={className}>{page}</button>
}

function genPrevOrNextButton(p, handleClick, type)
{
	let className;
	let isDisabled;
	let sym;

	if (type === "prev") {
		isDisabled = (p.currentPage === 1);
		sym = <MdChevronLeft className="text-xl"/>;
	} else {
		isDisabled = (p.currentPage === p.maxPages);
		sym = <MdChevronRight className="text-xl"/>;
	}

	if (isDisabled) {
		className = "border-gray-300 text-white bg-gray-300";
	} else {
		className = "border-black bg-black text-white hover:bg-gray-900 hover:text-gray-300";
	}
	className += " relative inline-flex items-center px-3 py-3 rounded-lg border text-sm font-medium";

	return <button
        	disabled={isDisabled}
		className={className}
		onClick={() => handleClick()}
		>{sym}</button>
}

export default function Pagination(props) {
	const [pageOptions, setPageOptions] = useState(null);
	const [current, setCurrent] = useState(props.currentPage);
	const [listPages, setListPages] = useState();

	function getPageOptions(cur) {
		let listPages = [];
		let start;
		let end;

		if (cur <= 2) {
			start = 1;
		} else {
			start = cur - 1;
		}
		end = start + 2;

		if (end > props.maxPage)
			end = props.maxPage;

		for (let i = start; i <= end; i++) {
			listPages.push(i);
		}
		setListPages(listPages);
	};

	useEffect(() => getPageOptions(current), []);

	let handleClick = function (page) {
		props.showTablePage(page);
	};

	const goPrev = () => {
		let cur = props.currentPage - 1;
		setCurrent(cur);
		getPageOptions(cur);
		props.showTablePage(cur);
	};

	const goNext = () => {
		let cur = props.currentPage + 1;
		setCurrent(cur);
		getPageOptions(cur);
		props.showTablePage(cur);
	};
	return (
		<nav className="flex flex-row space-x-3 mt-4 mx-auto">
			{listPages && listPages.map((page, idx) => (
					genButton(page, idx, props, handleClick)
			))}
			{genPrevOrNextButton(props, goPrev, "prev")}
			{genPrevOrNextButton(props, goNext, "next")}
		</nav>
	);
}
