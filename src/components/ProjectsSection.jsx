"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id:1,
    title: "GistIt: An AI Text Summarizer",
    description: "P1 desc",
    image: "/images/projects/GistIt.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id:2,
    title: "Acme: NextJS Dashboard App",
    description: "P2 desc",
    image: "/images/projects/Acme.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id:3,
    title: "PCOS Prediction",
    description: "P3 desc",
    image: "/images/projects/PCOS.jpeg",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id:4,
    title: "Rainfall Prediction for next harvest year",
    description: "P4 desc",
    image: "/images/projects/Rainfall.png",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
       project.tag.includes(tag)
    );

    return (
        <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12" id="projects">
        My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
              onClick={handleTagChange} 
              name="All" 
              isSelected={tag==="All"} />

              <ProjectTag 
              onClick={handleTagChange} 
              name="Web" 
              isSelected={tag==="Web"} />

              <ProjectTag 
              onClick={handleTagChange} 
              name="ML" 
              isSelected={tag==="ML"} />
            
        </div>
        <div className="gris md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => 
        <ProjectCard 
          key= {project.id} 
          title={project.title} 
          description={project.description} 
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl} />
          )}
          </div>
        </>
    )
}

export default ProjectsSection;
