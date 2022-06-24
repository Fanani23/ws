import {Dialog, Transition} from "@headlessui/react";
import {MdClose} from "react-icons/md";
import React, {Fragment} from "react";

const ModalEditProduct = ({
  show,
  close,
  submit,
  dataCategory,
  categoryValue,
  setCategoryValue,
  nameValue,
  setNameValue,
  priceValue,
  setPriceValue,
  feeCategoryValue,
  setFeeCategoryValue,
  feeValue,
  setFeeValue,
  imageValue,
  setImageValue,
}) => {
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
                  className="text-lg text-center font-medium leading-6 text-gray-900 p-8 pb-1"
                >
                  <h3>Add Data Product</h3>
                  <div
                    onClick={close}
                    className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
                    role="button"
                  >
                    <MdClose className="relative" />
                  </div>
                </Dialog.Title>
                <form autoComplete="off" noValidate onSubmit={submit}>
                  <div className="mt-2 border-t-2">
                    <div className="text-sm p-6 text-gray-500">
                      {/* <div className="flex flex-row items-center mb-2">
                        <label htmlFor="code" className="font-semibold w-28">
                          ID Product
                        </label>
                        <input
                          type="text"
                          name="code"
                          id="code"
                          className="border-2 ml-5 grow border-gray-200 rounded-lg px-3 py-2"
                          value={codeValue}
                          onChange={(e) => setCodeValue(e.target.value)}
                        />
                      </div> */}
                      <div className="flex flex-row items-center mb-2">
                        <label
                          htmlFor="category"
                          className="font-semibold w-28"
                        >
                          Category Product
                        </label>
                        <select
                          className="bg-transparent border-2 ml-5 grow border-gray-200 rounded-lg px-3 py-2"
                          value={categoryValue}
                          onChange={(e) => setCategoryValue(e.target.value)}
                        >
                          {dataCategory &&
                            dataCategory.map((val) => (
                              <option
                                value={val.name}
                                key={val.id}
                                className="text-black"
                              >
                                {val.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <label htmlFor="name" className="font-semibold w-28">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="border-2 ml-5 grow border-gray-200 rounded-lg px-3 py-2"
                          value={nameValue}
                          onChange={(e) => setNameValue(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-row w-full mb-2">
                        <div className="basis-1/3 pr-1">
                          <label htmlFor="price" className="font-semibold">
                            Price
                            <span className="text-gray-400">(Rp)</span>
                          </label>
                          <div className="relative">
                            <span className="text-gray-200 absolute top-2.5 left-2.5 bottom-0">
                              Rp
                            </span>
                            <input
                              type="number"
                              name="price"
                              id="price"
                              className="border-2 w-full text-right border-gray-200 rounded-lg pl-7 pr-3 py-2"
                              value={priceValue}
                              onChange={(e) => setPriceValue(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="basis-1/3 px-1">
                          <label
                            htmlFor="commission_type"
                            className="font-semibold"
                          >
                            Commission Type
                          </label>
                          <select
                            className="bg-transparent border-2 grow w-full border-gray-200 rounded-lg px-3 py-2"
                            value={feeCategoryValue}
                            onChange={(e) =>
                              setFeeCategoryValue(e.target.value)
                            }
                          >
                            <option value="nominal" className="text-black">
                              Nominal
                            </option>
                            <option value="percent" className="text-black">
                              Percent
                            </option>
                          </select>
                        </div>
                        <div className="basis-1/3 pl-1">
                          <label
                            htmlFor="commission_value"
                            className="font-semibold"
                          >
                            Fee Commission
                          </label>
                          <input
                            type="number"
                            name="commission_value"
                            id="commission_value"
                            className="border-2 w-full text-right border-gray-200 rounded-lg px-3 py-2"
                            value={feeValue}
                            onChange={(e) => setFeeValue(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row w-full">
                        <div className="basis-1/3 pr-1">
                          <label htmlFor="image" className="font-semibold">
                            Image
                          </label>
                        </div>
                        <div className="basis-1/3 px-1">
                          <div className="rounded-lg border-dashed border-2 min-h-[100px] border-gray-200 p-5 mb-3"></div>
                          <button className="px-5 py-2 w-full text-sm rounded-lg border-none bg-green-500 text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2">
                            Upload
                          </button>
                        </div>
                        <div className="basis-1/3 pl-1"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-6 pb-6 flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm w-full font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={close}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalEditProduct;
