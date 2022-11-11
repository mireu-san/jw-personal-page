import React from "react";
import ProjectItem from "../components/ProjectItem";

import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectHeadText">Latest Side Projects</h1>

      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
      <div className="projectBottom">
        <h3>
          그 외 기타 작업물을 열람하려면, 하단의 Github 아이콘을 참조해주시기
          바랍니다.
        </h3>
      </div>
    </div>
  );
}

export default Projects;
