import {Dialog, Transition} from "@headlessui/react";
import {MdClose} from "react-icons/md";
import React, {Fragment} from "react";

const ModalCreatePresensi = ({
    show,
    close,
    submit,
    codeValue,
    setCodeValue,
    nameValue,
    setShiftValue,
    setStatusValue
  }) => {
    const handleRadioSelect = (e) => {
        setShiftValue(e.target.value);
        setStatusValue(e.target.value);
    }
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
                                    <h3>Add Presensi</h3>
                                    <div
                                        onClick={close}
                                        className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
                                        role="button"
                                    >
                                        <MdClose className="relative" />
                                    </div>
                                </Dialog.Title>
                                <form autoComplete="off" noValidate onSubmit={submit}>
                                    <div className="mt-4 border-t-2">
                                        <div className="text-sm p-8 text-gray-500">
                                            <div className="flex flex-row items-center mb-2">
                                                <label htmlFor="code" className="font-semibold w-28">
                                                    Employee ID
                                                </label>
                                                <input
                                                    type="text"
                                                    name="code"
                                                    id="code"
                                                    className="border-2 grow ml-3 border-gray-200 rounded-lg px-3 py-2"
                                                    value={codeValue}
                                                    onChange={(e) => setCodeValue(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-row items-center mb-2">
                                                <label
                                                    htmlFor="shift"
                                                    className="font-semibold w-28"
                                                >
                                                    Shift
                                                </label>
                                                <div onChange={handleRadioSelect}>
                                                    <input
                                                        type="radio"
                                                        name="shift"
                                                        value="pagi"
                                                        id="shift"
                                                        className="mr-2"
                                                    />
                                                    <span>Pagi</span>
                                                    <input
                                                        type="radio"
                                                        name="shift"
                                                        value="middle"
                                                        id="shift"
                                                        className="ml-5 mr-2"
                                                    />
                                                    <span>Middle</span>
                                                    <input
                                                        type="radio"
                                                        name="shift"
                                                        value="malam"
                                                        id="shift"
                                                        className="ml-5 mr-2"
                                                    />
                                                    <span>Malam</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center mb-2">
                                                <label
                                                    htmlFor="status"
                                                    className="font-semibold w-28"
                                                >
                                                    Status
                                                </label>
                                                <div onChange={handleRadioSelect}>
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="datang"
                                                        id="status"
                                                        className="mr-2"
                                                    />
                                                    <span>Datang</span>
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="Pulang"
                                                        id="status"
                                                        className="ml-5 mr-2"
                                                    />
                                                    <span>Pulang</span>
                                                </div>
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

  export default ModalCreatePresensi;