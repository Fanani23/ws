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
import {TransactionReportSample1} from "../data/TransactionReportSample1";
import {useState} from "react";
import ButtonFilterGraph from "../components/ButtonFilterGraph";

const Dashboard = () => {
	TabTitle("Dashboard - Kato Haircut");
	const oldData = 15; // dummy data
	const latestData = 20; // dummy data

	const [selectComparison, setSelectComparison] = useState();

	return (
		<>
			<div className="flex flex-wrap overflow-hidden mr-2">
				<div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
					<div className="h-full p-5 bg-primary-500 rounded-lg">
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
				</div>
				<div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
					<div className="h-full p-5 bg-primary-500 rounded-lg">
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
				</div>
				<div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
					<div className="h-full p-5 bg-primary-500 rounded-lg">
						<InfoStats
							title="Daily Visitor"
							value="400"
							icon={
								<MdOutlinePeopleAlt className="text-[#147AD6]" />
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
				</div>
				<div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
					<div className="h-full p-5 bg-primary-500 rounded-lg">
						<InfoStats
							title="Total Members"
							value="20"
							icon={
								<MdOutlineShield className="text-[#D6AB14]" />
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
				</div>
			</div>
			<div className="flex min-h-[23.75rem] flex-wrap overflow-hidden mr-2">
				<div className="p-1 w-1 basis-full md:basis-1/2 xl:basis-3/4">
					<div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
						<div className="flex-none p-3">
							<h1 className="text-white font-nunito-sans text-sm font-semibold">
								Data Revenue
							</h1>
							<h1 className="text-white font-nunito-sans text-xs">
								Information data revenue
							</h1>
							<div className="rounded-lg flex w-fit mt-3 border-2 overflow-hidden">
								<button className="bg-white text-black px-2 py-1">
									Day
								</button>
								<button className="bg-none text-white px-2 py-1">
									Week
								</button>
								<button className="bg-none text-white px-2 py-1">
									Month
								</button>
							</div>
						</div>
						<div className="grow lg:p-3">
							<div className="h-full">
								<ChartLine />
							</div>
						</div>
					</div>
				</div>
				<div className="p-1 w-1 basis-full md:basis-1/2 xl:basis-1/4">
					<div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
						<div className="flex-none p-3">
							<h1 className="text-white font-nunito-sans text-sm font-semibold">
								Membership
							</h1>
							<h1 className="text-white font-nunito-sans text-xs">
								Here go numbers 40 of total 600
							</h1>
						</div>
						<div className="grow lg:p-3">
							<div className="h-full">
								<ChartPie />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex min-h-[23.75rem] flex-wrap overflow-hidden mr-2">
				<div className="p-1 w-1 basis-full md:basis-1/2 xl:basis-2/3">
					<div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
						<div className="flex-none p-3">
							<h1 className="text-white font-nunito-sans text-sm font-semibold">
								Data Transaction
							</h1>
							<h1 className="text-white font-nunito-sans text-xs">
								Information data transaction
							</h1>
							<div className="rounded-lg flex w-fit mt-3 border-2 overflow-hidden">
								<button className="bg-white text-black px-2 py-1">
									Day
								</button>
								<button className="bg-none text-white px-2 py-1">
									Week
								</button>
								<button className="bg-none text-white px-2 py-1">
									Month
								</button>
							</div>
						</div>
						<div className="grow lg:p-3">
							<div className="h-full">
								<ChartLine />
							</div>
						</div>
					</div>
				</div>
				<div className="p-1 w-1 basis-full md:basis-1/2 xl:basis-1/3">
					<div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
						<div className="flex-none p-3">
							<h1 className="text-white font-nunito-sans text-sm font-semibold">
								Top 5 Transaction Categories
							</h1>
							<h1 className="text-white font-nunito-sans text-xs">
								Data transaction
							</h1>
						</div>
						<div className="grow lg:p-3">
							<div className="h-full">
								<ChartDoughnut />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex min-h-[23.75rem] overflow-hidden mr-2">
				<div className="p-1 w-1 basis-full">
					<div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
						<div className="flex-none flex flex-row items-center p-3">
							<h1 className="text-white font-nunito-sans text-sm mr-3 font-semibold">
								Comparison
							</h1>
							<select
								class="bg-transparent border-2 border-white rounded-lg px-2 py-1"
								aria-label="Default select example"
								value={selectComparison}
								onChange={e =>
									setSelectComparison(e.target.value)
								}
							>
								<option
									selected
									value="1"
									className="text-black"
								>
									Transaction
								</option>
								<option value="2" className="text-black">
									Revenue
								</option>
								<option value="3" className="text-black">
									Membership
								</option>
							</select>
						</div>
						<div className="grow lg:p-3">
							<div className="h-full">
								<ChartBar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
