import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton,Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import Harsh_yadav_Resume from "../assets/Harsh_yadav_Resume.pdf";

const Navbar = () => {
  const PDF_URL = "http://127.0.0.1:5173/Harsh_yadav_Resume.pdf";
  const location = useLocation();
  const [expandnavbar, setexpandnavbar] = useState(false);

  const download_resume = (url) => {
    const filename = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", filename);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  useEffect(() => {
    setexpandnavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandnavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setexpandnavbar((prev) => !prev);
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/profile"> Profile</Link>
        <Link to="/experience"> Education</Link>
        <Tooltip title="Get Resume">
          <IconButton onClick={() => download_resume(PDF_URL)}>
            <DownloadIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
