import React from "react";
import {MdAdd, MdReplay} from "react-icons/md";

const CashierRightPanelTop = ({clear, addCustomer}) => {
  return (
    <div className="flex flex-row justify-between p-2">
      <button
        className="bg-black text-white px-3 py-2 rounded-lg flex items-center"
        onClick={addCustomer}
      >
        <MdAdd className="mr-3" /> Add Customer
      </button>
      <button
        className="bg-black text-white px-3 py-2 rounded-lg"
        onClick={clear}
      >
        <MdReplay />
      </button>
    </div>
  );
};

export default CashierRightPanelTop;
