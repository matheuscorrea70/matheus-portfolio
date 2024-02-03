import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'
import GitHubIcon from 'common/assets/icons/github.svg?react'
import ExternalIcon from 'common/assets/icons/external.svg?react'
import { PROJECT_LIST } from './constants'

const ProjectsSection = () => {
  return (
    <section id={`section-${HomeSectionId.Projects}`} className="pt-32">
      <SectionHeader
        title="Explore a curated collection of my projects, each telling a unique story of creativity and expertise."
        subTitle="Portfolio"
      />
      <ul>
        {PROJECT_LIST.map((item, index) => (
          <li
            className={`flex flex-col items-start gap-12 mt-8 pb-8 justify-between ${index % 2 === 0 && 'lg:flex-row-reverse'} lg:flex-row`}>
            <img src={item.picture} className="w-[30rem] h-auto rounded-lg" />

            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="mt-4">{item.description}</p>
              <div className="font-bold mt-4">Stack: {item.stack}</div>
              <footer className="flex gap-12 mt-4">
                {item.github && (
                  <a
                    className="flex gap-2 hover:bg-sky-50 dark:hover:bg-sky-900 py-2 rounded-md"
                    href={item.github}
                    target="_blank">
                    <span>Code</span> <GitHubIcon width={22} className="dark:fill-gray-100" />
                  </a>
                )}
                {item.liveDemo && (
                  <a className="flex gap-2 hover:bg-sky-50 dark:hover:bg-sky-900 py-2 rounded-md" href={item.liveDemo} target="_blank">
                    <span>Live Demo</span>
                    <ExternalIcon width={20} className="dark:fill-gray-100" />
                  </a>
                )}
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
