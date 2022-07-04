import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import DropdownMenuExport from "../components/DropdownMenuExport";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TabTitle from "../utils/GeneralFunction";
import { Link } from "react-router-dom";
import Session from "../Session";
import ModalDetailCustomersDetail from "./ModalDetailCustomersDetail";
import TableCustomersDetail from "./TableCustomersDetail";

const CustomerDetail = () => {
    
    // Modal
    const [openDetailCustomers, setOpenDetailCustomers] = useState(false);
    const closeDetailCustomersModal = () => setOpenDetailCustomers(false);
    const openDetailCustomersModal = () => setOpenDetailCustomers(true);
    // Table & Pagination
    const [tableData, setTableData] = useState([]);
    const [tableCount, setTableCount] = useState(null);
    const [currentTablePage, setCurrentTablePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    // Detail
    const [detailShow, setDetailShow] = useState(false);
    const [activeId, setActiveId] = useState();
    const [detailCustomer, setDetailCustomer] = useState();
    // Fetch Data Table
    const fetchData = async (page = currentTablePage, search = "") => {
        try {
          const pageData = await axios.get(
            `https://api.kattohair.com/api/orders/customer${
              search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
            }`,
            Session()
          );
          setTableData(pageData.data.data);
        } catch (err) {
          console.log(err);
        }
    };
    
    // Get Total Count
    const getTotalCount = async (page = currentTablePage, search = "") => {
        try {
          const AllData = await axios.get(
            `https://api.kattohair.com/api/orders/customer${
              search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
            }`,
            Session()
          );
          setTableCount(AllData.data.meta.total);
        } catch (err) {
          console.log(err);
        }
    };
	
    // Get Items per Page
    const getItemsPerPage = async (page = currentTablePage, search = "") => {
        try {
          const CountPerPage = await axios.get(
            `https://api.kattohair.com/api/customers${
              search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
            }`,
            Session()
          );
          setItemsPerPage(CountPerPage.data.meta.per_page);
        } catch (err) {
          console.log(err);
        }
    };

    // Use effect
    useEffect(() => {
        fetchData();
        getTotalCount();
        getItemsPerPage();
    }, []);

    const showTablePage = (page) => {
        setCurrentTablePage(page);
        fetchData(page);
    };

    // Fetch detail data
    const fetchDetailCustomersData = async (id) => {
        try {
            const {data} = await axios.get(
              `https://api.kattohair.com/api/customers/${id}`,
              Session()
            );
            setDetailCustomer(data.data);
          } catch (err) {
            console.log(err);
          }
    };

    const detailData = (id) => {
        if (activeId === id) {
            setDetailShow(!detailShow);
          } else {
            fetchDetailCustomersData(id);
            setActiveId(id);
            setDetailShow(true);
          }
    };

	return (
		<div className="flex flex-col h-full font-noto-sans">
            <ModalDetailCustomersDetail
                show={openDetailCustomers}
                close={closeDetailCustomersModal}
            />
                <div className="bg-white rounded-lg overflow-hidden flex h-full flex-col">
                    <div className="px-5 py-3">
                        <div className="flex flex-row p-3">
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <h1 style={{fontWeight: 'bold'}} className="text-black font-bold text-lg mt-1 mb-2 mr-20" >
                                        {detailCustomer.name}
                                    </h1>
                                    <h1 className="text-gray-400 font-semibold text-md">
                                        {detailCustomer.code}
                                    </h1>
                                    <h5 style={{fontWeight: 'bold'}} className="text-black text-lg mt-6">
                                        Order History
                                    </h5>	
                                </div>
                                <div className="text-black font-bold text-lg mt-1 ml-60">
                                    <h1 style={{fontWeight: 'bold'}} className="text-black">
                                        {(detailCustomer.membership.toUpperCase())}
                                    </h1>
                                </div>
                                <div className="flex flex-row">
                                    <DropdownMenuExport/>
                                </div>
                            </div>
                            {tableCount ? (
                                <>
                                    <TableCustomersDetail
                                        tableData={tableData}
                                        // detailData={detailData}
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
                    {detailCustomer && detailShow && (
                        <div className="basis-full md:mt-0 md:ml-2 md:basis-1/2 lg:basis-2/6 mt-2">
                            <CustomerDetail detailCustomer={detailCustomer}/>
                        </div>
                    )}
                </div>
		</div>
	);
};

export default CustomerDetail;
