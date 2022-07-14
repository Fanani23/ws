import TabTitle from "../utils/GeneralFunction";
import {MdAdd} from "react-icons/md";
import TablePresensi from "../components/TablePresensi";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import ModalCreatePresensi from "../components/ModalCreatePresensi";
import ModalDeletePresensi from "../components/ModalDeletePresensi";
import PresensiDetail from "../components/PresensiDetail";
import Session from "../Session";
import ModalAlert from "../components/ModalAlert";
import FilterByDate from "../components/FilterByDate";

const Presensi = () => {
  TabTitle("Presensi - Kato Haircut");
  // Message
  const [msgPresensi, setMsgPresensi] = useState("");
  // Modal
  const [openAddPresensi, setOpenAddPresensi] = useState(false);
  const closeAddPresensiModal = () => setOpenAddPresensi(false);
  const openAddPresensiModal = () => setOpenAddPresensi(true);
  const [openDeletePresensi, setOpenDeletePresensi] = useState(false);
  const closeDeletePresensiModal = () => setOpenDeletePresensi(false);
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => {
    setOpenAlert(false);
    setMsgPresensi("");
  };
  const openAlertModal = () => setOpenAlert(true);
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Handle Create
  const [code, setCode] = useState("");
  const [shift, setShift] = useState("");
  const [status, setStatus] = useState("");
  // Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");
  // Print Function
  const idTable = "tablePresensi";
  // Detail
  const [detailShow, setDetailShow] = useState();
  const [detailPresensi, setDetailPresensi] = useState();
  const [activeId, setActiveId] = useState();
  const [activeEmployee, setActiveEmployee] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/presences${
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
        `https://api.kattohair.com/api/presences${
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
        `https://api.kattohair.com/api/presences${
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.kattohair.com/api/presences/create",
        {
          code: code,
          shift: shift,
          status: status,
        },
        Session()
      );
      // .then((response) => setMsgPresensi(response.message));
      fetchData();
      getTotalCount();
      getItemsPerPage();
    } catch (err) {
      // console.log(err);
      // alert("Presensi gagal");
      setMsgPresensi(err.response.data.message);
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeletePresensi(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/presences/${id}}`,
        Session()
      );
      setNameDelete(data.data.employee_name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/presences/destroy/${idDelete}`,
        Session()
      );
      fetchData();
      getTotalCount();
      alert("Succesfully delete presensi");
    } catch (err) {
      console.log(err);
      alert("Delete presensi failed");
    }
  };

  const fetchDetailData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/presences/${id}`,
        Session()
      );
      setDetailPresensi(data);
    } catch (err) {
      console.log(err);
    }
  };

  const detailData = (id) => {
    if (activeId === id) {
      setDetailShow(!detailShow);
    } else {
      fetchDetailData(id);
      setActiveId(id);
      setDetailShow(true);
    }
  };

  useEffect(() => {
    if (msgPresensi !== "") {
      openAlertModal();
    }
  }, [msgPresensi]);

  return (
    <div className="flex flex-col h-full font-noto-sans">
      {msgPresensi && (
        <ModalAlert
          show={openAlert}
          close={closeAlertModal}
          message={msgPresensi}
        />
      )}
      <ModalCreatePresensi
        show={openAddPresensi}
        close={closeAddPresensiModal}
        codeValue={code}
        setCodeValue={setCode}
        setShiftValue={setShift}
        setStatusValue={setStatus}
        submit={handleSubmit}
      />
      <ModalDeletePresensi
        show={openDeletePresensi}
        close={closeDeletePresensiModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div
          className={`
          basis-full${detailShow ? " md:basis-1/2 lg:basis-3/6" : ""}`}
        >
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            <div className="flex mt-2 relative">
              <button
                type="submit"
                className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
                onClick={openAddPresensiModal}
              >
                <MdAdd className="text-white mr-2" />
                <span>Add Presensi</span>
              </button>
            </div>
            {tableCount ? (
              <>
                <TablePresensi
                  tableData={tableData}
                  idTable={idTable}
                  deleteRow={prepareDelete}
                  detailData={detailData}
                  setActiveEmployeeName={setActiveEmployee}
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
        {detailPresensi && detailShow && (
          <div className="basis-full md:mt-0 md:ml-2 md:basis-1/2 lg:basis-3/6 mt-2">
            <PresensiDetail
              detailPresensi={detailPresensi}
              employeeName={activeEmployee}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Presensi;
