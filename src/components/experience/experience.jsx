// import React from "react";
import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const experience = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, []);

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Experienced': return '95%';
      case 'Intermediate': return '75%';
      case 'Basic': return '45%';
      default: return '50%';
    }
  };

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container" ref={containerRef}>
        <div className={`experience-frontend ${isActive ? 'neon-active' : ''}`}>
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaHtml5 className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <FaCss3Alt className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <SiJavascript className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <FaBootstrap className="experience-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <SiTailwindcss className="experience-details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <FaReact className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Experienced') }}></div></div>
              </div>
            </article>
          </div>
        </div>

        {/* end of frontend */}

        <div className={`experience-backend ${isActive ? 'neon-active' : ''}`}>
          <h3>Things I know</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaNodeJs className="experience-details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Basic') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <SiMongodb className="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Basic') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <FaPython className="experience-details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Basic') }}></div></div>
              </div>
            </article>

            <article className="experience-details">
              <SiCplusplus className="experience-details-icon" />
              <div>
                <h4>C & C++</h4>
                <small className="text-light">Intermediate</small>
                <div className="progress-bar"><div className="progress-fill" style={{ '--target-width': getLevelWidth('Intermediate') }}></div></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
