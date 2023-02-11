import Socials from "./Socials"

export default function Navbar() {
    return (
        <nav>
            <div>
                Gabriel (logo)
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