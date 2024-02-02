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
    <header className="app-header flex justify-between sticky w-full top-0 left-0 py-4 px-4 bg-white lg:py-4 lg:px-8">
      <h1 className="font-bold text-md lg:text-lg">Matheus.dev</h1>
      <button onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon width={18} aria-label="Menu icon" />
      </button>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} onClick={() => setIsSidebarOpen(false)} />
    </header>
  )
}

export default Header
