import { HomeSectionId } from 'common/types/homeSectionId'

const ProjectsSection = () => {
  return (
    <section>
      <header>
        <h2>Portfolio</h2>
        <h1 id={HomeSectionId.Projects}>Each project is a unique piece of development</h1>
      </header>
    </section>
  )
}

export default ProjectsSection
