import {MdAdd} from "react-icons/md";
import React, {useState, useEffect} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableListProducts from "../components/TableListProducts";
import axios from "axios";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import ProductCategoryList from "../components/ProductCategoryList";
import ModalCreateProduct from "../components/ModalCreateProduct";
import ModalDeleteProduct from "../components/ModalDeleteProduct";
import ModalEditProduct from "../components/ModalEditProduct";
import Session from "../Session";
import ModalAlert from "../components/ModalAlert";

const ProductList = () => {
  TabTitle("List Product - Kato Haircut");
  // Modal
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const closeAddProductModal = () => setOpenAddProduct(false);
  const openAddProductModal = () => setOpenAddProduct(true);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const closeEditProductModal = () => {
    setOpenEditProduct(false);
    setImageEdit();
  };
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
  const closeDeleteProductModal = () => setOpenDeleteProduct(false);
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => {
    setOpenAlert(false);
    setErrorMsg("");
  };
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState();
  const [currentCategory, setCurrentCategory] = useState("All");
  const [dataProduct, setDataProduct] = useState([]);
  // Handle Create
  const [code, setCode] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [category, setCategory] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [feeCategory, setFeeCategory] = useState("Nominal");
  const [feeValue, setFeeValue] = useState();
  const [image, setImage] = useState();
  // Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState();
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState();
  const [feeCategoryEdit, setFeeCategoryEdit] = useState("Nominal");
  const [feeEdit, setFeeEdit] = useState();
  const [imageEdit, setImageEdit] = useState();
  // Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/products${
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

  const fetchDataCategory = async () => {
    try {
      const getData = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`,
        Session()
      );
      setDataCategory(getData.data.data);
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

  const fetchSpecificCategoryProduct = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/products-by-category/${id}`,
        Session()
      );
      setTableData(data.data);
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

  const fetchAllCategoryProduct = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products`,
        Session()
      );
      setTableData(data.data);
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

  const handleChangeCategory = (val) => {
    val !== "All"
      ? fetchSpecificCategoryProduct(val)
      : fetchAllCategoryProduct();
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
      axios.post(
        "https://api.kattohair.com/api/products/create",
        formData,
        Session()
      );
      setImage("");
      setName("");
      setCategory("");
      fetchData();
      alert(
        "Succesfully added, if data didn't show you must refresh your browser"
      );
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Failed add data, check your input again!");
      }
      setOpenAlert(true);
    }
  };

  const prepareEdit = (val) => {
    let fee_commission = new String(val.commission_value);
    let price = new String(val.price);

    fee_commission = fee_commission.replace(".", "");
    price = price.replace(".", "");

    setPriceEdit(price);
    setFeeEdit(fee_commission);
    setIdEdit(val.id);
    setCodeEdit(val.code);
    setNameEdit(val.name);
    setCategoryEdit(val.category);
    setFeeCategoryEdit(val.commission_type);
    setImageEdit(val.image);
    getEditData(val);
    setOpenEditProduct(true);
  };

  const getEditData = async (val) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/${val.id}}`,
        Session()
      );

      let fee_commission = new String(data.data.commission_value);
      let price = new String(data.data.price);

      fee_commission = fee_commission.replace(".", "");
      price = price.replace(".", "");

      setCodeEdit(data.data.code);
      setNameEdit(data.data.name);
      setCategoryEdit(data.data.category);
      setPriceEdit(price);
      setFeeCategoryEdit(data.data.commission_type);
      setFeeEdit(fee_commission);
      setImageEdit(data.data.image);
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
      let i;
      let category_id = 0;
      for (i in dataCategory) {
        if (dataCategory[i].name === categoryEdit) {
          category_id = dataCategory[i].id;
        }
      }

      let formData = new FormData();
      formData.append("code", codeEdit);
      formData.append("category_id", category_id);
      formData.append("name", nameEdit);
      formData.append("price", priceEdit);
      formData.append("commission_type", feeCategoryEdit);
      formData.append("commission_value", feeEdit);
      formData.append("image", imageEdit);
      formData.append("_method", "PUT");

      await axios.post(
        `https://api.kattohair.com/api/products/update/${idEdit}`,
        formData,
        Session()
      );
      fetchData();
      alert(
        "Succesfully edit data, if data didn't show updated you must refresh your browser"
      );
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
    setOpenDeleteProduct(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/${id}}`,
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
        `https://api.kattohair.com/api/products/delete/${idDelete}`,
        Session()
      );
      fetchData();
      alert("Sucessfully delete data");
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
        codeEditValue={codeEdit}
        setCodeEditValue={setCodeEdit}
        categoryEditValue={categoryEdit}
        setCategoryEditValue={setCategoryEdit}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        priceEditValue={priceEdit}
        setPriceEditValue={setPriceEdit}
        feeCategoryEditValue={feeCategoryEdit}
        setFeeCategoryEditValue={setFeeCategoryEdit}
        feeEditValue={feeEdit}
        setFeeEditValue={setFeeEdit}
        imageEditValue={imageEdit}
        setImageEditValue={setImageEdit}
        submit={handleEdit}
      />
      <ModalDeleteProduct
        show={openDeleteProduct}
        close={closeDeleteProductModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
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
        <div>
          <ProductCategoryList
            dataCategory={dataCategory}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </div>
        {tableCount ? (
          <>
            <TableListProducts
              tableData={tableData}
              dataCategory={dataCategory}
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

export default ProductList;
