import { useRef } from 'react'
import './App.scss'
import EducationComponent from './components/education-component/education-component'
import IntroComponent from './components/intro-component/intro-component'
import Navbar from './components/navbar-component/navbar-component'
import ProjectsComponent from './components/projects-component/projects-component'
import SkillsComponents from './components/skills-component/skills-component'
import ExperienceComponent from './components/experience-component/experience-component'

function App() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} eduRef={eduRef} expRef={expRef} projectRef={projectRef} contactRef={contactRef} onClickHandler={scrollToSection} />
      <IntroComponent aboutRef={aboutRef} />
      <SkillsComponents skillsRef={skillsRef} />
      <EducationComponent eduRef={eduRef} />
      <ExperienceComponent expRef={expRef} />
      <ProjectsComponent projectRef={projectRef} />
    </>
  )
}

export default App
