import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  // Smooth scroll function
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Subhan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and NodeJS. Reach out if you'd like to learn more!
        </p>
        {/* Smooth scroll button */}
        <a href="#contact" className={styles.contactBtn} onClick={handleScrollToContact}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/developer2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
