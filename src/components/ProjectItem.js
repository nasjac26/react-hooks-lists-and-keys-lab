import React from "react";



function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  return (
    <div className="project-item">
     
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span key={technologies[0]}
        >{technologies[0]}</span>
        <span key={technologies[1]}
        >{technologies[1]}</span>
        <span key={technologies[2]}
        >{technologies[2]}</span>

      </div>
    </div>
  );
}

export default ProjectItem;
