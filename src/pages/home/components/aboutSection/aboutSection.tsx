import { HomeSectionId } from 'common/types/homeSectionId'
import LaptopImage from './assets/images/laptop.png'
import SectionHeader from 'common/components/sectionHeader'

const AboutSection = () => {
  return (
    <section
      id={`section-${HomeSectionId.About}`}
      className="flex flex-col gap-12 pt-32 lg:flex-row">
      <img src={LaptopImage} alt="Laptop Image" className="w-full max-w-96 inline-block rounded-md self-center" />

      <div>
        <SectionHeader title="Senior Software Engineer" subTitle="About me" />
        <p className="mt-8">
          In the quiet corner of a bustling city, where the hum of traffic and the hurried footsteps
          of pedestrians create a rhythmic symphony, there stands an old bookstore with a faded sign
          that bears the weight of countless stories. The scent of aged paper and worn leather
          envelopes anyone who dares to venture inside, as shelves upon shelves stretch toward the
          ceiling, each holding a treasure trove of literary worlds waiting to be explored. Dust
          particles dance in the soft glow of antique lamps, casting a nostalgic ambiance that seems
          to transcend time. Amidst the hushed whispers of forgotten tales and the occasional
          creaking of well-trodden wooden floorboards, the bookstore becomes a sanctuary for those
          seeking refuge from the chaos outside, inviting them to lose themselves in the magic of
          words and imagination.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
