import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <BiMailSend className="contact-option-icon" />
            <h4>Email</h4>
            <h5>hello@osamaahmed.me</h5>
            <a href="mailto:hello@osamaahmed.me">Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messanger</h4>
            <h5>Osama Ahmed</h5>
            <a
              href="https://m.me/suspect.heroii"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiWhatsappLine className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+201001994602</h5>
            <a href="https://api.whatsapp.com/send?phone=+20101994602">
              Send a message
            </a>
          </article>
        </div>
        <form action="" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
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
