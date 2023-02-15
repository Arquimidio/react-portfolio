import Socials from "./Socials"
import Divider from "./Divider";
import SegmentIcon from "@mui/icons-material/Segment"
import { useState } from "react"
import Logo from "./Logo"

export default function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function toggleMenu() {
        setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <div className={
                    `adaptable-navigation ${isMenuOpened? 'opened-menu' : ''}`
                }>
                    <ul className="nav-links">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#">Readings</a>
                        <a href="#">Posts</a>
                    </ul>
                    <Divider />
                    <Socials />
                </div>
                <div 
                    className={
                        `hide-on-desktop menu-toggler ${isMenuOpened? 'menu-toggled' : ''}`
                    } 
                    onClick={toggleMenu}
                >
                    <SegmentIcon fontSize="inherit"/>
                </div> 
            </div>
        </nav>
    )
}