import React from "react";
import "./SkillCard.css";
function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <label className="skill-name">{skill}</label>
    </div>
  );
}

export default SkillCard;
