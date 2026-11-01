import '../App.css';

export default function ProjectCard({ projectName, projectDescription, projectImage }) {
    return (
        <div className="project-card">
            <div className="project-img">
            </div>
            <div className="project-info">
                <img src={projectImage}></img>
                <br />
                <p className='headingSans'>{projectName}</p>
                <p className="project-description">{projectDescription}</p>
            </div>
        </div>
    );
}