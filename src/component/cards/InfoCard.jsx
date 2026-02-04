import React from "react";

const InfoCard = ({ car }) => {
  return (
    <div className="2xl:h-130 flex flex-col items-start space-y-4 md:space-y-6 min-w-68 max-w-200 max-h-150 p-1 md:p-5">
      <div className="space-y-2">
        <p className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-base lg:text-sm xl:text-lg 2xl:text-2xl">
          {car.tagline}
        </p>
        <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter leading-none transition-all duration-500">
          {car.series}
        </h1>
        <p className="text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-400 font-light">{car.name}</p>
      </div>
      <p className="text-xs md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-slate-300 lg:max-w-80 xl:max-w-sm 2xl:max-w-md leading-relaxed">
        {car.shortDescription}
      </p>
      <div className="flex justify-center lg:justify-start w-full gap-5 xl:gap-10 mt-5 text-xs md:text-sm xl:text-base lg:mt-10 mb-10 lg:mb-0">
        <button className="px-4 md:px-6 xl:px-8 py-3 xl:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
          Configure Yours
        </button>
        <button className="px-4 md:px-6 xl:px-8 py-3 xl:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all hover:scale-110">
          Test Drive
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
