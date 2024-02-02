import AboutSection from './components/aboutSection'
import ContactSection from './components/contactSection'
import HomeSection from './components/homeSection'
import ProjectsSection from './components/projectsSection'

const Home = () => {
  return (
    <div className="flex flex-col px-6 items-center w-full ">
      <div className="lg:max-w-4xl">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default Home
