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

const Customers = () => {
  TabTitle("Customers - Kato Haircut");
  // modal
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const closeAddCustomerModal = () => setOpenAddCustomer(false);
  const openAddCustomerModal = () => setOpenAddCustomer(true);
  const [openEditCustomer, setOpenEditCustomer] = useState(false);
  const closeEditCustomerModal = () => setOpenEditCustomer(false);
  const [openDeleteCustomer, setOpenDeleteCustomer] = useState(false);
  const closeDeleteCustomerModal = () => setOpenDeleteCustomer(false);
  // table and pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // search
  const [searchValue, setSearchValue] = useState();
  // handle create
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [membership, setMembership] = useState("");
  // handle edit
  const [idEdit, setIdEdit] = useState("");
  const [birthdayEdit, setBirthdayEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [membershipEdit, setMembershipEdit] = useState("");
  // handle delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setTableData(pageData.data.data);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getTotalCount = async (page = currentTablePage, search = "") => {
    try {
      const AllData = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setTableCount(AllData.data.meta.total);
    } catch (err) {
      console.log("error in fetching table data", err);
    }
  };

  const getItemsPerPage = async (page = currentTablePage, search = "") => {
    try {
      const CountPerPage = await axios.get(
        `https://api.kattohair.com/api/customers${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`
      );
      setItemsPerPage(CountPerPage.data.meta.per_page);
    } catch (err) {
      console.log("error in fetching table data", err);
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
    try {
      await axios.post("https://api.kattohair.com/api/customers/create", {
        name,
        phone,
        birthday,
        membership,
      });
      fetchData();
      getTotalCount();
      getItemsPerPage();
    } catch (err) {
      console.log(err);
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
        `https://api.kattohair.com/api/customers/${value}}`
      );
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
    try {
      await axios.put(
        `https://api.kattohair.com/api/customers/update/${idEdit}`,
        {
          birthday: birthdayEdit,
          phone: phoneEdit,
          name: nameEdit,
          membership: membershipEdit,
        }
      );
      fetchData();
    } catch (err) {
      console.log(err);
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
        `https://api.kattohair.com/api/customers/${id}}`
      );
      setNameDelete(data.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.kattohair.com/api/customers/delete/${idDelete}`
      );
      fetchData();
      getTotalCount();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateCustomer
        show={openAddCustomer}
        close={closeAddCustomerModal}
        birthdayValue={birthday}
        setBirthdayValue={setBirthday}
        name={name}
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
        birthdayValue={birthdayEdit}
        setBirthdayValue={setBirthdayEdit}
        nameValue={nameEdit}
        setNameValue={setNameEdit}
        membershipValue={membershipEdit}
        setMembershipValue={setMembershipEdit}
        phoneValue={phoneEdit}
        setPhoneValue={setPhoneEdit}
        submit={handleEdit}
      />
      <ModalDeleteCustomer
        show={openDeleteCustomer}
        close={closeDeleteCustomerModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
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
            />
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
  );
};

export default Customers;
