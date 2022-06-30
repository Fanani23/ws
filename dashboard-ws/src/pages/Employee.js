import {MdAdd} from "react-icons/md";
import React, {useEffect, useState} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableEmployee from "../components/TableEmployee";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import axios from "axios";
import {Link} from "react-router-dom";
import ModalCreateEmployee from "../components/ModalCreateEmployee";
import ModalEditEmployee from "../components/ModalEditEmployee";
import ModalDeleteEmployee from "../components/ModalDeleteEmployee";

const Employee = () => {
<<<<<<< HEAD
	TabTitle("Category - Kato Haircut");
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
						<div className="fixed insert-0 bg-black bg-opacity-50"></div>
					</Transition.Child>
					<div className="fixed insert-0 overflow-y-auto">
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
											onClick={closeAddCategoryModal}
											className="rounded-full p-0.5 top-2 right-2 bg-gray-200 absolute"
											role="button"
										>
											<MdClose className="relative" />
										</div>
									</Dialog.Title>
									<div className="mt-2 border-t-2">
										<div className="text-sm p-6 text-gray-500">
											<div className="flex flex-row items-center mb-2">
												<label
													htmlFor="code"
													className="font-semibold w-28"
												>
													Employee ID
												</label>
												<input
													type="number"
													name="code"
													id="code"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center">
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
											<div className="flex flex-row items-center">
												<label
													htmlFor="phone"
													className="font-semibold w-28"
												>
													Telephone
												</label>
												<input
													type="number"
													name="phone"
													id="phone"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
											<div className="flex flex-row items-center">
												<label
													htmlFor="job"
													className="font-semibold w-28"
												>
													Job
												</label>
												<input
													type="text"
													name="job"
													id="job"
													className="border-2 grow border-gray-200 rounded-lg px-3 py-2"
												/>
											</div>
										</div>
									</div>
									<div className="mt-4 px-6 pb-6 flex justify-center">
										<button
											type="button"
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
						<span>Add Employee</span>
					</button>
				</div>
				<TableEmployee />
			</div>
		</div>
	);
=======
  TabTitle("Employee - Kato Haircut");
  // modal
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const closeAddEmployeeModal = () => setOpenAddEmployee(false);
  const openAddEmployeeModal = () => setOpenAddEmployee(true);
  const [openEditEmployee, setOpenEditEmployee] = useState(false);
  const closeEditEmployeeModal = () => setOpenEditEmployee(false);
  const [openDeleteEmployee, setOpenDeleteEmployee] = useState(false);
  const closeDeleteEmployeeModal = () => setOpenDeleteEmployee(false);

  // table and pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // search
  const [searchValue, setSearchValue] = useState();
  // handle create
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dataJob, setDataJob] = useState("");
  const [job, setJob] = useState();
  // Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [jobEdit, setJobEdit] = useState("");
  // Hanlde Edit
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");
  // print function
  const idTable = "tableEmployee";

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/employees${
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
        `https://api.kattohair.com/api/employees${
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
        `https://api.kattohair.com/api/employees${
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
    fetchJobData();
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

  const fetchJobData = async () => {
    try {
      const getData = await axios.get(
        `https://api.kattohair.com/api/employees/jobs`
      );
      setDataJob(getData.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://api.kattohair.com/api/employees/create`, {
        name: name,
        phone: phone,
        job_id: job,
      });
      fetchData();
    } catch ({response}) {
      console.log(response.message);
    }
  };

  const prepareEdit = (value) => {
    setIdEdit(value);
    getEditData(value);
    setOpenEditEmployee(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/${value}}`
      );
      setCodeEdit(data.data.code)
      setPhoneEdit(data.data.phone);
      setNameEdit(data.data.name);
      setJobEdit(data.data.job_name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      let i;
      let job_id = 0;
      for (i in dataJob) {
        if (dataJob[i].name == jobEdit) {
          job_id = dataJob[i].id;
        }
      }
      // console.log("job_id = "+job_id);
      await axios.put(
        `https://api.kattohair.com/api/employees/update/${idEdit}`,
        {
          code: codeEdit,
          phone: phoneEdit,
          name: nameEdit,
          job_id: job_id,
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
    setOpenDeleteEmployee(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/${id}}`
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/employees/delete/${idDelete}`
      );
      fetchData();
      getTotalCount();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateEmployee
        show={openAddEmployee}
        close={closeAddEmployeeModal}
        name={name}
        setNameValue={setName}
        dataJob={dataJob}
        jobValue={job}
        setJobValue={setJob}
        phoneValue={phone}
        setPhoneValue={setPhone}
        submit={handleSubmit}
      />
      <ModalEditEmployee
        show={openEditEmployee}
        close={closeEditEmployeeModal}
        codeEditValue={codeEdit}
        setCodeEditValue={setCodeEdit}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        phoneEditValue={phoneEdit}
        setPhoneEditValue={setPhoneEdit}
        dataJob={dataJob}
        jobEditValue={jobEdit}
        setJobEditValue={setJobEdit}
        submit={handleEdit}
      />
      <ModalDeleteEmployee
        show={openDeleteEmployee}
        close={closeDeleteEmployeeModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by name..."}
            searchValue={searchValue}
            setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
            onClick={openAddEmployeeModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Employee</span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableEmployee 
              tableData={tableData} 
              idTable={idTable}
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

export default Employee;
