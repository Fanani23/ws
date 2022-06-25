import React from "react";

const ReportOrderDetail = ({detailOrder, print}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
      <div className="px-5 py-3 flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-lg">
            {detailOrder.customer_name}
          </h1>
          <p className="text-gray-500 text-md">{detailOrder.datetime}</p>
          <h5 className="text-black font-bold mt-5">
            Order ID #{detailOrder.code}
          </h5>
        </div>
        <h1 className="text-green-500 font-bold text-xl">
          {detailOrder.status.toUpperCase()}
        </h1>
      </div>
      <div className="px-5 flex flex-col grow overflow-y-auto scrollbar-shown">
        {detailOrder.transactionItems.map((row, index) => (
          <div
            className="flex flex-row bg-gray-100 rounded-lg mb-2"
            key={row.id}
          >
            <h1 className="font-bold text-black p-5">{index + 1}</h1>
            <div className="flex flex-col grow py-5 pr-5 pl-0">
              <h1 className="text-black font-bold">{row.product_name}</h1>
              <h5 className="text-gray-500">{row.employee_name}</h5>
            </div>
            <div className="flex p-5 justify-center items-center">
              <h1 className="text-black font-bold">Rp{row.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col bg-gray-200 text-black">
        <div className="px-5 pt-5 flex justify-between">
          <h1>Sub Total</h1>
          <h1>{detailOrder.subtotal}</h1>
        </div>
        <div className="px-5 flex justify-between">
          <h1>Discount</h1>
          <h1>{detailOrder.discount_total}</h1>
        </div>
        <div className="px-5 mt-5 flex justify-between">
          <h1>Total Payment</h1>
          <h1>{detailOrder.grand_total}</h1>
        </div>
        <div className="p-5">
          <button
            className="text-white font-bold w-full py-3 bg-green-500 rounded-lg"
            onClick={() => print(detailOrder.id)}
          >
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportOrderDetail;
