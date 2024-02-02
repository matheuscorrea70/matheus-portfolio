import { HomeSectionId } from 'common/types/homeSectionId'

const ContactSection = () => {
  return (
    <section>
      <header>
        <h2>Contact</h2>
        <h1 id={HomeSectionId.Contact}>Don't be shy! Hit me up!</h1>
      </header>
      <div>
        <div>Location</div>
        <div>Mail</div>
      </div>
    </section>
  )
}

export default ContactSection
