import React from "react";
import "./_navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        IC "Repair Design Project"
      </a>
      <div className="navbar__links">
        <a href="#" className="navbar__links--link">
          HOME
        </a>
        <a href="#" className="navbar__links--link">
          PROJECTS
        </a>
        <a href="#" className="navbar__links--link">
          MEASUREMENT
        </a>
        <a href="#" className="navbar__links--link">
          TEAM
        </a>
        <a href="#" className="navbar__links--link">
          REVIEWS
        </a>
        <a href="#" className="navbar__links--link">
          CONTACTS
        </a>
      </div>
      <div className="navbar__callback">
        <a href="#" className="navbar__callback--phone">
          +7 (928) 768-32-39
        </a>
        <button className="navbar__callback--btn">Request a call</button>
      </div>
    </nav>
  );
}
