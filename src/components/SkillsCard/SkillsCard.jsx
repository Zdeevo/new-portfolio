import React from "react";
import styles from "./SkillsCard.module.scss";

const SkillsCard = (props) => {
  const { title, image, body } = props.skill;

  return (
    <div className={styles.skillsCard}>
      <div className={styles.skillsImgContainer}>
        {/* eslint-disable-next-line */}
        <img
          className={styles.skillsImg}
          src={image}
          alt="image failed to load"
        />
      </div>
      <h2 className={styles.skillsTitle}>{title}</h2>
      <div className={styles.skillsBody}>{body}</div>
    </div>
  );
};

export default SkillsCard;
