import React from "react";
import ProjectItem from "../components/ProjectItem";
import Picture1 from "../assets/picture1.jpg";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Website" image={Picture1} />
      </div>
      Projects
    </div>
  );
}

export default Projects;
