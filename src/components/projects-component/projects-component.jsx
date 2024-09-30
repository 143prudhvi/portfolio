import './projects-component.scss';

const ProjectsComponent = ({projectRef}) => {
    return (
        <div className='projects' ref={projectRef}>
            <h1 className='section-title'>Projects</h1>
        </div>
    )
}

export default ProjectsComponent;
