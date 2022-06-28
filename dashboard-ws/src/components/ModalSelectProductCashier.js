import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import {MdClose} from "react-icons/md";

const ModalSelectProductCashier = ({show, close, dataProduct, submit}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={close}>
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
                    {/* <h1 className="line-through text-gray-400 mr-3">disc</h1> */}
                    <h1>{dataProduct?.price}</h1>
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
                  <div className="text-sm p-6 text-gray-500">
                    <div className="flex flex-row items-center">
                      <label
                        htmlFor="nama-stylist"
                        className="font-semibold w-28"
                      >
                        Nama Stylist
                      </label>
                      <input
                        type="text"
                        name="nama-stylist"
                        id="nama-stylist"
                        className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="font-semibold w-28">Discount Type</span>
                      <input
                        type="radio"
                        name="discount"
                        value="persen"
                        id="persen"
                      />
                      <label
                        htmlFor="persen"
                        className="mx-1 font-semibold px-3 py-2"
                      >
                        Persentage (%)
                      </label>
                      <input
                        type="radio"
                        name="discount"
                        value="nominal"
                        id="nominal"
                      />
                      <label
                        htmlFor="nominal"
                        className="mx-1 font-semibold px-3 py-2"
                      >
                        Nominal (Rp)
                      </label>
                    </div>
                    <div className="flex flex-row items-center">
                      <label
                        htmlFor="discount-amount"
                        className="font-semibold w-28"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        name="discount-amount"
                        id="discount-amount"
                        className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                      />
                    </div>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalSelectProductCashier;
