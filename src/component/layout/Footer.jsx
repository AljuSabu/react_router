import React from "react";
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <footer className="bg-linear-to-tr from-slate-900 via-black to-slate-900 border-t text-white border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold tracking-tighter">
              AUTO<span className="text-blue-500">ELITE</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Revolutionizing the luxury car shopping experience with cutting-edge
            technology and unparalleled service.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Featured Inventory
              </span>
            </li>
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Electric Lineup
              </span>
            </li>
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Trade-In
              </span>
            </li>
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Financing
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <span className="hover:text-blue-400 transition-colors">
                About Us
              </span>
            </li>
            <li>
              <span  className="hover:text-blue-400 transition-colors">
                Careers
              </span>
            </li>
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Press
              </span>
            </li>
            <li>
              <span className="hover:text-blue-400 transition-colors">
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">
            Get the latest automotive news and offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                <SendIcon/>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 AutoElite Marketplace. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
