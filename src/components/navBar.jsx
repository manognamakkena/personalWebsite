import Butterfly from '../assets/butterfly.png'

export default function NavBar() {
    return (
        <nav className="nav" role="navigation">
            <ul>
                <li>
                    <a href="#project">
                        <h1>P</h1><p> rojects</p>
                    </a>
                </li>
                <li>
                    <a href="#tools">
                        <h1>T&nbsp;</h1><p>ools</p>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <h1>A</h1><p>bout</p>
                    </a>
                </li>
            </ul>
        </nav >
    );
}