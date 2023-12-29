import React from "react";
import Seperator from "../../Common/Seperator/Seperator";
import { WorkData } from "../../Data/MyWork";
import WorkCard from "../Work/WorkCard";
function Work() {
  const data = WorkData;
  return (
    <div id="#work" className="work">
      <Seperator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((work) => {
          return <WorkCard item={work} />;
        })}
      </div>
    </div>
  );
}

export default Work;
