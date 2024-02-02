import { HomeSectionId } from 'common/types/homeSectionId'

const scrollIntoView = (sectionId: HomeSectionId) => {
  document.getElementById(`section-${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const NAV_SECTIONS = [
  {
    id: HomeSectionId.Home,
    label: 'Home',
    onClick: () => scrollIntoView(HomeSectionId.Home)
  },
  {
    id: HomeSectionId.About,
    label: 'About',
    onClick: () => scrollIntoView(HomeSectionId.About)
  },
  {
    id: HomeSectionId.Experience,
    label: 'Experience',
    onClick: () => scrollIntoView(HomeSectionId.Experience)
  },
  {
    id: HomeSectionId.Projects,
    label: 'Projects',
    onClick: () => scrollIntoView(HomeSectionId.Projects)
  },
  {
    id: HomeSectionId.Contact,
    label: 'Contact',
    onClick: () => scrollIntoView(HomeSectionId.Contact)
  }
]