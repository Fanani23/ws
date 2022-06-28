import React from "react";
import {MdOutlineScreenSearchDesktop} from "react-icons/md";
import Pagination from "./Pagination";

const CashierProductList = ({dataProduct, selectProduct}) => {
  return (
    <>
      <div
        className={
          dataProduct[0]
            ? "relative overflow-y-auto scrollbar-shown pt-1 mb-auto"
            : "hidden"
        }
      >
        <div className="flex flex-wrap grow overflow-y-auto relative">
          {dataProduct.map((val) => (
            <div
              className="basis-full md:basis-1/2 lg:basis-1/3 pb-2 lg:pb-10 pr-0 md:pr-2 lg:pr-10"
              key={val.id}
            >
              <button
                className="bg-white w-full h-full flex flex:row md:flex-col rounded-lg md:text-center items-center text-black p-5"
                onClick={() => selectProduct(val.id)}
              >
                <img
                  src={
                    val.image ? val.image : "https://via.placeholder.com/150"
                  }
                  alt="place holder"
                  className="rounded-full w-[150px] h-[150px]"
                />
                <div className="ml-5 md:ml-0">
                  <h1 className="font-regular">{val.name}</h1>
                  <h1 className="font-bold text-xl">Rp{val.price}</h1>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      {!dataProduct[0] && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <MdOutlineScreenSearchDesktop className="text-gray-100 text-8xl" />
          <p className="text-gray-100">No result</p>
        </div>
      )}
      {dataProduct[0] && (
        <div className="sticky flex justify-center bottom-0 min-h-[3rem] my-2 pt-1 bg-black z-[2]">
          <Pagination />
        </div>
      )}
    </>
  );
};

export default CashierProductList;
