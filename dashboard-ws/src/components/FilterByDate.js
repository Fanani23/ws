const FilterByDate = ({dateStart, setDateStart, dateEnd, setDateEnd}) => {
  return (
    <div className="flex flex-row mt-2 md:mt-0">
      <div className="relative">
        <input
          type="date"
          name="from"
          id="dateStart"
          className="ml-0 md:ml-2 h-10 border border-gray-300 text-sm bg-white text-black rounded-lg px-2 outline-none focus:ring-black focus:ring-2"
        />
      </div>
      <span className="text-black mx-2 mt-2">to</span>
      <div className="relative">
        <input
          type="date"
          name="to"
          id="dateEnd"
          className={`${
            dateEnd ? "text-black " : "text-transparent "
          }h-10 border border-gray-300 text-sm bg-white rounded-lg px-2 outline-none focus:ring-black focus:ring-2`}
        />
        {!dateEnd && (
          <span className="absolute top-2 left-2 text-black">Date End</span>
        )}
      </div>
    </div>
  );
};

export default FilterByDate;
