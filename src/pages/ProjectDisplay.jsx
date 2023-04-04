import React from 'react'
import '../styles/projectDisplay.css';
import {projectList} from '../helper/ProjectList';
import { useParams } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from '@mui/material';
const ProjectDisplay = () => {
    const {id} = useParams();
    const project = projectList[id];
  return (
    <div className='project '>
        <h1> {project.name}</h1>  
        <img src={project.image} />
        <h3>Tech Stack: {project.Tech}</h3>
        <IconButton href={project.github}>
            <GitHubIcon />      
        </IconButton>
    </div>
  )
}

export default ProjectDisplay