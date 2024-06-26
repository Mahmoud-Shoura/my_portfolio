// import React from "react";
import "./about.css";
import ME from "../../assets/me-3-fotor-bg-remover-2024042512710.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worledwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            My name is Mahmoud Hamed, a 23-year-old front-end developer. I began
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
