import './intro-component.scss'
import React from 'react'
import Logo from './../../assets/Images/ProfilePic.jpg'
const IntroComponent = () => {
    return (
        <div>
            <div className='status-bar'>This portfolio is currently under development, with regular updates being added day by day. Please check back for new content and improvements!</div>
            <div className='intro'>
                <div className='profile-pic-outer-ring'>
                    <div className='profile-pic-inner-ring'>
                        <img src={Logo} />
                    </div>
                </div>
                <h1>Software Developer</h1>
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