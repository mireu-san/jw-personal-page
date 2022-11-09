import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

function ProjectDisplay() {
  const { id } = useParam();
  const project = ProjectList[id];
  return <div>{id}</div>;
}

export default ProjectDisplay;
