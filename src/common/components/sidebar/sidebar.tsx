import { NAV_SECTIONS } from 'common/constants/navSections'
import { forwardRef, Ref } from 'react'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = forwardRef(({ isOpen }: SidebarProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className={`top-0 right-0 w-[60vw] bg-white p-10 fixed h-full z-40 ease-in-out duration-300 shadow-lg ${
        isOpen ? 'translate-x-0 ' : 'translate-x-full'
      }`}
      ref={ref}>
      <ul>
        {NAV_SECTIONS.map(item => (
          <li>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Sidebar
