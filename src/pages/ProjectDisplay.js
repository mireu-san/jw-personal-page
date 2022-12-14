import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="thumbnail" className="thumbNailSize" />
      <p>
        <b>Main Stacks:</b> <br />
        {project.skills}
      </p>
      <div className="outBound">
        <a href={project.url}>
          <GitHubIcon />
        </a>
        <a href={project.preview}>
          <VisibilityIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
