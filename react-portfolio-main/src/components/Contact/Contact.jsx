import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Let's connect and build something amazing together!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <FaEnvelope className={styles.icon} />
          <a href="/">subhancs57@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.icon} />
          <a href="https://www.linkedin.com/in/muhammad-subhan-6b5a1232b/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/muhammad-subhan-6b5a1232b/</a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.icon} />
          <a href="https://github.com/subhan513" target="_blank" rel="noopener noreferrer">github.com/subhan513</a>
        </li>
      </ul>
    </footer>
  );
};
