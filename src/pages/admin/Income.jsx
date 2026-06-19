import React from "react";
import { incomeData } from "../../data/data";
import { Helmet } from "react-helmet";
import PageTransition from "../../component/ui/PageTransition";
import DownloadIcon from '@mui/icons-material/Download';

const Income = () => {
  return (
    <>
      <Helmet>
        <title>Income Admin</title>
      </Helmet>

      <PageTransition>
        <div className="space-y-6 md:space-y-8 xl:space-y-10 px-10 lg:px-20 xl:px-30 pb-30">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className=" md:space-y-1 xl:space-y-3 mb-4 md:mb-0">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-black text-white">
                Financial Ledger
              </h2>
              <p className="text-xs md:text-base xl:text-xl text-slate-400">
                Total gross revenue and profit breakdown.
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md md:rounded-lg lg:rounded-xl font-bold flex justify-center items-center gap-2 transition-all">
              <DownloadIcon /> Export Report
            </button>
          </div>

          <div className="hidden md:block rounded-2xl border border-white/10">
            <table className="w-full text-left table-auto bg-linear-to-br from-slate-900 via-black to-slate-900">
              <thead className="border-b border-white/10 bg-white/5 text-[10px] md:text-xs xl:text-base">
                <tr>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    <p className="lg:block hidden">Transaction ID</p>
                    <p className="lg:hidden">TXN ID</p>
                  </th>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    Model
                  </th>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    Customer
                  </th>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    Date
                  </th>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    Amount
                  </th>
                  <th className="px-3 lg:px-6 py-4 font-bold text-slate-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[10px] md:text-xs xl:text-base">
                {incomeData.map((income) => (
                  <tr
                    key={income.id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-3 lg:px-6 py-4 font-mono text-blue-400">
                      {income.transactionId}
                    </td>
                    <td className="px-3 lg:px-6 py-4 font-bold text-white">
                      {income.carName}
                    </td>
                    <td className="px-3 lg:px-6 py-4 text-slate-300">
                      {income.customer}
                    </td>
                    <td className="px-3 lg:px-6 py-4 text-slate-500">
                      {income.date}
                    </td>
                    <td className="px-3 lg:px-6 py-4 font-bold text-white">
                      ₹ {income.amount.toLocaleString()}
                    </td>
                    <td className="px-3 lg:px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          income.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {income.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-4 px-5">
          {incomeData.map((income) => (
            <div
              key={income.id}
              className="bg-linear-to-br from-slate-900 via-black to-slate-900 border border-white/10 p-3 md:p-4 rounded-md"
            >
              <div
                className="text-base text-slate-500 font-semibold"
              >
                Transaction ID :
              </div>

              <div
                className="text-xs md:text-base text-gray-300 mt-1 md:mt-3"
              >
                <p>
                  <span className="font-medium">Email :</span>
                </p>
                <p>
                  <span className="font-medium">Phone :</span>
                </p>
              </div>

              <div className="flex justify-center md:justify-end text-xs md:text-base gap-5 md:gap-3 mt-4 md:mt-3">
               
                <span
                  className="bg-yellow-500 rounded shadow shadow-stone-700 active:scale-95 active:shadow-inner px-3 py-1"
                >
                  Edit
                </span>
                <span
                  className="bg-red-600 rounded shadow shadow-stone-700 active:scale-95 active:shadow-inner px-3 py-1"
                >
                  Delete
                </span>
              </div>
            </div>
          ))}
        </div>
      </PageTransition>
    </>
  );
};

export default Income;
