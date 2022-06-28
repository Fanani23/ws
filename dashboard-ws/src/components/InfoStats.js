import {MdOutlinePaid, MdTrendingDown, MdTrendingUp} from "react-icons/md";

const InfoStats = ({totalProfit, growth, type}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-nunito-sans text-sm">Total Profit</h1>
        <div className="bg-white p-2 rounded-lg">
          <MdOutlinePaid className="text-[#48C134]" />
        </div>
      </div>
      <h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
        {totalProfit}
      </h1>
      <div className="flex flex-row items-center">
        {type === "up" ? (
          <>
            <MdTrendingUp className="text-[#48C134] mr-3" />
          </>
        ) : (
          <>
            <MdTrendingDown className="text-[#C14040] mr-3" />
          </>
        )}
        {growth} From Yesterday
      </div>
    </>
  );
};

export default InfoStats;
