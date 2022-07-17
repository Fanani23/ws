import {MdAdd} from "react-icons/md";
import React, {useEffect, useState} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableCategories from "../components/TableCategories";
import axios from "axios";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import ModalCreateCategories from "../components/ModalCreateCategories";
import ModalEditCategories from "../components/ModalEditCategories";
import ModalDeleteCategories from "../components/ModalDeleteCategories";
import Session from "../Session";
import ModalAlert from "../components/ModalAlert";

const ProductCategory = () => {
  TabTitle("Category - Kato Haircut");
  // Modal
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const closeAddCategoryModal = () => setOpenAddCategory(false);
  const openAddCategoryModal = () => setOpenAddCategory(true);
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const closeEditCategoryModal = () => setOpenEditCategory(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const closeDeleteCategoryModal = () => setOpenDeleteCategory(false);
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => {
    setOpenAlert(false);
    setErrorMsg("");
  };
  const [errorMsg, setErrorMsg] = useState("");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState("");
  // Handle Create
  const [name, setName] = useState("");
  // Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  // Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/products/categories${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableData(pageData.data.data);
      setTableCount(pageData.data.meta.total);
      setItemsPerPage(pageData.data.meta.per_page);
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

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/products/categories${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableCount(AllData.data.meta.total);
      setItemsPerPage(AllData.data.meta.per_page);
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

  useEffect(() => {
    fetchData();
    getTotalCount();
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.kattohair.com/api/products/categories/create",
        {name},
        Session()
      );
      fetchData();
      getTotalCount();
      setErrorMsg(
        "Succesfully added category, if data didn't show you must refresh your browser"
      );
      setOpenAlert(true);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Can't add data");
      }
      setOpenAlert(true);
    }
  };

  const prepareEdit = (value) => {
    // console.log(value);
    setIdEdit(value.id);
    setNameEdit(value.name);
    getEditData(value);
    setOpenEditCategory(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${value.id}}`,
        Session()
      );
      setCodeEdit(data.data.code);
      setNameEdit(data.data.name);
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

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://api.kattohair.com/api/products/categories/update/${idEdit}`,
        {code: codeEdit, name: nameEdit},
        Session()
      );
      fetchData();
      setErrorMsg(
        "Succesfully update category, if category didn't update you must refresh your browser"
      );
      setOpenAlert(true);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Failed update data");
      }
      setOpenAlert(true);
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeleteCategory(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${id}`,
        Session()
      );
      setNameDelete(data.data.name);
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

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/products/categories/delete/${idDelete}`,
        Session()
      );
      fetchData();
      getTotalCount();
      setErrorMsg("Succesfully delete category");
      setOpenAlert(true);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Failed delete data");
      }
      setOpenAlert(true);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalAlert show={openAlert} close={closeAlertModal} message={errorMsg} />
      <ModalCreateCategories
        show={openAddCategory}
        close={closeAddCategoryModal}
        nameValue={name}
        setNameValue={setName}
        submit={handleSubmit}
      />
      <ModalEditCategories
        show={openEditCategory}
        close={closeEditCategoryModal}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        submit={handleEdit}
      />
      <ModalDeleteCategories
        show={openDeleteCategory}
        close={closeDeleteCategoryModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex flex-row justify-between sm:justify-start font-nunito-sans">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by name..."}
            searchValue={searchValue}
            setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex flex-row ml-2 items-center sm:ml-auto h-10 px-3 py-2 bg-black rounded-lg"
            onClick={openAddCategoryModal}
          >
            <MdAdd className="text-white mr-0 sm:mr-2" />
            <span className="w-full text-sm sm:text-normal whitespace-pre sm:whitespace-normal">
              Add Category
            </span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableCategories
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

export default ProductCategory;
