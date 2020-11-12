import React from "react";
import styles from "./SkillsList.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";
import skills from "../../data/skills";

const SkillsList = () => {
  return (
    <>
      <div>
        <h2>Skills List</h2>
      </div>
      <div className={styles.skillsList}>
        {skills.map((skill) => {
          return <SkillsCard skill={skill} />;
        })}
      </div>
    </>
  );
};

export default SkillsList;
