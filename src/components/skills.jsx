import '../App.css';

export default function Skills({ type, skill }) {
    return (
        <div className="skills">
            <h2>{type}</h2>
            <p>{skill}</p>
        </div>
    );
}