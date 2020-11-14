import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const { title, image, body } = props.project;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImg}>{image}</div>
      <div className={styles.projectTitle}>{title}</div>
      <div className={styles.projectBody}>{body}</div>
    </div>
  );
};

export default ProjectCard;
