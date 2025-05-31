import { FaGithub, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center text-gray-700 dark:text-gray-300">
      <div className="flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-8 text-3xl">
          <a
            href="https://github.com/iges214"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transform transition duration-300 hover:scale-125"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sandra-ighoyivwi-bbb231256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transform transition duration-300 hover:scale-125"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/2349068025726"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transform transition duration-300 hover:scale-125"
            title="WhatsApp / Call"
          >
            <FaWhatsapp />
          </a>
          <a
            href="http://X.com/ighosandra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transform transition duration-300 hover:scale-125"
            title="X"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          © 2025 Sandra Ighoyivwi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

