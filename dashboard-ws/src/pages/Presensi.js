import TabTitle from "../utils/GeneralFunction";
import {MdAdd} from "react-icons/md";
import TablePresensi from "../components/TablePresensi";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import ModalCreatePresensi from "../components/ModalCreatePresensi";
import ModalDeletePresensi from "../components/ModalDeletePresensi";

const Presensi = () => {
  TabTitle("Presensi - Kato Haircut");
  // Modal
  const [openAddPresensi, setOpenAddPresensi] = useState(false);
  const closeAddPresensiModal = () => setOpenAddPresensi(false);
  const openAddPresensiModal = () => setOpenAddPresensi(true);
  const [openDeletePresensi, setOpenDeletePresensi] = useState(false);
  const closeDeletePresensiModal = () => setOpenDeletePresensi(false);
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Handle Create
  const [code, setCode] = useState("");
  const [shift, setShift] = useState("");
  const [status, setStatus] = useState("");
  //Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [codeDelete, setCodeDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/presences${
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
        `https://api.kattohair.com/api/presences${
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
        `https://api.kattohair.com/api/presences${
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.kattohair.com/api/presences/presence", {
        code,
        shift,
        status,
      });
      fetchData();
      getTotalCount();
      getItemsPerPage();
    } catch (err) {
      console.log(err);
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
        `https://api.kattohair.com/api/presences/${id}}`
      );
      setCodeDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/presences/delete/${idDelete}`
      );
      fetchData();
      getTotalCount();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
        codeDeleteValue={codeDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
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
            <TablePresensi tableData={tableData} deleteRow={prepareDelete} />
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

export default Presensi;
