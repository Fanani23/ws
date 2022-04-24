import {Switch, Route, Redirect} from "react-router-dom";
import ReportCommission from "components/ReportCommission";
import ReportTransaction from "components/ReportTransaction";

const Report = () => {
	return (
		<>
			<h1>Hello</h1>
			<div>
				<Switch>
					<Route
						exact
						path="/report-commission"
						component={ReportCommission}
					/>
					<Route
						exact
						path="/report-transaction"
						component={ReportTransaction}
					/>
					<Redirect from="*" to="/report-commission" />
				</Switch>
			</div>
		</>
	);
};

export default Report;
