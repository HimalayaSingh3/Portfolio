import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  {
    src: "/FigmaClone.png",
    title: "AI Saas BG Removal",
    description: "Figma Clone using Next.js 14, Tailwind CSS, Liveblocks, Fabric",
    link: "https://github.com/HimalayaSingh3/AI-Saas-BG-Removal",
    live: "https://your-figma-clone-live.com",
  },
  {
    src: "/TravelWebsite.png",
    title: "Podcaster App",
    description: "Travel Website Using Next.js 14, Tailwind CSS, TypeScript",
    link: "https://github.com/HimalayaSingh3/MERN-Stack-Podcaster-App",
    live: "https://your-podcaster-app.com",
  },
  {
    src: "/YoutubeClone.png",
    title: "AI Saas Form Builder",
    description: "YouTube Clone Using React, Tailwind CSS, TypeScript",
    link: "https://github.com/HimalayaSingh3/AI-Saas-Form-Builder",
    live: "https://your-form-builder.com",
  },
  {
    src: "/YoutubeClone.png",
    title: "Phonify App",
    description: "Music Streaming App using React, Tailwind CSS, TypeScript",
    link: "https://github.com/HimalayaSingh3/Phonify-App",
    live: "https://your-phonify-app.com",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 w-full" id="projects">
      <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 text-center">
        My Projects
      </h1>

      {/* Project Grid with Better Responsive Behavior */}
      <div className="grid w-full gap-6 md:gap-10"
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          justifyContent: "center", 
          alignItems: "center" 
        }}
      >
        {projectData.map((project, index) => (
          <div key={index} className="animate-fade-in">
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
