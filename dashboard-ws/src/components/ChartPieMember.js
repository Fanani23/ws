import React, {useEffect, useState} from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const ChartPieMember = ({dataChart}) => {
  const [data, setData] = useState();
  const statsData = {
    labels: data?.map((data) => data.name),
    datasets: [
      {
        label: "Membership",
        data: data?.map((data) => data.count),
        backgroundColor: ["#147AD6", "#7388A95A"],
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

  return <Pie data={statsData} width={100} height={100} options={optData} />;
};

export default ChartPieMember;
