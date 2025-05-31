import img from '../../assets/nobg4.png'
import styles from "./hero.module.css"

 
export default function Hero() {
  return (
    <div
      id="hero"
      className="bg-[url('../src/assets/bg22.jpg')] 
    dark:bg-[url('../src/assets/bgsvg.svg')] 
    bg-cover bg-center h-auto flex items-center justify-center dark:bg-gray-900 text-gray-800 dark:text-white px-6">

      <div className={`pt-8 container mx-auto flex flex-col md:flex-row  justify-between gap-2 ${styles.Picdiv}`}>
        {/* Image first on small screens, second on md+ */}
        <div className={`w-full md:w-1/2 order-1 md:order-2 object-cover${styles.Pic}`} >
          <img src={img} alt="Sandra"
          className={styles.im}/>
        </div>

        <div className={`w-full text-6xl justify-start order-2 md:order-1 ${styles.Navcontent}`}>
          <h1 className={` text-gray-900 dark:text-white ${styles.Navhead}`}>
            Hello, I’m Sandra
          </h1>
          <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${styles.heropara}`} >
            I’m a Frontend Developer with a passion for building responsive engaging user interfaces using modern web technologies.
          </p>

          <div className={`flex flex-row mb-5 sm:flex-row justify-center md:justify-start ${styles.navtbts}`}
           > 
            <a 
              href="/cv.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded transition-transform duration-200 hover:scale-105 ${styles.resumebtn}`}
            >
              Resume
            </a>

            <a
              href="#contact"
              style={{fontSize : 20, borderRadius : 5, padding: 15}}
              className={`p-3 rounded transition-transform duration-200 hover:scale-105 dark:text-white ${styles.contactbtn}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
