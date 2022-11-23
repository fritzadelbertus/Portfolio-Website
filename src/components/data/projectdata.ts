type ProjectData = {
  id: number,
  title: string,
  desc: string,
  stack: string[],
  src: string
}

const baseURL = (id: number) => `/src/assets/project${id}.png`;

const projectData: ProjectData[] = [
  {
    id: 1,
    title: 'Pokédex',
    desc: 'A Web App that uses PokéAPI to search information of pokemon. This is my project submission for the "Front-End Web Fundamentals" course in Dicoding Academy',
    stack: ['html5', 'sass', 'square-js', 'node-js'],
    src: baseURL(1)
  },
  {
    id: 2,
    title: 'Radabase',
    desc: 'The mathematics departement in my campus have a database of past papers. The database is quite difficult to access by users. This project solved that problem',
    stack: ['html5', 'sass', 'react', 'node-js'],
    src: baseURL(2)
  },
  {
    id: 3,
    title: 'Bookshelf App',
    desc: 'A bookshelf app with the feature to add, search, delete, and update books. This is my project submission for the "Creating Front-End Web for Beginners" course in Dicoding Academy',
    stack: ['html5', 'css3-alt', 'square-js'],
    src: baseURL(3)
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    desc: 'A website to showcase my web development journey',
    stack: ['html5', 'sass', 'react'],
    src: baseURL(4)
  },
  {
    id: 5,
    title: 'Info Page',
    desc: `A simple info page about a certain series I'm interested in. This is my project submission for the "Web Programming Basics" course in Dicoding Academy`,
    stack: ['html5', 'css3-alt', 'square-js'],
    src: baseURL(5)
  }
]

export default projectData
