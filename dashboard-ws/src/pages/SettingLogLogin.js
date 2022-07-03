import {useEffect, useState} from "react";
import TabTitle from "../utils/GeneralFunction";
import axios from "axios";
import Pagination from "../components/Pagination";
import TableLoglogin from "../components/TableLoglogin";
import Session from "../Session";

const SettingLogLogin = () => {
  TabTitle("Log - Kato Haircut");
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/admin/login-activities${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`, Session()
      );
      setTableData(pageData.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      console.log(Session());
      const AllData = await axios.get(
        `https://api.kattohair.com/api/admin/login-activities${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`, Session()
      );
      setTableCount(AllData.data.meta.total);
      setItemsPerPage(AllData.data.meta.per_page);
    } catch (err) {
      console.log(err);
    }
  };

  const getItemsPerPage = async (page = currentTablePage, search = "") => {
    try {
      const CountPerPage = await axios.get(
        `https://api.kattohair.com/api/admin/login-activities${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`, Session()
      );
      setItemsPerPage(CountPerPage.data.meta.per_page);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    getTotalCount();
    getItemsPerPage();
  }, []);

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  return (
    <div className="w-full flex flex-col grow overflow-ayto scrollbar-shown">
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
      {tableCount ? (
          <>
            <TableLoglogin
              tableData={tableData}
            />
            <Pagination
              maxPage={Math.ceil(tableCount / itemsPerPage)}
              currentPage={currentTablePage}
              showTablePage={showTablePage}
            />
          </>
        ) : (
          <p className="w-full text-black">Waiting for Data</p>
        )}
      </div>
    </div>
  )
};

export default SettingLogLogin;