import Socials from "./Socials"
import SegmentIcon from "@mui/icons-material/Segment"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function toggleMenu() {
        setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened);
    }

    return (
        <nav className="navbar container">
            <div className="logo">
                Gabriel Stoppa
            </div>
            <div className={
                `adaptable-navigation ${isMenuOpened? 'opened-menu' : ''}`
            }>
                <ul className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                    <a href="#">Readings</a>
                    <a href="#">Posts</a>
                </ul>
                <Socials />
            </div>
            <div className="hide-on-desktop" onClick={toggleMenu}>
                <SegmentIcon />
            </div> 
        </nav>
    )
}