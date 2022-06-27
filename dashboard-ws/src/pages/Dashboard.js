import TabTitle from "../utils/GeneralFunction";
import ChartBar from "../components/ChartBar";
import ChartDoughnut from "../components/ChartDoughnut";
import ChartLine from "../components/ChartLine";
import InfoStats from "../components/InfoStats";
import {useEffect, useState} from "react";
import InfoStatsTransaction from "../components/InfoStatsTransaction";
import InfoStatsVisitor from "../components/InfoStatsVisitor";
import InfoStatsRevenue from "../components/InfoStatsRevenue";
import ChartPieMember from "../components/ChartPieMember";
import axios from "axios";

const Dashboard = () => {
  TabTitle("Dashboard - Kato Haircut");

  const [selectComparison, setSelectComparison] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [dataTotal, setDataTotal] = useState();
  const [dataRevenue, setDataRevenue] = useState([]);
  const [dataRevenueActive, setDataRevenueActive] = useState("week");

  const fetchDataTotal = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/total`
      );
      setDataTotal(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataRevenue = async (parameter = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/revenue${parameter}`
      );
      setDataRevenue(data.data);
      console.log(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  useEffect(() => {
    fetchDataTotal();
    fetchDataRevenue();
  }, []);

  return (
    <>
      <div className="flex flex-wrap overflow-hidden mr-2">
        <div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
          <div className="h-full p-5 bg-primary-500 rounded-lg">
            {dataTotal && (
              <InfoStatsTransaction
                totalTransaction={dataTotal.total_transactions.total}
                growth={dataTotal.total_transactions.growth}
              />
            )}
          </div>
        </div>
        <div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
          <div className="h-full p-5 bg-primary-500 rounded-lg">
            {dataTotal && (
              <InfoStatsRevenue
                totalRevenue={dataTotal.total_revenue.total}
                growth={dataTotal.total_revenue.growth}
              />
            )}
          </div>
        </div>
        <div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
          <div className="h-full p-5 bg-primary-500 rounded-lg">
            {dataTotal && (
              <InfoStats
                totalProfit={dataTotal.total_profit.total}
                growth={dataTotal.total_profit.growth}
              />
            )}
          </div>
        </div>
        <div className="p-1 flex flex-col basis-full md:basis-1/2 lg:basis-1/4">
          <div className="h-full p-5 bg-primary-500 rounded-lg">
            {dataTotal && (
              <InfoStatsVisitor
                totalVisitor={dataTotal.total_visitor.total}
                growth={dataTotal.total_visitor.growth}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex min-h-[23.75rem] flex-wrap overflow-hidden mr-2">
        <div className="p-1 w-1 min-h-[23.75rem] basis-full md:basis-1/2 xl:basis-3/4">
          <div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
            <div className="flex-none p-3">
              <h1 className="text-white font-nunito-sans text-sm font-semibold">
                Data Revenue
              </h1>
              <h1 className="text-white font-nunito-sans text-xs">
                Information data revenue
              </h1>
              <div className="rounded-lg flex w-fit mt-3 border-2 overflow-hidden">
                <button
                  className={`px-2 py-1 ${
                    dataRevenueActive === "week"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataRevenueActive("week");
                    fetchDataRevenue();
                  }}
                >
                  Week
                </button>
                <button
                  className={`px-2 py-1 ${
                    dataRevenueActive === "month"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataRevenueActive("month");
                    fetchDataRevenue("?month=true");
                  }}
                >
                  Month
                </button>
                <button
                  className={`px-2 py-1 ${
                    dataRevenueActive === "year"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataRevenueActive("year");
                    fetchDataRevenue("?year=true");
                  }}
                >
                  Year
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
        <div className="p-1 w-1 min-h-[23.75rem] basis-full md:basis-1/2 xl:basis-1/4">
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
                <ChartPieMember />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[23.75rem] flex-wrap overflow-hidden mr-2">
        <div className="p-1 w-1 min-h-[23.75rem] basis-full md:basis-1/2 xl:basis-2/3">
          <div className="h-full flex flex-col p-2 bg-primary-500 rounded-lg">
            <div className="flex-none p-3">
              <h1 className="text-white font-nunito-sans text-sm font-semibold">
                Data Transaction
              </h1>
              <h1 className="text-white font-nunito-sans text-xs">
                Information data transaction
              </h1>
              <div className="rounded-lg flex w-fit mt-3 border-2 overflow-hidden">
                <button className="bg-white text-black px-2 py-1">Day</button>
                <button className="bg-none text-white px-2 py-1">Week</button>
                <button className="bg-none text-white px-2 py-1">Month</button>
              </div>
            </div>
            <div className="grow lg:p-3">
              <div className="h-full">
                <h1>Here</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 w-1 min-h-[23.75rem] basis-full md:basis-1/2 xl:basis-1/3">
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
                className="bg-transparent border-2 border-white rounded-lg px-2 py-1"
                aria-label="Default select example"
                value={selectComparison}
                onChange={(e) => setSelectComparison(e.target.value)}
              >
                <option selected value="1" className="text-black">
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
