import "./footer.css";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <a href="#" className="footer-logo">
        MHS
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/mhmwd.hamd.318869"><FaFacebookF /></a>
        <a href="https://www.instagram.com/mahmoudhameed449/"><FiInstagram /></a>
        <a href="https://www.facebook.com/messages/e2ee/t/1976304049587728/"><FaFacebookMessenger /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; MHS. All rights reserved.</small>
      </div>
    </motion.footer>
  );
};

export default Footer;
