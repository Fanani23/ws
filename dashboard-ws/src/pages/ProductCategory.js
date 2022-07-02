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
      console.log("error in fetching table data", err);
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
      console.log("error in fetching table data", err);
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
      alert("Succesfully added category, if data didn't show you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Add category failed")
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
      console.log(err);
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
      alert("Succesfully update category, if category didn't update you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Update data failed")
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
      console.log(err);
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
      alert("Succesfully delete category")
    } catch (err) {
      console.log(err);
      alert("Delete category failed")
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
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
            onClick={openAddCategoryModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Category</span>
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
