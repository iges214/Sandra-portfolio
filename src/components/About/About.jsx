import styles from "./About.module.css"
import image from '../../assets/nobg.png'


export default function About() {
  return (
    <section id="about" className={`py-20 px-6 bg-gray-50 dark:bg-gray-900 ${styles.about}`}>
      <div className={` ${styles.aboutcont}`}>

        {/* IMAGE */}
        <div className={`bg-gray-100 dark:bg-gray-800 ${styles.abtimg}`}
        >
                    <img src={image} alt="Sandra"/>
        </div>
        
        {/* Heading & Paragraph */}
       <div>
        <div className={` text-left ${styles.abtcontent}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
            About Me
          </h2>
          <p className={`text-lg mb-6 leading-relaxed text-gray-900 dark:text-white ${styles.abtpara}`}>
            I'm a passionate Frontend Developer with 2 years of experience creating responsive, 
            user-friendly web applications using HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS. 
            I enjoy bringing designs to life through clean, maintainable code and love building intuitive UI/UX experiences. 
            I'm always eager to learn new technologies and improve my skills to deliver high-quality, performant websites.
          </p>
        </div>

        {/* Education */}
        <div className=" w-full flex justify-center lg:justify-start items-center lg:items-center">
          <div className={`bg-gray-100 dark:bg-gray-800 p-8 rounded-lg w-full max-w-sm text-center lg:text-left ${styles.edu}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${styles.eduhead}`}>
              🎓 Education
            </h3>
            <p className="text-md text-gray-700 dark:text-gray-300">
              BSc, Computer Science<br />
              Delta State University, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

