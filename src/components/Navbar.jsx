import Socials from "./Socials"

export default function Navbar() {
    return (
        <nav>
            <div>
                Gabriel
            </div>
            <ul>
                <li>Home</li>
                <li>Resume</li>
                <li>Contact</li>
                <li>Readings</li>
                <li>Posts</li>
                <li>Language</li>
            </ul>
            <Socials />
        </nav>
    )
}