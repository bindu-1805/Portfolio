import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-12 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-slate-600">
      <div className="container p-12 flex justify-between">
        <span>PORTFOLIO</span>
        <p className="text-slate-600">Copyright &copy; {currentYear} Bindu Madhavi V. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;