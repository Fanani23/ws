import {CashierSample} from "../data/CashierSample";
import {MdDeleteOutline, MdClose} from "react-icons/md";
import success from "../img/payment-success.png";
import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import BackButton from "../components/BackButton";
import Session from "../Session";
import {useLocation} from "react-router-dom";
import axios from "axios";

const CashierSingle = () => {
  // const {state} = useLocation();
  const id = 19;
  // const [inputNumber, setInputNumber] = useState();

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const closeConfirmationModal = () => {
    setOpenConfirmation(false);
  };
  const openConfirmationModal = () => {
    setOpenConfirmation(true);
  };

  const [cart, setCart] = useState({});

  const getCartData = async () => {
    try {
      const {data} = await axios.get(
        "https://api.kattohair.com/api/cashier/create",
        id,
        Session()
      );
      setCart(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const [paid, setPaid] = useState();

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="relative flex flex-none">
        <BackButton />
      </div>
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
                  <h1 className="text-black font-bold">Arini Sukandar</h1>
                  <h2 className="text-gray-500 text-sm">#123</h2>
                </div>
                <button className="p-3 bg-red-500 rounded-lg text-white">
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
            <div className="p-5 flex flex-col grow overflow-hidden">
              <h1 className="text-black text-sm font-semibold">
                Date: 24/07/2022
              </h1>
              <div className="overflow-y-auto scrollbar-shown max-h-72 sm:max-h-full grow">
                <div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
                  <div className="flex">
                    <h1>1</h1>
                    <h2>Hair Cut Woman</h2>
                  </div>
                  <h1>41</h1>
                </div>
                <div className="flex justify-between odd:bg-white even:bg-gray-100 rounded-lg px-3 py-2 text-black">
                  <div className="flex">
                    <h1>1</h1>
                    <h2>Hair Cut Woman</h2>
                  </div>
                  <h1>41</h1>
                </div>
              </div>
              <div className="sticky bottom-0 bg-white">
                <div className="flex justify-between text-black px-3">
                  <h1>Sub Total</h1>
                  <h2>44</h2>
                </div>
                <div className="flex justify-between text-black px-3">
                  <h1>Discount</h1>
                  <h2>44</h2>
                </div>
                <div className="flex justify-between text-black px-3">
                  <h1>Grand Total</h1>
                  <h2>44</h2>
                </div>
                <div className="flex flex-col rounded-lg bg-gray-100 px-3 py-2 text-black font-bold">
                  <div className="flex justify-between">
                    <h1>Credit</h1>
                    <h1>123</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Balance</h1>
                    <h1>123</h1>
                  </div>
                </div>
                <button
                  className="w-full bg-[#48C134] rounded-lg py-2"
                  onClick={openConfirmationModal}
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
                >
                  <option selected value="1" className="text-black">
                    Cash
                  </option>
                  <option value="2" className="text-black">
                    QRIS
                  </option>
                  <option value="3" className="text-black">
                    BCA DEBIT
                  </option>
                  <option value="4" className="text-black">
                    Other Bank
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierSingle;
