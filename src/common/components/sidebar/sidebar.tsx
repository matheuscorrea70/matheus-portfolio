import { NAV_SECTIONS } from 'common/constants/navSections'
import { forwardRef, Ref } from 'react'

type SidebarProps = {
  isOpen: boolean
  onClick?: () => void
}

const Sidebar = forwardRef(({ isOpen, onClick }: SidebarProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className={`top-0 right-0 w-[60dvw] sm:w-[30dvw] bg-white p-10 fixed h-full z-40 ease-in-out duration-300 shadow-lg ${
        isOpen ? 'translate-x-0 ' : 'translate-x-full'
      }`}
      ref={ref}>
      <ul>
        {NAV_SECTIONS.map(item => (
          <li className="py-2">
            <button
              onClick={() => {
                onClick?.()
                item.onClick()
              }}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Sidebar
