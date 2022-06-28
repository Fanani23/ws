import {MdAdd} from "react-icons/md";
import React, {useState, useEffect} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableListProducts from "../components/TableListProducts";
import axios from "axios";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import ModalCreateProduct from "../components/ModalCreateProduct";
import ModalEditProduct from "../components/ModalEditProduct";

const ProductList = () => {
  TabTitle("List Product - Kato Haircut");
  // modal
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const closeAddProductModal = () => setOpenAddProduct(false);
  const openAddProductModal = () => setOpenAddProduct(true);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const closeEditProductModal = () => setOpenEditProduct(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
  const closeDeleteProductModal = () => setOpenDeleteProduct(false);
  // table and pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // search
  const [searchValue, setSearchValue] = useState();
  // handle create
  const [code, setCode] = useState("");
  const [dataCategory, setDataCategory] = useState("");
  const [category, setCategory] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [feeCategory, setFeeCategory] = useState("nominal");
  const [feeValue, setFeeValue] = useState();
  const [image, setImage] = useState();
  // handle edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [feeCategoryEdit, setFeeCategoryEdit] = useState("");
  const [feeValueEdit, setFeeValueEdit] = useState();
  const [imageEdit, setImageEdit] = useState("");
  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/products${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setTableData(pageData.data.data);
      setTableCount(pageData.data.meta.total);
      setItemsPerPage(pageData.data.meta.per_page);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const getData = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`
      );
      setDataCategory(getData.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataCategory();
  }, []);

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  const showSearchedTablePage = (searchValue) => {
    setSearchValue(searchValue);
    setCurrentTablePage(1);
    fetchData(currentTablePage, searchValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category_id", category);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("commission_type", feeCategory);
    formData.append("commission_value", feeValue);
    try {
      axios.post("https://api.kattohair.com/api/products/create", formData);
      setImage("");
      setName("");
      setCategory("");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const prepareEdit = (id) => {
    setIdEdit(id);
    getEditData(id);
    setOpenEditProduct(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/${value}}`
      );
      setCodeEdit(data.data.code);
      setNameEdit(data.data.name);
      setCategoryEdit(data.data.category);
      setPriceEdit(data.data.price);
      setFeeCategoryEdit(data.data.commission_type);
      setFeeValueEdit(data.data.commission_value);
      setImageEdit(data.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageEdit);
    formData.append("category_id", categoryEdit);
    formData.append("name", nameEdit);
    formData.append("price", priceEdit);
    formData.append("commission_type", feeCategoryEdit);
    formData.append("commission_value", feeValueEdit);
    try {
      await axios.put(
        `https://api.kattohair.com/api/products/update/${idEdit}`,
        formData
      );
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateProduct
        show={openAddProduct}
        close={closeAddProductModal}
        dataCategory={dataCategory}
        categoryValue={category}
        setCategoryValue={setCategory}
        nameValue={name}
        setNameValue={setName}
        priceValue={price}
        setPriceValue={setPrice}
        feeCategoryValue={feeCategory}
        setFeeCategoryValue={setFeeCategory}
        feeValue={feeValue}
        setFeeValue={setFeeValue}
        imageValue={image}
        setImageValue={setImage}
        submit={handleSubmit}
      />
      <ModalEditProduct
        show={openEditProduct}
        close={closeEditProductModal}
        dataCategory={dataCategory}
        codeValue={codeEdit}
        setCodeValue={setCodeEdit}
        categoryValue={categoryEdit}
        setCategoryValue={setCategoryEdit}
        nameValue={nameEdit}
        setNameValue={setNameEdit}
        priceValue={priceEdit}
        setPriceValue={setPriceEdit}
        feeCategoryValue={feeCategoryEdit}
        setFeeCategoryValue={setFeeCategoryEdit}
        feeValue={feeValueEdit}
        setFeeValue={setFeeValueEdit}
        imageValue={imageEdit}
        setImageValue={setImageEdit}
        submit={handleEdit}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by product name..."}
            searchValue={searchValue}
            setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
            onClick={openAddProductModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Service</span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableListProducts
              tableData={tableData}
              dataCategory={dataCategory}
              editRow={prepareEdit}
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

export default ProductList;
