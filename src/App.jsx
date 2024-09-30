import { useRef } from 'react'
import './App.scss'
import EducationComponent from './components/education-component/education-component'
import IntroComponent from './components/intro-component/intro-component'
import Navbar from './components/navbar-component/navbar-component'
import ProjectsComponent from './components/projects-component/projects-component'
import SkillsComponents from './components/skills-component/skills-component'

function App() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} eduRef={eduRef} projectRef={projectRef} contactRef={contactRef} onClickHandler={scrollToSection} />
      <IntroComponent aboutRef={aboutRef} />
      <SkillsComponents skillsRef={skillsRef} />
      <EducationComponent eduRef={eduRef} />
      <ProjectsComponent projectRef={projectRef} />
    </>
  )
}

export default App
