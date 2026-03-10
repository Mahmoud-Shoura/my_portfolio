import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ytsea2e", "template_ekl01s7", form.current, "Va5QDOyN55T5dIagq")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <motion.div
          className="contact-options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <article className="contact-option glass">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>mahmoudhameidshoura@gmail.com</h5>
            <a href="mailto:mahmoudhameidshoura@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact-option glass">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+201121779947</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B201121779947&text&type=phone_number&app_absent=0"
              target="__blank"
            >
              Send a message
            </a>
          </article>
        </motion.div>

        {/* END OF CONTACT OPTIONS */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="glass"
          />
          <input type="email" name="email" placeholder="Your Email" required className="glass" />
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            required
            className="glass"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
