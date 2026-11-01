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
          <ProjectCard projectName="mikroSnap" projectDescription="a website that allows you take retro-style photobooth pictures" projectImage={"./src/assets/mikroSnap.png"} />
          <ProjectCard projectName="pomodoro" projectDescription="a winter-themed pomodoro timer to help you focus" projectImage="./src/assets/pomodoro.png" />
          <ProjectCard projectName="" projectDescription="coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon coming soon" />
        </div>

        <div id='tools' className='heading'><h1>T&nbsp;</h1><p>ools</p></div>
        <div className='skill-container'>
          <Skills type="Design" skill={`Photoshop\nllustrator\nCapCut\nCanva\nAffinity\nTypography`} />
          <Skills type="Software" skill={`HTML\nCSS\nJavaScript\nReact\nPython\nJava`} />
        </div>

        <div id='about' className='heading'><h1>A</h1><p>bout</p></div>

        <div className='about-container'>
          <div className="about-para">
            <p className='about-description'>
              hi yall! i'm manu, a 16 year old who loves playing around w code and design <br />
              i'm always open to build new projects and collaborate.<br />
              say hi through below contact options (●'◡'●)
            </p>
          </div>
        </div>

        <div className='contact'>
        </div>
      </div>
    </>
  )
}

export default App