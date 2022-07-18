import axios from "axios";
import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import DropdownMenuExport from "../components/DropdownMenuExport";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TabTitle from "../utils/GeneralFunction";
import Session from "../Session";
import FilterByDate from "../components/FilterByDate";
import TableEmployeeSingle from "../components/TableEmployeeSingle";
import {utils, writeFileXLSX} from "xlsx";

const EmployeeSingle = () => {
  const {state} = useLocation();
  const {employeeId} = state;

  const [profileEmployee, setProfileEmployee] = useState("");
  const [salaryEmployee, setSalaryEmployee] = useState("");

  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const capitalizeEachWord = (sentence) => {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };

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

  const fetchProfileEmployee = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/employees/${employeeId}`,
        Session()
      );
      setProfileEmployee(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSalaryEmployee = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/orders/employee/${employeeId}`,
        Session()
      );
      setSalaryEmployee(data);
      setTableData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfileEmployee();
    fetchSalaryEmployee();
  }, []);

  TabTitle(`${profileEmployee?.name} - Katto Haircut`);

  const exportAll = () => {
    // console.log("you click export");
    const headings = [
      [
        "ID",
        "Transaction ID",
        "Product Name",
        "Sub Total",
        "Total",
        "Commission Type",
        "Commission",
        "Fee",
        "Date & Time",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(tableData);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, tableData, {origin: "A2", skipHeader: true});
    utils.book_append_sheet(wb, ws, "Employee Data");
    writeFileXLSX(wb, "Employee Detail Data.xlsx");
  };

  const printAll = () => {
    // console.log("you click print");
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const closeAll = () => {};

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <div className="flex flex-row">
        <BackButton />
      </div>
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div className="basis-full">
          <div className="bg-white relative rounded-lg overflow-hidden flex h-full flex-col p-3">
            {salaryEmployee && profileEmployee && (
              <div className="flex flex-row justify-between sm:justify-start font-nunito-sans my-2 w-full">
                <div className="flex flex-col md:flex-row md:gap-10">
                  <div className="flex flex-col">
                    <h1 className="text-black">{profileEmployee?.name}</h1>
                    <h1 className="text-gray-400 font-semibold text-md">
                      {profileEmployee?.code}
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-black">
                      {capitalizeEachWord(profileEmployee?.job_name)}
                    </h1>
                    <h1 className="text-green-500 font-semibold text-2xl">
                      Rp{addDots(salaryEmployee?.salary)}
                    </h1>
                  </div>
                </div>
                <DropdownMenuExport
                  export={exportAll}
                  print={printAll}
                  close={closeAll}
                />
              </div>
            )}
            <div
              id="noprint"
              className="flex flex-col md:flex-row md:gap-2 border-t mb-2 pt-2"
            >
              <Search
                textColor={"text-black"}
                bgColor={"bg-white"}
                placeholder={"Search by product name..."}
              />
              <FilterByDate />
            </div>
            <div
              id="printArea"
              className="bg-white relative rounded-lg overflow-y-auto scrollbar-shown flex h-full flex-col mb-8"
            >
              <TableEmployeeSingle tableData={tableData} />
            </div>
            <Pagination
              maxPage={Math.ceil(tableCount / itemsPerPage)}
              currentPage={currentTablePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSingle;
