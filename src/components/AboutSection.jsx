"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
//import { Content } from "next/font/google";

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
      ),
    },

    {
       title: "Education",
       id: "education",
       content: (
        <ul className="list-disc pl-2">
          <li>Global Academy of Technology <strong>[CGPA - 9.69]</strong></li>
          <li>MES Kishora Kendra PU College <strong>[98.5%]</strong></li>
          <li>Nirmala Rani High School <strong>[92.48%]</strong></li>
        </ul>
      ),
    },

    {
        title: "Course work",
        id: "coursework",
        content: (
         <ul className="list-disc pl-2">
           <li>MongoDB - The Complete Developer&apos;s Guide 2024</li>
           <li>Engineer Learning path - Postman</li>
           <li>The Complete 2024 Web Development Bootcamp - Udemy</li>
           <li>Computer Networks and Internet Protocol, NPTEL</li>
         </ul>
       ),
     },

     {
      title: "Achievements",
      id: "achievements",
      content: (
       <ul className="list-disc pl-2">
         <li>Presented a paper titled, 
            <strong> Efficient Battery Management Systems in Electric Vehicles using AI and IoT - A literature Survey</strong>
         </li>
         <li>Worked as a 
         <strong> Summer Research Fellow at IIT Dharwad through the SRFP&apos;24 offered by IAS-INSA-NASI</strong>
         </li>
       </ul>
     ),
   },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-img.jpg" alt="about-image" width={1200} height={100} />
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4" >About Me</h2>
        <p className="text-base lg:text-lg">
        Leveraging React, Redux, and Tailwind, I design and build responsive UIs that are both visually appealing and functional!
        </p>
        <div className="flex flex-row justify-start mt-8 gap-2">
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
           selectTab={() => handleTabChange("coursework")} 
           active = {tab === "coursework"} >
            {""}
            Course work {""}
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("achievements")} 
           active = {tab === "achievements"} >
            {""}
            Achievements {""}
           </TabButton>
        </div>
        <div className="mt-8">
        {TAB_DATA.find((t) => t.id ===tab).content}
        </div>
    </div>
    </div>
    </section>;
};

export default AboutSection;