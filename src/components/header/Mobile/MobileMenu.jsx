import React from "react";
import "./MobileMenu.css";

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rs-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">Projects</a>
        </div>
        <div className="mobile-option">
          <a href="#skills">Skills</a>
        </div>
        <div className="mobile-option">
          <a href="#experience">Experience</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
