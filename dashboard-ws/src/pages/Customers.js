import {MdAdd} from "react-icons/md";
import TabTitle from "../utils/GeneralFunction";
import TableCustomers from "../components/TableCustomers";
import Search from "../components/Search";
import axios from "axios";
import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import ModalCreateCustomer from "../components/ModalCreateCustomer";
import ModalEditCustomer from "../components/ModalEditCustomer";
import ModalDeleteCustomer from "../components/ModalDeleteCustomer";
import CustomerDetail from "../components/CustomerDetail";
import Session from "../Session";

const Customers = () => {
  TabTitle("Customers - Kato Haircut");
  // Modal
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const closeAddCustomerModal = () => setOpenAddCustomer(false);
  const openAddCustomerModal = () => setOpenAddCustomer(true);
  const [openEditCustomer, setOpenEditCustomer] = useState(false);
  const closeEditCustomerModal = () => setOpenEditCustomer(false);
  const [openDeleteCustomer, setOpenDeleteCustomer] = useState(false);
  const closeDeleteCustomerModal = () => setOpenDeleteCustomer(false);
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState();
  // Handle Create
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [membership, setMembership] = useState("");
  // Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [codeEdit, setCodeEdit] = useState("");
  const [birthdayEdit, setBirthdayEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [membershipEdit, setMembershipEdit] = useState("");
  // Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");
  // Detail
  const [detailShow, setDetailShow] = useState(false);
  const [detailCustomer, setDetailCustomer] = useState();
  const [activeId, setActiveId] = useState();

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableData(pageData.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
      );
      setTableCount(AllData.data.meta.total);
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    fetchData();
    getTotalCount();
    getItemsPerPage();
  }, []);

  const showTablePage = (page) => {
    setCurrentTablePage(page);
    fetchData(page);
  };

  const showSearchedTablePage = (searchValue) => {
    setSearchValue(searchValue);
    setCurrentTablePage(1);
    fetchData(currentTablePage, searchValue);
    getTotalCount(currentTablePage, searchValue);
    getItemsPerPage(currentTablePage, searchValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      phone: phone,
      birthday: birthday,
      membership: membership,
    });
    try {
      await axios.post(
        "https://api.kattohair.com/api/customers/create",
        {
          birthday: birthday,
          phone: phone,
          name: name,
          membership: membership,
        },
        Session()
      );
      fetchData();
      getTotalCount();
      getItemsPerPage();
      alert("Succesfully add customer, if customer didn't added you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Add customer failed")
    }
  };

  const prepareEdit = (value) => {
    setIdEdit(value);
    getEditData(value);
    setOpenEditCustomer(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers/${value}}`,
        Session()
      );
      setCodeEdit(data.data.code);
      setBirthdayEdit(data.data.birthday);
      setPhoneEdit(data.data.phone);
      setNameEdit(data.data.name);
      setMembershipEdit(data.data.membership);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    let phoneVal = phoneEdit.replace(/-/g, "");
    try {
      await axios.put(
        `https://api.kattohair.com/api/customers/update/${idEdit}`,
        {
          code: codeEdit,
          name: nameEdit,
          phone: phoneVal,
          birthday: birthdayEdit,
          membership: membershipEdit,
        },
        Session()
      );
      fetchData();
      alert("Succesfully update customer data, if data didn't update you must refresh your browser")
    } catch (err) {
      console.log(err);
      alert("Update data failed")
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeleteCustomer(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/customers/${id}}`,
        Session()
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/customers/delete/${idDelete}`,
        Session()
      );
      fetchData();
      getTotalCount();
      alert("Succesfully delete customer")
    } catch (err) {
      console.log(err);
      alert("Delete customer failed")
    }
  };

  const fetchDetailData = async (id) => {
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
      fetchDetailData(id);
      setActiveId(id);
      setDetailShow(true);
    }
  };

  return (
    <div className="flex flex-col h-full font-noto-sans">
      <ModalCreateCustomer
        show={openAddCustomer}
        close={closeAddCustomerModal}
        birthdayValue={birthday}
        setBirthdayValue={setBirthday}
        nameValue={name}
        setNameValue={setName}
        membershipValue={membership}
        setMembershipValue={setMembership}
        phoneValue={phone}
        setPhoneValue={setPhone}
        submit={handleSubmit}
      />
      <ModalEditCustomer
        show={openEditCustomer}
        close={closeEditCustomerModal}
        birthdayEditValue={birthdayEdit}
        setBirthdayEditValue={setBirthdayEdit}
        nameEditValue={nameEdit}
        setNameEditValue={setNameEdit}
        membershipEditValue={membershipEdit}
        setMembershipEditValue={setMembershipEdit}
        phoneEditValue={phoneEdit}
        setPhoneEditValue={setPhoneEdit}
        submit={handleEdit}
      />
      <ModalDeleteCustomer
        show={openDeleteCustomer}
        close={closeDeleteCustomerModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="w-full flex flex-col mt-3 md:flex-row grow overflow-auto scrollbar-shown">
        <div
          className={`
          basis-full${detailShow ? " md:basis-1/2 lg:basis-4/6" : ""}`}
        >
          <div className="bg-white relative rounded-lg overflow-y-auto scrollbar-shown flex h-full flex-col p-3">
            <div className="flex mt-2 relative">
              <Search
                textColor={"text-black"}
                bgColor={"bg-white"}
                placeholder={"Search by customers name..."}
                searchValue={searchValue}
                setSearchValue={showSearchedTablePage}
              />
              <button
                type="submit"
                className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
                onClick={openAddCustomerModal}
              >
                <MdAdd className="text-white mr-2" />
                <span>Add Member</span>
              </button>
            </div>
            {tableCount ? (
              <>
                <TableCustomers
                  tableData={tableData}
                  editRow={prepareEdit}
                  deleteRow={prepareDelete}
                  detailData={detailData}
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
            <CustomerDetail detailCustomer={detailCustomer} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
