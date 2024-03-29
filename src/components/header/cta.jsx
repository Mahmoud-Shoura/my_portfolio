// import React from "react";
import CV from "../../assets/my CV .pdf";

const Cta = () => {
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

export default Cta;
