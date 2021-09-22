import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); //REMEMBER TO CONSOLE.LOG WHAT DATA I AM WORKING WITH
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => 
          <ProjectItem name={projects.name} about={projects.about} technologies={projects.technologies}/>
        )}
        </div>
    </div>
  );
}

export default ProjectList;
