import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about"> </div>
      <div className="about">
        <h2>Hi, my name is Jongwan Kim</h2>
        <div className="prompt">
          <p> A frontend developer with a hope to embrace the future. </p>
          <LinkedInIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills"> </div>
    </div>
  );
}

export default Home;
