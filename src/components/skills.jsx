import '../App.css';

export default function Skills({ type, skill }) {
    return (
        <div className="skills">
            <p className='headingSans'>{type}</p>
            <p style={{ whiteSpace: 'pre-line' }} className='skill-items'>{skill}</p>
        </div>
    );
}