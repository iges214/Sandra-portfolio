import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from "./experience.module.css"
import interkelLogo from '../../assets/interkel-logo.jpg'
import josLogo from '../../assets/jos-logo.png'
import codeitLogo from '../../assets/codeit.jpg'


const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Codeit',
    logo: codeitLogo,
    duration: '2024 - 2025',
    description: 'Worked on UI/UX of client-facing applications using React, Tailwind CSS, and APIs.'
  },
  {
    role: 'IT Support Staff',
    company: 'Interkel Nigeria Limited',
    logo: interkelLogo,
    duration: '2021',
    description: 'Provided technical support and maintained internal systems.'
  },
  {
    role: 'NYSC Staff',
    company: 'Jos South Secretariat',
    logo: josLogo,
    duration: '2022',
    description: 'Performed IT and administrative support tasks during NYSC service year.'
  }
]

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Experience</h2>
      <div className="max-w-5xl mx-auto grid gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transition duration-300 ${styles.eachcompany}`}
          >
            <h3 className={`text-2xl font-semibold flex items-center gap-2 ${styles.companyname}`}>
              {exp.role} @ 
              <img src={exp.logo} alt={`${exp.company} logo`} className="h-6 w-6 object-contain inline-block" />
              <span className={`text-xl font-semibold text-gray-900 dark:text-gray-100`}>{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
