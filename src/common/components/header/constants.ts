import { HomeSectionId } from 'common/types/homeSectionId'

export const HEADER_SECTIONS = [
  {
    id: HomeSectionId.Home,
    url: `#${HomeSectionId.Home}`,
    label: 'Home'
  },
  {
    id: HomeSectionId.About,
    url: `#${HomeSectionId.About}`,
    label: 'About'
  },
  {
    id: HomeSectionId.Experience,
    url: `#${HomeSectionId.Experience}`,
    label: 'Experience'
  },
  {
    id: HomeSectionId.Projects,
    url: `#${HomeSectionId.Projects}`,
    label: 'Projects'
  },
  {
    id: HomeSectionId.Contact,
    url: `#${HomeSectionId.Contact}`,
    label: 'Contact'
  }
]
