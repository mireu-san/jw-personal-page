import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

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
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front End</h2>
            <span>
              React.js, HTML, CSS, Styled-Components, NPM, MaterialUI, ReactIcon{" "}
            </span>
          </li>
          <li className="item">
            <h2>Back End(minor)</h2>
            <span>NodeJS, MongoDB, Django</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Python</span>
          </li>
          <li className="item">
            <h2>React</h2>
            <span> </span>
          </li>
          <li className="item">
            <h2>CI/CD</h2>
            <span>Firebase, AWS, Atlas, Docker</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
