import React from "react";
// Custom Hooks
import useFetch from "./../../hook/useFetch";
// Rechart
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const [chartData, setChartData] = useFetch("chartData.json");
  console.log(chartData);
  return (
    <React.Fragment>
      <div className="container mx-auto px-5 py-18">
        <h1 className="text-center text-3xl font-bold text-green-500 py-5">
          MONTH WISE SELLS
        </h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="container mx-auto px-5 py-18">
        <h1 className="text-center text-3xl font-bold text-green-500 py-5">
          Investment VS Revenue
        </h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
