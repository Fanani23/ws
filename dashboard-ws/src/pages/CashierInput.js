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
import {Session, getId} from "../Session";
import ModalCreateCustomerCashier from "../components/ModalCreateCustomerCashier";
import ModalAlert from "../components/ModalAlert";
import ModalEditProductCashier from "../components/ModalEditProductCashier";
import {useNavigate} from "react-router-dom";

const getLocalStorageData = JSON.parse(localStorage.getItem("cart") || "[]");

const CashierInput = () => {
  let navigate = useNavigate();
  let userOperator = JSON.parse(localStorage.getItem("user"));
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
  const closeAlertModal = () => {
    setOpenAlert(false);
    setMessage("");
  };
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
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [totalDiscountCart, setTotalDiscountCart] = useState(0);
  // edit
  const [productIndex, setProductIndex] = useState();
  const [editProduct, setEditProduct] = useState();
  const [stylistEdit, setStylistEdit] = useState("");
  const [discountTypeEdit, setDiscountTypeEdit] = useState();
  const [discountValueEdit, setDiscountValueEdit] = useState();
  // old customer
  const [categoryCustomer, setCategoryCustomer] = useState("new");
  const [activeCustomerData, setActiveCustomerData] = useState();
  // new customer
  const [newCustomerBirthday, setNewCustomerBirthday] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerPhone, setNewCustomerPhone] = useState(0);
  const [newCustomerMembership, setNewCustomerMembership] = useState("");
  // old and new customer
  const [customerId, setCustomerId] = useState("");
  const [dataCustomer, setDataCustomer] = useState([]);

  const [message, setMessage] = useState("");

  const fetchCategoryData = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`,
        Session()
      );
      setDataCategory(data.data);
    } catch (err) {
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
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
      setDataProduct(data.data);
    } catch (err) {
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
    }
  };

  const createNewCustomer = async (e) => {
    // e.preventDefault();
    try {
      await axios
        .post(
          "https://api.kattohair.com/api/customers/create",
          {
            birthday: newCustomerBirthday,
            phone: newCustomerPhone,
            name: newCustomerName,
            membership: newCustomerMembership,
          },
          Session()
        )
        .then((response) => {
          setActiveCustomerData(response.data.data);
          setCustomerId(response.data.data.id);
        });
    } catch (err) {
      closeAddCustomerModal();
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
    }
  };

  const handleAddCustomer = (val) => {
    val.preventDefault();
    if (categoryCustomer === "new") {
      createNewCustomer();
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
          product_price_unformat: selectProduct.price_unformat,
          service_discount_type: discountType,
          service_discount_amount: parseInt(discountValue),
        },
      ]);
      setStylist("");
    } catch (err) {
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't get data");
      }
      setOpenAlert(true);
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
      product_price_unformat: data[productIndex].product_price_unformat,
      service_discount_type: discountTypeEdit,
      service_discount_amount: discountValueEdit,
    };
    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);
  };

  const prepareDeleteData = (val) => {
    let data = JSON.parse(localStorage.getItem("cart"));
    data.splice(val, 1);
    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);
  };

  const postCart = async () => {
    try {
      await axios
        .post(
          "https://api.kattohair.com/api/cashier/create",
          {
            user_id: getId(),
            customer_id: parseInt(customerId),
            discount_type: "percent",
            discount_amount: "",
            coupon_type: "nominal",
            coupon_amount: "",
            service_items: JSON.parse(localStorage.getItem("cart")),
          },
          Session()
        )
        .then(() => clearCart());
    } catch (err) {
      if (!err?.response) {
        setMessage("No Server Response");
      } else if (err.response?.status === 401) {
        setMessage("Unauthorized, please login again!");
      } else {
        setMessage("Can't post data");
      }
      setOpenAlert(true);
    }
  };

  const prepareConfirmPayment = () => {
    postCart();
    navigate("/cashier/confirmation");
  };

  const clearCart = () => {
    setCart([]);
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

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart"));
    let totalPrice = 0;
    data.forEach((val) => {
      totalPrice += val.product_price_unformat;
    });
    setTotalPriceCart(totalPrice);
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
        // new customer
        birthdayValue={newCustomerBirthday}
        setBirthdayValue={setNewCustomerBirthday}
        nameValue={newCustomerName}
        setNameValue={setNewCustomerName}
        phoneValue={newCustomerPhone}
        setPhoneValue={setNewCustomerPhone}
        membershipValue={newCustomerMembership}
        setMembershipValue={setNewCustomerMembership}
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
              prepareConfirmPayment={prepareConfirmPayment}
              totalPrice={totalPriceCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierInput;
