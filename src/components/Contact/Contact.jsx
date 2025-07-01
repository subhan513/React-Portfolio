import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "subhancs57@gmail.com",
      link: "mailto:subhancs57@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Muhammad Subhan",
      link: "https://www.linkedin.com/in/muhammad-subhan-6b5a1232b/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "subhan513",
      link: "https://github.com/subhan513"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Pakistan",
      link: null
    }
  ];

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Get in touch</span>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.description}>
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          <p className={styles.infoDescription}>
            Feel free to reach out through any of these channels. I'll get back to you as soon as possible!
          </p>
          
          <div className={styles.infoList}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  {info.icon}
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoLabel}>{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.availability}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>Available for new projects</span>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3 className={styles.formTitle}>Send me a message</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your full name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell me about your project or just say hello!"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span className={styles.buttonIcon}>📧</span>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2024 Muhammad Subhan. Built with React and passion.
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/subhan513" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-subhan-6b5a1232b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:subhancs57@gmail.com"
              className={styles.socialLink}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};