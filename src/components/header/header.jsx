import ME from "../../assets/me-4.png";
import HeaderSocial from "./HeaderSocials";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiPython } from "react-icons/si";
import { motion } from "framer-motion";
import "./header.css";
import CV from "../../assets/my CV .pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&rsquo;s Talk
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello I&rsquo;m
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mahmoud Shoura
        </motion.h1>
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Frontend Developer
        </motion.h5>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CTA />
        </motion.div>

        <HeaderSocial />

        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ y: -10 }}
        >
          <img src={ME} alt="me" />
          <div className="programming-shapes">
            <span className="icon react"><FaReact /></span>
            <span className="icon node"><FaNodeJs /></span>
            <span className="icon html"><FaHtml5 /></span>
            <span className="icon css"><FaCss3Alt /></span>
            <span className="icon js"><SiJavascript /></span>
            <span className="icon python"><SiPython /></span>
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
