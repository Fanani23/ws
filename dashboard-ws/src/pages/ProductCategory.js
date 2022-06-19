import {MdAdd} from "react-icons/md";
import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import TabTitle from "../utils/GeneralFunction";
import TableCategories from "../components/TableCategories";
import axios from "axios";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import ModalCreateCategories from "../components/ModalCreateCategories";
import ModalEditCategories from "../components/ModalEditCategories";
import ModalDeleteCategories from "../components/ModalDeleteCategories";

const ProductCategory = () => {
  TabTitle("Category - Kato Haircut");
  // modal
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const closeAddCategoryModal = () => setOpenAddCategory(false);
  const openAddCategoryModal = () => setOpenAddCategory(true);
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const closeEditCategoryModal = () => setOpenEditCategory(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const closeDeleteCategoryModal = () => setOpenDeleteCategory(false);
  // table and pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // search
  const [searchValue, setSearchValue] = useState();
  // handle create
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  // handle edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  // handle delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/products/categories${
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
        `https://api.kattohair.com/api/products/categories${
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
        `https://api.kattohair.com/api/products/categories${
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
    try {
      await axios.post(
        "https://api.kattohair.com/api/products/categories/create",
        {code, name}
      );
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
    setOpenEditCategory(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${value}}`
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
      let data = await axios.put(
        `https://api.kattohair.com/api/products/categories/update/${idEdit}`,
        {code: codeEdit, name: nameEdit}
      );
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    console.log(id);
    getDeleteData(id);
    setOpenDeleteCategory(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${id}`
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/products/categories/delete/${idDelete}`
      );
      fetchData();
      getTotalCount();
      getItemsPerPage();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateCategories
        show={openAddCategory}
        close={closeAddCategoryModal}
        code={code}
        setCodeValue={setCode}
        name={name}
        setNameValue={setName}
        submit={handleSubmit}
      />
      <ModalEditCategories
        show={openEditCategory}
        close={closeEditCategoryModal}
        codeEditValue={codeEdit}
        setCodeEditValue={setCodeEdit}
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
          <p className="w-full text-black">No result</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
