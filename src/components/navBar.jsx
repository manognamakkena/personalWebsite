import Folder from '../assets/folder.png'
import Tools from './src/assets/tool.png'
import About from './src/assets/about.png'


export default function NavBar() {
    return (
        <nav className="nav" role="navigation">
            <ul>
                <li>
                    <a href="#project">
                        <img src={Folder} />
                    </a>
                </li>
                <li>
                    <a href="#tools">
                        <img src={Tools} />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img src={About} />
                    </a>
                </li>
            </ul>
        </nav >
    );
}