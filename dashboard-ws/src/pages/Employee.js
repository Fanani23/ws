import {MdAdd} from "react-icons/md";
import React, {useEffect, useState} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableEmployee from "../components/TableEmployee";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import axios from "axios";
import ModalCreateEmployee from "../components/ModalCreateEmployee";

const Employee = () => {
  TabTitle("Employee - Kato Haircut");
  // modal
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const closeAddEmployeeModal = () => setOpenAddEmployee(false);
  const openAddEmployeeModal = () => setOpenAddEmployee(true);
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
  const [job, setJob] = useState("");
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
      console.log("error in fetching table data", err);
    }
  };

  const handleSubmit = async (e) => {};

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateEmployee
        show={openAddEmployee}
        close={closeAddEmployeeModal}
        name={name}
        setNameValue={setName}
        dataJob={dataJob}
        submit={handleSubmit}
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
            <TableEmployee tableData={tableData} idTable={idTable} />
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
