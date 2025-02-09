import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  live: string;
}

const ProjectCard = ({ src, title, description, link, live}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] transform transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={600}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {/* Buttons Container */}
        <div className="flex justify-between items-center mt-4 gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white cursor-pointer border border-white rounded-lg bg-black px-4 py-2 transition-transform duration-200 hover:scale-110"
          >
            View Project
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black border border-black rounded-lg bg-white px-4 py-2 transition-transform duration-200 hover:scale-110"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
