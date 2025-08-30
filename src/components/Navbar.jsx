import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Acme UI</div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#checkbox">Checkbox</a>
        <a href="#faq">FAQ</a>
      </nav>
      <button className="cta-btn">Get Started</button>
    </header>
  );
}
