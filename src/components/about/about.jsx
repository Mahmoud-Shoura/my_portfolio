import "./about.css";
import ME from "../../assets/me-3-fotor-bg-remover-2024042512710.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import PropTypes from 'prop-types';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
};

const About = () => {
  const getAge = () => {
    const birthYear = 2001;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <motion.div
        className="container about-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="about-me" variants={itemVariants}>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.45} className="about-me-tilt">
            <div className="about-me-image">
              <img src={ME} alt="About Img" />
            </div>
          </Tilt>
        </motion.div>

        <div className="about-content">
          <div className="about-cards">
            <motion.div variants={itemVariants}>
              <Tilt className="about-card" tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <FaAward className="about-icon" />
                <h5>Experience</h5>
                <small><CountUp end={experienceYears} suffix="+" /> Years Working</small>
              </Tilt>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tilt className="about-card" tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <FiUsers className="about-icon" />
                <h5>Clients</h5>
                <small><CountUp end={200} suffix="+" /> Worldwide</small>
              </Tilt>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tilt className="about-card" tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <VscFolderLibrary className="about-icon" />
                <h5>Projects</h5>
                <small><CountUp end={50} suffix="+" /> Completed</small>
              </Tilt>
            </motion.div>
          </div>

          <motion.p variants={itemVariants}>
            My name is Mahmoud Hamed, a {getAge()}-year-old front-end developer. I began
            my journey in programming by studying C and C++ languages before
            diving into HTML, CSS, and JavaScript. Later on, I shifted my focus
            to React, where I honed my skills to develop full-fledged projects.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Let&rsquo;s Talk
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
