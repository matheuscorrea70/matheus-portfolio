import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'

const ProjectsSection = () => {
  return (
    <section>
      <SectionHeader
        title="Each project is a unique piece of development"
        subTitle="Portfolio"
        id={HomeSectionId.Projects}
      />
    </section>
  )
}

export default ProjectsSection
