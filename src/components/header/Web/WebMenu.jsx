import React from "react";
import "./WebMenu.css";
function WebMenu() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">Projects</a>
      </div>
      <div className="web-option">
        <a href="#skills">Skills</a>
      </div>
      <div className="web-option">
        <a href="#work">Experience</a>
      </div>
      <div className="web-option">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default WebMenu;
