import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const ChartBar = ({dataChart, labelA, labelB}) => {
  const [data, setData] = useState();

  const statsData = {
    labels: data?.map((data) => data.label),
    datasets: [
      {
        label: "Past",
        data: data?.map((data) => data.yesterday),
        backgroundColor: "#7388A95A",
        borderColor: "#00000000",
      },
      {
        label: "Present",
        data: data?.map((data) => data.today),
        backgroundColor: "#147AD6",
        borderColor: "#00000000",
      },
    ],
  };

  const optData = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  useEffect(() => {
    setData(dataChart);
  });

  return <Bar data={statsData} width={100} height={100} options={optData} />;
};

export default ChartBar;
