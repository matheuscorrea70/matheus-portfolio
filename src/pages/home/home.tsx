import AboutSection from './components/aboutSection'
import ContactSection from './components/contactSection'
import ExperienceSection from './components/experienceSection'
import HomeSection from './components/homeSection'
import ProjectsSection from './components/projectsSection'

const Home = () => {
  return (
    <main className="flex flex-col px-4 lg:px-6 items-center w-full">
      <div className="lg:max-w-4xl">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default Home
