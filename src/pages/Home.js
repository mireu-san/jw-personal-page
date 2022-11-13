// import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import FaceIcon from "@material-ui/icons/Face";

import "../styles/Home.css";
import MePhoto from "../assets/me-photo.jpg";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
// import ResumePDF from "../assets/resume.pdf";

function Home() {
  // Archived - react-pdf (deprecated - due to scale error)
  // const [numPage, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPage);
  //   setPageNumber(1);
  // }

  // function removeTextLayerOffset() {
  //   const textLayers = document.querySelectorAll(
  //     ".react-pdf__Page__textContent"
  //   );
  //   textLayers.forEach((layer) => {
  //     const { style } = layer;
  //     style.top = "0";
  //     style.left = "0";
  //     style.transform = "";
  //   });
  // }

  return (
    <div className="home">
      <div className="about">
        <img src={MePhoto} alt="profile" className="profileImg" />
        <h2>안녕하세요!</h2>
        <h3>
          저는 JavaScript, React.js & TypeScript 를 위주로 프론트엔드 웹개발을
          진행 해 오고 있는 '김종완' 입니다.
        </h3>
        <div className="prompt">
          <p>
            A frontend developer who has the courage to face the fear & build
            the future.
          </p>
          <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/mireu-san">
            <GithubIcon />
          </a>
          <a href="https://drive.google.com/file/d/1tXfdtOzJ7TpbfSW11oDUPQXmkzXR31Ku/view?usp=share_link">
            <FaceIcon />
          </a>
          <a href="tel:+821082158540">
            <PhonelinkRingIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Main Stacks</h1>
        <ol className="list">
          <li className="item">
            <h2>Front End</h2>
            <span>
              React.js, HTML, CSS, Styled-Components, NPM, Yarn, MaterialUI,
              ReactIcon, React-Router-dom, Next.js, react-query
            </span>
          </li>
          <li className="item">
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript, TypeScript, Python</span>
            </li>
            <li className="item">
              <h2>CI/CD</h2>
              <span>Firebase, AWS, Atlas, Docker</span>
            </li>
            <h2>Back End (minor)</h2>
            <span>NodeJS, MongoDB, Django</span>
          </li>
        </ol>
      </div>
      {/* <div className="resume">
        <h1>Resume</h1>
        <div>
          <Document
            file={ResumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            onRemoveTextSuccess={removeTextLayerOffset}
          >
            <Page height="600" pageNumber={pageNumber} />
          </Document>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
