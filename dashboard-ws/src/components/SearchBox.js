import {MdSearch} from "react-icons/md";

const SearchBox = (props) => {
	return (
		<div className="relative flex text-gray-600">
			<MdSearch className="absolute top-3 left-0" />
			<input
				className="border-b-2 border-gray-300 bg-white h-10 pl-5 text-sm focus:outline-none"
				type="search"
				name="search"
				id="search"
				placeholder={props.placeholder}
			/>
			<button type="submit" className="ml-2 mb-2 px-3 py-2 bg-black rounded-lg">
				<MdSearch className="text-white" />
			</button>
		</div>
	);
};

export default SearchBox;
