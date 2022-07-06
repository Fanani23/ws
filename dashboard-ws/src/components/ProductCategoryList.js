import React from "react";

const ProductCategoryList = ({
  dataCategory,
  currentCategory,
  setCurrentCategory,
  handleChangeCategory,
}) => {
  return (
    <div className="flex w-full min-h-[3rem] bg-white sticky overflow-x-auto scrollbar-hide top-0 left-0 right-0 z-[3]">
      <div className="flex mr-2">
        <button
          className={`${
            currentCategory === "All"
              ? "bg-black text-white"
              : "bg-white text-black"
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
                ? "bg-black text-white"
                : "bg-white text-black"
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

export default ProductCategoryList;
