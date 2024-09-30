import './intro-component.scss'
import React, { useEffect, useState } from 'react'
const IntroComponent = ({aboutRef}) => {

    const [role, setRole] = useState("Software Developer");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRole(() => {
                if(role == "Data Analyst"){
                    return "Software Engineer";
                }
                else{
                    return "Data Analyst";
                }
            })
        }, 3000)

        return () => clearInterval(intervalId);
    })

    return (
        <div ref={aboutRef}>
            <div className='intro'>
                <div className='name'>Venkata <span className='last-name'>Annabathina</span></div>
                <h1 className='role'>{role}</h1>
                <span className='description'>A dedicated software developer with expertise in designing and building scalable applications. 
                    Skilled in multiple programming languages and frameworks, with a strong focus on clean code and innovative solutions.
                    Passionate about solving complex problems and optimizing system performance to deliver seamless user experiences.
                </span>
                <button className='btn-resume-download'>Download Resume</button>
            </div>
        </div>
        
    )
}

export default IntroComponent;