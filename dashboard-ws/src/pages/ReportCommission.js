import axios from "axios";
import React, {useState} from "react";
import {useEffect} from "react";
import DropdownMenuExport from "../components/DropdownMenuExport";
import Pagination from "../components/Pagination";
import ReportNavLink from "../components/ReportNavLink";
import Search from "../components/Search";
import TabTitle from "../utils/GeneralFunction";
import Session from "../Session";
import TableReportCommission from "../components/TableReportCommission";

const ReportCommission = () => {
  TabTitle("Commission - Kato Haircut");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [revenue, setRevenue] = useState();
  const [commission, setCommission] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/transactions${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableData(data.data);
      setTableCount(data.meta.total);
      setRevenue(data.total_revenue);
      setCommission(data.total_comission);
      setItemsPerPage(data.meta.per_page);
    } catch (err) {
      console.log(err);
    }
  };

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <ReportNavLink />
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div className="basis-full md:basis-2/2 lg:basis-6/6">
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col">
            <div className="flex flex-row p-3">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-black">Total Revenue</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{revenue}
                  </h1>
                </div>
                <div className="flex flex-col ml-10">
                  <h1 className="text-black">Total Commission</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{commission}
                  </h1>
                </div>
              </div>
              <div className="ml-auto">
                <DropdownMenuExport />
              </div>
            </div>
            <div className="flex flex-row border-t p-3">
              <Search
                textColor={"text-black"}
                bgColor={"bg-white"}
                placeholder={"Search by product name..."}
              />
            </div>
            <div className="p-3 flex flex-col justify-center px-3 py-1">
              <TableReportCommission tableData={tableData} />
              <Pagination
                maxPage={Math.ceil(tableCount / itemsPerPage)}
                currentPage={currentTablePage}
                showTablePage={showTablePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCommission;
