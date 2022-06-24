import TabTitle from "../utils/GeneralFunction";
import {ProductSample} from "../data/ProductSample";
import {CashierSample} from "../data/CashierSample";
import {
  MdSearch,
  MdAdd,
  MdReplay,
  MdDeleteOutline,
  MdOutlineModeEditOutline,
  MdClose,
} from "react-icons/md";
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Search from "../components/Search";
import CashierCategoryList from "../components/CashierCategoryList";
import CashierProductList from "../components/CashierProductList";
import CashierRightPanel from "../components/CashierRightPanel";
import axios from "axios";
import {useEffect} from "react";

const Cashier = () => {
  TabTitle("Cashier - Kato Haircut");
  // search
  const [dataCategory, setDataCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [productId, setProductId] = useState("All");
  const [dataProduct, setDataProduct] = useState([]);

  const fetchCategoryData = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/all`
      );
      setDataCategory(data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const fetchSpecificCategoryProduct = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/products/categories/${id}`
      );
      setDataProduct(data.data);
      console.log(data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const fetchAllCategoryProduct = async () => {
    try {
      const {data} = await axios.get(`https://api.kattohair.com/api/products`);
      setDataProduct(data.data);
      console.log(data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const handleChangeCategory = (val) => {
    if (productId !== val) {
      setProductId(val);
      productId !== "All"
        ? fetchSpecificCategoryProduct(val)
        : console.log("All");
    }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchAllCategoryProduct();
  }, []);

  return (
    <div className="flex flex-col h-full font-nunito-sans">
      <div className="h-10">
        <Search
          textColor={"text-white"}
          bgColor={"bg-black"}
          placeholder={"Search by product name..."}
        />
      </div>
      <div className="flex flex-col relative md:flex-row grow overflow-auto scrollbar-shown">
        <div className="flex flex-col basis-full md:relative md:overflow-x-auto md:basis-1/2 lg:basis-4/6">
          <CashierCategoryList
            dataCategory={dataCategory}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            handleChangeCategory={handleChangeCategory}
          />
          <p className="text-white">{currentCategory}</p>
          {/* <CashierProductList dataProduct={dataProduct} /> */}
        </div>
        <div className="flex flex-col basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
          {/* <CashierRightPanel /> */}
        </div>
      </div>
    </div>
  );
};

export default Cashier;
