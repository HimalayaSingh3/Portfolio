import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  {
    src: "/blog.png",
    title: "Blog App",
    description: "Blog App using React, Tailwind CSS, Django",
    link: "https://github.com/HimalayaSingh3/AI-Saas-BG-Removal",
    live: "https://your-figma-clone-live.com",
  },
  {
    src: "/calc.png",
    title: "AI Calculator",
    description: "AI Calculator using React, Tailwind CSS, Gemini, Django",
    link: "https://github.com/HimalayaSingh3/AI-Saas-BG-Removal",
    live: "https://your-figma-clone-live.com",
  },
  {
    src: "/podcast.png",
    title: "Podcaster App",
    description: "Podcaster App Using React, Tailwind CSS, Node Js, Express Js, MongoDb",
    link: "https://github.com/HimalayaSingh3/MERN-Stack-Podcaster-App",
    live: "https://your-podcaster-app.com",
  },
  {
    src: "/phone.png",
    title: "PhoniFy App",
    description: "Phonify App Using React, Tailwind CSS, Django, Sqlite",
    link: "https://github.com/HimalayaSingh3/MERN-Stack-Podcaster-App",
    live: "https://your-podcaster-app.com",
  },
  {
    src: "/recipebook.png",
    title: "Recipe Book",
    description: "Recipe Book using React, Tailwind CSS, Django",
    link: "https://github.com/HimalayaSingh3/AI-Saas-BG-Removal",
    live: "https://your-figma-clone-live.com",
  },
  {
    src: "/student.jpg",
    title: "Student Management App",
    description: "Student Management using React, Tailwind CSS, Django",
    link: "https://github.com/HimalayaSingh3/AI-Saas-BG-Removal",
    live: "https://your-figma-clone-live.com",
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
