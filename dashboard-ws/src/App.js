import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cashier from "./pages/Cashier";
import ProductCategory from "./pages/ProductCategory";
import ProductList from "./pages/ProductList";
import ReportOrder from "./pages/ReportOrder";
import ReportTransaction from "./pages/ReportTransaction";
import CostumerSingle from "./pages/CostumerSingle";
import Costumers from "./pages/Costumers";
import Presensi from "./pages/Presensi";
import Employee from "./pages/Employee";
import EmployeeSingle from "./pages/EmployeeSingle";
import SettingAdmin from "./pages/SettingAdmin";
import SettingLogLogin from "./pages/SettingLogLogin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
	const [sidebar, setSidebar] = useState(true);

	const toggleSidebar = () => {
		return setSidebar(!sidebar);
	};

	return (
		<BrowserRouter>
			<div className="flex flex-col bg-black h-screen">
				<Navbar toggleSidebar={toggleSidebar} />
				<div className="flex flex-row h-full mt-20 overflow-hidden">
					<Sidebar show={sidebar} />
					<div className="overflow-y-auto p-3 w-full text-white scrollbar-shown">
						<Routes>
							<Route path="/">
								<Route index element={<Dashboard />} />
								<Route path="login" element={<Login />} />
								<Route path="cashier" element={<Cashier />} />
								<Route path="product">
									<Route
										index
										element={<ProductCategory />}
									/>
									<Route
										path="category"
										element={<ProductCategory />}
									/>
									<Route
										path="list"
										element={<ProductList />}
									/>
								</Route>
								<Route path="report">
									<Route index element={<ReportOrder />} />
									<Route
										path="order"
										element={<ReportOrder />}
									/>
									<Route
										path="transaction"
										element={<ReportTransaction />}
									/>
								</Route>
								<Route path="costumers">
									<Route index element={<Costumers />} />
									<Route
										path=":costumerId"
										element={<CostumerSingle />}
									/>
								</Route>
								<Route path="presensi" element={<Presensi />} />
								<Route path="employee">
									<Route index element={<Employee />} />
									<Route
										path=":employeeId"
										element={<EmployeeSingle />}
									/>
								</Route>
								<Route path="setting">
									<Route index element={<SettingAdmin />} />
									<Route
										path="admin"
										element={<SettingAdmin />}
									/>
									<Route
										path="log"
										element={<SettingLogLogin />}
									/>
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
