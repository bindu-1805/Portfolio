"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id:1,
    title: "GistIt: An AI Text Summarizer",
    description: "Allows users to paste or enter their long texts and summarizes them in a concise manner.",
    image: "/images/projects/GistIt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/AI-Text-Summarizer-App",
    previewUrl: "https://replit.com/@bindu2003madhav/GistIt-An-AI-Text-Summarizer"
  },

  {
    id:2,
    title: "Acme: NextJS Dashboard App",
    description: "A simple dashboard app having a public home page, login page, dashboard pages that are protected by authentication and the ability for users to add, edit and delete invoices.",
    image: "/images/projects/Acme.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/nextJS",
    previewUrl: "https://nextjs-dashboard-qjwdps8o7-bindu-madhavi-vs-projects.vercel.app/"
  },

  {
    id:3,
    title: "PCOS Prediction",
    description: "Computational algorithms are used for predicting PCOS.",
    image: "/images/projects/PCOS.jpeg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/bindu-1805/PCOS-detection",
    previewUrl: "https://github.com/bindu-1805/PCOS-detection"
  },

  {
    id:4,
    title: "Rainfall Prediction for next harvest year",
    description: "ML techniques used - Random Forests, Ridge Regressor, K Neighbors Regressor",
    image: "/images/projects/Rainfall.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/ananyag3110/rainfall_prediction-for-next-harvest-year",
    previewUrl: "https://github.com/ananyag3110/rainfall_prediction-for-next-harvest-year"
  },

  {
    id:5,
    title: "Portfolio",
    description: "A simple portfolio website designed using NextJS",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/Portfolio",
    previewUrl: "https://github.com/bindu-1805/Portfolio"
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
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8" id="projects">
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
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
