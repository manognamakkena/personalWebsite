import { useState } from 'react'
import ProjectCard from './components/projectCard'
import Skills from './components/skills'
import Name from './assets/name.png'
import NavBar from './components/navBar'
import Mail from './assets/mail.png'
import Linkedin from './assets/linkedin.png'
import Slack from './assets/slackLogo.png'
import MikroSnap from './assets/mikroSnap.png'
import Pomodoro from './assets/pomodoro.png'


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
          <ProjectCard projectName="mikroSnap" projectDescription="a website that allows you take retro-style photobooth pictures" projectImage={MikroSnap} />
          <ProjectCard projectName="pomodoro" projectDescription="a winter-themed pomodoro timer to help you focus" projectImage={Pomodoro} />
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
          <div className='contact'>
            <a href="mailto:manogna.makkena09@gmail.com" target="_blank"><img src={Mail} /></a>
            <a href="https://www.linkedin.com/in/manogna-makkena" target="_blank"><img src={Linkedin} /></a>
            <a href="https://hackclub.enterprise.slack.com/team/U0AAWJ33D63" target="_blank"><img src={Slack} /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
