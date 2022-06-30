import {MdAdd} from "react-icons/md";
import TabTitle from "../utils/GeneralFunction";
import TableCustomers from "../components/TableCustomers";
import Search from "../components/Search";
import axios from "axios";
import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import ModalCreateCustomer from "../components/ModalCreateCustomer";
import ModalEditCustomer from "../components/ModalEditCustomer";
import ModalDeleteCustomer from "../components/ModalDeleteCustomer";

const Customers = () => {
<<<<<<< HEAD
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
=======
  TabTitle("Customers - Kato Haircut");
  // modal
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const closeAddCustomerModal = () => setOpenAddCustomer(false);
  const openAddCustomerModal = () => setOpenAddCustomer(true);
  const [openEditCustomer, setOpenEditCustomer] = useState(false);
  const closeEditCustomerModal = () => setOpenEditCustomer(false);
  const [openDeleteCustomer, setOpenDeleteCustomer] = useState(false);
  const closeDeleteCustomerModal = () => setOpenDeleteCustomer(false);
  // table and pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // search
  const [searchValue, setSearchValue] = useState();
  // handle create
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [membership, setMembership] = useState("");
  // handle edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [birthdayEdit, setBirthdayEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [membershipEdit, setMembershipEdit] = useState("");
  // handle delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setTableData(pageData.data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setTableCount(AllData.data.meta.total);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getItemsPerPage = async (page = currentTablePage, search = "") => {
    try {
      const CountPerPage = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setItemsPerPage(CountPerPage.data.meta.per_page);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  useEffect(() => {
    fetchData();
    getTotalCount();
    getItemsPerPage();
  }, []);

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  const showSearchedTablePage = (searchValue) => {
    setSearchValue(searchValue);
    setCurrentTablePage(1);
    fetchData(currentTablePage, searchValue);
    getTotalCount(currentTablePage, searchValue);
    getItemsPerPage(currentTablePage, searchValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({name: name,
      phone: phone,
      birthday: birthday,
      membership: membership})
    try {
      await axios.post("https://api.kattohair.com/api/customers/create", {
        birthday: birthday,  
        phone: phone,
        name: name,
        membership: membership
      });
      fetchData();
      getTotalCount();
      getItemsPerPage();
    } catch (err) {
      console.log(err);
    }
  };

  const prepareEdit = (value) => {
    setIdEdit(value);
    getEditData(value);
    setOpenEditCustomer(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers/${value}}`
      );
      setCodeEdit(data.data.code);
      setBirthdayEdit(data.data.birthday);
      setPhoneEdit(data.data.phone);
      setNameEdit(data.data.name);
      setMembershipEdit(data.data.membership);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    // console.log({code: codeEdit, name: nameEdit,
    //   phone: phoneEdit,
    //   birthday: birthdayEdit,
    //   membership: membershipEdit})
    try {
      await axios.put(
        `https://api.kattohair.com/api/customers/update/${idEdit}`,
        {
          code: codeEdit,
          name: nameEdit,
          phone: phoneEdit,
          birthday: birthdayEdit,
          membership: membershipEdit
        }
      );
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeleteCustomer(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers/${id}}`
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/customers/delete/${idDelete}`
      );
      fetchData();
      getTotalCount();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateCustomer
        show={openAddCustomer}
        close={closeAddCustomerModal}
        birthdayValue={birthday}
        setBirthdayValue={setBirthday}
        nameValue={name}
        setNameValue={setName}
        membershipValue={membership}
        setMembershipValue={setMembership}
        phoneValue={phone}
        setPhoneValue={setPhone}
        submit={handleSubmit}
      />
      <ModalEditCustomer
        show={openEditCustomer}
        close={closeEditCustomerModal}
        birthdayEditValue={birthdayEdit}
        setBirthdayEditValue={setBirthdayEdit}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        membershipEditValue={membershipEdit}
        setMembershipEditValue={setMembershipEdit}
        phoneEditValue={phoneEdit}
        setPhoneEditValue={setPhoneEdit}
        submit={handleEdit}
      />
      <ModalDeleteCustomer
        show={openDeleteCustomer}
        close={closeDeleteCustomerModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by customers name..."}
            searchValue={searchValue}
            setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
            onClick={openAddCustomerModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Member</span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableCustomers
              tableData={tableData}
              editRow={prepareEdit}
              deleteRow={prepareDelete}
            />
            <Pagination
              maxPage={Math.ceil(tableCount / itemsPerPage)}
              currentPage={currentTablePage}
              showTablePage={showTablePage}
            />
          </>
        ) : (
          <p className="w-full text-black">No result</p>
        )}
      </div>
    </div>
  );
>>>>>>> fe-dev
};

export default Customers;
