import {Dialog, Transition, Combobox} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import {MdClose} from "react-icons/md";

const ModalSelectProductCashier = ({
  show,
  close,
  dataProduct,
  dataEmployee,
  stylistValue,
  discountType,
  setStlylistValue,
  setDiscountType,
  setDiscountValue,
  submit,
}) => {
  // const [query, setQuery] = useState("");

  const handleDiscountType = (event) => {
    setDiscountType(event.target.value);
  };
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex justify-between text-lg font-medium leading-6 text-gray-900 p-8 pb-1"
                >
                  <h3>{dataProduct?.name}</h3>
                  <div className="flex">
                    <h1>Rp{dataProduct?.price}</h1>
                  </div>
                  <div
                    onClick={close}
                    className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
                    role="button"
                  >
                    <MdClose className="relative" />
                  </div>
                </Dialog.Title>
                <div className="mt-2 border-t-2">
                  <form onSubmit={submit}>
                    <div className="text-sm p-6 text-gray-500">
                      <div className="flex flex-row items-center mb-5">
                        <label
                          htmlFor="stylist-name"
                          className="font-semibold w-28"
                        >
                          Nama Stylist
                        </label>
                        <select
                          className="bg-transparent border-2 grow border-gray-200 rounded-lg px-3 py-2"
                          value={stylistValue}
                          id="stylist-name"
                          defaultValue=""
                          onChange={(e) => setStlylistValue(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Employee...
                          </option>
                          {dataEmployee &&
                            dataEmployee?.map((val) => (
                              <option
                                value={val.id}
                                key={val.id}
                                className="text-black"
                              >
                                {val.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="flex flex-row items-center mb-5">
                        <span className="font-semibold w-28">
                          Discount Type
                        </span>
                        <div>
                          <input
                            type="radio"
                            name="service_discount_type"
                            value="none"
                            id="noDiscount"
                            checked={discountType === "none"}
                            onChange={handleDiscountType}
                          />
                          <label
                            htmlFor="noDiscount"
                            className="font-semibold pl-1 pr-4 py-2 text-xs"
                          >
                            None
                          </label>
                          <input
                            type="radio"
                            name="service_discount_type"
                            value="percent"
                            id="persen"
                            checked={discountType === "percent"}
                            onChange={handleDiscountType}
                          />
                          <label
                            htmlFor="persen"
                            className="font-semibold pl-1 pr-4 py-2 text-xs"
                          >
                            Persentage (%)
                          </label>
                          <input
                            type="radio"
                            name="service_discount_type"
                            value="nominal"
                            id="nominal"
                            checked={discountType === "nominal"}
                            onChange={handleDiscountType}
                          />
                          <label
                            htmlFor="nominal"
                            className="font-semibold pl-1 pr-4 py-2 text-xs"
                          >
                            Nominal (Rp)
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-row items-center mb-5">
                        <label
                          htmlFor="discount-amount"
                          className="font-semibold w-28"
                        >
                          Discount Value
                        </label>
                        <input
                          type="number"
                          name="service_discount_amount"
                          id="discount-amount"
                          disabled={discountType === "none"}
                          className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                          onChange={(e) => setDiscountValue(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-4 px-6 pb-6 flex justify-center">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
                        onClick={close}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={close}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalSelectProductCashier;
