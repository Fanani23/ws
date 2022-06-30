import React from "react";

const CashierCategoryList = ({
  dataCategory,
  currentCategory,
  setCurrentCategory,
  handleChangeCategory,
}) => {
  return (
    <div className="flex w-full min-h-[3rem] bg-black sticky overflow-x-auto scrollbar-hide top-0 left-0 right-0 z-[3]">
      <div className="flex mr-2">
        <button
          className={`${
            currentCategory === "All"
              ? "bg-white text-black"
              : "bg-black text-white"
          } px-3 py-2 my-1 rounded-lg`}
          onClick={() => {
            setCurrentCategory("All");
            handleChangeCategory("All");
          }}
        >
          All
        </button>
        {dataCategory.map((val) => {
          return (
            <button
              className={`${
                currentCategory === val.name
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } px-3 py-2 my-1 rounded-lg min-w-fit`}
              key={val.id}
              onClick={() => {
                setCurrentCategory(val.name);
                handleChangeCategory(val.id);
              }}
            >
              {val.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CashierCategoryList;
