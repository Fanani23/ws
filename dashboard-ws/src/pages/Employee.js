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
      console.log("job_id = "+job_id);
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
        setNameEditValue={setName}
        phoneEditValue={phoneEdit}
        setPhoneEditValue={setPhone}
        dataJob={dataJob}
        jobEditValue={jobEdit}
        setJobEditValue={setJob}
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
};

export default Employee;
