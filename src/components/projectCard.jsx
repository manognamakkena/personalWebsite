import '../App.css';

export default function ProjectCard({ projectName, projectDescription, projectImage }) {
    return (
        <div className="project-card">
            <div className="project-img">
            </div>
            <div className="project-info">
                <img src={projectImage}></img>
                <br />
                <h2>{projectName}</h2>
                <br />
                <p>{projectDescription}</p>
            </div>
        </div>
    );
}