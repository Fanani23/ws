import CardItems from "components/CardItems";
import CashierDetail from "components/CashierDetail";
import FilterCashier from "components/FilterCashier";

const Cashier = () => {
	return (
		<>
			<div className="flex flex-row max-h-screen overflow-hidden">
				<div className="flex flex-col flex-1">
					<FilterCashier />
					<CardItems />
				</div>
				<div className="flex justify-end max-h-screen">
					<CashierDetail />
				</div>
			</div>
		</>
	);
};

/* const Data1 = ["Woman", "Men", "Product"];
const Data2 = ["Color", "Styling", "Waxing", "Extensions", "Design"]; */

export default Cashier;
