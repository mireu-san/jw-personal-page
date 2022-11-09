import React from "react";
import { useParams } from "react-router-dom";
import {} from "../helpers/ProjectList"

function ProjectDisplay() {
  const { id } = useParam();
  const project = ProjectList[]
  return <div>{id}</div>;
}

export default ProjectDisplay;
