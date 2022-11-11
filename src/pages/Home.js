import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>안녕하세요!</h2>
        <h3>
          프론트엔드 웹개발에 초점을 두고 개발을 하고있는 김종완 이라고 합니다.
        </h3>
        <div className="prompt">
          <p> A frontend developer with a hope to embrace the future. </p>
          <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/mireu-san">
            <GithubIcon />
          </a>
          <a href="mailto:starmireu@gmail.com">
            <EmailIcon />
          </a>
          <a href="tel:+821082158540">
            <PhonelinkRingIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front End</h2>
            <span>
              React.js, HTML, CSS, Styled-Components, NPM, Yarn, MaterialUI,
              ReactIcon, React Router, react-query
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
            <h2>CI/CD</h2>
            <span>Firebase, AWS, Atlas, Docker</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
