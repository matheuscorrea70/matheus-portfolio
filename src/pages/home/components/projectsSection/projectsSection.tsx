import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'
import GitHubIcon from 'common/assets/icons/github.svg?react'
import ExternalIcon from 'common/assets/icons/external.svg?react'
import { PROJECT_LIST } from './constants'

const ProjectsSection = () => {
  return (
    <section id={`section-${HomeSectionId.Projects}`} className="pt-32">
      <SectionHeader title="Each project is a unique piece of development" subTitle="Portfolio" />
      <ul className="mt-8">
        {PROJECT_LIST.map((item, index) => (
          <div
            className={`flex gap-12 mt-4 justify-between shado ${index % 2 === 0 && 'flex-row-reverse'}`}>
            <div>
              <img src={item.picture} className="max-w-md rounded-lg" />
            </div>
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="mt-4">{item.description}</p>
              <div className="font-bold mt-4">Stack: {item.stack}</div>
              <footer className="flex gap-12 mt-4">
                {item.github && (
                  <a className="flex gap-2" href={item.github} target="_blank">
                    <span>Code</span> <GitHubIcon width={22} />
                  </a>
                )}
                {item.liveDemo && (
                  <a className="flex gap-2" href={item.liveDemo} target="_blank">
                    <span>Live Demo</span>
                    <ExternalIcon width={20} />
                  </a>
                )}
              </footer>
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
