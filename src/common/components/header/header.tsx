/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar'
import MenuIcon from 'common/assets/icons/menu.svg?react'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
    <header className="flex items-center justify-between sticky w-full top-0 left-0 py-2 px-4 bg-white lg:py-4 lg:px-8">
      <h1 className="font-bold text-md lg:text-xl">Matheus.dev</h1>
      <button
        className="hover:bg-sky-50 p-3 rounded-md"
        onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon className='w-5 lg:w-6' aria-label="Menu icon" />
      </button>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} onClick={() => setIsSidebarOpen(false)} />
    </header>
  )
}

export default Header
