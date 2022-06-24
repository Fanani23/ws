import {useEffect, useState} from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

export default function Pagination(props) {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(null);
  const [pageOptions, setPageOptions] = useState(null);

  function getPageOptions() {
    let options = [];

    if (start + 2 <= props.maxPage) {
      setEnd(start + 2);
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
      {pageOptions &&
        pageOptions.map((page, idx) => (
          <button
            disabled={page === props.currentPage}
            onClick={() => props.showTablePage(page)}
            key={idx}
            className={`${
              props.currentPage === page
                ? `border-gray-300 text-gray-300`
                : `border-black text-black hover:bg-gray-900 hover:border-gray-900`
            } bg-white hover:text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg`}
          >
            {page}
          </button>
        ))}
      <button
        disabled={props.currentPage === 1}
        onClick={goPrev}
        className={`${
          props.currentPage === 1
            ? `border-gray-300 text-white bg-gray-300`
            : `border-black bg-black text-white hover:bg-gray-900 hover:text-gray-300`
        } relative inline-flex items-center px-3 py-3 rounded-lg border text-sm font-medium`}
      >
        <MdChevronLeft className="text-xl" />
      </button>
      <button
        disabled={props.currentPage === props.maxPage}
        onClick={goNext}
        className={`${
          props.currentPage === props.maxPage
            ? `border-gray-300 text-white bg-gray-300`
            : `border-black bg-black text-white hover:bg-gray-900 hover:text-gray-300`
        } relative inline-flex items-center px-3 py-3 rounded-lg border text-sm font-medium`}
      >
        <MdChevronRight className="text-xl" />
      </button>
    </nav>
  );
}
