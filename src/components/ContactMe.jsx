import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactMe() {
  return (
    <section className="mt-12" id="contact">
      <div className="max-w-8xl mx-auto bg-gradient-to-r from-zinc-900/60 to-slate-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
        <h2 className="text-center text-4xl font-extrabold text-white mb-2">Contact Me</h2>
        <p className="text-center text-base sm:text-lg lg:text-xl text-zinc-300 mb-6 mt-5">
         If you love coding as much as I do, ping me for collaborations or just to say hi.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex-1 flex flex-col items-center md:items-start">
  
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/bindu-madhavi-v/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="rounded-full p-2 sm:p-3 bg-gradient-to-tr from-blue-700 to-sky-500 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://x.com/bindu_madhavi_v"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              title="X"
              className="rounded-full p-2 sm:p-3 bg-gradient-to-tr from-sky-500 to-rose-400 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://github.com/bindu-1805"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="rounded-full p-2 sm:p-3 bg-gradient-to-tr from-neutral-800 to-zinc-600 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bindu2003madhavi@gmail.com"
              aria-label="Postman / Contact"
              title="Contact"
              className="rounded-full p-2 sm:p-3 bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;