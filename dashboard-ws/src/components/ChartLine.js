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
import {useEffect} from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLine = ({dataChart, label}) => {
  const [data, setData] = useState();

  const statsData = {
    labels: data?.map((data) => data.label),
    datasets: [
      {
        label: label,
        data: data?.map((data) => parseInt(data.count)),
        borderColor: "#147AD6",
      },
    ],
  };

  const optData = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
    scale: {
      ticks: {
        precision: 0,
      },
    },
  };

  useEffect(() => {
    setData(dataChart);
  });

  return (
    <>
      {data && (
        <Line data={statsData} width={100} height={100} options={optData} />
      )}
    </>
  );
};

export default ChartLine;
