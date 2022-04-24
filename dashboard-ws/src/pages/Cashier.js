import CardItems from "components/CardItems";
import CashierDetail from "components/CashierDetail";
import DuoFilter from "components/DuoFilter";

const Cashier = () => {
	return (
		<>
			<div className="flex flex-row max-h-screen overflow-hidden">
				<div className="flex flex-col flex-1">
					<DuoFilter />
					<CardItems />
				</div>
				<div className="flex justify-end max-h-screen">
					<CashierDetail />
				</div>
			</div>
		</>
	);
};

export default Cashier;
