import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton href="https://www.instagram.com/_hrsh_yadav/">
          <InstagramIcon />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/harsh-yadav-ab8732211/">
          <LinkedInIcon />
        </IconButton>
      </div>
      <p>
        {" "}
        <span>©:Harsh.com</span>
      </p>
    </div>
  );
};

export default Footer;
