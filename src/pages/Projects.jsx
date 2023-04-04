import React from "react";
import ProjectItem from "../Components/ProjectItem";
import {projectList} from '../helper/ProjectList';
import "../styles/Project.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Project</h1>
      <div className="projectList">
        {
          projectList.map((x, i)=>(
            <ProjectItem key={i} name={x.name} image={x.image} id={i}/>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
