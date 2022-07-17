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
import {utils, writeFileXLSX} from "xlsx";
import ModalAlert from "../components/ModalAlert";

const ReportTransaction = () => {
  TabTitle("Transaction - Kato Haircut");
  // Modal
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertModal = () => {
    setOpenAlert(false);
    setErrorMsg("");
  };
  const [errorMsg, setErrorMsg] = useState("");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [revenue, setRevenue] = useState();
  const [profit, setProfit] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const fetchData = async (
    page = currentTablePage,
    search = "",
    dateStart,
    dateEnd
  ) => {
    console.log();
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
      setProfit(data.total_profit);
      setItemsPerPage(data.meta.per_page);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Can't get data");
      }
      setOpenAlert(true);
    }
  };

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const exportAll = () => {
    // console.log("you click export");
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
      <ModalAlert show={openAlert} close={closeAlertModal} message={errorMsg} />
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
                  <h1 className="text-black">Total Profit</h1>
                  <h1 className="text-green-500 font-semibold text-2xl">
                    Rp{profit}
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
            {tableData[0] ? (
              <>
                <div
                  id="printArea"
                  className="bg-white relative rounded-lg overflow-y-auto scrollbar-shown flex h-full flex-col my-2"
                >
                  <TableReportTransaction tableData={tableData} />
                </div>
                <Pagination
                  maxPage={Math.ceil(tableCount / itemsPerPage)}
                  currentPage={currentTablePage}
                  showTablePage={showTablePage}
                />
              </>
            ) : (
              <p className="w-full text-black">No result</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTransaction;
