import { ExperienceList } from './types'
import HotmartLogo from './assets/images/hotmartLogo.jpeg'
import NerusLogo from './assets/images/nerusLogo.jpeg'
import TriadLogo from './assets/images/triadLogo.png'

export const EXPERIENCE_LIST: ExperienceList = [
  {
    picture: HotmartLogo,
    title: 'Senior Frontend Software Engineer',
    company: 'Hotmart · Full-time',
    date: 'Sep 2019 - Present',
    location: 'Belo Horizonte, Minas Gerais, Brazil · Remote',
    description: `- Collaborated with stakeholders to design and implement new features for the Hotmart members' area, resulting in increased user engagement.
    <br />
    <br />
    - Improved performance, enhanced code quality, and ensured message delivery of the Hotmart Live Chat by refactoring the code and migrating from WebSocket to Firebase.
    <br />
    <br />
    - Designed and Implemented micro frontends to enhance specific features of a legacy project.
    <br />
    <br />
    - Designed and implemented automated tests, including unit, integration, and end-to-end (E2E) tests, to enhance product quality.
    <br />
    <br />
    - Mentored junior developers, contributing to the team's growth and development of their careers.
    <br />
    <br />
    - Contributed to the quality of codebases by reviewing pull requests and refactoring old code.`,
    techStack: 'React, TypeScript, JavaScript, Cypress, Webpack, Jest, Node, Redux, Next.js, Vue'
  },
  {
    picture: NerusLogo,
    title: 'Frontend Software Engineer',
    company: 'Nérus · Full-time',
    date: 'Jun 2015 - Aug 2019',
    location: 'Belo Horizonte, Minas Gerais, Brazil · On-site',
    description: `- Contributed to the development of new features and the refactoring of the company's ERP.
    <br />
    <br />
    - Developed solutions to improve performance, enhance quality, and reduce crashes in a specific feature of the company’s ERP.
    <br />
    <br />
    - Design solutions, split tasks and plan project deliveries.
    <br />
    <br />
    - Work together with different clients to understand their needs and design tech solutions.`,
    techStack: 'React, JavaScript, Jest, Node, Redux, PHP, MySQL, Angular'
  },
  {
    picture: TriadLogo,
    title: 'Frontend Software Engineer',
    company: 'Triadbrasil · Internship',
    date: 'Feb 2014 - May 2015',
    location: 'Belo Horizonte, Minas Gerais, Brazil · On-site',
    description: `- Contributed to implementing web applications for different clients.`,
    techStack: 'JavaScript, PHP, MySQL, Yii framework'
  }
]
