import CardForDataChart from "components/CardForDataChart";
import CardInfo from "components/CardInfo";
import CardTable from "components/CardTable";
import ChartBar from "components/ChartBar";
import ChartPie from "components/ChartPie";
import {
	MdOutlineShoppingCart,
	MdOutlinePaid,
	MdOutlinePeopleAlt,
	MdOutlineShield,
} from "react-icons/md";

export default function Dashboard() {
	return (
		<>
			<div className="flex flex-wrap">
				<CardInfo
					title="Total Transaction"
					value="$50,000"
					icon={<MdOutlineShoppingCart className="text-[#C14040]" />}
				/>
				<CardInfo
					title="Total Revenue"
					value="$2,000"
					icon={<MdOutlinePaid className="text-[#48C134]" />}
				/>
				<CardInfo
					title="Daily Visitor"
					value="400"
					icon={<MdOutlinePeopleAlt className="text-[#147AD6]" />}
				/>
				<CardInfo
					title="Total Members"
					value="20"
					icon={<MdOutlineShield className="text-[#D6AB14]" />}
				/>
			</div>
			<div className="flex flex-wrap">
				<CardTable
					title="Data Commision"
					alt="Information data commission employee"
				/>
				<CardForDataChart
					title="Membership"
					alt="Here go numbers 40 of 600"
					cName="items-center justify-center"
					chartComponent={<ChartPie />}
				/>
			</div>
			<div className="flex flex-wrap">
				<CardTable
					title="Data Commision"
					alt="Information data commission employee"
				/>
			</div>
			<div className="flex flex-wrap">
				<CardForDataChart
					title="Daily Average"
					alt="15 April - 21 April"
					chartComponent={<ChartBar />}
				/>
				<CardTable
					title="Data Commision"
					alt="Information data commission employee"
				/>
				<CardTable
					title="Data Commision"
					alt="Information data commission employee"
				/>
			</div>
		</>
	);
}
