import './education-component.scss';
import MGRLogo from './../../assets/Images/mgr.png'
import WichitaLogo from './../../assets/Images/wichitastate.png'


const EducationComponent = () => {
    return(
        <div className='education'>
            <h1 className='education-title'>Education</h1>
            <div className='timeline'>
                <div className='education-cotainer right'>
                    <div className='education-content'>
                        <div className='education-details'>
                            <h1 className='education-degree'>Master's of Science in Computer and Information Sciences</h1>
                            <div className='education-university'>Wichita State University</div>
                            <div className='education-year'><strong>Jan 2023</strong> - <strong>Dec 2024</strong></div>
                            <div className='education-grade'>GPA <strong>4.0</strong></div>
                            <ul className='education-coursework'>
                                <li>Machine Learning</li>
                                <li>Data Cleaning</li>
                                <li>Deep Learning</li>
                                <li>Data Vizualization</li>
                                <li>Business Analytics</li>
                            </ul>
                        </div>
                        <div className='education-logo'>
                            <img src={WichitaLogo} />
                        </div>
                    </div>
                </div>
                <div className='education-cotainer right'>
                    <div className='education-content'>
                        <div className='education-details'>
                            <h1 className='education-degree'>Bachelor's of Science in Computer Science</h1>
                            <div className='education-university'>Dr. MGR University</div>
                            <div className='education-year'><strong>Aug 2016</strong> - <strong>May 2020</strong></div>
                            <div className='education-grade'>GPA <strong>3.6</strong></div>
                            <ul className='education-coursework'>
                                <li>OOPs</li>
                                <li>Operating Systems</li>
                                <li>Computer Networks</li>
                                <li>Image Processing</li>
                                <li>Database Management</li>
                            </ul>
                        </div>
                        <div className='education-logo'>
                            <img src={MGRLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComponent;
