"use client";
import React, {useTransition, useState} from "react";
import TabButton from "./TabButton";
import { 
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript, 
  SiExpress, 
  SiNodedotjs, 
  SiReact, 
  SiRedux,
  SiMysql,
  SiPostgresql, 
  SiMongodb,
  SiApachehadoop,
  SiCloudera,
  SiGooglecloud,
  SiGit,
  SiPostman,
  SiVercel

} from "react-icons/si";
import { FaGraduationCap, FaBook, FaBriefcase } from "react-icons/fa";

const SKILLS_DATA = [
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Express", icon: SiExpress },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "ApacheHadoop", icon: SiApachehadoop },
  { name: "Cloudera", icon: SiCloudera },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel }
];

const TAB_DATA = [
  {
       title: "Experience",
       id: "experience",
       content: (
         <div className="space-y-4">
           <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-900 to-red-700 rounded-lg hover:from-red-800 hover:to-red-600 transition transform hover:scale-105">
             <FaBriefcase className="text-3xl text-red-300 flex-shrink-0 mt-1" />
             <div>
               <h3 className="font-bold text-lg">Programmer Analyst Trainee — Cognizant Technology Solutions</h3>
               <p className="text-red-200 text-sm">May 2025 — Present</p>
               <ul className="mt-2 list-disc list-inside text-sm text-red-200 space-y-1">
                 <li>Designed a full-stack database-driven application called Smart Health Analytics System to improve healthcare data management and provide meaningful insights for doctors and administrators using Python and MySQL.</li>
                 <li>Used Cloud Run to deploy a stateless NodeJS API that returns a list of tasks in JSON format.</li>
                 <li>Additionally engaged in concepts like Data warehousing, ETL, and Hadoop ecosystem.</li>
               </ul>
             </div>
           </div>

           <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-900 to-orange-700 rounded-lg hover:from-orange-800 hover:to-amber-600 transition transform hover:scale-105">
             <FaBriefcase className="text-3xl text-orange-300 flex-shrink-0 mt-1" />
             <div>
               <h3 className="font-bold text-lg">MERN Stack Intern — UptoSkills</h3>
               <p className="text-orange-200 text-sm">Oct 2024 — Jan 2025</p>
               <ul className="mt-2 list-disc list-inside text-sm text-orange-200 space-y-1">
                 <li>Built Mentor-Mentee dashboard, a software used to connect students with mentors across the nation.</li>
                 <li>Enhanced backend functionality by designing and optimizing API endpoints, leading to a 30% improvement in error detection.</li>
                 <li>Collaborated across teams to deliver high-performing and scalable features, enhancing the user experience.</li>
               </ul>
             </div>
           </div>

           <div className="space-y-4">
           <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-900 to-yellow-700 rounded-lg hover:from-yellow-800 hover:to-yellow-600 transition transform hover:scale-105">
             <FaBriefcase className="text-3xl text-yellow-500 flex-shrink-0 mt-1" />
             <div>
               <h3 className="font-bold text-lg">Summer Research Fellow — IIIT Dharwad</h3>
               <p className="text-yellow-200 text-sm">May 2024 — July 2024</p>
               <ul className="mt-2 list-disc list-inside text-sm text-yellow-200 space-y-1">
                 <li>Worked on the project, Simulating and Enhancing Network Protocols in NS-3 under the guidance of Dr Pavan Kumar C.</li>
                 <li>Used NS-3 to assess performance metrics like throughput, delay, jitter and packet loss of exisiting protocols, identify bottlenecks and make informed decisions about protocols improvements.</li>
               </ul>
             </div>
           </div>
           </div>
         </div>
       ),
     },

    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS_DATA.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-900 to-orange-700 rounded-lg hover:from-orange-800 hover:to-orange-600 transition transform hover:scale-105">
                <IconComponent className="text-4xl mb-2 text-orange-300" />
                <p className="text-sm font-semibold text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      ),
    },

    {
       title: "Education",
       id: "education",
       content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-900 to-red-700 rounded-lg hover:from-red-800 hover:to-red-600 transition transform hover:scale-105">
            <FaGraduationCap className="text-3xl text-red-300 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">Global Academy of Technology</h3>
              <p className="text-red-100"><strong>CGPA: 9.61</strong></p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-900 to-orange-700 rounded-lg hover:from-orange-800 hover:to-orange-600 transition transform hover:scale-105">
            <FaGraduationCap className="text-3xl text-orange-300 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">MES Kishora Kendra PU College</h3>
              <p className="text-orange-100"><strong>98.5%</strong></p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-900 to-yellow-700 rounded-lg hover:from-yellow-800 hover:to-yellow-600 transition transform hover:scale-105">
            <FaGraduationCap className="text-3xl text-yellow-300 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">Nirmala Rani High School</h3>
              <p className="text-yellow-100"><strong>92.48%</strong></p>
            </div>
          </div>
        </div>
      ),
    },

    {
        title: "Course work",
        id: "coursework",
        content: (
         <div className="space-y-3">
           <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-900 to-orange-700 rounded-lg border-l-4 border-orange-400 hover:from-orange-800 hover:to-orange-600 transition transform hover:scale-105">
             <FaBook className="text-2xl text-orange-300 flex-shrink-0 mt-1" />
             <div>
               <p className="font-semibold">MongoDB - The Complete Developer&apos;s Guide 2024</p>
             </div>
           </div>
           <div className="flex items-start gap-4 p-4 bg-gradient-to-r  from-orange-900 to-orange-700 rounded-lg border-l-4 border-orange-400 hover:from-orange-800 hover:to-orange-600 transition transform hover:scale-105">
             <FaBook className="text-2xl text-orange-300 flex-shrink-0 mt-1" />
             <div>
               <p className="font-semibold">Engineer Learning path - Postman</p>
             </div>
           </div>
           <div className="flex items-start gap-4 p-4 bg-gradient-to-r  from-orange-900 to-orange-700 rounded-lg border-l-4 border-orange-400 hover:from-orange-800 hover:to-orange-600 transition transform hover:scale-105">
             <FaBook className="text-2xl text-orange-300 flex-shrink-0 mt-1" />
             <div>
               <p className="font-semibold">The Complete 2024 Web Development Bootcamp - Udemy</p>
             </div>
           </div>
         </div>
       ),
     }
];

const AboutSection = () => {
    const [tab, setTab] = useState("experience");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section className="text-white" id="about">
   <div className="w-full flex flex-col gap-8 items-start py-8 px-4 sm:py-16">
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4" >About Me</h2>
        <p className="text-base sm:text-lg mb-6 lg:text-xl">
        Working as a Programmer Analyst Trainee at Cognizant Technology Solutions. Crafting Responsive UIs with React, Redux and Tailwind side by side.
        </p>
        <div className="flex flex-row justify-start mt-8 gap-2 flex-wrap">
           <TabButton 
           selectTab={() => handleTabChange("experience")} 
           active = {tab === "experience"} >
            Experience
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("skills")} 
           active = {tab === "skills"} >
            Skills
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("education")} 
           active = {tab === "education"} >
            Education
           </TabButton>
           <TabButton 
           selectTab={() => handleTabChange("coursework")} 
           active = {tab === "coursework"} >
            Course work
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