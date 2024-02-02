import { HomeSectionId } from 'common/types/homeSectionId'
import UserIcon from 'common/assets/icons/user.svg?react'
import AddressBookIcon from 'common/assets/icons/addressBook.svg?react'
import BriefcaseIcon from 'common/assets/icons/briefcase.svg?react'
import FolderIcon from 'common/assets/icons/folder.svg?react'
import HomeIcon from 'common/assets/icons/home.svg?react'

const scrollIntoView = (sectionId: HomeSectionId) => {
  document.getElementById(`section-${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const NAV_SECTIONS = [
  {
    id: HomeSectionId.Home,
    label: 'Home',
    onClick: () => scrollIntoView(HomeSectionId.Home),
    icon: <HomeIcon width={22} />
  },
  {
    id: HomeSectionId.About,
    label: 'About',
    onClick: () => scrollIntoView(HomeSectionId.About),
    icon: <UserIcon width={22} />
  },
  {
    id: HomeSectionId.Experience,
    label: 'Experience',
    onClick: () => scrollIntoView(HomeSectionId.Experience),
    icon: <BriefcaseIcon width={22} />
  },
  {
    id: HomeSectionId.Projects,
    label: 'Projects',
    onClick: () => scrollIntoView(HomeSectionId.Projects),
    icon: <FolderIcon width={22} />
  },
  {
    id: HomeSectionId.Contact,
    label: 'Contact',
    onClick: () => scrollIntoView(HomeSectionId.Contact),
    icon: <AddressBookIcon width={22} />
  }
]