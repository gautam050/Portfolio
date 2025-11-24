import React from "react";

export default function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">Portfolio</a>
      <div className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a
  href="/resume/Ashutosh_Singh_Resume.pdf"
  download="Ashutosh__Resume.pdf"
  className="download-btn"
>
  Download Resume
</a>
      </div>
    </div>
  );
}
