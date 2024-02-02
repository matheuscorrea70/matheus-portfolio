import { HomeSectionId } from 'common/types/homeSectionId'
import JSIcon from 'common/assets/images/js.png'
import NodeJSIcon from 'common/assets/images/node-js.png'
import ReactIcon from 'common/assets/images/react.png'
import TSIcon from 'common/assets/images/ts.png'
import LinkedInIcon from 'common/assets/icons/linkedin.svg?react'
import GitHubIcon from 'common/assets/icons/github.svg?react'

import MatheusAvatar from './assets/images/matheusAvatar.jpeg'
import { GITHUB_URL, LINKEDIN_URL } from 'common/constants/urls'

const HomeSection = () => {
  return (
    <section className="pt-32" id={`section-${HomeSectionId.Home}`}>
      <div className="flex flex-col gap-12 items-center lg:flex-row-reverse">
        <img className="rounded-full h-72 w-72" alt="Matheus avatar" src={MatheusAvatar} />
        <div>
          <h1 className="font-bold text-xl">Senior Software Engineer</h1>
          <p className="pt-6">
            Hi, I'm Matheus Correa. A seasoned Senior Software Engineer based in Minas Gerais, Brazil with over 9 years of experience as a front-end developer.
          </p>
          <div className="mt-4 flex gap-4">
            <a href={LINKEDIN_URL} target='_blank' aria-label='Matheus LinkedIn URL'>
              <LinkedInIcon width={24} />
            </a>
            <a href={GITHUB_URL} target='_blank' aria-label='Matheus GitHub URL'>
              <GitHubIcon width={24} />
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center mt-8">
        <div className="font-bold">Tech Stack</div>
        <div className="flex gap-4 mt-4">
          <img className="h-8 w-8" src={ReactIcon} alt="React" />
          <img className="h-8 w-8" src={TSIcon} alt="TypeScript" />
          <img className="h-8 w-8" src={JSIcon} alt="JavaScript" />
          <img className="h-8 w-8" src={NodeJSIcon} alt="Node" />
        </div>
        <div className="text-xs mt-2 text-gray-500">(React, TypeScript, JavaScript, Node)</div>
      </footer>
    </section>
  )
}

export default HomeSection
