import React, {useEffect, useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const ChartDoughnut = ({chartData}) => {
  const [data, setData] = useState();

  const statsData = {
    labels: data?.map((data) => data.category),
    datasets: [
      {
        label: "Membership",
        data: data?.map((data) => data.count),
        backgroundColor: ["#7388A95A"],
        borderColor: "#333340",
      },
    ],
  };

  const optData = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    setData(chartData);
  });

  return (
    <Doughnut data={statsData} width={100} height={100} options={optData} />
  );
};

export default ChartDoughnut;
