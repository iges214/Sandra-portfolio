import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNode, FaGitAlt, FaFigma
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, percent: 95, color: '#e44d26', description: 'Semantic structure and accessibility-focused HTML5.' },
    { name: 'CSS', icon: <FaCss3Alt />, percent: 90, color: '#264de4', description: 'Responsive design, Flexbox, Grid, animations, and more.' },
    { name: 'JavaScript', icon: <FaJs />, percent: 85, color: '#f0db4f', description: 'ES6+, DOM manipulation, and core frontend logic.' },
    { name: 'React', icon: <FaReact />, percent: 80, color: '#61dafb', description: 'Hooks, component structure, and state management.' },
    { name: 'Bootstrap', icon: <FaBootstrap />, percent: 85, color: '#563d7c', description: 'Prebuilt responsive UI components.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, percent: 88, color: '#38bdf8', description: 'Utility-first CSS for rapid UI development.' },
    { name: 'Node.js', icon: <FaNode />, percent: 70, color: '#3c873a', description: 'Backend scripting with Express and API building.' },
    { name: 'Git', icon: <FaGitAlt />, percent: 80, color: '#f1502f', description: 'Version control, GitHub workflows, and branching.' },
    { name: 'Figma', icon: <FaFigma />, percent: 75, color: '#a259ff', description: 'UI/UX prototyping and design collaboration tools.' },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center relative">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12" data-aos="fade-up">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setSelectedSkill(skill)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="cursor-pointer flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-500 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg"
          >
            <div
              className="text-6xl mb-4 text-gray-700 dark:text-white"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <div className="w-24 h-24 mb-3">
              <CircularProgressbar
                value={skill.percent}
                text={`${skill.percent}%`}
                styles={buildStyles({
                  textColor: '#999',
                  pathColor: skill.color,
                  trailColor: '#eee',
                  textSize: '16px',
                })}
              />
            </div>

            <p className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</p>

            {/* <div className="w-full mt-3">
              <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-lg text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {selectedSkill.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedSkill.description}
            </p>
            <p className="font-medium">
              <span className="text-blue-500 dark:text-blue-400">{selectedSkill.percent}%</span> proficiency
            </p>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

