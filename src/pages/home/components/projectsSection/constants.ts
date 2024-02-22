import PortfolioPicture from './assets/images/portfolioPicture.png'
import MoviesAppPicture from './assets/images/moviesAppPicture.png'
import NodeApiPicture from './assets/images/nodeApiPicture.png'
import { ProjectList } from './types'

export const PROJECT_LIST: ProjectList = [
  {
    picture: NodeApiPicture,
    title: 'Authentication API',
    description:
      'This API provides secure user authentication services using JWTokens and encrypted passwords. It is built on top of Node.js and Express.js, offering a robust and scalable solution for managing user authentication in web applications.',
    stack: 'TypeScript, Node, Express, MySQL, TypeORM, BCrypt, JWT',
    github: 'https://github.com/matheuscorrea70/api-auth'
  },
  {
    picture: MoviesAppPicture,
    title: 'Top Rated Movies App',
    description:
      'Immerse yourself in the captivating world of movies with Movies.app showcase, a project that not only showcases my skills as a frontend developer but also provides an enjoyable and visually stunning way to discover and explore top-rated films. This project is a dynamic web application that seamlessly connects with The Movie Database (TMDb) API to bring you the latest and top-rated movies right to your fingertips. Immerse yourself in the world of cinema with a sleek and interactive grid format, complete with captivating animations triggered when you hover over each movie card.',
    stack: 'TypeScript, React, React router, React Query, Vite, Tailwind',
    github: 'https://github.com/matheuscorrea70/app-movies',
    liveDemo: 'https://app-movies-eight.vercel.app'
  },
  {
    picture: PortfolioPicture,
    title: 'Portfolio',
    description:
      'This application is a dynamic and visually appealing portfolio website designed to showcase the skills, projects, and experiences of a frontend software engineer. Crafted using cutting-edge technologies, the portfolio is not only a testament to the developer\'s proficiency but also serves as an excellent example of modern web development practices.',
    stack: 'TypeScript, React, Vite, Tailwind',
    github: 'https://github.com/matheuscorrea70/matheus-portfolio'
  }
]
