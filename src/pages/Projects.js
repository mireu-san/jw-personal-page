import React from "react";
import ProjectItem from "../components/ProjectItem";

import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
      Projects
    </div>
  );
}

export default Projects;
