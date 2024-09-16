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
    description: "Computational algorithms are used for predicting PCOS where Decision Tree Classifier outperformed all other classifiers.",
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
    description: "A simple portfolio website designed using NextJS and Tailwind CSS",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/Portfolio",
    previewUrl: "https://github.com/bindu-1805/Portfolio"
  },

  {
    id:6,
    title: "Blog-app",
    description: "Allows users to create and view posts. Posts won't persist between sessions as no database is used.",
    image: "/images/projects/blog-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/Blog-app",
    previewUrl: "https://github.com/bindu-1805/Blog-app"
  },

  {
    id:7,
    title: "Cocktail-recipe-generator",
    description: "Uses CocktailDB API to give a random cocktail recipe with a click of a button offering a cocktail name, category, glass type, ingredients and instructions!.",
    image: "/images/projects/Cocktail.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bindu-1805/Cocktail-recipe-generator",
    previewUrl: "https://cocktail-recipe-generator.vercel.app/"
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
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8" >
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
        </section>
    )
}

export default ProjectsSection;
