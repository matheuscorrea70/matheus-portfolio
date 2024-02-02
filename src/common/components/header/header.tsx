/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar'
import MenuIcon from '../../assets/icons/menu.svg?react'
// import { HEADER_SECTIONS } from './constants'

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
    <header className="app-header flex justify-between sticky w-full top-0 left-0 py-4 px-4 bg-white">
      <h1 className="font-bold">Matheus.dev</h1>
      <button onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon width={14} aria-label="Menu icon" />
      </button>
      {/* <nav className="flex gap-12 text-zinc-50"> */}
      {/* {HEADER_SECTIONS.map(section => (
          <a className='text-zinc-50' href={section.url}>{section.label}</a>
        ))} */}
      {/* </nav> */}
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} onClick={() => setIsSidebarOpen(false)} />
    </header>
  )
}

export default Header
