import React from "react";
import {
  MdAdd,
  MdDeleteOutline,
  MdOutlineModeEditOutline,
  MdReplay,
} from "react-icons/md";
import {Link} from "react-router-dom";

const CashierRightPanel = ({showModalCustomer, cashierId, dataCashier}) => {
  return (
    <div className="bg-white flex flex-col rounded-tl-lg rounded-tr-lg md:rounded-tr-none h-full">
      <div className="flex flex-row justify-between p-2">
        <button
          className="bg-black text-white px-3 py-2 rounded-lg flex items-center"
          onClick={showModalCustomer}
        >
          <MdAdd className="mr-3" /> Add Customer
        </button>
        <button className="bg-black text-white px-3 py-2 rounded-lg">
          <MdReplay />
        </button>
      </div>
      <div className="p-2 overflow-y-scroll scrollbar-shown">
        {dataCashier.map((data, index, {length}) => {
          return length - 1 === index ? (
            ""
          ) : (
            <>
              <div className="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
                <span className="font-semibold mb-auto p-2 text-black">
                  {index + 1}
                </span>
                <div className="flex flex-col p-2">
                  <h1 className="font-semibold text-black">{data.label}</h1>
                  <h5 className="font-medium text-gray-500">
                    By {data.customer}
                  </h5>
                </div>
                <div className="flex items-center ml-auto">
                  <h1 className="font-semibold mr-2 text-black">
                    Rp {data.total}
                  </h1>
                  <div className="flex flex-col h-full">
                    <button className="bg-red-400 text-white px-3 py-1 flex-1">
                      <MdDeleteOutline />
                    </button>
                    <button className="bg-yellow-500 text-white px-3 py-1 flex-1">
                      <MdOutlineModeEditOutline />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex flex-col mt-auto">
        <div className="flex justify-end p-2">
          <button className="bg-black text-white px-3 py-2 rounded-lg mr-2">
            Discount
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-lg">
            Coupon Code
          </button>
        </div>
        <div className="bg-gray-200 p-2">
          <div className="flex space-x-3">
            <div className="flex flex-col flex-1 text-black"></div>
            <div className="flex items-center">
              <button className="flex items-center justify-center p-0 m-0 bg-slate-400 text-white rounded-full h-6 w-6">
                x
              </button>
            </div>
          </div>
          <div className="flex">
            <Link to="1" className="flex-1">
              <button className="py-2 w-full rounded-lg ml-1 bg-green-400">
                Process
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierRightPanel;
