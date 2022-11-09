import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return <div className="project">{id}</div>;
}

export default ProjectDisplay;
