
import ProjectCard from "./ProjectCard";
import memoryGameScreenshot from "../../assets/projectimg/pccardimg.png";
import portfolioScreenshot from "../../assets/projectimg/portfolioimg.png";

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
     {
      title: "My Portfolio",
      description: "My personal portfolio is a responsive, modern single-page application designed to showcase my frontend development skills, projects, and experience. Built with React.js and styled using Tailwind CSS, it emphasizes clean design, smooth animations, and accessibility.",
      techStack: ["React.js", "css", "Tailwind CSS", "JavaScript", "Git", "Netlify"],
      projectUrl: "https://iamsandra.netlify.app/",
      repoUrl: "https://github.com/iges214/Sandra-portfolio.git",
      imageUrl: portfolioScreenshot,
    },
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

