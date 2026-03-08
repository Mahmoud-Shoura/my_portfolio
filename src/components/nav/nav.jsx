import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        offset={-70}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        offset={-70}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        offset={-70}
      >
        <BiBook />
      </Link>
      <Link
        to="services"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        offset={-70}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        offset={-70}
      >
        <BiMessageSquareDetail />
      </Link>
    </motion.nav>
  );
};

export default Nav;
