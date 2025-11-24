import React from "react";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <a href="#" className="proj-heading"><i className="fa-solid fa-user"></i> Work Experience</a>

      <div className="cardo">
        <a href="/portfolio.html">
          <img src="/images/Screenshot (83).png" alt="" className="img" />
          <div className="intr"><h6>Portfolio</h6></div>
        </a>
      </div>

      <div className="cardo">
        <a href="https://sortingvisualizationbygautam.netlify.app/">
          <img src="/images/Screenshot (84).png" alt="" className="img" />
          <div className="intr"><h6>Sorting Visualizer</h6></div>
        </a>
      </div>

      <div className="cardo">
        <a href="https://reactcryptodashboardgautam.netlify.app">
          <img src="/images/Screenshot (96).png" alt="" className="img" />
          <div className="intr"><h6>Dashboard Cryptocurrency</h6></div>
        </a>
      </div>

      <div className="cardo">
        <a href="https://github.com/gautam050/Employee-Management-System">
          <img src="/images/Screenshot (95).png" alt="" className="img" />
          <div className="intr"><h6>Employee Management System</h6></div>
        </a>
      </div>
    </div>
  );
}
