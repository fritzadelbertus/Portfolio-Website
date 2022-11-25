import ProjectDataShape from '../data/projectcardtype'

const baseURL = (id: number) => `/projectphotos/project${id}.png`;

const projectData: ProjectDataShape[] = [
  {
    id: 1,
    title: 'Pokédex',
    desc: 'A Web App that uses PokéAPI to search information of pokemon.',
    stack: ['html5', 'sass', 'square-js'],
    src: baseURL(1),
    status: 'finished',
    link: 'https://fritzadelbertus.github.io/DAP_Pokedex/',
  },
  {
    id: 2,
    title: 'Radabase',
    desc: 'A website to search past papers from a database.',
    stack: ['html5', 'sass', 'react'],
    src: baseURL(2),
    status: 'finished',
    link: 'https://fritzadelbertus.github.io/PP04_Radabase/',
  },
  {
    id: 3,
    title: 'Bookshelf App',
    desc: 'A website to add, search, update, and delete books',
    stack: ['html5', 'css3-alt', 'square-js'],
    src: baseURL(3),
    status: 'finished',
    link: 'https://fritzadelbertus.github.io/DAP_Bookshelf-App/'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    desc: 'A website to showcase my web development journey',
    stack: ['html5', 'sass', 'react'],
    src: baseURL(4),
    status: 'on going',
    link: ''
  },
  {
    id: 5,
    title: 'Info Page',
    desc: `A simple info page about a certain series I'm interested in.`,
    stack: ['html5', 'css3-alt', 'square-js'],
    src: baseURL(5),
    status: 'finished',
    link: 'https://fritzadelbertus.github.io/DAP_Info-Page/'
  }
]

export default projectData
