import {Dialog, Transition} from "@headlessui/react";
import {MdClose} from "react-icons/md";
import React, {Fragment} from "react";

const ModalHistoryCustomer = ({
    show,
    close,
    historyCustomer
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
                    <div className="fixed inset-0 bg-black bg-opacity-50"/>
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
                                    <h3>Detail History</h3>
                                    <div
                                        onClick={close}
                                        className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
                                        role="button"
                                    >
                                        <MdClose className="relative"/>
                                    </div>
                                </Dialog.Title>
                                <table className="ml-5 mr-2 mt-2 font-nunito-sans text-xs w-full overflow-y-scroll relative">
                                    <thead className="sticky top-0">
                                        <tr className="bg-[#F9F9FC] text-black text-left">
                                            <th className="py-2">Method</th>
                                            <th className="py-2">Status</th>
                                            <th className="py-2">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {historyCustomer?.map((data) => (
                                        <tr key={data.id} className="even:bg-[#F9F9FC] text-black">
                                            <td className="py-2">{data.method}</td>
                                            <td className="py-2">{data.status}</td>
                                            <td className="py-2">{data.subtotal}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ModalHistoryCustomer;