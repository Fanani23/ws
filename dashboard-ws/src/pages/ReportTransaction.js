import axios from "axios";
import {useEffect, useState} from "react";
import DropdownMenuExport from "../components/DropdownMenuExport";
import Pagination from "../components/Pagination";
import ReportNavLink from "../components/ReportNavLink";
import Search from "../components/Search";
import TableReportTransaction from "../components/TableReportTransaction";
import TabTitle from "../utils/GeneralFunction";
import Session from "../Session";
import FilterByDate from "../components/FilterByDate";
import { utils, writeFileXLSX } from "xlsx";

const ReportTransaction = () => {
  TabTitle("Transaction - Kato Haircut");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [revenue, setRevenue] = useState();
  const [profit, setProfit] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState();
  // Detail
  const [detailShow, setDetailShow] = useState(false);
  const [detailOrder, setDetailOrder] = useState();
  const [activeId, setActiveId] = useState();
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  const fetchData = async (
    page = currentTablePage,
    search = "",
    dateStart,
    dateEnd
  ) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/transactions${
        //   search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        // }`, Session()
        dateStart !== "" && dateStart !== undefined
          ? dateEnd !== "" && dateEnd !== undefined
            ? `?from=${dateStart}&to=${dateEnd}`
            : ``
          : ``
        }`,
        Session()
      );
      setTableData(data.data);
      setTableCount(data.meta.total);
      setRevenue(data.total_revenue);
      setProfit(data.total_profit);
      setItemsPerPage(data.meta.per_page);
    } catch (err) {
      console.log(err);
    }
  };

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  const showSearchedTablePage = (searchValue) => {
    setSearchValue(searchValue);
    setCurrentTablePage(1);
    fetchData(currentTablePage, searchValue, dateStart, dateEnd);
  };

  const prepareEnterDateStart = (val) => {
    console.log(val);
    setDateStart(val);
    fetchData(currentTablePage, searchValue, val, dateEnd);
  };

  const prepareEnterDateEnd = (val) => {
    console.log(val);
    setDateEnd(val);
    fetchData(currentTablePage, searchValue, dateStart, val);
  };


  useEffect(() => {
    fetchData();
  }, []);

  const exportAll = () => {
    // console.log("you click export");
    const headings = [[
      "ID",
      "Transaction ID",
      "Employee Name",
      "Product Name",
      "Category Name",
      "Quantity",
      "Sub Total",
      "Total",
      "Commission Type",
      "Commission",
      "Fee",
      "Profit",
      "Date & Time"
    ]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(tableData);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, tableData, {origin: "A2", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Report Data");
    writeFileXLSX(wb, "Report Transaction Data.xlsx");
  };

  const printAll = () => {
    // console.log("you click print");
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const closeAll = () => {
    console.log("you click close");
  };

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="flex flex-col md:flex-row">
        <ReportNavLink />
        <DropdownMenuExport
          export={exportAll}
          print={printAll}
          close={closeAll}
        />
      </div>
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
                  <h1 className="text-black">Total Profit</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{profit}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row border-t p-3">
              <Search
                textColor={"text-black"}
                bgColor={"bg-white"}
                placeholder={"Search by product name..."}
                searchValue={searchValue}
                setSearchValue={showSearchedTablePage}
              />
              <FilterByDate
                  dateStart={dateStart}
                  setDateStart={prepareEnterDateStart}
                  dateEnd={dateEnd}
                  setDateEnd={prepareEnterDateEnd}
                />
            </div>
            <div className="p-3 flex flex-col justify-center px-3 py-1">
              <div id="printArea" className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3 mb-8">
                <TableReportTransaction tableData={tableData} />
              </div>
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

export default ReportTransaction;
