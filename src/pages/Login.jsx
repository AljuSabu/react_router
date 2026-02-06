import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageTransition from "../component/ui/PageTransition";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login AutoElite</title>
      </Helmet>

      <PageTransition>
        <div className="min-h-screen flex items-center justify-center px-6 pt-10 md:pt-0 lg:pt-30 xl:pt-20">
          <div className="w-full md:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-xl bg-linear-to-br from-slate-900 via-black to-slate-900 p-6 md:p-10 lg:p-8 xl:p-10 rounded-3xl border border-white/10 space-y-5 md:space-y-10 lg:space-y-7 xl:space-y-10">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-black text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-400 text-[10px] md:text-sm xl:text-lg">
                Enter your credentials to access your garage.
              </p>
            </div>

            <form className="space-y-4 md:space-y-6 xl:space-y-10">
              <div className="flex flex-col gap-1 md:gap-2">
                <label className="text-[10px] md:text-xs xl:text-base font-bold text-slate-500 tracking-widest px-1">
                  EMAIL ADDRESS
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full text-xs md:text-sm xl:text-lg bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] md:text-xs xl:text-base font-bold text-slate-500 tracking-widest">
                    PASSWORD
                  </label>
                  <span className="text-[10px] md:text-xs xl:text-base text-blue-500 cursor-pointer hover:underline">
                    Forgot?
                  </span>
                </div>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full text-xs md:text-sm xl:text-lg bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <button className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-95 text-sm md:text-base">
                Sign In
              </button>
            </form>

            <p className="text-center text-[10px] md:text-sm xl:text-base text-slate-500">
              New to AutoElite?
              <NavLink to="/signup">
                <button className="text-blue-500 hover:underline cursor-pointer font-semibold pl-1">
                  Join the Club
                </button>
              </NavLink>
            </p>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Login;
