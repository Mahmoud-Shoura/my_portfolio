// import React from "react";
import "./about.css";
import ME from "../../assets/me-3-fotor-bg-remover-2024042512710.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
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
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const about = () => {
  const getAge = () => {
    const birthYear = 2001;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;


  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsImageVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className={`about-me-image ${isImageVisible ? 'active' : ''}`} ref={imageRef}>
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small><CountUp end={experienceYears} suffix="+" /> Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small><CountUp end={200} suffix="+" /> Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small><CountUp end={50} suffix="+" /> Completed</small>
            </article>
          </div>

          <p>
            My name is Mahmoud Hamed, a {getAge()}-year-old front-end developer. I began
            my journey in programming by studying C and C++ languages before
            diving into HTML, CSS, and JavaScript. Later on, I shifted my focus
            to React, where I honed my skills to develop full-fledged projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
