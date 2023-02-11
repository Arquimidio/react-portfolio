import Socials from "./Socials"

export default function Navbar() {
    return (
        <nav className="navbar container">
            <div>
                Gabriel Stoppa
            </div>
            <ul>
                <li>Home</li>
                <li>Resume</li>
                <li>Contact</li>
                <li>Readings</li>
                <li>Posts</li>
            </ul>
            <Socials />
        </nav>
    )
}