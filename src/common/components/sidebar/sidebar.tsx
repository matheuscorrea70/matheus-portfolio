import { forwardRef, Ref } from 'react'
import { NAV_SECTIONS } from './constants'

type SidebarProps = {
  isOpen: boolean
  onClick?: () => void
}

const Sidebar = forwardRef(({ isOpen, onClick }: SidebarProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className={`top-0 right-0 w-[60dvw] max-w-72 sm:w-[30dvw] bg-white p-10 fixed h-full z-40 ease-in-out duration-300 shadow-lg ${
        isOpen ? 'translate-x-0 ' : 'translate-x-full'
      }`}
      ref={ref}>
      <ul>
        {NAV_SECTIONS.map(item => (
          <li className="py-2">
            <button
              aria-label={item.label}
              className='flex gap-4 hover:bg-sky-50 p-4 w-full rounded-md'
              onClick={() => {
                onClick?.()
                item.onClick()
              }}>
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Sidebar
