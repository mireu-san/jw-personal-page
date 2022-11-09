import React from "react";
import ProjectItem from "../components/ProjectItem";
import Picture1 from "../assets/picture1.jpg";
import Picture2 from "../assets/picture2.jpg";
import Picture3 from "../assets/picture3.jpg";
import Picture4 from "../assets/picture4.jpg";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem />;
        })}
      </div>
      Projects
    </div>
  );
}

export default Projects;
