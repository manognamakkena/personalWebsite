import Butterfly from '../assets/butterfly.png'

export default function NavBar() {
    return (
        <nav className="nav" role="navigation">
            <ul>
                <li>
                    <a href="#project">
                        <img src="src/assets/folder.png" data-active="src/assets/folderActive.png" />
                    </a>
                </li>
                <li>
                    <a href="#tools">
                        <img src="src/assets/tool.png" />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img src="src/assets/about.png" />
                    </a>
                </li>
            </ul>
        </nav >
    );
}