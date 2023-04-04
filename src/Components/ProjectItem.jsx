import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectItem = ({ image, name, id }) => {
  console.log(id);
  const navigate = useNavigate();
  return (
      <div className="projectItem"
        onClick={() => {
          return navigate(`/project/${id}`);
        }}
      >
        <div style={{ background: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </div>
  );
};
export default ProjectItem;
