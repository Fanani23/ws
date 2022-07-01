import axios from "axios";
import React from "react";
import {MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";

const CashierDataInput = ({dataCashier}) => {
  const getDetailProduct = async (val) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/${val}`
      );
      return data.data.name;
    } catch (err) {
      console.log(err);
    }
  };

  const getEmployee = async (val) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/${val}`
      );
      return data.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2 overflow-y-scroll scrollbar-shown">
      {dataCashier &&
        dataCashier.map((data, index, {length}) => (
          <>
            <div className="flex bg-gray-200 mb-2 rounded-lg overflow-hidden">
              <span className="font-semibold mb-auto p-2 text-black">
                {index + 1}
              </span>
              <div className="flex flex-col p-2">
                <h1 className="font-semibold text-black">
                  {data.product_name}
                </h1>
                <h5 className="font-medium text-gray-500">
                  By {data.stylist_id}
                </h5>
              </div>
              <div className="flex items-center ml-auto">
                <h1 className="font-semibold mr-2 text-black">
                  Rp{data.price}
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
        ))}
    </div>
  );
};

export default CashierDataInput;
