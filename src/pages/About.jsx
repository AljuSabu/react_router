import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About AutoElite</title>
      </Helmet>
      <div className="min-h-screen pt-36 pb-20 bg-slate-950">
        <div className="max-w-4xl mx-10 lg:mx-auto PX-10 space-y-10 md:space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
              Our Vision
            </h1>
            <p className="text-sm md:text-xl text-slate-400">
              Defining the future of high-end mobility.
            </p>
          </div>

          <div className=" rounded-3xl overflow-hidden aspect-video relative group">
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
              alt="Showroom"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-10 left-5 md:left-10">
              <span className="text-xl md:text-4xl font-bold text-white">
                Innovation First.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-base md:text-2xl font-bold text-white">
                The AutoElite Standard
              </h3>
              <p className="text-xs md:text-base">
                AutoElite was founded on the belief that purchasing a luxury
                vehicle should be as exhilarating as driving one. We curate only
                the most exceptional machines, from roaring internal combustion
                classics to the silent, lightning-fast electric vehicles of
                tomorrow.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base md:text-2xl font-bold text-white">
                Driven by Technology
              </h3>
              <p className="text-xs md:text-base">
                We integrate cutting-edge AI to help our clients find the
                perfect match for their lifestyle. Our platform isn't just a
                marketplace; it's a personalized automotive concierge service
                available 24/7.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-7 md:py-12 border-y border-white/10">
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold text-blue-500">
                150+
              </p>
              <p className="text-[8px] md:text-xs text-slate-500 font-bold">
                PREMIUM MODELS
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold text-blue-500">
                24/7
              </p>
              <p className="text-[8px] md:text-xs text-slate-500 font-bold">
                SUPPORT
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold text-blue-500">
                12k+
              </p>
              <p className="text-[8px] md:text-xs text-slate-500 font-bold">
                HAPPY DRIVERS
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold text-blue-500">50+</p>
              <p className="text-[8px] md:text-xs text-slate-500 font-bold">
                GLOBAL HUBS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
