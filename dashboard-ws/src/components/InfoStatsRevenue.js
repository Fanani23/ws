import React from "react";
import {MdTrendingUp, MdTrendingDown, MdOutlinePaid} from "react-icons/md";

const InfoStatsRevenue = ({totalRevenue, growth, type}) => {
  const addDots = (nStr) => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "." + "$2");
    }
    return x1 + x2;
  };

  const proses = (val) => {
    if (val.length > 4) {
      let x = val.replace("%", "");
      let y = addDots(x);
      return y;
    } else {
      return val;
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white font-nunito-sans text-sm">Total Revenue</h1>
        <div className="bg-white p-2 rounded-lg">
          <MdOutlinePaid className="text-[#48C134]" />
        </div>
      </div>
      <h1 className="font-nunito-sans text-white font-bold text-2xl my-4">
        Rp{totalRevenue}
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
        {proses(growth)} From Yesterday
      </div>
    </>
  );
};

export default InfoStatsRevenue;
