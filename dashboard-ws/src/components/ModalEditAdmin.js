import {Dialog, Transition} from "@headlessui/react";
import {MdClose} from "react-icons/md";
import React, {Fragment} from "react";

const ModalEditAdmin = ({
    show,
    close,
    submit,
    phoneEditValue,
    setPhoneEditValue,
    usernameEditValue,
    setUsernameEditValue,
    passwordEditValue,
    setPasswordEditValue,
    passwordConfirmationEditValue,
    setPasswordConfirmationEditValue
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
                                    className="text-lg text-center font-medium leading-6 text-gray-900 p-8 pb-6"
                                >
                                    <h3>Edit Data Admin</h3>
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
                                        <div className="text-sm pt-6 pl-6 pr-6 text-gray-500">
                                            <div className="flex flex-row items-center mb-6">
                                                <label
                                                    htmlFor="phone"
                                                    className="font-semibold w-28"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                                                    defaultValue={phoneEditValue}
                                                    onChange={(e) => setPhoneEditValue(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-row items-center mb-6">
                                                <label htmlFor="name" className="font-semibold w-28">
                                                    Admin Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                                                    defaultValue={usernameEditValue}
                                                    onChange={(e) => setUsernameEditValue(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-row items-center mb-6">
                                                <label htmlFor="name" className="font-semibold w-28">
                                                    Password
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                                                    defaultValue={passwordEditValue}
                                                    onChange={(e) => setPasswordEditValue(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-row items-center mb-6">
                                                <label htmlFor="password_confirmation" className="font-semibold w-28">
                                                    Password Confirmation
                                                </label>
                                                <input
                                                    type="text"
                                                    name="password_confirmation"
                                                    id="password_confirmation"
                                                    className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
                                                    defaultValue={passwordConfirmationEditValue}
                                                    onChange={(e) => setPasswordConfirmationEditValue(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 pt-0 pb-9  flex justify-center">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
                                            onClick={close}
                                        >
                                            Update
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

  export default ModalEditAdmin;