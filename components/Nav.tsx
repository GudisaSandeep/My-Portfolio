"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="/#home"
          onClick={() => setOpen(false)}
          aria-label="Sandeep Gudisa home"
        >
          <span className="monogram">
            sg<span>↗</span>
          </span>
          <span>
            Sandeep Gudisa
            <span className="wordmark-role">AI ENGINEER & BUILDER</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-navigation"
          className={`nav-links${open ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="/#projects" onClick={() => setOpen(false)}>
            Selected work
          </a>
          <a href="/#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="/about" onClick={() => setOpen(false)}>
            About
          </a>
          <a
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
