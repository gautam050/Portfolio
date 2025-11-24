import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
