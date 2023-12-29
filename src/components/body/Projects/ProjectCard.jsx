import React from "react";
import "./ProjectCard.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          <a className="project-link" href={project.github}>
            <div className="link-button">
              <i class="devicon-github-original colored"></i>
              Github
            </div>
          </a>
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt="" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
