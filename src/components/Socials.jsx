import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Socials() {
    return (
        <ul className="socials">
            <a href="#" className="link-with-icon">
                <GitHubIcon />
                <span className="hide-on-desktop">Github</span>
            </a>
            <a href="#" className="link-with-icon">
                <LinkedInIcon />
                <span className="hide-on-desktop">LinkedIn</span>
            </a>
            <a href="#" className="link-with-icon">
                <TwitterIcon />
                <span className="hide-on-desktop">Twitter</span>
            </a>
        </ul>
    )
}