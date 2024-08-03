import React from 'react';
import { FaEnvelope, FaLinkedin} from 'react-icons/fa';

function ContactMe() {
  return (
    <section className="mt-15">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" >Contact Me</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-2">
        <div className="contact-item">
          <a href="mailto:bindu2003madhavi@gmail.com">
              <FaEnvelope className="icon" />
          </a>
          <p>Email</p>
        </div>
        <div className="contact-item">
        <a href="https://www.linkedin.com/in/bindu-madhavi-v/">
              <FaLinkedin className="icon" />
          </a>
          <p>Linkedin</p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
