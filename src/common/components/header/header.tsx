import { HEADER_SECTIONS } from './constants'

import './header.css'

const Header = () => {
  return (
    <header className='app-header flex justify-between fixed w-full top-0 left-0 py-6 px-12 bg-gray-800'>
      <h2>Matheus.dev</h2>
      <nav className='flex gap-12 text-zinc-50'>
        {HEADER_SECTIONS.map(section => (
          <a className='text-zinc-50' href={section.url}>{section.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
