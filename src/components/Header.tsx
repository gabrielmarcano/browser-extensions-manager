import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'

function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <header className="mb-4 flex h-25 w-full items-center justify-between">
        <div className="bg-neutral-0 flex h-16 w-full items-center justify-between rounded-lg border-1 border-neutral-100 p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-800">
          <img src={logo} className="h-10" />
          <div id="toggle">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-nred-400 flex min-h-12 min-w-12 cursor-pointer items-center rounded-lg bg-neutral-100 p-3 hover:bg-neutral-300 focus:outline-2 focus:outline-offset-2 active:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-600"
              aria-label="Toggle dark mode"
              type="button"
            >
              <img src={darkMode ? sun : moon} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
