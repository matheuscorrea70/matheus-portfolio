import { HomeSectionId } from 'common/types/homeSectionId'
import LaptopImage from './assets/images/laptop.png'
import SectionHeader from 'common/components/sectionHeader'

const AboutSection = () => {
  return (
    <section
      id={`section-${HomeSectionId.About}`}
      className="flex flex-col gap-12 pt-32 lg:flex-row">
      <img
        src={LaptopImage}
        alt="Laptop Image"
        className="w-full max-w-96 inline-block rounded-md self-center"
      />

      <div>
        <SectionHeader
          title="A seasoned Senior Software Engineer based in Brazil"
          subTitle="About me"
        />
        <p className="mt-8">
          As a Senior Software Engineer, I have been working since 2015 in different companies and
          on various projects. I possess impressive skills in the frontend tech stack, including
          TypeScript, JavaScript, React, HTML, CSS, Tailwind, Next.js, Node, and others. I excel in
          designing and maintaining responsive web applications, ensuring a smooth user experience.
          My expertise lies in crafting dynamic, engaging interfaces through writing clean and
          optimized code and utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives on collaborating with cross-functional teams to produce
          outstanding web applications.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
