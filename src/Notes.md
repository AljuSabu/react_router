# React-Router Notes

## Objective 

* Routing Basics
* Navigation
* Layout and Index Routes
* Nested Routes
* Routes and Search Parameters
* Protected Routes
* SPA with Multiple Layered Routes
* Filter by Product Types
* Active Navlink Styling

## SPA and MPA


## React Router Setup

**1 :** react-router-dome

**2 :** Import BrowserRouter from react-router-dom in main.jsx (wraped above AuthContexProvider)


## ToDo

* Complete the notes

* Design Home Page,About Page ...


## SEO (Search Engin Optimisation)

* seo is a process of improving a websites visibility in search reasults on search engins like chrome etc.


## Active NavLink


import React from "react";
import { data } from "../../data/data";
import AddIcon from "@mui/icons-material/Add";

const Inventory = () => {
  return (
    <>
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
          <button className="w-full md:w-38 xl:w-43 py-2 md:py-3 text-xs md:text-sm xl:text-base bg-white text-black hover:bg-slate-300 rounded-xl font-bold flex justify-center items-center gap-2 transition-all">
            <AddIcon /> Add New Car
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {data.map((car) => (
            <div
              key={car.id}
              className="p-5 rounded-2xl border border-white/10 flex flex-col lg:flex-row items-center gap-6 group hover:border-blue-500/30 transition-all"
            >
              <div className="flex justify-between items-center border border-white w-full ">
                <div className="flex items-center">
                  <div className="w-70 h-40 rounded-lg overflow-hidden bg-slate-800">
                    <img
                      src={car.images[0]}
                      alt={car.series}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="md:pl-2 xl:pl-4">
                    <h4 className="text-base md:text-xl xl:text-3xl font-bold text-white">
                      {car.series}
                    </h4>
                    <p className="text-xs md:text-base xl:text-xl text-slate-500">
                      {car.name}
                    </p>
                  </div>
                </div>
                <div className="flex ">
                  <div className="hidden md:block px-8 text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Price
                    </p>
                    <p className="font-bold text-blue-400">
                      {car.price.display}
                    </p>
                  </div>
                  <div className="hidden md:block px-8 text-center border-x border-white/5">
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Stock
                    </p>
                    <p className="font-bold text-white">2 Units</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-600/20">
                  <i className="fa-solid fa-pen-to-square text-xs"></i>
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-600/20 flex items-center justify-center transition-all hover:text-red-500">
                  <i className="fa-solid fa-trash text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inventory;
