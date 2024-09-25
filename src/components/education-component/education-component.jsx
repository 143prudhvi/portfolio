import './education-component.scss';
import MGRLogo from './../../assets/Images/mgr.png'
import WichitaLogo from './../../assets/Images/wichitastate.png'


const EducationComponent = () => {
    return(
        <div className='education'>
            <h1 className='section-title'>
                <span className='education-legend'></span>Education
                <span className='experience-legend'></span> & Experience
            </h1>
            <div className='timeline'>
                <div className='experience-cotainer right'>
                    <div className='experience-content'>
                        <div className='experience-details'>
                            <h1 className='experience-position'>Graduate Research Assistant</h1>
                            <div className='experience-company'>Wichita State University</div>
                            <div className='experience-year'><strong>Aug 2023</strong> - <strong>Present</strong></div>
                            <ul className='experience-work'>
                                <li>Developed a Django-based web application for product comparison, enhancing research activity analysis.</li>
                                <li>Implemented routing, and static file management, and integrated MySQL using Django ORM for optimized database interactions.</li>
                                <li>Automated data collection through web scraping using Power Automate, Selenium, and Beautiful Soup, improving data acquisition efficiency.</li>
                                <li>Employed high-performance computing (HPC) to conduct textual analysis of 500K e-commerce products, <strong>reducing comparison time from 6 months to 8 hours.</strong></li>
                                <li>Managed version control with GitHub, facilitating collaborative development and code versioning.</li>
                                <li>Streamlined MSSQL installation on Mac via Docker, <strong>reducing student costs by $50 per license.</strong></li>
                            </ul>
                        </div>
                        {/* <div className='experience-logo'>
                            <img src={WichitaLogo} />
                        </div> */}
                    </div>
                </div>
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
                        {/* <div className='education-logo'>
                            <img src={WichitaLogo} />
                        </div> */}
                    </div>
                </div>
                <div className='experience-cotainer right'>
                    <div className='experience-content'>
                        <div className='experience-details'>
                            <h1 className='experience-position'>Assistant System Engineer</h1>
                            <div className='experience-company'>Tata Consultancy Services</div>
                            <div className='experience-year'><strong>Feb 2021</strong> - <strong>Nov 2022</strong></div>
                            <ul className='experience-work'>
                                <li>Developed and customized e-commerce solutions on Salesforce B2C Commerce Cloud using the SFRA framework.</li>
                                <li>Integrated third-party services to enhance platform functionality, user experience, and operational efficiency.</li>
                                <li>Automated user creation process with a NodeJS script, <strong>reducing processing time from 5 hours to 5 minutes.</strong></li>
                                <li>Built a NodeJS application with a ReactJS frontend for efficient data retrieval using OCAPI APIs.</li>
                                <li>Employed Git for version control and JIRA for Agile project management and implemented automated testing to maintain code quality.</li>
                            </ul>
                        </div>
                        {/* <div className='experience-logo'>
                            <img src={WichitaLogo} />
                        </div> */}
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
                        {/* <div className='education-logo'>
                            <img src={MGRLogo} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComponent;
