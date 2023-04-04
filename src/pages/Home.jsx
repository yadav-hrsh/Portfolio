import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from '@mui/material';

import '../styles/Home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="about flex flex-col space-y-16">
        <h2>Hi, My Name is Harsh</h2>
        <div className="prompt ">
          <p>A software developer with a passion for learning and creating</p>
          <IconButton href="https://www.linkedin.com/in/harsh-yadav-ab8732211/">
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton href="https://github.com/Princeyadav19/">
            <GitHubIcon />
          </IconButton>


        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React, Redux, BootStrap, Material UI, HTML, CSS </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node.js, Express.js, MongoDB </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
