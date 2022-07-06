import {MdAdd} from "react-icons/md";
import {useEffect, useState} from "react";
import TabTitle from "../utils/GeneralFunction";
import TableAdmin from "../components/TableAdmin";
import axios from "axios";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import ModalCreateAdmim from "../components/ModalCreateAdmin";
import ModalEditAdmin from "../components/ModalEditAdmin";
import ModalDeleteAdmin from "../components/ModalDeleteAdmin";
import Session from "../Session";

const SettingAdmin = () => {
  TabTitle("Admin - Katto Haircut");
  // Modal
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const closeAddAdminModal = () => setOpenAddAdmin(false);
  const openAddAdminModal = () => setOpenAddAdmin(true);
  const [openEditAdmin, setOpenEditAdmin] = useState(false);
  const closeEditAdminModal = () => setOpenEditAdmin(false);
  const [openDeleteAdmin, setOpenDeleteAdmin] = useState(false);
  const closeDeleteAdminModal = () => setOpenDeleteAdmin(false);
  // Table & Pagination
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // Search
  const [searchValue, setSearchValue] = useState();
  // Handle Create
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  //Handle Edit
  const [idEdit, setIdEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [usernameEdit, setUsernameEdit] = useState("");
  const [passwordEdit, setPasswordEdit] = useState("");
  const [roleEdit, setRoleEdit] = useState("");
  // Handle Delete
  const [idDelete, setIdDelete] = useState("");
  const [nameDelete, setNameDelete] = useState("");

  const fetchData = async (page = currentTablePage, search = "") => {
    try {
      const pageData = await axios.get(
        `https://api.kattohair.com/api/admin${
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
        `https://api.kattohair.com/api/admin${
          search !== "" ? `?name=${search}&?page=${page}` : `?page=${page}`
        }`,
        Session()
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
        `https://api.kattohair.com/api/admin${
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
    try {
      await axios.post(
        "https://api.kattohair.com/api/admin/create",
        {
          username: username,
          phone: phone,
          password: password,
          role: role,
        },
        Session()
      );
      fetchData();
      getTotalCount();
      getItemsPerPage();
      alert(
        "Succesfully add admin, if admin data didn't show you must refresh your browser"
      );
    } catch (err) {
      console.log(err);
      alert("Add admin failed");
    }
  };

  const prepareEdit = (value) => {
    setIdEdit(value);
    getEditData(value);
    setOpenEditAdmin(true);
  };

  const getEditData = async (value) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/admin/${value}}`,
        Session()
      );
      setPhoneEdit(data.data.phone);
      setUsernameEdit(data.data.username);
      setPasswordEdit(data.data.password);
      setRoleEdit(data.data.role);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      console.log({
        username: usernameEdit,
        phone: phoneEdit,
        password: passwordEdit,
        role: roleEdit,
      });
      await axios.put(
        `https://api.kattohair.com/api/admin/update/${idEdit}`,
        {
          username: usernameEdit,
          phone: phoneEdit,
          password: passwordEdit,
          role: roleEdit,
        },
        Session()
      );
      fetchData();
      alert(
        "Succesfully update admin, if admin data didn't update you must refresh your browser"
      );
    } catch (err) {
      console.log(err);
      alert("Update admin failed");
    }
  };

  const prepareDelete = (id) => {
    setIdDelete(id);
    getDeleteData(id);
    setOpenDeleteAdmin(true);
  };

  const getDeleteData = async (id) => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/admin/${id}`,
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
        `https://api.kattohair.com/api/admin/delete/${idDelete}`,
        Session()
      );
      fetchData();
      getTotalCount();
      alert("Succesfully delete admin");
    } catch (err) {
      console.log(err);
      alert("Delete admin failed");
    }
  };

  return (
    <div className="w-full flex flex-col grow overflow-auto scrollbar-shown">
      <ModalCreateAdmim
        show={openAddAdmin}
        close={closeAddAdminModal}
        phone={phone}
        setPhoneValue={setPhone}
        username={username}
        setUsernameValue={setUsername}
        password={password}
        setPasswordValue={setPassword}
        role={role}
        setRoleValue={setRole}
        submit={handleSubmit}
      />
      <ModalEditAdmin
        show={openEditAdmin}
        close={closeEditAdminModal}
        phoneEditValue={phoneEdit}
        setPhoneEditValue={setPhoneEdit}
        usernameEditValue={usernameEdit}
        setUsernameEditValue={setUsernameEdit}
        passwordEditValue={passwordEdit}
        setPasswordEditValue={setPasswordEdit}
        roleEditValue={roleEdit}
        setRoleEditValue={setRoleEdit}
        submit={handleEdit}
      />
      <ModalDeleteAdmin
        show={openDeleteAdmin}
        close={closeDeleteAdminModal}
        nameDeleteValue={nameDelete}
        submit={handleDelete}
      />
      <div className="bg-white w-full p-5 rounded-lg overflow-hidden flex h-full flex-col">
        <div className="flex justify-between">
          <Search
            textColor={"text-black"}
            bgColor={"bg-white"}
            placeholder={"Search by name..."}
            searchValue={searchValue}
            setSearchValue={showSearchedTablePage}
          />
          <button
            type="submit"
            className="flex items-center ml-2 mb-2 px-3 py-2 bg-black rounded-lg"
            onClick={openAddAdminModal}
          >
            <MdAdd className="text-white mr-2" />
            <span>Add Admin</span>
          </button>
        </div>
        {tableCount ? (
          <>
            <TableAdmin
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
          <p className="w-full text-black">Waiting for Data</p>
        )}
      </div>
    </div>
  );
};

export default SettingAdmin;
