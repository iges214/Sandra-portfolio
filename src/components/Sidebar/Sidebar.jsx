import {
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaEnvelope
} from 'react-icons/fa'
import DarkModeToggle from '../DarkModeToggle'

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[100%] bg-white dark:bg-gray-900 text-black dark:text-white p-6 z-50 transform transition-transform duration-500 xlNav:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button onClick={toggle} className="absolute top-4 right-4 text-2xl">
        <FaTimes />
      </button>

      {/* Logo, CV, Dark Mode Row */}
      <div className="flex items-center gap-3 mb-10 mt-2">
        <div className="text-lg font-bold leading-5 whitespace-nowrap">
          <span style={{ fontSize: '40px', color: '#fc507b' }}>S</span>
          <span style={{ fontSize: '18px' }}>andra's</span>
          <br />
          <span
            className="text-gray-600 dark:text-gray-400"
            style={{ fontSize: 10, letterSpacing: 6, fontWeight: 100 }}
          >
            PORTFOLIO
          </span>
        </div>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`py-2 px-3 rounded text-gray-900 dark:text-gray-100 text-sm font-semibold hover:bg-[#fc507b] border-1`}
        >
          CV
        </a>

        <DarkModeToggle />
      </div>

      {/* Navigation Links */}
<ul className="flex flex-col text-lg">
  {[
    { href: '#hero', label: 'Home', icon: FaHome },
    { href: '#about', label: 'About', icon: FaUser },
    { href: '#skills', label: 'Skills', icon: FaTools },
    { href: '#experience', label: 'Experience', icon: FaBriefcase },
    { href: '#contact', label: 'Contact', icon: FaEnvelope }
  ].map(({ href, label, icon: Icon }) => (
    <li key={label}>
      <a
        href={href}
        onClick={toggle}
        className="group flex items-center gap-3 p-2 rounded transition duration-200 text-black dark:text-white hover:bg-[#fc507b] hover:text-white"
      >
        <Icon className="text-[#fc507b] group-hover:text-white transition duration-200" />
        <span>{label}</span>
      </a>
    </li>
  ))}
</ul>




      {/* Contact Info */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4">
  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Contact Info</h3>
  <ul className="flex flex-col gap-2 text-sm">
    <li className="flex items-center gap-2 p-1">
      <FaEnvelope className="text-blue-600 text-2xl" />
      <a
        href="mailto:ighosandra@yahoo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-200 hover:underline  hover:text-gray-900 hover:bg-transparent"
      >
        ighosandra@yahoo.com
      </a>
    </li>
    <li className="flex items-center gap-2 p-1">
      <FaGithub className="text-gray-900 dark:text-gray-200 text-2xl" />
      <a
        href="https://github.com/iges214"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-200 hover:underline  hover:text-gray-900 hover:bg-transparent"
      >
        /iges214
      </a>
    </li>
    <li className="flex items-center gap-2 p-1">
      <FaLinkedin className="text-blue-500 text-2xl" />
      <a
        href="https://linkedin.com/in/sandra-ighoyivwi-bbb231256"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-200 hover:underline  hover:text-gray-900 hover:bg-transparent"
      >
        /sandra
      </a>
    </li>
    <li className="flex items-center gap-2 p-1">
      <FaWhatsapp className="text-green-600 text-2xl" />
      <a
        href="https://wa.me/2349068025726"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-200 hover:underline hover:text-gray-900 hover:bg-transparent"
      >
        +234 906 8025 726
      </a>
    </li>
  </ul>
</div>

    </div>
  )
}



