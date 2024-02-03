/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useRef, useState } from 'react'
import { useLayout } from 'common/hooks/useLayout'
import Sidebar from '../sidebar'
import MenuIcon from 'common/assets/icons/menu.svg?react'
import SunIcon from 'common/assets/icons/sun.svg?react'
import MoonIcon from 'common/assets/icons/moon.svg?react'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { theme, toggleTheme } = useLayout()

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as HTMLElement)) {
        setIsSidebarOpen(false)
      }
    }

    isSidebarOpen && document.addEventListener('mousedown', handleClickOutside)
    return () => {
      isSidebarOpen && document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen, sidebarRef])

  return (
    <header className="flex items-center justify-between sticky w-full top-0 left-0 py-2 px-4 bg-white lg:py-4 lg:px-8 dark:bg-zinc-900">
      <h1 className="font-bold text-md lg:text-xl">Matheus.dev</h1>
      <div className='flex items-center gap-2'>
        <button className="hover:bg-sky-50 dark:hover:bg-sky-900 p-3 rounded-md" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <SunIcon className="w-5 lg:w-6 dark:fill-gray-100" />
          ) : (
            <MoonIcon className="w-4 lg:w-5 dark:fill-gray-100" />
          )}
        </button>
        <button
          className="hover:bg-sky-50 dark:hover:bg-sky-900 p-3 rounded-md"
          onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon className="w-5 lg:w-6 dark:fill-gray-100" aria-label="Menu icon" />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} onClick={() => setIsSidebarOpen(false)} />
    </header>
  )
}

export default Header
