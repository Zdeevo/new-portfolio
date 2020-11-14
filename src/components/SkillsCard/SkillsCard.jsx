import React from "react";
import styles from "./SkillsCard.module.scss";

const SkillsCard = (props) => {
  const { title, image, body } = props.skill;

  return (
    <div className={styles.skillsCard}>
      <div className={styles.skillsImg}>{image}</div>
      <div className={styles.skillsTitle}>{title}</div>
      <div className={styles.skillsBody}>{body}</div>
    </div>
  );
};

export default SkillsCard;
