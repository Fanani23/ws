import TabTitle from "../utils/GeneralFunction";
import {useState} from "react";
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
  const [dataProduct, setDataProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState();

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

  const handleChangeCategory = (val) => {
    val !== "All"
      ? fetchSpecificCategoryProduct(val)
      : fetchAllCategoryProduct();
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
          <CashierProductList
            dataProduct={dataProduct}
            setSelectProduct={setSelectProduct}
          />
        </div>
        <div className="flex flex-col basis-full xl:ml-2 md:basis-1/2 lg:basis-2/6">
          {/* <CashierRightPanel /> */}
        </div>
      </div>
    </div>
  );
};

export default Cashier;
