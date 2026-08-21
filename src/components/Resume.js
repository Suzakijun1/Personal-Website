import React, { Component } from "react";

class Resume extends Component {
  render() {
    const resumeImage = "../../images/Dylan-Yong-Resume-2026-1.png";
    const resumePdf = "../../images/Dylan-Yong-Resume-2026.pdf";

    return (
      <section id="resume-document" className="resume-section">
        <h1 className="section-title resume-section-title">My Resume</h1>

        <div className="resume-container">
          <div className="resume-viewer">
            <img
              src={resumeImage}
              alt="Dylan Yong's Resume"
              className="resume-image"
            />
          </div>

          <div className="resume-download">
            <a
              href={resumePdf}
              download="Dylan-Yong-Resume-2026.pdf"
              className="resume-download-button"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
