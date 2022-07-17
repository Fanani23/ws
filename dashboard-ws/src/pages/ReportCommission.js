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
import FilterByDate from "../components/FilterByDate";
import {utils, writeFileXLSX} from "xlsx";

const ReportCommission = () => {
  TabTitle("Commission - Kato Haircut");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [revenue, setRevenue] = useState();
  const [commission, setCommission] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const fetchData = async (
    page = currentTablePage,
    search = "",
    dateStart,
    dateEnd
  ) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/transactions${
          search !== "" && search !== undefined
            ? `?searchCode=${search}`
            : dateStart !== "" && dateStart !== undefined
            ? dateEnd !== "" && dateEnd !== undefined
              ? `?from=${dateStart}&to=${dateEnd}`
              : `?page=${page}`
            : `?page=${page}`
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
    const headings = [
      [
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
        "Date & Time",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(tableData);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, tableData, {origin: "A2", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Report Data");
    writeFileXLSX(wb, "Report Commission Data.xlsx");
  };

  const printAll = () => {
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const closeAll = () => {
    console.log("you click close");
  };

  const handleSearchValue = (val) => {
    setSearchValue(val);
    setDateStart("");
    setDateEnd("");
    fetchData(currentTablePage, val, dateStart, dateEnd);
  };

  const handleFilterDateStart = (val) => {
    setDateStart(val);
    setSearchValue("");
    fetchData(currentTablePage, searchValue, val, dateEnd);
  };

  const handleFilterDateEnd = (val) => {
    setDateEnd(val);
    setSearchValue("");
    fetchData(currentTablePage, searchValue, dateStart, val);
  };

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="flex flex-col md:flex-row overflow-y-hidden overflow-x-auto scrollbar-hide min-h-[3rem]">
        <ReportNavLink />
      </div>
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div className="basis-full md:basis-2/2 lg:basis-6/6">
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            <div className="flex flex-row my-2 justify-between">
              <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5">
                <div className="flex flex-col">
                  <h1 className="text-black">Total Revenue</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{revenue}
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black">Total Commission</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{commission}
                  </h1>
                </div>
              </div>
              <DropdownMenuExport
                export={exportAll}
                print={printAll}
                close={closeAll}
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 border-t pt-4 my-2">
              <Search
                textColor={"text-black"}
                bgColor={"bg-white"}
                placeholder={"Search by id..."}
                searchValue={searchValue}
                setSearchValue={handleSearchValue}
              />
              <FilterByDate
                dateStart={dateStart}
                setDateStart={handleFilterDateStart}
                dateEnd={dateEnd}
                setDateEnd={handleFilterDateEnd}
              />
            </div>
            <div
              id="printArea"
              className="bg-white relative rounded-lg overflow-y-auto scrollbar-shown flex h-full flex-col my-2"
            >
              <TableReportCommission tableData={tableData} />
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
  );
};

export default ReportCommission;
