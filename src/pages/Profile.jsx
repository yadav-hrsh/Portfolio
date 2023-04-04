import React from 'react'
import FeatureItem from "../Components/FeatureItem";
import {Features} from '../helper/Features';
import "../styles/Project.css";
const Profile = () => {
  return (
    <div>
        <div className="projects">
      <h1>DSA Profiles</h1>
      <div className="projectList">
        {
          Features.map((x, i)=>(
            <FeatureItem  key={i} dobol={x.dobol} name={x.name} image={x.image} link={x.link}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Profile



