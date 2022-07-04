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
import Session from "../Session";
import ModalCreateCustomerCashier from "../components/ModalCreateCustomerCashier";
import ModalAlert from "../components/ModalAlert";
import ModalEditProductCashier from "../components/ModalEditProductCashier";

const getLocalStorageData = JSON.parse(localStorage.getItem("cart") || "[]");

const Cashier = () => {
  TabTitle("Cashier - Kato Haircut");
  // Modal
  const [openSelectProduct, setOpenSelectProduct] = useState(false);
  const closeSelectProductModal = () => setOpenSelectProduct(false);
  const openSelectProductModal = () => setOpenSelectProduct(true);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const closeEditProductModal = () => setOpenEditProduct(false);
  const openEditProductModal = () => setOpenEditProduct(true);
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const closeAddCustomerModal = () => setOpenAddCustomer(false);
  const openAddCustomerModal = () => setOpenAddCustomer(true);
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => setOpenAlert(false);
  const openAlertModal = () => setOpenAlert(true);
  // Search
  const [dataCategory, setDataCategory] = useState([]);
  const [dataEmployee, setDataEmployee] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [dataProduct, setDataProduct] = useState([]);
  // select
  const [selectProduct, setSelectProduct] = useState();
  const [stylist, setStylist] = useState("");
  const [discountType, setDiscountType] = useState("none");
  const [discountValue, setDiscountValue] = useState();
  const [cart, setCart] = useState(getLocalStorageData);
  // edit
  const [productIndex, setProductIndex] = useState();
  const [editProduct, setEditProduct] = useState();
  const [stylistEdit, setStylistEdit] = useState("");
  const [discountTypeEdit, setDiscountTypeEdit] = useState();
  const [discountValueEdit, setDiscountValueEdit] = useState();
  // customer
  const [categoryCustomer, setCategoryCustomer] = useState("new");
  const [dataCustomer, setDataCustomer] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [activeCustomerData, setActiveCustomerData] = useState();

  const [message, setMessage] = useState("");

  const fetchCategoryData = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`,
        Session()
      );
      setDataCategory(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSpecificCategoryProduct = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/products-by-category/${id}`,
        Session()
      );
      setDataProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllCategoryProduct = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products`,
        Session()
      );
      setDataProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataCustomer = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers`,
        Session()
      );
      setDataCustomer(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOneDataCustomer = async (val) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers/${val}`,
        Session()
      );
      setActiveCustomerData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataEmployee = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees?paginate=false`,
        Session()
      );
      setDataEmployee(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCustomer = (val) => {
    val.preventDefault();
    if (categoryCustomer === "new") {
      console.log("new");
    } else if (categoryCustomer === "old") {
      fetchOneDataCustomer(customerId);
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
        `https://api.kattohair.com/api/products/${id}`,
        Session()
      );
      setSelectProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectProduct = (id) => {
    if (!customerId) {
      setMessage("Please add Customer first!");
      openAlertModal();
    } else {
      getDetailProduct(id);
      openSelectProductModal();
    }
  };

  const prepareAddToCart = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.get(
        "https://api.kattohair.com/api/employees/" + stylist,
        Session()
      );
      addToCart(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = (stylistName) => {
    try {
      setCart((data) => [
        ...data,
        {
          stylist_id: parseInt(stylist),
          stylist_name: stylistName,
          product_id: selectProduct.id,
          product_name: selectProduct.name,
          product_price: selectProduct.price,
          service_discount_type: discountType,
          service_discount_amount: discountValue,
        },
      ]);
      setStylist("");
    } catch (err) {
      console.log(err);
    }
  };

  const prepareEditData = (val) => {
    setProductIndex(val);
    setEditProduct(cart[val]);
    setDiscountTypeEdit(cart[val].service_discount_type);
    if (!isNaN(parseInt(cart[val].service_discount_amount))) {
      setDiscountValueEdit(parseInt(cart[val].service_discount_amount));
    } else {
      setDiscountValueEdit();
    }
    setStylistEdit(cart[val].stylist_id);
    openEditProductModal();
  };

  const handleEditCart = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.get(
        "https://api.kattohair.com/api/employees/" + stylistEdit,
        Session()
      );
      setToCartEdit(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const setToCartEdit = (stylistName) => {
    let data = JSON.parse(localStorage.getItem("cart"));
    data[productIndex] = {
      stylist_name: stylistName,
      stylist_id: parseInt(stylistEdit),
      product_id: data[productIndex].product_id,
      product_name: data[productIndex].product_name,
      product_price: data[productIndex].product_price,
      service_discount_type: discountTypeEdit,
      service_discount_amount: discountValueEdit,
    };
    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);
  };

  const prepareDeleteData = (val) => {
    console.log(val);
  };

  const clearCart = () => {
    setCart("");
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    fetchCategoryData();
    fetchAllCategoryProduct();
    fetchDataEmployee();
    fetchDataCustomer();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col h-full font-nunito-sans">
      <ModalAlert show={openAlert} close={closeAlertModal} message={message} />
      <ModalSelectProductCashier
        show={openSelectProduct}
        close={closeSelectProductModal}
        dataProduct={selectProduct}
        dataEmployee={dataEmployee}
        stylistValue={stylist}
        discountType={discountType}
        setStlylistValue={setStylist}
        setDiscountType={setDiscountType}
        setDiscountValue={setDiscountValue}
        submit={prepareAddToCart}
      />
      <ModalEditProductCashier
        show={openEditProduct}
        close={closeEditProductModal}
        dataProduct={editProduct}
        dataEmployee={dataEmployee}
        stylistValue={stylistEdit}
        discountType={discountTypeEdit}
        discountValue={discountValueEdit}
        setStlylistValue={setStylistEdit}
        setDiscountType={setDiscountTypeEdit}
        setDiscountValue={setDiscountValueEdit}
        submit={handleEditCart}
      />
      <ModalCreateCustomerCashier
        show={openAddCustomer}
        close={closeAddCustomerModal}
        dataCustomer={dataCustomer}
        categoryCustomer={categoryCustomer}
        customerId={customerId}
        setCustomerId={setCustomerId}
        setCategoryCustomer={setCategoryCustomer}
        submit={handleAddCustomer}
      />
      <div className="h-10">
        <Search
          textColor={"text-white"}
          bgColor={"bg-black"}
          placeholder={"Search by product name..."}
        />
      </div>
      <div className="relative flex flex-col md:flex-row grow overflow-auto md:overflow-hidden scrollbar-shown">
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
          <div className="bg-white flex flex-col rounded-tl-lg rounded-tr-lg md:rounded-tr-none h-full relative">
            <CashierRightPanelTop
              addCustomer={openAddCustomerModal}
              activeCustomerData={activeCustomerData}
              clearCustomer={() => {
                setCustomerId("");
                setActiveCustomerData("");
                clearCart();
              }}
              clear={clearCart}
            />
            <CashierDataInput
              dataCashier={cart}
              activeCustomerData={activeCustomerData}
              deleteData={prepareDeleteData}
              editData={prepareEditData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;
