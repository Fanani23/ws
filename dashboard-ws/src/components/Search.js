import {MdSearch} from "react-icons/md";

const Search = ({
  textColor,
  bgColor,
  searchValue,
  setSearchValue,
  placeholder,
}) => {
  return (
    <div className={`flex grow ${textColor} relative`}>
      <label htmlFor="search" className="absolute top-3 left-0">
        <MdSearch className={textColor} />
      </label>
      <input
        className={`border-b-2 ${
          bgColor === "bg-black" ? `border-white` : `border-gray-300`
        } bg-transparent w-full md:w-1/2 lg:w-1/3 ${textColor} h-10 pl-5 text-sm focus:outline-none`}
        type="search"
        name="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
      <button
        type="submit"
        className={`ml-2 mb-2 px-3 py-2 ${
          bgColor === "bg-black" ? `bg-white` : `bg-black`
        } rounded-lg`}
      >
        <MdSearch
          className={bgColor === "bg-black" ? `text-black` : `text-white`}
        />
      </button>
    </div>
  );
};

export default Search;
