import React from "react";
import {MdTrendingUp, MdOutlineShoppingCart} from "react-icons/md";

const InfoStatsTransaction = ({totalTransaction, growth}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-nunito-sans text-sm">
          Total Transaction
        </h1>
        <div className="bg-white p-2 rounded-lg">
          <MdOutlineShoppingCart className="text-[#C14040]" />
        </div>
      </div>
      <h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
        {totalTransaction}
      </h1>
      <div className="flex flex-row items-center">
        <MdTrendingUp className="text-[#48C134] mr-3" />
        {growth} from Yesterday
      </div>
    </>
  );
};

export default InfoStatsTransaction;
