import React from "react";

const CashierProductList = ({dataProduct, selectProduct}) => {
  return (
    <div className="relative flex overflow-y-auto pt-1">
      <div className="flex flex-wrap overflow-y-auto scrollbar-shown">
        {dataProduct.map((val) => {
          return (
            <div className="basis-full md:basis-1/2 lg:basis-1/5 xl:basis-1/6 pb-2 pr-0 md:pr-2">
              <div
                className="bg-white w-full h-full flex flex:row md:flex-col rounded-lg md:text-center items-center text-black p-5"
                role="button"
                onClick={selectProduct}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="place holder"
                  className="rounded-full w-fit"
                />
                <div className="ml-5 md:ml-0">
                  <h1 className="font-regular">{val.name}</h1>
                  <h1 className="font-bold text-xl">Rp{val.price}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CashierProductList;
