import React from "react";
import { Helmet } from "react-helmet";
import { incomeData } from "../../data/data";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Dashboard = () => {
  const chartHeights = ["h-20", "h-36", "h-28", "h-48", "h-32", "h-40", "h-56"];

  return (
    <>
      <Helmet>
        <title>Dashboard Admin</title>
      </Helmet>

      <div className="space-y-8 px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              id: 1,
              label: "Total Revenue",
              value: "$416,000",
              delta: "+12%",
              icon: <CurrencyRupeeIcon className="text-6xl!" />,
            },
            {
              id: 2,
              label: "Active Listings",
              value: "24",
              delta: "+3",
              icon: <DirectionsCarIcon className="text-6xl!" />,
            },
            {
              id: 3,
              label: "Units Sold",
              value: "18",
              delta: "+5%",
              icon: <LocalOfferIcon className="text-6xl!" />,
            },
            {
              id: 4,
              label: "Conversion Rate",
              value: "4.2%",
              delta: "+0.8%",
              icon: <BarChartIcon className="text-6xl!" />,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-linear-to-br from-slate-900 via-black to-slate-900 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 text-white transition-transform">
                {item.icon}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {item.label}
              </p>
              <h3 className="text-3xl font-black text-white mt-1">
                {item.value}
              </h3>
              <p className="text-base text-green-500 font-bold mt-2 flex items-center gap-1">
                <ArrowUpwardIcon /> {item.delta}
                <span className="text-slate-500 font-normal ml-1">
                  vs last month
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-10 ">
          <div className="lg:col-span-2 p-8 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl text-white font-bold">Revenue Performance</h3>
              <select className="bg-black text-sm border border-white/10 rounded-lg px-3 py-2 text-slate-400">
                <option>Last 7 Weeks</option>
                <option>Last Quarter</option>
              </select>
            </div>

            {/* Chart */}
            <div className="flex items-end justify-between gap-4 h-80">
              {chartHeights.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex items-end justify-center h-full group">
                    <div
                      className={`w-full ${height} bg-blue-600/20 rounded-t-lg group-hover:bg-blue-600 transition-all duration-500 relative`}
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] font-bold py-1 px-2 rounded">
                        ₹{(i + 1) * 20}k
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-500 uppercase font-bold">
                    W{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className=" p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {incomeData.map((tx) => (
                <div key={tx.id} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                    <ReceiptLongIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">
                      {tx.carName} Sold
                    </p>
                    <p className="text-xs text-slate-500">{tx.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-blue-400">
                      ₹ {tx.amount / 1000}k
                    </p>
                    <p className="text-[10px] text-slate-600">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-sm font-bold text-blue-500 hover:bg-blue-500/5 rounded-xl transition-all">
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
