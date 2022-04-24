import {Switch, Route, Redirect} from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Cashier from "pages/Cashier";
import Presensi from "pages/Presensi";
import Transaction from "pages/Transaction";
import Report from "pages/Report";
import Costumers from "pages/Costumers";
import Employee from "pages/Employee";
import Settings from "pages/Settings";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import ReportTransaction from "components/ReportTransaction";
import ReportCommission from "components/ReportCommission";

function App() {
	return (
		<>
			<Sidebar />
			<div className="md:ml-64">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/cashier" component={Cashier} />
					<Route exact path="/presensi" component={Presensi} />
					<Route exact path="/transaction" component={Transaction} />
					<Route path="/report" component={Report} />
					<Route exact path="/report-commission" component={ReportCommission} />
					<Route exact path="/report-transaction" component={ReportTransaction} />
					<Route exact path="/costumers" component={Costumers} />
					<Route exact path="/employee" component={Employee} />
					<Route exact path="/settings" component={Settings} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
		</>
	);
}

export default App;
