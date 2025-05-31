import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      className="p-2 text-white bg-gray-500 dark:bg-gray-300 rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}
