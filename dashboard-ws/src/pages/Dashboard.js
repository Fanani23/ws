import {
	MdTrendingUp,
	MdTrendingDown,
	MdOutlineShoppingCart,
	MdOutlinePaid,
	MdOutlinePeopleAlt,
	MdOutlineShield,
} from "react-icons/md";
import TabTitle from "../utils/GeneralFunction";
import ChartBar from "../components/ChartBar";
import ChartDoughnut from "../components/ChartDoughnut";
import ChartLine from "../components/ChartLine";
import ChartPie from "../components/ChartPie";
import InfoStats from "../components/InfoStats";

const Dashboard = () => {
	TabTitle("Dashboard - Kato Haircut");
	const oldData = 15;
	const latestData = 20;

	return (
		<>
			<div className="flex flex-wrap overflow-hidden mx-2">
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
					<InfoStats
						title="Total Transaction"
						value="$50,000"
						icon={
							<MdOutlineShoppingCart className="text-[#C14040]" />
						}
						status={
							latestData > oldData ? (
								<>
									<MdTrendingUp className="text-[#48C134] mr-3" />
									Up From Yesterday
								</>
							) : (
								<>
									<MdTrendingDown className="text-[#C14040] mr-3" />
									Down From Yesterday
								</>
							)
						}
					/>
				</div>
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
					<InfoStats
						title="Total Revenue"
						value="$2,000"
						icon={<MdOutlinePaid className="text-[#48C134]" />}
						status={
							latestData > oldData ? (
								<>
									<MdTrendingUp className="text-[#48C134] mr-3" />
									Up From Yesterday
								</>
							) : (
								<>
									<MdTrendingDown className="text-[#C14040] mr-3" />
									Down From Yesterday
								</>
							)
						}
					/>
				</div>
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
					<InfoStats
						title="Daily Visitor"
						value="400"
						icon={<MdOutlinePeopleAlt className="text-[#147AD6]" />}
						status={
							latestData > oldData ? (
								<>
									<MdTrendingUp className="text-[#48C134] mr-3" />
									Up From Yesterday
								</>
							) : (
								<>
									<MdTrendingDown className="text-[#C14040] mr-3" />
									Down From Yesterday
								</>
							)
						}
					/>
				</div>
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
					<InfoStats
						title="Total Members"
						value="20"
						icon={<MdOutlineShield className="text-[#D6AB14]" />}
						status={
							latestData > oldData ? (
								<>
									<MdTrendingUp className="text-[#48C134] mr-3" />
									Up From Yesterday
								</>
							) : (
								<>
									<MdTrendingDown className="text-[#C14040] mr-3" />
									Down From Yesterday
								</>
							)
						}
					/>
				</div>
			</div>
			<div className="flex flex-wrap overflow-hidden mx-2">
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-1">
					<div className="flex flex-col">
						<h1 className="text-white font-nunito-sans text-sm font-semibold">
							Data Revenue
						</h1>
						<h1 className="text-white font-nunito-sans text-xs">
							Information data revenue
						</h1>
					</div>
					<ChartLine />
				</div>
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col">
					<div className="flex flex-col">
						<h1 className="text-white font-nunito-sans text-sm font-semibold">
							Membership
						</h1>
						<h1 className="text-white font-nunito-sans text-xs">
							Here go numbers 40 of total 600
						</h1>
					</div>
					<ChartPie />
				</div>
			</div>
			<div className="flex flex-wrap overflow-hidden mx-2">
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-1">
					<div className="flex flex-col">
						<h1 className="text-white font-nunito-sans text-sm font-semibold">
							Data Transaction
						</h1>
						<h1 className="text-white font-nunito-sans text-xs">
							Information data transaction
						</h1>
					</div>
					<ChartLine />
				</div>
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col">
					<div className="flex flex-col">
						<h1 className="text-white font-nunito-sans text-sm font-semibold">
							Top 5 Transaction Categories
						</h1>
						<h1 className="text-white font-nunito-sans text-xs">
							Data transaction
						</h1>
					</div>
					<ChartDoughnut />
				</div>
			</div>
			<div className="flex flex-wrap overflow-hidden mx-2">
				<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-1">
					<div className="flex flex-col">
						<div className="flex flex-row">
							<h1 className="text-white font-nunito-sans text-sm font-semibold mr-5">
								Comparison
							</h1>
							<p className="text-sm">Transaction</p>
						</div>
					</div>
					<ChartBar />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
