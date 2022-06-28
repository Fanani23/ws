import {Dialog, Transition} from "@headlessui/react";
import {MdClose} from "react-icons/md";
import React, {Fragment} from "react";

const ModalCreateEmployee = ({
  show,
  close,
  submit,
  nameValue,
  setNameValue,
  phoneValue,
  setPhoneValue,
  dataJob,
  jobValue,
  setJobValue,
}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
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
                  <h3>Add Data Employee</h3>
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
                      <div className="flex flex-row items-center mb-2">
                        <label htmlFor="name" className="font-semibold w-28">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="border-2 grow ml-5 border-gray-200 rounded-lg px-3 py-2"
                          value={nameValue}
                          onChange={(e) => setNameValue(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <label htmlFor="phone" className="font-semibold w-28">
                          Telephone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="border-2 grow ml-5 border-gray-200 rounded-lg px-3 py-2"
                          value={phoneValue}
                          onChange={(e) => setPhoneValue(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <label htmlFor="job" className="font-semibold w-28">
                          Job
                        </label>
                        <select
                          className="bg-transparent border-2 ml-5 grow border-gray-200 rounded-lg px-3 py-2"
                          value={jobValue}
                          onChange={(e) => setJobValue(e.target.value)}
                        >
                          <option disabled selected>
                            Select Category
                          </option>
                          {dataJob &&
                            dataJob.map((val) => (
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalCreateEmployee;
