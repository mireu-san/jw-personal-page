import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

import Navbar from "../components/Navbar";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GithubIcon />
      </div>
      <Navbar />
    </div>
  );
}

export default Footer;
