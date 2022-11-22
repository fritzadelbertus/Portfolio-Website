import { useState } from 'react'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
      <AboutPage />
    </div>
   
  )
}

export default App
