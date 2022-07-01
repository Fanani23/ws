import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import ProductCategory from "./pages/ProductCategory";
import ProductList from "./pages/ProductList";
import ReportOrder from "./pages/ReportOrder";
import ReportTransaction from "./pages/ReportTransaction";
import CustomerSingle from "./pages/CustomerSingle";
import Customers from "./pages/Customers";
import Presensi from "./pages/Presensi";
import Employee from "./pages/Employee";
import EmployeeSingle from "./pages/EmployeeSingle";
import SettingAdmin from "./pages/SettingAdmin";
import SettingLogLogin from "./pages/SettingLogLogin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {useEffect, useState} from "react";
import CashierSingle from "./pages/CashierSingle";
import Jobs from "./pages/Jobs";
import ReportCommission from "./pages/ReportCommission";

const config = {
  headers: {
    "Authorization": "Bearer ",
  }
};

function getConfig() {
  
}

function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setSidebar(true);
    } else if (window.innerWidth < 768) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };

  let sidebarTag;
  let toggleSidebarTag;

  if (window.location.pathname === "/login") {
    sidebarTag = "";
    toggleSidebarTag = "";
  } else {
    sidebarTag = (<Sidebar show={sidebar} />);
    toggleSidebarTag = (<Navbar toggleSidebar={toggleSidebar} />);
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col bg-black h-screen">
        {toggleSidebarTag}
        <div className="flex flex-row h-full mt-20 overflow-hidden">
          {sidebarTag}
          <div className="overflow-y-auto p-2 w-full text-white scrollbar-shown">
            <Routes>
              <Route path="/">
                <Route index element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="cashier">
                  <Route index element={<Cashier />} />
                  <Route path=":transactionId" element={<CashierSingle />} />
                </Route>
                <Route path="product">
                  <Route
                    path="/product"
                    element={<Navigate to="/product/category" replace />}
                  />
                  <Route path="category" element={<ProductCategory />} />
                  <Route path="list" element={<ProductList />} />
                </Route>
                <Route path="report">
                  <Route
                    path="/report"
                    element={<Navigate to="/report/order" replace />}
                  />
                  <Route path="order" element={<ReportOrder />} />
                  <Route path="transaction" element={<ReportTransaction />} />
                  <Route path="commission" element={<ReportCommission />} />
                </Route>
                <Route path="customers">
                  <Route index element={<Customers />} />
                  <Route path=":customerId" element={<CustomerSingle />} />
                </Route>
                <Route path="presensi" element={<Presensi />} />
                <Route path="employee">
                  <Route
                    path="/employee"
                    element={<Navigate to="/employee/list" replace />}
                  />
                  <Route path="jobs" element={<Jobs />} />
                  <Route path="list">
                    <Route index element={<Employee />} />
                    <Route path=":employeeId" element={<EmployeeSingle />} />
                  </Route>
                </Route>
                <Route path="setting">
                  <Route
                    path="/setting"
                    element={<Navigate to="/setting/admin" replace />}
                  />
                  <Route path="admin" element={<SettingAdmin />} />
                  <Route path="log" element={<SettingLogLogin />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
