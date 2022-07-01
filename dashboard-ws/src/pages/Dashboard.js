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
import Session from "../Session";

const Dashboard = () => {
  TabTitle("Dashboard - Kato Haircut");

  const [selectComparison, setSelectComparison] = useState("transaction");
  const [errorMsg, setErrorMsg] = useState();
  const [dataTotal, setDataTotal] = useState();
  const [dataRevenue, setDataRevenue] = useState([]);
  const [dataMembership, setDataMembership] = useState();
  const [dataTransaction, setDataTransaction] = useState();
  const [dataCategoriesPopular, setDataCategoriesPopular] = useState();
  const [dataComparison, setDataComparison] = useState();
  const [dataRevenueActive, setDataRevenueActive] = useState("week");
  const [dataTransactionActive, setDataTransactionActive] = useState("week");
  const [dataComparationActive, setDataComparationActive] = useState("week");
  const [chartBarLabelA, setChartBarLabelA] = useState("Yesterday");
  const [chartBarLabelB, setChartBarLabelB] = useState("Today");

  const fetchDataTotal = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/total`, Session()
      );
      setDataTotal(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataRevenue = async (parameter = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/revenue${parameter}`, Session()
      );
      setDataRevenue(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataMembership = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/membership`, Session()
      );
      setDataMembership(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataCategoriesPopular = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/category`, Session()
      );
      setDataCategoriesPopular(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataTransaction = async (parameter = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/transaction${parameter}`, Session()
      );
      setDataTransaction(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataComparisonTransaction = async (parameter = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/comparison-transaction${parameter}`, Session()
      );
      setDataComparison(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  const fetchDataComparisonRevenue = async (parameter = "") => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/dashboard/comparison-revenue${parameter}`, Session()
      );
      setDataComparison(data.data);
    } catch ({response}) {
      setErrorMsg(response.message);
    }
  };

  useEffect(() => {
    fetchDataTotal();
    fetchDataRevenue();
    fetchDataMembership();
    fetchDataTransaction();
    fetchDataCategoriesPopular();
    fetchDataComparisonTransaction();
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
                type={dataTotal.total_transactions.type}
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
                type={dataTotal.total_revenue.type}
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
                type={dataTotal.total_profit.type}
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
                type={dataTotal.total_visitor.type}
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
                {dataRevenue && (
                  <ChartLine dataChart={dataRevenue} label={"Total Revenue"} />
                )}
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
                {dataMembership && (
                  <ChartPieMember dataChart={dataMembership} />
                )}
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
                <button
                  className={`px-2 py-1 ${
                    dataTransactionActive === "week"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataTransactionActive("week");
                    fetchDataTransaction("");
                  }}
                >
                  Week
                </button>
                <button
                  className={`px-2 py-1 ${
                    dataTransactionActive === "month"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataTransactionActive("month");
                    fetchDataTransaction("?month=true");
                  }}
                >
                  Month
                </button>
                <button
                  className={`px-2 py-1 ${
                    dataTransactionActive === "year"
                      ? "bg-white text-black"
                      : "bg-none text-white"
                  }`}
                  onClick={() => {
                    setDataTransactionActive("year");
                    fetchDataTransaction("?year=true");
                  }}
                >
                  Year
                </button>
              </div>
            </div>
            <div className="grow lg:p-3">
              <div className="h-full">
                {dataTransaction && (
                  <ChartLine
                    dataChart={dataTransaction}
                    label={"Total Transaction"}
                  />
                )}
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
                {dataCategoriesPopular && (
                  <ChartDoughnut chartData={dataCategoriesPopular} />
                )}
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
                Comparation
              </h1>
              <select
                className="bg-transparent border-2 border-white rounded-lg px-2 py-1"
                aria-label="Default select example"
                value={selectComparison}
                onChange={(e) => setSelectComparison(e.target.value)}
              >
                <option selected value="transaction" className="text-black">
                  Transaction
                </option>
                <option value="revenue" className="text-black">
                  Revenue
                </option>
              </select>
            </div>
            <div className="rounded-lg flex mx-2 w-fit border-2 overflow-hidden">
              <button
                className={`px-2 py-1 ${
                  dataComparationActive === "week"
                    ? "bg-white text-black"
                    : "bg-none text-white"
                }`}
                onClick={() => {
                  setDataComparationActive("week");
                  setChartBarLabelA("Yesterday");
                  setChartBarLabelB("Today");
                  if (selectComparison === "transaction") {
                    fetchDataComparisonTransaction();
                  } else if (selectComparison === "revenue") {
                    fetchDataComparisonRevenue();
                  }
                }}
              >
                Week
              </button>
              <button
                className={`px-2 py-1 ${
                  dataComparationActive === "month"
                    ? "bg-white text-black"
                    : "bg-none text-white"
                }`}
                onClick={() => {
                  setDataComparationActive("month");
                  setChartBarLabelA("Past");
                  setChartBarLabelB("Now");
                  if (selectComparison === "transaction") {
                    fetchDataComparisonTransaction("?month=true");
                  } else if (selectComparison === "revenue") {
                    fetchDataComparisonRevenue("?month=true");
                  }
                }}
              >
                Month
              </button>
              <button
                className={`px-2 py-1 ${
                  dataComparationActive === "year"
                    ? "bg-white text-black"
                    : "bg-none text-white"
                }`}
                onClick={() => {
                  setDataComparationActive("year");
                  setChartBarLabelA("Past");
                  setChartBarLabelB("Now");
                  if (selectComparison === "transaction") {
                    fetchDataComparisonTransaction("?year=true");
                  } else if (selectComparison === "revenue") {
                    fetchDataComparisonRevenue("?year=true");
                  }
                }}
              >
                Year
              </button>
            </div>
            <div className="grow lg:p-3">
              <div className="h-full">
                <ChartBar
                  dataChart={dataComparison}
                  labelA={chartBarLabelA}
                  labelB={chartBarLabelB}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
