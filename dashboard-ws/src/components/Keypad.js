import React from "react";

const Keypad = ({paidValue, setPaidValue}) => {
  const handleNum = (val) => {
    let old = paidValue;
    setPaidValue((old += val));
  };
  const handleClear = () => {
    setPaidValue("");
  };
  const handleBackDelete = () => {
    let old = paidValue;
    setPaidValue(old.slice(0, -1));
  };

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
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={1}
              onClick={(e) => handleNum(e.target.value)}
            >
              1
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={2}
              onClick={(e) => handleNum(e.target.value)}
            >
              2
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={3}
              onClick={(e) => handleNum(e.target.value)}
            >
              3
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={4}
              onClick={(e) => handleNum(e.target.value)}
            >
              4
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={5}
              onClick={(e) => handleNum(e.target.value)}
            >
              5
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={6}
              onClick={(e) => handleNum(e.target.value)}
            >
              6
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={7}
              onClick={(e) => handleNum(e.target.value)}
            >
              7
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={8}
              onClick={(e) => handleNum(e.target.value)}
            >
              8
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={9}
              onClick={(e) => handleNum(e.target.value)}
            >
              9
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={"00"}
              onClick={(e) => handleNum(e.target.value)}
            >
              00
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={0}
              onClick={(e) => handleNum(e.target.value)}
            >
              0
            </button>
          </div>
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              onClick={handleClear}
            >
              C
            </button>
          </div>
        </div>
        <div className="flex flex-row last:mb-0 mb-2">
          <div className="basis-1/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              value={"000"}
              onClick={(e) => handleNum(e.target.value)}
            >
              000
            </button>
          </div>
          <div className="basis-2/3 first:ml-0 last:mr-0 ml-1 mr-1">
            <button
              className="w-full py-2 text-black text-center bg-gray-200 rounded-lg"
              onClick={handleBackDelete}
            >
              {`<x`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
