import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects", "contact"];
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.6, // 60% visible
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Logo and Title */}
      <a className={styles.title} href="/">
        Subhan's Portfolio
      </a>

      {/* Menu Button for Mobile */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Menu Items */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {[
            { id: "about", icon: "", label: "About" },
            { id: "experience", icon: "", label: "Experience" },
            { id: "projects", icon: "", label: "Projects" },
            { id: "contact", icon: "", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  activeSection === item.id ? styles.activeLink : ""
                }
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
