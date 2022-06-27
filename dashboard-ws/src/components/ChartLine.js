import React, {useState} from "react";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLine = () => {
  const dataChart = [
    {
      date: "2022-06-27",
      label: "Monday",
      count: 520000,
    },
    {
      date: "2022-06-28",
      label: "Tuesday",
      count: 0,
    },
    {
      date: "2022-06-29",
      label: "Wednesday",
      count: 0,
    },
    {
      date: "2022-06-30",
      label: "Thursday",
      count: 0,
    },
    {
      date: "2022-07-01",
      label: "Friday",
      count: 0,
    },
    {
      date: "2022-07-02",
      label: "Saturday",
      count: 0,
    },
    {
      date: "2022-07-03",
      label: "Sunday",
      count: 0,
    },
  ];

  const [statsData, setStatsData] = useState({
    labels: dataChart.map((data) => data.label),
    datasets: [
      {
        label: "Membership",
        data: dataChart.map((data) => data.count),
        borderColor: "#147AD6",
      },
    ],
  });

  const [optData, setOptData] = useState({
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  });

  return (
    <>
      <Line data={statsData} width={100} height={100} options={optData} />
    </>
  );
};

export default ChartLine;
