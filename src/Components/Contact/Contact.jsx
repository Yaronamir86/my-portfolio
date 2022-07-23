import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tnv0s9r",
      "template_9efuwy8",
      form.current,
      "bg4Va4IhPuiXuWQWv"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yaronamir86@gmail.com</h5>
            <a
              href="mailto:yaronamir86@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </artical>
          <artical className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>yaron amir</h5>
            <a
              href="https://m.me/profile.php?id=100049026332642"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </artical>
          <artical className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+972503292066</h5>
            <a
              href="https://api.whatsapp.com/send?phone+972503292066"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </artical>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="" placeholder="Your full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
