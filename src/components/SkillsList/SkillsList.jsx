import React from "react";
import styles from "./SkillsList.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";
import skills from "../../data/skills";

const SkillsList = () => {
  return (
    <section className={styles.skillsPage}>
      <div className={styles.skillsHeading}>
        <h2>Skills List</h2>
      </div>
      <div className={styles.skillsCardContainer}>
        {skills.map((skill) => {
          return <SkillsCard skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default SkillsList;
