import TabTitle from "../utils/GeneralFunction";
import {useState} from "react";
import Search from "../components/Search";
import CashierCategoryList from "../components/CashierCategoryList";
import CashierProductList from "../components/CashierProductList";
import axios from "axios";
import {useEffect} from "react";
import ModalSelectProductCashier from "../components/ModalSelectProductCashier";
import CashierRightPanelTop from "../components/CashierRightPanelTop";
import CashierDataInput from "../components/CashierDataInput";

const getLocalStorageData = JSON.parse(localStorage.getItem("cart") || "[]");
const getDetailLocalStorageData = JSON.parse(
  localStorage.getItem("detailCart") || "[]"
);

const Cashier = () => {
  TabTitle("Cashier - Kato Haircut");
  // modal
  const [openSelectProduct, setOpenSelectProduct] = useState(false);
  const closeSelectProductModal = () => setOpenSelectProduct(false);
  const openSelectProductModal = () => setOpenSelectProduct(true);
  // search
  const [dataCategory, setDataCategory] = useState([]);
  const [dataEmployee, setDataEmployee] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [dataProduct, setDataProduct] = useState([]);
  // select
  const [selectProduct, setSelectProduct] = useState();
  const [stylist, setStylist] = useState("");
  const [discountType, setDiscountType] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [cart, setCart] = useState(getLocalStorageData);
  const [detailCart, setDetailCart] = useState(getDetailLocalStorageData);

  const fetchCategoryData = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`
      );
      setDataCategory(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSpecificCategoryProduct = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${id}`
      );
      setDataProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllCategoryProduct = async () => {
    try {
      const {data} = await axios.get(`https://api.kattohair.com/api/products`);
      setDataProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataEmployee = async () => {
    try {
      const {data} = await axios.get(`https://api.kattohair.com/api/employees`);
      setDataEmployee(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeCategory = (val) => {
    val !== "All"
      ? fetchSpecificCategoryProduct(val)
      : fetchAllCategoryProduct();
  };

  const getDetailProduct = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/${id}`
      );
      setSelectProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectProduct = (id) => {
    getDetailProduct(id);
    openSelectProductModal();
  };

  const addToCart = (e) => {
    e.preventDefault();
    try {
      setCart((data) => [
        ...data,
        {
          stylist_id: parseInt(stylist),
          product_id: selectProduct.id,
          service_discount_type: discountType,
          service_discount_amount: discountValue,
        },
      ]);
      // setDetailCart((data) => [
      //   ...data,
      //   {
      //     stylist_id: parseInt(stylist),
      //     stylist_name:
      //     product_id: selectProduct.id,
      //     service_discount_type: discountType,
      //     service_discount_amount: discountValue,
      //   },
      // ]);
      setStylist("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchAllCategoryProduct();
    fetchDataEmployee();
    console.log(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col h-full font-nunito-sans">
      <ModalSelectProductCashier
        show={openSelectProduct}
        close={closeSelectProductModal}
        dataProduct={selectProduct}
        dataEmployee={dataEmployee}
        stylistValue={stylist}
        setStlylistValue={setStylist}
        setDiscountType={setDiscountType}
        setDiscountValue={setDiscountValue}
        submit={addToCart}
      />
      <div className="h-10">
        <Search
          textColor={"text-white"}
          bgColor={"bg-black"}
          placeholder={"Search by product name..."}
        />
      </div>
      <div className="relative flex flex-col md:flex-row grow overflow-auto scrollbar-shown">
        <div className="flex flex-col mb-2 md:mb-0 basis-full md:relative md:overflow-x-auto md:basis-1/2 lg:basis-4/6">
          <CashierCategoryList
            dataCategory={dataCategory}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            handleChangeCategory={handleChangeCategory}
          />
          <CashierProductList
            dataProduct={dataProduct}
            selectProduct={handleSelectProduct}
          />
        </div>
        <div className="flex flex-col basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
          <div className="bg-white flex flex-col rounded-tl-lg rounded-tr-lg md:rounded-tr-none h-full">
            <CashierRightPanelTop />
            <CashierDataInput dataCashier={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;
