"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>Express</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>Redux</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Tailwind</li>
        </ul>
      )
    },

    {
       title: "Education",
       id: "education",
       content: (
        <ul className="list-disc pl-2">
          <li>Global Academy of Technology</li>
          <li>CGPA - 9.69</li>
        </ul>
      )
    },

    {
        title: "Certification",
        id: "certifications",
        content: (
         <ul className="list-disc pl-2">
           <li>Computer Networks and Internet Protocol, NPTEL</li>
         </ul>
       )
     }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-img.jpeg" alt="about-image" width={500} height={100} />
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
        Leveraging React, Redux, and Tailwind, I design and build responsive UIs that are both visually appealing and functional!
        </p>
        <div className="flex flex-row justify-start mt-8">
           <TabButton 
           selectTab={() => handleTabChange("skills")} 
           active = {tab === "skills"} >
            {""}
            Skills {""}
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("education")} 
           active = {tab === "education"} >
            {""}
            Education {""}
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("certifications")} 
           active = {tab === "certifications"} >
            {""}
            Certifications {""}
           </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content}</div>
    </div>
    </div>
    </section>;
};

export default AboutSection;