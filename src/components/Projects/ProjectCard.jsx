
const ProjectCard = ({
  title,
  description,
  techStack,
  projectUrl,
  repoUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg boxshadow overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
            Tech Stack:
          </h4>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="text-sm bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="GitHub Repository"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.17c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5 0-.25-.01-.91-.01-1.79-2.78.61-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 7.3c.85.004 1.7.115 2.5.337 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.93-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.6.69.5A10.005 10.005 0 0022 12.17C22 6.58 17.52 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
