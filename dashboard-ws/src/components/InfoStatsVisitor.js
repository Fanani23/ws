import React from "react";
import {MdTrendingUp, MdTrendingDown, MdOutlineShield} from "react-icons/md";

const InfoStatsVisitor = ({totalVisitor, growth}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-nunito-sans text-sm">Total Visitor</h1>
        <div className="bg-white p-2 rounded-lg">
          <MdOutlineShield className="text-[#D6AB14]" />
        </div>
      </div>
      <h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
        {totalVisitor}
      </h1>
      <div className="flex flex-row items-center">
        <MdTrendingUp className="text-[#48C134] mr-3" />
        {growth} From Yesterday
      </div>
    </>
  );
};

export default InfoStatsVisitor;
