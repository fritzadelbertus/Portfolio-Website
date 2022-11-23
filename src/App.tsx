import { useState } from 'react'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </div>
   
  )
}

export default App
