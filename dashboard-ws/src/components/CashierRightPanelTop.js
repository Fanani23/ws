import React from "react";
import {MdAdd, MdClose, MdReplay} from "react-icons/md";

const CashierRightPanelTop = ({
  clear,
  clearCustomer,
  addCustomer,
  activeCustomerData,
}) => {
  const capitalizeEachWord = (sentence) => {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };
  return (
    <div className="flex flex-row justify-between p-2 sticky top-0 z-10 bg-white rounded-tl-lg">
      {!activeCustomerData && (
        <button
          className="bg-black text-white px-3 py-2 rounded-lg flex items-center"
          onClick={addCustomer}
        >
          <MdAdd className="mr-3" /> Add Customer
        </button>
      )}
      {activeCustomerData && (
        <div className="flex flex-col text-black">
          <h1>{activeCustomerData.name}</h1>
          <h1>{`${
            activeCustomerData.membership === "vip"
              ? activeCustomerData.membership.toUpperCase()
              : capitalizeEachWord(activeCustomerData.membership)
          }`}</h1>
        </div>
      )}
      <div>
        {activeCustomerData && (
          <button
            className="bg-black text-white px-3 py-2 mr-1 rounded-lg"
            onClick={clearCustomer}
          >
            <MdClose />
          </button>
        )}
        <button
          className="bg-black text-white px-3 py-2 ml-1 rounded-lg"
          onClick={clear}
        >
          <MdReplay />
        </button>
      </div>
    </div>
  );
};

export default CashierRightPanelTop;
