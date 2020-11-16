import React from "react";
import styles from "./SkillsCard.module.scss";

const SkillsCard = (props) => {
  const { title, image, subtitle, body } = props.skill;

  return (
    <div className={styles.skillsCard}>
      <img className={styles.skillsImg} src={image} alt="image failed to load"/>
      <h2 className={styles.skillsTitle}>{title}</h2>
      <h3 className={styles.skillsSubtitle}>{subtitle}</h3>
      <div className={styles.skillsBody}>{body}</div>
    </div>
  );
};

export default SkillsCard;
