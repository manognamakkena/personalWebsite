import { useState } from 'react'
import ProjectCard from './components/projectCard'
import Skills from './components/skills'
import Name from './assets/name.png'
import Paper from './assets/paper.png'

function App() {

  return (
    <div className='main'>
      <div className="name">
        <img src={Name} />
      </div>

      <div className='heading'><h1>P&nbsp;&nbsp;</h1><p> rojects</p></div>
      <div className='project-container'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className='heading'><h1>S&nbsp;</h1><p>kills</p></div>
      <div className='skill-container'>
        <Skills type="Design" skill="photoshop" />
        <Skills type="Software" skill="html" />
      </div>

      <div className='heading'><h1>A</h1><p>bout</p></div>
      <img className='paper' src={Paper} />
      <div className='about-container'>
        <div className='about-para'>
          <p>cekjwnjvhejwkcfkmwefjciniewjfjewffff</p>
        </div>
      </div>
    </div>
  )
}

export default App