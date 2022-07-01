import React, {useEffect, useState} from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const ChartPieMember = ({dataChart}) => {
  const capitalizeEachWord = (sentence) => {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };
  const [data, setData] = useState();
  const statsData = {
    labels: data?.map((data) =>
      data.name === "vip"
        ? data.name.toUpperCase()
        : capitalizeEachWord(data.name)
    ),
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
