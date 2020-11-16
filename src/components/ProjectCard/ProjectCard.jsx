import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const { title, image, body, github, weblink } = props.project;
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImg} src={image} alt="not working" />
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className={styles.projectBody}>{body}</p>
    
    {/* REMOVE https:// FROM BOTH LINKS V V V BEFORE RENDERING */}

      <span className={styles.projectLink}>{github} | {weblink}</span>
    </div>
  );
};

export default ProjectCard;
