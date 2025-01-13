import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js/auto";
import { getLast7Days } from "../../lib/features";
import { display } from "@mui/system";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Legend
);

const labels = getLast7Days();

const lineChartoptions = {
  resposive: true,
  plugin: {
    legend: {
      display: false,
    },
  },
  title: {
    display: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(19, 247, 76, 0.2)",
        bordercolor: "rgba(255,99,132,1)",
      },
    ],
  };
  return <Line data={data} options={lineChartoptions} />;
};

const doughnutChartOptions={
  responsive:true,
  plugins:{
    legend:{
      display:false,
    },
    
  },cutout:100,
}

const DoughnutChart = ({value=[], labels=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats Vs total Messages",
        backgroundColor: ["rgba(19, 247, 76, 0.2)","rgba(255,99,132,1)"],
        borderColor: ["rgba(6, 88, 24, 0.2)","rgb(221, 14, 59)"],
        hoverBackgroundColor: ["green","red"],
        offset:20,
      },
    ],
  };
  return <Doughnut style={{zIndex:10}} data={data} options ={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
