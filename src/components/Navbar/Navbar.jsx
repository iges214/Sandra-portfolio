import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import DarkModeToggle from '../DarkModeToggle'
import Sidebar from '../Sidebar/Sidebar'
import styles from "./navbar.module.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [isFixed, setIsFixed] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const sections = ['hero', 'about', 'skills', 'contact']

    // Make navbar fixed only after scrolling 80px down
    if (scrollY > 80) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }

    // Section highlight logic
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el && scrollY + 200 >= el.offsetTop) {
        setActive(id)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          w-full z-50 transition-all duration-300 
          ${isFixed ? 'fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md' : 'relative'}
          ${styles.Nav}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-gray-900 dark:text-gray-100">
          {/* Left: Menu Icon */}
          <div className="flex items-center gap-4 xlNav:hidden">
            <button onClick={toggleSidebar} className="text-2xl">
              <FaBars />
            </button>
          </div>

          {/* Center: CV + Toggle (only on mobile) */}
          <div className="absolute left-1/3 transform -translate-x-1/2 flex gap-2 items-left xlNav:hidden">
            <a href="/cv.pdf" target="_blank"
                rel="noopener noreferrer" className={`py-1 px-2 rounded ${styles.cv}`}>CV</a>
            <DarkModeToggle />
          </div>

          {/* Right: Logo (mobile & desktop) */}
          <div className="xlNav:block text-lg font-bold leading-5">
            <span style={{ fontSize: '50px', color: "#fc507b" }}>S</span>
            <span style={{ fontSize: '20px' }}>andra's</span>
            <br />
            <span className="text-gray-1000 dark:text-gray-400" style={{ fontSize: 10, letterSpacing: 6, fontWeight: 100 }}>
              PORTFOLIO
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden xlNav:flex gap-4 items-center ml-auto">
            {['hero', 'about', 'skills', 'contact'].map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${active === id ? 'text-white font-bold' : ''} p-2`}
                  style={active === id ? { backgroundColor: '#fc507b' } : {}}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 py-2.5 rounded ${styles.resume}`}
              >
                Resume
              </a>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/* Add spacer only when navbar is fixed to avoid content jump */}
      {isFixed && <div className="h-[72px]"></div>}

      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </>
  )
}
