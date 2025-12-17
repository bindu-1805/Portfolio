import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[#33353F] text-slate-500">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
        
        <span className="text-s sm:text-sm font-medium tracking-wide">
          PORTFOLIO
        </span>

        <p className="text-[15px] sm:text-sm text-center sm:text-right">
          © {currentYear} Bindu Madhavi V. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
