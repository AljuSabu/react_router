import React from "react";
import { data } from "../../data/data";
import { Helmet } from "react-helmet";
import AddIcon from "@mui/icons-material/Add";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";
import PageTransition from "../../component/ui/PageTransition";

const Inventory = () => {
  return (
    <>
    <Helmet>
        <title>Inventory Admin</title>
      </Helmet>

      <PageTransition>
        <div className="space-y-6 md:space-y-8 xl:space-y-10 px-10 md:px-20 xl:px-30 pb-30">
          <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
            <div className="md:space-y-1 xl:space-y-3">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-black text-white">
                Car Inventory
              </h2>
              <p className="text-xs md:text-base xl:text-xl text-slate-400">
                Manage listings, adjust pricing, and track stock.
              </p>
            </div>
            <button className="w-full md:w-38 xl:w-43 py-2 md:py-3 text-xs md:text-sm xl:text-base bg-white text-black hover:bg-slate-300 rounded-md md:rounded-xl font-bold flex justify-center items-center gap-2 transition-all">
              <AddIcon className="text-xl! md:text-2xl!" /> Add New Car
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {data.map((car) => (
              <div
                key={car.id}
                className="p-5 rounded-2xl border border-white/10 bg-linear-to-br from-slate-800 via-black to-slate-800 to flex flex-col lg:flex-row items-center gap-6 group hover:border-blue-500/30 transition-all"
              >
                <div className="lg:w-50 2xl:w-70 lg:h-30 2xl:h-40 rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={car.images[0]}
                    alt={car.series}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="flex-1 lg:text-start text-center md:pl-2 xl:pl-4">
                  <h4 className="text-base md:text-xl xl:text-3xl font-bold text-white">
                    {car.series}
                  </h4>
                  <p className="text-xs md:text-base xl:text-xl text-slate-500">
                    {car.name}
                  </p>
                </div>

                <div className="flex md:gap-2 lg:gap-0 xl:gap-4 2xl:gap-6">
                  <div className="hidden md:block px-8 text-center">
                    <p className="text-xs md:text-base xl:text-xl text-slate-500 uppercase font-bold">
                      Price
                    </p>
                    <p className="text-xs md:text-base xl:text-xl font-bold text-blue-400">
                      {car.price.display}
                    </p>
                  </div>
                  <div className="hidden md:block px-8 text-center border-x border-white/10">
                    <p className="text-xs md:text-base xl:text-xl text-slate-500 uppercase font-bold">
                      Stock
                    </p>
                    <p className="text-xs md:text-base xl:text-xl font-bold text-white">
                      2 Units
                    </p>
                  </div>
                  <div className="flex gap-2 px-8 text-white">
                    <button className="py-2 px-3 md:w-12 xl:w-15 md:h-12 xl:h-15 rounded-lg bg-blue-600/70 md:bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-600/20">
                      <span className="hidden md:block">
                        <EditSquareIcon />
                      </span>
                      <p className="md:hidden text-sm">Edit</p>
                    </button>
                    <button className="py-2 px-3 md:w-12 xl:w-15 md:h-12 xl:h-15 rounded-lg bg-red-600/70 md:bg-white/5 hover:bg-red-600/20 flex items-center justify-center transition-all hover:text-red-500">
                      <span className="hidden md:block">
                        <DeleteIcon />
                      </span>
                      <p className="md:hidden text-sm">Delete</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Inventory;
