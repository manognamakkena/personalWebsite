import '../App.css';

export default function Skills({ type, skill }) {
    return (
        <div className="skills">
            <p className='headingSans'>{type}</p>
            <p style={{ whiteSpace: 'pre-line' }}>{skill}</p>
        </div>
    );
}