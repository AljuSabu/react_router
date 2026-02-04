import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>SignUp AutoElite</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-0 lg:pt-24 xl:pt-20">
        <div className="w-full md:max-w-md xl:max-w-lg 2xl:max-w-xl bg-slate-900 p-6 md:p-10 lg:p-8 xl:p-10 rounded-3xl border border-white/10 space-y-3 md:space-y-8 lg:space-y-5 xl:space-y-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-black text-white mb-2">
              Create Account
            </h2>
            <p className="text-slate-400 text-[10px] md:text-sm xl:text-lg">
              Join the world's most exclusive car marketplace.
            </p>
          </div>

          <form className="space-y-3 md:space-y-4">
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex flex-col gap-1 md:gap-2">
                <label className="text-[10px] md:text-xs xl:text-base font-bold uppercase text-slate-500 px-1">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950 border border-white/10 rounded-lg xl:rounded-xl text-[10px] md:text-xs xl:text-base px-4 py-2 xl:py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <label className="text-[10px] md:text-xs xl:text-base font-bold uppercase text-slate-500 px-1">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950 border border-white/10 rounded-lg xl:rounded-xl text-[10px] md:text-xs xl:text-base px-4 py-2 xl:py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <label className="text-[10px] md:text-xs xl:text-base font-bold uppercase text-slate-500 px-1">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full bg-slate-950 border border-white/10 rounded-lg xl:rounded-xl text-[10px] md:text-xs xl:text-base px-4 py-2 xl:py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <label className="text-[10px] md:text-xs xl:text-base font-bold uppercase text-slate-500 px-1">
                Password
              </label>
              <input
                required
                type="password"
                placeholder="Min. 8 characters"
                className="w-full bg-slate-950 border border-white/10 rounded-lg xl:rounded-xl text-[10px] md:text-xs xl:text-base px-4 py-2 xl:py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-end text-[10px] md:text-xs xl:text-sm gap-3 py-2">
              <input
                required
                type="checkbox"
                className="mt-1 w-4 h-4 rounded bg-slate-950 accent-blue-600"
              />
              <label className=" text-slate-500 leading-snug">
                I agree to the{" "}
                <span className="text-blue-500 hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-500 hover:underline">
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            <button className="w-full py-3 xl:py-4 xl:mt-4 text-sm md:text-base bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
              Create Account
            </button>
          </form>

          <p className="text-center text-[10px] md:text-sm xl:text-base text-slate-500">
            Already have an account?
            <NavLink to="/login">
              <button className="text-blue-500 hover:underline font-semibold pl-1">
                Login
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
