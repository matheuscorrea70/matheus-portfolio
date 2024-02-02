import SectionHeader from 'common/components/sectionHeader'
import { HomeSectionId } from 'common/types/homeSectionId'
import LocationIcon from 'common/assets/images/location.png'
import MailIcon from 'common/assets/images/mail.png'

const ContactSection = () => {
  return (
    <section id={`section-${HomeSectionId.Contact}`} className="pt-32">
      <SectionHeader title="Reach out and let's start a conversation about your next project or collaboration." subTitle="Contact" />
      <div className="mt-8">
        <div className="flex gap-2">
          <img src={LocationIcon} alt="Location icon" className="w-6 h-6" />
          <span>Minas Gerais, Brasil</span>
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <img src={MailIcon} alt="Email icon" className="w-6 h-6" />
          <a href="mailto:matheus.correa70@gmail.com">matheus.correa70@gmail.com</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
