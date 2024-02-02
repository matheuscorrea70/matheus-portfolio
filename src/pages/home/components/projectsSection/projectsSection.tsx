import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'

const ProjectsSection = () => {
  return (
    <section id={`section-${HomeSectionId.Projects}`} className="pt-32">
      <SectionHeader title="Each project is a unique piece of development" subTitle="Portfolio" />
    </section>
  )
}

export default ProjectsSection
