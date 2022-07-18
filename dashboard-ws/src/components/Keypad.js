import React from "react";

const Keypad = ({paidValue, setPaidValue}) => {
  const handleComma = () => {};
  const handleNum = (val) => {};
  const handleClear = () => {};
  return (
    <div className="flex flex-col mt-5">
      <div className="relative">
        <input
          type="number"
          name="payment"
          id="payment"
          className="bg-transparent text-right border-2 border-gray w-full text-black text-lg font-bold rounded-lg px-3 py-2"
          value={paidValue}
          onChange={(e) => setPaidValue(e.target.value)}
        />
        <span className="absolute top-0 left-0 text-black pl-3 py-3 select-none font-semibold">
          Rp
        </span>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              1
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              2
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              3
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              4
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              5
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              6
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              7
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              8
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              9
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              00
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              0
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              C
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              .
            </button>
          </div>
          <div className="basis-2/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button className="w-full py-2 text-black text-center bg-gray-200 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
