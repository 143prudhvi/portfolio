import SkillComponent from '../skill-component/skill-component';
import './skills-component.scss';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faJs } from '@fortawesome/free-brands-svg-icons';

const SkillsComponents = () => {

    const skills = {
        "Programming" : [
            {
                "name" : "Python",
                "rating" : 8,
                "icon" : faPython
            },
            {
                "name" : "Java",
                "rating" : 7,
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
        "Database" : [
            {
                "name" : "MySQL",
                "rating" : 8,
                "icon" : faDatabase
            },
            {
                "name" : "MongoDB",
                "rating" : 6,
                "icon" : faDatabase
            }
        ]
    }

    return (
        <div id='skills' className='skills'>
            <h1 className='section-title'>Skills</h1>
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
