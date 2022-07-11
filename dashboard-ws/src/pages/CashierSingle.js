import {CashierSample} from "../data/CashierSample";
import {MdDeleteOutline, MdClose} from "react-icons/md";
import success from "../img/payment-success.png";
import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import BackButton from "../components/BackButton";
import Session from "../Session";
import {useLocation} from "react-router-dom";
import axios from "axios";
import ModalAlert from "../components/ModalAlert";

const CashierSingle = () => {
  const navigate = useLocation();
  const [inputNumber, setInputNumber] = useState(150000);
  const [methodPayment, setMethodPayment] = useState("Cash");

  const [openAlert, setOpenAlert] = useState(false);
  const openAlertModal = () => setOpenAlert(true);
  const closeAlertModal = () => setOpenAlert(false);

  // const [openConfirmation, setOpenConfirmation] = useState(false);
  // const closeConfirmationModal = () => {
  //   setOpenConfirmation(false);
  // };
  // const openConfirmationModal = () => {
  //   setOpenConfirmation(true);
  // };

  const [cart, setCart] = useState({});
  const [userId, setUserId] = useState();

  const getCartData = async (val) => {
    try {
      const {data} = await axios.get(
        "https://api.kattohair.com/api/cashier/show",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          params: {
            user_id: val,
          },
        }
      );
      setCart(data.data);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserAdmin = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/me`,
        Session()
      );
      setUserId(data.data.id);
      getCartData(data.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmPayment = async (val) => {
    try {
      await axios.post(
        `https://api.kattohair.com/api/cashier/confirm/${val}`,
        {method: methodPayment},
        Session()
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirmPayment = () => {
    if (methodPayment === null) {
      openAlertModal();
    } else {
      console.log(methodPayment);
      console.log(userId);
      confirmPayment(userId);
    }
  };

  useEffect(() => {
    getUserAdmin();
  }, []);

  const addDots = (nStr) => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "." + "$2");
    }
    return x1 + x2;
  };

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <ModalAlert
        message="Please input the payment method"
        show={openAlert}
        close={closeAlertModal}
      />
      <div className="relative flex flex-none">
        <BackButton />
      </div>
      {cart ? (
        <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown relative">
          <div className="basis-full md:basis-1/2 lg:basis-4/6 relative">
            <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col relative">
              <div className="p-5 flex sticky top-0 justify-between items-center bg-gray-200">
                <div className="flex flex-col">
                  <h1 className="text-gray-500 text-sm">Order ID</h1>
                  <h2 className="text-black font-bold text-lg">{cart.code}</h2>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col mr-0 sm:mr-5">
                    <h1 className="text-black font-bold">
                      {cart.customer_name}
                    </h1>
                    <h2 className="text-gray-500 text-sm">#123</h2>
                  </div>
                  <button className="p-3 bg-red-500 rounded-lg text-white">
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col grow overflow-hidden">
                <h1 className="text-black text-sm font-semibold">
                  Date: {cart.datetime}
                </h1>
                <div className="overflow-y-auto scrollbar-shown max-h-72 sm:max-h-full grow">
                  {cart.service_items?.map((val, index) => (
                    <div
                      className="flex justify-between odd:bg-gray-100 even:bg-white rounded-lg px-3 py-2 text-black"
                      key={val.id}
                    >
                      <div className="flex">
                        <h1 className="mr-2">{index + 1}</h1>
                        <h2>{val.product_name}</h2>
                      </div>
                      <h1>Rp {val.price}</h1>
                    </div>
                  ))}
                </div>
                <div className="sticky bottom-0 bg-white">
                  <div className="flex justify-between text-black px-3">
                    <h1>Sub Total</h1>
                    <h2>Rp {addDots(cart.subtotal)}</h2>
                  </div>
                  <div className="flex justify-between text-black px-3">
                    <h1>Discount</h1>
                    <h2>Rp {addDots(cart.discount_total)}</h2>
                  </div>
                  <div className="flex justify-between text-black px-3">
                    <h1>Grand Total</h1>
                    <h2>Rp {addDots(cart.grand_total)}</h2>
                  </div>
                  <div className="flex flex-col rounded-lg bg-gray-100 px-3 py-2 text-black font-bold">
                    <div className="flex justify-between">
                      <h1>Credit</h1>
                      <h1>Rp {addDots(inputNumber)}</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>Balance</h1>
                      <h1>Rp {addDots(cart.grand_total - inputNumber)}</h1>
                    </div>
                  </div>
                  <button
                    className="w-full bg-[#48C134] rounded-lg py-2"
                    onClick={handleConfirmPayment}
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full mt-2 md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6">
            <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
              <div className="p-8 flex justify-center items-center border-b-2 border-gray-200">
                <h1 className="text-black font-bold text-lg">Payment</h1>
              </div>
              <div className="p-5 flex flex-col grow overflow-y-auto scrollbar-shown">
                <div className="w-full">
                  <h1 className="text-sm text-black font-semibold">
                    Payment Method
                  </h1>
                  <select
                    className="bg-transparent border-2 border-gray w-full text-gray-500 text-sm rounded-lg px-3 py-2"
                    aria-label="Default select example"
                    value={methodPayment}
                    onChange={(e) => setMethodPayment(e.target.value)}
                    defaultValue="Cash"
                  >
                    <option value="Cash" className="text-black">
                      Cash
                    </option>
                    <option value="QRIS" className="text-black">
                      QRIS
                    </option>
                    <option value="BCA" className="text-black">
                      BCA DEBIT
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/cashier/input")
      )}
    </div>
  );
};

export default CashierSingle;
