import './App.scss'
import EducationComponent from './components/education-component/education-component'
import IntroComponent from './components/intro-component/intro-component'
import ProjectsComponent from './components/projects-component/projects-component'
import SkillsComponents from './components/skills-component/skills-component'

function App() {

  return (
    <>
      <IntroComponent />
      <SkillsComponents />
      <EducationComponent />
      <ProjectsComponent />
    </>
  )
}

export default App
