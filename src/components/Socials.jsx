import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import Links from "../objects/Links"

export default function Socials() {
    return (
        <ul className="socials">
            <a href={Links.github} className="link-with-icon" target="_blank">
                <GitHubIcon fontSize="small"/>
                <span className="hide-on-desktop">Github</span>
            </a>
            <a href={Links.linkedIn}className="link-with-icon" target="_blank">
                <LinkedInIcon fontSize="small"/>
                <span className="hide-on-desktop">LinkedIn</span>
            </a>
            <a href={Links.twitter} className="link-with-icon" target="_blank">
                <TwitterIcon fontSize="small"/>
                <span className="hide-on-desktop">Twitter</span>
            </a>
        </ul>
    )
}