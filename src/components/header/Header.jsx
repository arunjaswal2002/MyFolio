import React, { useState } from "react";
import WebMenu from "./Web/WebMenu";
import MobileMenu from "./Mobile/MobileMenu";
import "../header/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Arun Jaswal</div>
      <div className="menu">
        <div className="web-menu">
          <WebMenu />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen && <i className="fi fi-br-menu-burger menu-icon"></i>}
          </div>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
