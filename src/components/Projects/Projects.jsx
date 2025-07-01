import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const getProjectCategory = (project) => {
    if (project.skills.includes('React') && project.skills.includes('Appwrite')) {
      return 'fullstack';
    } else if (project.skills.includes('React')) {
      return 'react';
    } else {
      return 'frontend';
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => getProjectCategory(project) === filter);

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.header}>
        <span className={styles.subtitle}>My work</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.description}>
          Here are some of the projects I've worked on, showcasing my skills in modern web development
        </p>
      </div>

      <div className={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.filterBtn} ${filter === category.id ? styles.active : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>Interested in working together?</h3>
        <p className={styles.ctaDescription}>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Let's Talk
        </a>
      </div>
    </section>
  );
};