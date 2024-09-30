import SkillComponent from '../skill-component/skill-component';
import './skills-component.scss';
import { faDatabase, faLeaf, faPepperHot, faTerminal, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faJs, faEnvira, faReact, faAngular, faAws, faDocker, faGithub, faHtml5, faCss3, faSass } from '@fortawesome/free-brands-svg-icons';

const SkillsComponents = ({skillsRef}) => {

    const skills = {
        "Programming" : [
            {
                "name" : "Python",
                "rating" : 8,
                "icon" : faPython
            },
            {
                "name" : "Java",
                "rating" : 8,
                "icon" : faJava
            },
            {
                "name" : "SQL",
                "rating" : 8,
                "icon" : faDatabase
            },
            {
                "name" : "JavaScript",
                "rating" : 7,
                "icon" : faJs
            }
        ],
        "Web" : [
            {
                "name" : "Django",
                "rating" : 8,
                "icon" : faPython
            },
            {
                "name" : "Flask",
                "rating" : 7,
                "icon" : faPepperHot
            },
            {
                "name" : "SpringBoot",
                "rating" : 8,
                "icon" : faLeaf
            },
            {
                "name" : "React",
                "rating" : 7,
                "icon" : faReact
            },
            {
                "name" : "Angular",
                "rating" : 6,
                "icon" : faAngular
            },
            {
                "name" : "HTML",
                "rating" : 9,
                "icon" : faHtml5
            },
            {
                "name" : "CSS",
                "rating" : 8,
                "icon" : faCss3
            },
            {
                "name" : "Sass",
                "rating" : 8,
                "icon" : faSass
            }
        ],
        "Database" : [
            {
                "name" : "MySQL",
                "rating" : 8,
                "icon" : faDatabase
            },
            {
                "name" : "MongoDB",
                "rating" : 6,
                "icon" : faEnvira
            }
        ],
        "Cloud & DevOps" : [
            {
                "name" : "AWS(EC2,S3,RDS)",
                "rating" : 8,
                "icon" : faAws
            },
            {
                "name" : "Docker",
                "rating" : 5,
                "icon" : faDocker
            },
            {
                "name" : "Jenkins",
                "rating" : 6,
                "icon" : faUserGear
            },
            {
                "name" : "Github",
                "rating" : 8,
                "icon" : faGithub
            },
            {
                "name" : "Unix/Linux",
                "rating" : 8,
                "icon" : faTerminal
            },
        ]
    }

    return (
        <div ref={skillsRef} id='skills' className='skills'>
            <h1 className='section-title'>Technical Skills</h1>
            {
                Object.keys(skills).map((key) => {
                    return <div className='skills-sub' key={key + "_container"}>
                        <h2 key={key}>{key}</h2>
                        <div className='skills-list'>
                            {skills[key].map((skill) => {
                                return <SkillComponent key={key + "_" + skill.name} name={skill.name} rating={skill.rating} icon={skill.icon} />
                            })}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default SkillsComponents;
