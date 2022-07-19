import {MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";

const CashierDataInput = ({
  activeCustomerData,
  dataCashier,
  deleteData,
  editData,
  prepareConfirmPayment,
  totalPrice,
}) => {
  const addDots = (nStr) => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "." + "$2");
    }
    return x1 + x2;
  };

  return (
    <div className="w-full h-full flex flex-col md:overflow-y-auto scrollbar-shown relative">
      <div className="p-2 flex flex-col flex-wrap grow">
        {dataCashier &&
          dataCashier.map((data, index) => (
            <>
              <div
                className="flex bg-gray-200 mb-2 rounded-lg overflow-hidden"
                key={index}
              >
                <span className="font-semibold mb-auto p-2 text-black">
                  {index + 1}
                </span>
                <div className="flex flex-col p-2">
                  <h1 className="font-semibold text-black">
                    {data.product_name}
                  </h1>
                  <h5 className="font-medium text-gray-500">
                    By {data.stylist_name}
                  </h5>
                </div>
                <div className="flex items-center ml-auto">
                  <h1 className="font-semibold mr-2 text-black">
                    Rp{data.product_price}
                  </h1>
                  <div className="flex flex-col h-full">
                    <button
                      className="bg-red-400 text-white px-3 py-1 flex-1"
                      onClick={() => deleteData(index)}
                    >
                      <MdDeleteOutline />
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 flex-1"
                      onClick={() => editData(index)}
                    >
                      <MdOutlineModeEditOutline />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        {!dataCashier[0] && <p className="text-gray-500">No data recorded</p>}
      </div>
      {dataCashier[0] && (
        <div className="sticky bottom-0 flex flex-col py-3 bg-white text-black">
          {/* <div className="px-3 flex justify-end">
            {activeCustomerData?.membership !== "vip" && (
              <button className="bg-black text-white px-3 py-2 rounded-lg mr-1">
                Discount
              </button>
            )}
            <button className="bg-black text-white px-3 py-2 rounded-lg ml-1">
              Coupon
            </button>
          </div> */}
          <div className="px-3 mt-3 flex justify-between">
            <h1>Total</h1>
            <h2>Rp {addDots(totalPrice)}</h2>
          </div>
          <div className="px-3">
            <button
              className="bg-green-500 w-full py-2 rounded-lg"
              onClick={prepareConfirmPayment}
            >
              Process
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CashierDataInput;
