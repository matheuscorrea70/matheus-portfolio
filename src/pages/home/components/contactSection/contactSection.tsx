import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'
import LocationIcon from 'common/assets/images/location.png'
import EnvelopeIcon from 'common/assets/icons/envelope.svg?react'

const ContactSection = () => {
  return (
    <section id={`section-${HomeSectionId.Contact}`} className="pt-32">
      <SectionHeader
        title="Reach out and let's start a conversation about your next project or collaboration."
        subTitle="Contact"
      />
      <div className="mt-8 flex flex-col items-start">
        <div className="flex gap-2 px-4 py-2">
          <img src={LocationIcon} alt="Location icon" className="w-6 h-6" />
          <span>Minas Gerais, Brasil</span>
        </div>

        <a
          className="flex gap-2 mt-2 items-center hover:bg-sky-50 dark:hover:bg-sky-900 px-4 py-2 rounded-md"
          href="mailto:matheus.correa70@gmail.com">
          <EnvelopeIcon aria-label="Email icon" className="w-6 h-6 dark:fill-gray-100" />
          <span>matheus.correa70@gmail.com</span>
        </a>
      </div>
    </section>
  )
}

export default ContactSection
