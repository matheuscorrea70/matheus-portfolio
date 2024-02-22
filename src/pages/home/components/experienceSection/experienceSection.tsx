import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'
import { EXPERIENCE_LIST } from './constants'
import Html from 'common/components/html'

const ExperienceSection = () => {
  return (
    <section id={`section-${HomeSectionId.Experience}`} className="pt-32">
      <SectionHeader title="My journey so far" subTitle="Experience" />
      <ul className="mt-8">
        {EXPERIENCE_LIST.map(item => (
          <li className="flex items-start gap-2 lg:gap-4 mt-8" key={item.title}>
            <img src={item.picture} className="w-10 lg:w-16 pt-1" />
            <div>
              <header>
                <h2 className="font-bold text-lg">{item.title}</h2>
              </header>
              <div className="text-sm">{item.company}</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">{item.date}</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">{item.location}</div>
              <Html as="p" className="mt-4">
                {item.description}
              </Html>
              <div className="mt-4 ">
                <strong>Tech stack: {item.techStack}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
