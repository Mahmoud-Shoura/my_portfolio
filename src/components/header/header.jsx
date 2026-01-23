// import React from "react";
import ME from "../../assets/me-4.png";
import HeaderSocial from "./HeaderSocials";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiPython } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import CTA from "./cta";

const header = () => {
  const [isActive, setIsActive] = useState(false);
  const meRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (meRef.current) {
      observer.observe(meRef.current);
    }

    return () => {
      if (meRef.current) observer.disconnect();
    };
  }, []);

  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I&rsquo;m</h5>
        <h1>Mahmoud Shoura</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className={`me ${isActive ? 'neon-active' : ''}`} ref={meRef}>
          <img src={ME} alt="me" />
          <div className="programming-shapes">
            <span className="icon react"><FaReact /></span>
            <span className="icon node"><FaNodeJs /></span>
            <span className="icon html"><FaHtml5 /></span>
            <span className="icon css"><FaCss3Alt /></span>
            <span className="icon js"><SiJavascript /></span>
            <span className="icon python"><SiPython /></span>
          </div>
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
