import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function Socials() {
    return (
        <ul className="socials">
            <a href="#"><LinkedInIcon /></a>
            <a href="#"><GitHubIcon /></a>
            <a href="#"><TwitterIcon /></a>
            <a href="#"><WhatsAppIcon /></a>
        </ul>
    )
}