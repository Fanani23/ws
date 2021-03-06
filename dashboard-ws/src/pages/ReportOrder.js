import ReportNavLink from "../components/ReportNavLink";
import TabTitle from "../utils/GeneralFunction";
import TableOrder from "../components/TableOrder";
import Search from "../components/Search";
import DropdownMenuExport from "../components/DropdownMenuExport";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import ReportOrderDetail from "../components/ReportOrderDetail";
import Session from "../Session";
import FilterByDate from "../components/FilterByDate";
import {utils, writeFileXLSX} from "xlsx";
import ModalAlert from "../components/ModalAlert";

const ReportOrder = () => {
  TabTitle("Order - Kato Haircut");
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
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState("");
  // Detail
  const [detailShow, setDetailShow] = useState(false);
  const [detailOrder, setDetailOrder] = useState();
  const [activeId, setActiveId] = useState();
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
        `https://api.kattohair.com/api/orders${
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

  const getTotalCount = async (
    page = currentTablePage,
    search = "",
    dateStart,
    dateEnd
  ) => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/orders${
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
      setTableCount(AllData.data.meta.total);
      setItemsPerPage(AllData.data.meta.per_page);
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized, please login again!");
      } else {
        setErrorMsg("Can't get data");
      }
      setOpenAlert(true);
      console.log(err);
    }
  };

  const fetchDetailData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/orders/${id}`,
        Session()
      );
      setDetailOrder(data.data);
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

  const exportAll = () => {
    // console.log("you click export");
    const headings = [
      [
        "ID",
        "Name Member",
        "No Transaction",
        "Discount Type",
        "Discount Ammount",
        "Coupon Type",
        "Coupon Ammount",
        "Sub Total",
        "Discount Total",
        "Total",
        "Method",
        "Status",
        "Date & Time",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(tableData);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, tableData, {origin: "A4", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Report Data");
    writeFileXLSX(wb, "Report Order Data.xlsx");
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

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  const showSearchedTablePage = (searchValue) => {
    setSearchValue(searchValue);
    setCurrentTablePage(1);
    setDateStart("");
    setDateEnd("");
    fetchData(currentTablePage, searchValue, dateStart, dateEnd);
  };

  const detailData = (id) => {
    if (activeId === id) {
      setDetailShow(!detailShow);
    } else {
      fetchDetailData(id);
      setActiveId(id);
      setDetailShow(true);
    }
  };

  const printDetailOrder = () => {
    // console.log("You want to print from", id);
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const prepareEnterDateStart = (val) => {
    setDateStart(val);
    fetchData(currentTablePage, searchValue, val, dateEnd);
  };

  const prepareEnterDateEnd = (val) => {
    setDateEnd(val);
    fetchData(currentTablePage, searchValue, dateStart, val);
  };

  useEffect(() => {
    fetchData();
    getTotalCount();
  }, []);

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <ModalAlert show={openAlert} close={closeAlertModal} message={errorMsg} />
      <div className="flex flex-col md:flex-row overflow-y-hidden overflow-x-auto scrollbar-hide min-h-[3rem]">
        <ReportNavLink />
      </div>

      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div
          className={`${
            detailShow ? "md:basis-1/2 lg:basis-4/6" : ""
          } basis-full`}
        >
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            <div className="flex flex-row justify-between sm:justify-start font-nunito-sans my-2 w-full">
              <div className="flex flex-col md:flex-row md:gap-2">
                <Search
                  textColor={"text-black"}
                  bgColor={"bg-white"}
                  placeholder={"Search by no transaction..."}
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
              <DropdownMenuExport
                export={exportAll}
                print={printAll}
                close={closeAll}
              />
            </div>
            {tableData[0] ? (
              <>
                <div
                  id="printArea"
                  className="bg-white relative rounded-lg overflow-y-auto scrollbar-shown flex h-full flex-col mb-8"
                >
                  <TableOrder tableData={tableData} detailData={detailData} />
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
        {detailOrder && detailShow && (
          <div className="basis-full md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6 mt-2">
            <ReportOrderDetail
              detailOrder={detailOrder}
              print={printDetailOrder}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportOrder;
