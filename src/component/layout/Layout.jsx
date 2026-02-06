import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

const Layout = ({ title, description, keywords, author }) => {
  const location = useLocation()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-black to-slate-900" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <AnimatePresence mode="wait">
            <PageTransition>
              <Outlet key={location.pathname} />
            </PageTransition>
          </AnimatePresence>

          <Footer />
        </div>
      </div>
    </>
  );
};
Layout.defaultProps = {
  title: "AutoElite",
  description: "react-router-dom",
  keywords: "React JS, react-router-dom, HTML, TailwindCSS",
  author: "Alju Sabu",
};

export default Layout;
