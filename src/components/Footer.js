import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

import Navbar from "../components/Navbar";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/mireu-san">
          <GithubIcon />
        </a>
      </div>
      <Navbar />
    </div>
  );
}

export default Footer;
