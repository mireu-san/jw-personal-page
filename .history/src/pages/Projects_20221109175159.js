import React from "react";
import ProjectItem from "../components/ProjectItem";
import Picture1 from "../assets/picture1.jpg";
import Picture2 from "../assets/picture2.jpg";
import Picture3 from "../assets/picture3.jpg";
import Picture4 from "../assets/picture4.jpg";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Website1" image={Picture1} />
        <ProjectItem name="Social Media Website2" image={Picture2} />
        <ProjectItem name="Social Media Website3" image={Picture3} />
        <ProjectItem name="Social Media Website4" image={Picture4} />
      </div>
      Projects
    </div>
  );
}

export default Projects;
