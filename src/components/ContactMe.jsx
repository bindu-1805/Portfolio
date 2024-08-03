import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

function ContactMe() {
  return (
    <section className="mt-15">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12"id='contact' >Contact Me</h2>
      <div className="text-white flex flex-row justify-center items-center gap-5 py-2">
        <div className="contact-item">
          <a href="mailto: bindu2003madhavi@gmail.com">
              <FaEnvelope className="icon h-5 w-5 " />
          </a>
        </div>
        <div className="contact-item">
        <a href="https://www.linkedin.com/in/bindu-madhavi-v/">
              <FaLinkedin className="icon h-5 w-5" />
        </a>
        </div>
        <div className="contact-item">
        <a href="https://x.com/bindu_madhavi_v">
              <FaTwitter className="icon h-5 w-5" />
        </a>
        </div>
        <div className="contact-item">
        <a href="https://github.com/bindu-1805">
              <FaGithub className="icon h-5 w-5" />
        </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
