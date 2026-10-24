import { useState } from 'react'
import ProjectCard from './components/projectCard'
import Home from './components/home'
import Skills from './components/skills'

function App() {

  return (
    <div>
      <Home />
      <ProjectCard />
      <Skills />
    </div>
  )
}

export default App