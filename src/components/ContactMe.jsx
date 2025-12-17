import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactMe() {
  return (
    <section className="mt-12 px-4" id="contact">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900/60 to-slate-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Contact Me
        </h2>

        <p className="text-center text-sm sm:text-base lg:text-lg text-zinc-300 mb-6">
          If you love coding as much as I do, ping me for collaborations or just to say hi.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 sm:flex-nowrap">
          <a
            href="https://www.linkedin.com/in/bindu-madhavi-v/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-3 bg-gradient-to-tr from-blue-700 to-sky-500 text-white shadow-lg transition-transform hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/bindu_madhavi_v"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="rounded-full p-3 bg-gradient-to-tr from-sky-500 to-rose-400 text-white shadow-lg transition-transform hover:scale-110"
          >
            <FaTwitter className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/bindu-1805"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-3 bg-gradient-to-tr from-neutral-800 to-zinc-600 text-white shadow-lg transition-transform hover:scale-110"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="mailto:bindu2003madhavi@gmail.com"
            aria-label="Email"
            className="rounded-full p-3 bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-lg transition-transform hover:scale-110"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
