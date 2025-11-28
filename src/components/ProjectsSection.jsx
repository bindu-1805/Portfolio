"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  
  {
    id:1,
    title: "Portfolio",
    description: "A simple portfolio website designed using NextJS and Tailwind CSS",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/bindu-1805/Portfolio",
    previewUrl: "https://github.com/bindu-1805/Portfolio"
  },

  {
    id:2,
    title: "Blog-app",
    description: "Allows users to create and view posts. Posts won't persist between sessions as no database is used.",
    image: "/images/projects/blog-app.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/bindu-1805/Blog-app",
    previewUrl: "https://github.com/bindu-1805/Blog-app"
  },

  {
    id:3,
    title: "Cocktail-recipe-generator",
    description: "Uses CocktailDB API to give a random cocktail recipe with a click of a button offering a cocktail name, category, glass type, ingredients and instructions.",
    image: "/images/projects/Cocktail.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/bindu-1805/Cocktail-recipe-generator",
    previewUrl: "https://cocktail-recipe-generator.vercel.app/"
  },

  {
    id:4,
    title: "Keeper",
    description: "Add and delete notes in a seamless way.",
    image: "/images/projects/Keeper.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/bindu-1805/Keeper",
    previewUrl: "https://keeper-nine-lovat.vercel.app/"
  },

  {
    id:5,
    title: "Globe-Hop",
    description: "Unveil the world's vibrant tapestry with GlobeHop!",
    image: "/images/projects/GlobeHop.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/bindu-1805/GlobeHop",
    previewUrl: "https://bindu-1805.github.io/GlobeHop/"
  },

   {
    id:6,
    title: "Smart Health Analytics System",
    description: "The Smart Health Analytics System is a full-stack database-driven application designed to improve healthcare data management and provide meaningful insights for doctors, and administrators.",
    image: "/images/projects/SHAS.png",
    tag: ["All", "Full stack"],
    gitUrl: "https://github.com/bindu-1805/Smart-Health-Analytics-System",
    previewUrl: "https://docs.google.com/presentation/d/1PpgORjIYpngSYn9feS2Gfz5HX6hLrarjYs6tEr-EDyg/edit?usp=sharing"
  },

  {
    id:7,
    title: "SyncSketch",
    description: "A Real-time collaborative drawing app built using ReactJS, ExpressJS and NodeJS.",
    image: "/images/projects/SyncSketch.png",
    tag: ["All", "Full stack"],
    gitUrl: "https://github.com/bindu-1805/SyncSketch-",
    previewUrl: "https://github.com/bindu-1805/SyncSketch-/blob/master/G20_1GA21CS032%26040_2023-2024.pdf"
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
              name="Frontend" 
              isSelected={tag==="Frontend"} />

              <ProjectTag 
              onClick={handleTagChange} 
              name="Full stack" 
              isSelected={tag==="Full stack"} />
            
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
