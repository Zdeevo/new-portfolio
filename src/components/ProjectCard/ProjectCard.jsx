import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const { title, image, body, github, weblink } = props.project;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImgContainer}>
        <img className={styles.projectImg} src={image} alt="not working" />
      </div>
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className={styles.projectBody}>{body}</p>
      <span className={styles.projectLink}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href={weblink} target="_blank" rel="noopener noreferrer">
          Web Link
        </a>
      </span>
    </div>
  );
};

export default ProjectCard;
