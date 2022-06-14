import {
	MdSearch,
	MdAdd,
	MdModeEditOutline,
	MdDeleteOutline,
	MdClose,
} from "react-icons/md";
import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";
import TabTitle from "../utils/GeneralFunction";
import TableCustomers from "../components/TableCustomers";

const Customers = () => {
	TabTitle("Customers - Kato Haircut");
	const [openAddCategory, setOpenAddCategory] = useState(false);

	const closeAddCategoryModal = () => {
		setOpenAddCategory(false);
	};

	const openAddCategoryModal = () => {
		setOpenAddCategory(true);
	};

	return (
		<div className="w-full flex flex-col grow overflow-ayto scrollbar-shown">
			<Transition appear show={openAddCategory} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeAddCategoryModal}
				>
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
										<h3>Add Data Customers</h3>
										<div
											onClick={closeAddCategoryModal}
											className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
											role="button"
										>
											<MdClose className="relative" />
										</div>
									</Dialog.Title>
									<form autoComplete="off" noValidate>
										<div className="mt-2 border-t-2">
											<div className="text-sm p-6 text-gray-500">
												<div className="flex flex-row items-center mb-2">
													<label
														htmlFor="phone"
														className="font-semibold w-28"
													>
														ID Customers
													</label>
													<input
														type="text"
														name="phone"
														id="phone"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
												<div className="flex flex-row items-center">
													<label
														htmlFor="birthday"
														className="font-semibold w-28"
													>
														Birthday
													</label>
													<input
														type="text"
														name="birthday"
														id="birthday"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
												<div className="flex flex-row items-center mb-2">
													<label
														htmlFor="name"
														className="font-semibold w-28"
													>
														Name
													</label>
													<input
														type="text"
														name="name"
														id="name"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
												<div className="flex flex-row items-center mb-2">
													<label
														htmlFor="membership"
														className="font-semibold w-28"
													>
														Membership
													</label>
													<input
														type="text"
														name="membership"
														id="membership"
														className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
													/>
												</div>
											</div>
										</div>

										<div className="mt-4 px-6 pb-6 flex justify-center">
											<button
												type="submit"
												className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mr-4"
											>
												Save
											</button>
											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
												onClick={closeAddCategoryModal}
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
			<div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
				<div className="flex justify-between">
					<div className="flex grow text-gray-600">
						<MdSearch className="absolute top-3 left-0 text-white" />
						<input
							className="border-b-2 border-gray-300 bg-transparent w-full md:w-1/2 lg:w-1/3 text-black h-10 pl-5 text-sm focus:outline-none"
							type="search"
							name="search"
							id="search"
							placeholder="Search"
						/>
						<button
							type="submit"
							className="ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
						>
							<MdSearch className="text-white" />
						</button>
					</div>
					<button
						type="submit"
						className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
						onClick={openAddCategoryModal}
					>
						<MdAdd className="text-white mr-2" />
						<span>Add Member</span>
					</button>
				</div>
				<TableCustomers />
			</div>
		</div>
	);
};

export default Customers;
