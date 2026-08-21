// src/components/Resume.js
import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2>My Resume</h2>
      <div className="resume-viewer">
        <iframe
          src="/DylanYong-Resume1.pdf"
          width="100%"
          height="600px"
          title="Dylan Yong's Resume"
        ></iframe>
      </div>
      <div className="resume-download">
        <a href="/DylanYong-Resume1.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
