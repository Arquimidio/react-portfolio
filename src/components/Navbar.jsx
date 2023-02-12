import Socials from "./Socials"
import Divider from "./Divider";
import SegmentIcon from "@mui/icons-material/Segment"
import { useState } from "react"
import LogoImage from "../assets/images/full-logo.svg"

export default function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function toggleMenu() {
        setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="image">
                    <img src={LogoImage}/>
                </div>
                <div className={
                    `adaptable-navigation ${isMenuOpened? 'opened-menu' : ''}`
                }>
                    <p className="hide-on-desktop">GS</p>
                    <Divider />
                    <ul className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Resume</a>
                        <a href="#">Contact</a>
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
                    <SegmentIcon />
                </div> 
            </div>
        </nav>
    )
}