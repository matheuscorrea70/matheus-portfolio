import { HEADER_SECTIONS } from './constants'

const Header = () => {
  return (
    <header className="app-header flex justify-between sticky w-full top-0 left-0 py-4 px-4 bg-white">
      <h1 className="font-bold">Matheus.dev</h1>
      <nav className="flex gap-12 text-zinc-50">
        {/* {HEADER_SECTIONS.map(section => (
          <a className='text-zinc-50' href={section.url}>{section.label}</a>
        ))} */}
      </nav>
    </header>
  )
}

export default Header
