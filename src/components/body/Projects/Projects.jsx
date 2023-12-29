import React from "react";
import "./Projects.css";
import { MyProjects } from "../../Data/MyProjects";
import ProjectCard from "./ProjectCard";

import Seperator from "../../Common/Seperator/Seperator";
function Projects() {
  const data = MyProjects;
  return (
    <div id="#projects" className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
