import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`${title} project screenshot`}
            className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <h4 className={styles.overlayTitle}>View Project</h4>
              <p className={styles.overlayDescription}>Click to explore</p>
            </div>
          </div>
        </div>
        <div className={styles.projectBadge}>
          <span className={styles.badgeIcon}>🚀</span>
          <span className={styles.badgeText}>Featured</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.links}>
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.linkIcon}
              title="Live Demo"
            >
              🔗
            </a>
            <a 
              href={source} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.linkIcon}
              title="Source Code"
            >
              📁
            </a>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.skillsContainer}>
          <h5 className={styles.skillsTitle}>Technologies Used:</h5>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <span key={id} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.primaryButton}
          >
            <span className={styles.buttonIcon}>🚀</span>
            Live Demo
          </a>
          <a 
            href={source} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.secondaryButton}
          >
            <span className={styles.buttonIcon}>📂</span>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};