import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>PageNotFound AutoElite</title>
      </Helmet>

      <section className="flex items-center min-h-screen p-5 md:p-16 text-gray-300">
        <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-4 md:mb-8 font-extrabold text-7xl md:text-9xl text-gray-700">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-xs md:text-lg lg:text-base text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <NavLink to="/">
              <button className="px-8 py-3 text-xs md:text-base font-semibold rounded bg-violet-400 text-gray-900">
                Back to homepage
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
