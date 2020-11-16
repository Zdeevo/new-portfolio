import React from "react";
import styles from "./ProjectList.module.scss";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectList = () => {
  return (
    <section className={styles.projectPage}>
      <div className={styles.projectHeading}>
        <h2>Project List</h2>
      </div>
      <div className={styles.projectCardGrid}>
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
