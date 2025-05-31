import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import styles from "./app.module.css"
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 })
}, [])

  return (
    <>
    <Loader/>
    <div  className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Contact />
      <Footer/>
    </div>
    </>
  )
}

export default App
