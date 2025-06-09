// export default function Project() {
//   return (
//     <section className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
//       <h2 className="text-3xl font-bold mb-4">Projects</h2>
//       <p>Check out some of the projects I've worked on!</p>
//     </section>
//   )
// }

import React from "react";
import ProjectCard from "./ProjectCard";
import memoryGameScreenshot from "../../assets/projectimg/pccardimg.png";

const Projects = () => {
  const projects = [
    {
      title: "Memory Game",
      description:
        "A fun and interactive memory matching game built with vanilla JavaScript. Features user profiles, avatars, timer, best score tracking, and modals.",
      techStack: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      projectUrl: "https://findoji.netlify.app",
      repoUrl: "https://github.com/iges214/FindGame.git",
      imageUrl: memoryGameScreenshot,
    },
    // add more projects here...
  ];

  return (
    <section id="projects" className="py-12 px-5 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

