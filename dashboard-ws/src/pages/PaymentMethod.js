import React, {useEffect, useState} from "react";
import axios from "axios";
import {MdAdd} from "react-icons/md";
import ModalAlert from "../components/ModalAlert";
import ModalCreatePaymentMethod from "../components/ModalCreatePaymentMethod";
import ModalDeletePaymentMethod from "../components/ModalDeletePaymentMethod";
import ModalEditPaymentMethod from "../components/ModalEditPaymentMethod";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TablePaymentMethod from "../components/TablePaymentMethod";
import Session from "../Session";

const PaymentMethod = () => {
  // Modal
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => setOpenAlert(false);
  const [openAddPaymentMethod, setOpenAddPaymentMethod] = useState(false);
  const closeAddPaymentMethodModal = () => setOpenAddPaymentMethod(false);
  const [openEditPaymentMethod, setOpenEditPaymentMethod] = useState(false);
  const closeEditPaymentMethodModal = () => setOpenEditPaymentMethod(false);
  const [openDeletePaymentMethod, setOpenDeletePaymentMethod] = useState(false);
  const closeDeletePaymentMethodModal = () => setOpenDeletePaymentMethod(false);
  // Data
  const [errorMsg, setErrorMsg] = useState("");
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("");
  const [currentTablePage, setCurrentTablePage] = useState("");
  // Add Data
  const [paymentMethodName, setPaymentMethodName] = useState("");
  // Edit Data
  const [editPaymentMethodId, setEditPaymentMethodId] = useState([]);
  const [editPaymentMethodName, setEditPaymentMethodName] = useState("");
  // Delete Data
  const [deletePaymentMethodId, setDeletePaymentMethodId] = useState("");
  const [deletePaymentMethodName, setDeletePaymentMethodName] = useState("");
  // Fetch Data
  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableData(data.data);
      setTableCount(data.meta.total);
      setItemsPerPage(data.meta.per_page);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Can't get data");
      }
      setOpenAlert(true);
    }
  };

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalAlert show={openAlert} close={closeAlertModal} message={errorMsg} />
      <ModalCreatePaymentMethod
        show={openAddPaymentMethod}
        close={closeAddPaymentMethodModal}
        nameValue={paymentMethodName}
        setNameValue={setPaymentMethodName}
        // submit={handleSubmit}
      />
      <ModalEditPaymentMethod
        show={openEditPaymentMethod}
        close={closeEditPaymentMethodModal}
        nameEditValue={editPaymentMethodName}
        setNameEditValue={setEditPaymentMethodName}
        // submit={handleEdit}
      />
      <ModalDeletePaymentMethod
        show={openDeletePaymentMethod}
        close={closeDeletePaymentMethodModal}
        nameDeleteValue={deletePaymentMethodName}
        // submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex flex-row justify-between sm:justify-start font-nunito-sans">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by name..."}
            // searchValue={searchValue}
            // setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex flex-row ml-2 items-center sm:ml-auto h-10 px-3 py-2 bg-black rounded-lg"
            onClick={() => setOpenAddPaymentMethod(true)}
          >
            <MdAdd className="text-white mr-0 sm:mr-2" />
            <span className="w-full text-sm sm:text-normal whitespace-nowrap sm:whitespace-normal">
              Add Payment Method
            </span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TablePaymentMethod
              tableData={tableData}
              // editRow={prepareEdit}
              // deleteRow={prepareDelete}
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

export default PaymentMethod;
