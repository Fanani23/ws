import DropdownMenuExport from "../components/DropdownMenuExport";
import {useState} from "react";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TabTitle from "../utils/GeneralFunction";
import { Link } from "react-router-dom";
import Session from "../Session";
import ModalHistoryCustomer from "./ModalHistoryCustomer";

const CustomerDetail = ({detailCustomer, historyCustomer}) => {
  // Modal
  const [openHistoryCustomer, setOpenHistoryCustomer] = useState(false);
  const closeHistoryCustomerModal = () => setOpenHistoryCustomer(false);
  const openHistoryCustomerModal = () => setOpenHistoryCustomer(true);

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <ModalHistoryCustomer
        show={openHistoryCustomer}
        close={closeHistoryCustomerModal}
      />
      <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
        <div className="px-5 py-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-lg mt-1 mb-2 mr-20">
                {detailCustomer.name}
              </h1>
              <h1 className="text-gray-400 font-semibold text-md">
                {detailCustomer.code}
              </h1>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <h1 className="text-black font-bold text-lg mr-2">
                  {detailCustomer.membership.toUpperCase()}
                </h1>
                <DropdownMenuExport />
              </div>
            </div>
          </div>
          <h5 className="text-black text-lg mt-6">Order History</h5>
          <table className="mt-5 font-nunito-sans text-xs w-full overflow-y-scroll relative">
              <thead className="sticky top-0">
                <tr className="bg-[#F9F9FC] text-black text-left">
                  <th className="py-2">Transaction ID</th>
                  <th className="py-2">Date & Time</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
              {historyCustomer.map((data) => (
                <tr key={data.id} className="even:bg-[#F9F9FC] text-black">
                  <td className="py-2">{data.code}</td>
                  <td className="py-2">{data.datetime}</td>
                  <td className="py-2">{data.grand_total}</td>
                  <td className="py-2">
                    <button
                      className="ml-2 px-3 py-2 bg-blue-100 hover:bg-blue-400 rounded-lg mr-2"
                      onClick={openHistoryCustomerModal}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
