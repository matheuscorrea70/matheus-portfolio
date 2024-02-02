import { HomeSectionId } from 'common/types/homeSectionId'
import JSIcon from 'common/assets/images/js.png'
import NodeJSIcon from 'common/assets/images/node-js.png'
import ReactIcon from 'common/assets/images/react.png'
import TSIcon from 'common/assets/images/ts.png'

import MatheusAvatar from './assets/images/matheusAvatar.jpeg'

const HomeSection = () => {
  return (
    <section>
      <main className="flex flex-col gap-12">
        <div>
          <h1 id={HomeSectionId.Home}>Senior Software Engineer</h1>
          <p className="pt-6">
            In the quiet corner of a bustling city, where the hum of traffic and the hurried
            footsteps of pedestrians create a rhythmic symphony, there stands an old bookstore with
            a faded sign that bears the weight of countless stories. The scent of aged paper and
            worn leather envelopes anyone who dares to venture inside, as shelves upon shelves
            stretch toward the ceiling, each holding a treasure trove of literary worlds waiting to
            be explored. Dust particles dance in the soft glow of antique lamps, casting a nostalgic
            ambiance that seems to transcend time. Amidst the hushed whispers of forgotten tales and
            the occasional creaking of well-trodden wooden floorboards, the bookstore becomes a
            sanctuary for those seeking refuge from the chaos outside, inviting them to lose
            themselves in the magic of words and imagination.
          </p>
        </div>
        <img className="rounded-full h-72 w-72" alt="Matheus avatar" src={MatheusAvatar} />
      </main>
      <footer className='flex gap-8'>
        <span className='font-bold'>Tech Stack</span>
        <span className='font-bold'>|</span>
        <img src={ReactIcon} />
        <img src={TSIcon} />
        <img src={JSIcon} />
        <img src={NodeJSIcon} />
      </footer>
    </section>
  )
}

export default HomeSection
