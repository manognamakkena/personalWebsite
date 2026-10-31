import { useState } from 'react'
import ProjectCard from './components/projectCard'
import Skills from './components/skills'
import Name from './assets/name.png'
import Paper from './assets/paper.png'
import NavBar from './components/navBar'

function App() {

  return (
    <>
      <NavBar />
      <div className='main'>
        <div id='home' className="name">
          <img src={Name} />
        </div>

        <div id='project' className='heading'><h1>P&nbsp;&nbsp;</h1><p> rojects</p></div>
        <div className='project-container'>
          <ProjectCard projectName="mikroSnap" projectDescription="blah blah blah blah blah blah blah" projectImage={"./src/assets/mikroSnap.png"} />
          <ProjectCard projectName="mikroSnap" projectDescription="blah blah blah blah blah blah blah" projectImage="./src/assets/pomodoro.png" />
          <ProjectCard projectName="mikroSnap" projectDescription="blah blah blah blah blah blah blah" />
        </div>

        <div id='tools' className='heading'><h1>T&nbsp;</h1><p>ools</p></div>
        <div className='skill-container'>
          <Skills type="Design" skill="photoshop" />
          <Skills type="Software" skill="html" />
        </div>

        <div id='about' className='heading'><h1>A</h1><p>bout</p></div>
        <img className='paper' src={Paper} />
        <div className='about-container'>
          <div className='about-para'>
            <p>cekjwnjvhejwkcfkmwefjciniewjfjewffff</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App