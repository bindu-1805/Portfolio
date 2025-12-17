import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-12 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-slate-600">
      <div className="container p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-2 sm:gap-0">
        <span className="text-sm sm:text-base">PORTFOLIO</span>
        <p className="text-xs sm:text-sm text-center sm:text-left"> Copyright &copy; {currentYear} Bindu Madhavi V. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;