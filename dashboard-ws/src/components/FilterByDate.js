const FilterByDate = ({dateStart, setDateStart, dateEnd, setDateEnd}) => {
  return (
    <div className="flex flex-row mt-2 md:mt-0">
      <div className="relative">
        <input
          type="date"
          name="from"
          id="dateStart"
          value={dateStart}
          className="h-10 border border-gray-300 text-sm bg-white rounded-lg px-2 outline-none focus:ring-black focus:ring-2 text-black"
          onChange={(e) => setDateStart(e.target.value)}
        />
      </div>
      <span className="text-black mx-2 mt-2">to</span>
      <div className="relative">
        <input
          type="date"
          name="to"
          id="dateEnd"
          value={dateEnd}
          className="h-10 border border-gray-300 text-sm bg-white rounded-lg px-2 outline-none focus:ring-black focus:ring-2 text-black"
          onChange={(e) => setDateEnd(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterByDate;
