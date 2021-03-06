import {MdAdd} from "react-icons/md";
import React, {useEffect, useState} from "react";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import TabTitle from "../utils/GeneralFunction";
import TableJobs from "../components/TableJobs";
import axios from "axios";
import ModalCreateJob from "../components/ModalCreateJobs";
import ModalEditJob from "../components/ModalEditJobs";
import ModalDeleteJob from "../components/ModalDeleteJobs";
import Session from "../Session";

const Jobs = () => {
  TabTitle("Jobs Category - Kato Haircut");
  // Modal
  const [openAddJob, setOpenAddJob] = useState(false);
  const closeAddJobModal = () => setOpenAddJob(false);
  const openAddJobModal = () => setOpenAddJob(true);
  const [openEditJob, setOpenEditJob] = useState(false);
  const closeEditJobModal = () => setOpenEditJob(false);
  const [openDeleteJob, setOpenDeleteJob] = useState(false);
  const closeDeleteJobModal = () => setOpenDeleteJob(false);
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState();
  // Handle Create
  const [name, setName] = useState("");
  // Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  // Hanlde Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/employees/jobs${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableData(pageData.data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/employees/jobs${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableCount(AllData.data.meta.total);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getItemsPerPage = async (page = currentTablePage, search = "") => {
    try {
      const CountPerPage = await axios.get(
        `https://api.kattohair.com/api/employees/jobs${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
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
    // console.log({name});
    try {
      await axios.post("https://api.kattohair.com/api/employees/jobs/create", {
        name: name,
      },
      Session()
    );
    fetchData();
    getTotalCount();
    getItemsPerPage();
    alert("Succesfully add job, if job data didn't show you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Add job failed")
    }
  };

  const prepareEdit = (value) => {
    setIdEdit(value);
    getEditData(value);
    setOpenEditJob(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/jobs/${value}}`,
        Session()
      );
      setCodeEdit(data.data.code);
      setNameEdit(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    // console.log({code: codeEdit, name: nameEdit});
    try {
      await axios.put(`https://api.kattohair.com/api/employees/jobs/update/${idEdit}`,
      { code: codeEdit, name: nameEdit },
      Session()
    );
    fetchData();
    alert("Succesfully update job data, if data job didn't update you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Update job failed")
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeleteJob(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/jobs/${id}}`,
        Session()
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/employees/jobs/delete/${idDelete}`,
        Session()
      );
      fetchData();
      getTotalCount();
      alert("Succesfully delete job")
    } catch (err) {
      console.log(err);
      alert("Delete job failed")
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-ayto scrollbar-shown">
      <ModalCreateJob
        show={openAddJob}
        close={closeAddJobModal}
        name={name}
        setNameValue={setName}
        submit={handleSubmit}
      />
      <ModalEditJob
        show={openEditJob}
        close={closeEditJobModal}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        submit={handleEdit}
      />
      <ModalDeleteJob
        show={openDeleteJob}
        close={closeDeleteJobModal}
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
            onClick={openAddJobModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Job</span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableJobs
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
          <p className="w-full text-black">Waiting for Data</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
