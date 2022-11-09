import React from "react";
import { useParams } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParam();
  return <div>ProjectDisplay</div>;
}

export default ProjectDisplay;
